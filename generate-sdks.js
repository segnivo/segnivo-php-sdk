#!/usr/bin/env node

const fs = require('fs').promises;
const fsSync = require('fs'); // Add synchronous fs operations
const { execSync } = require('child_process');
const inquirer = require('inquirer');
const path = require('path');
const defaultConfig = require('./config');

class SDKGenerator {
    constructor() {
        this.version = '1.0.0';
        this.config = defaultConfig;
    }

    async init() {
        try {
            // Check if OpenAPI Generator CLI is installed
            try {
                execSync('openapi-generator-cli version', { stdio: 'ignore' });
            } catch (error) {
                console.log('Installing OpenAPI Generator CLI...');
                execSync('npm install @openapitools/openapi-generator-cli -g');
            }

            // Check if openapi.yaml exists
            if (!fsSync.existsSync('openapi.yaml')) {
                console.error('Error: openapi.yaml not found in the current directory');
                process.exit(1);
            }

            // Load config if exists
            try {
                const configFile = await fs.readFile('config.json', 'utf8');
                this.config = JSON.parse(configFile);
            } catch (error) {
                console.log('No config.json found, using default config');
                await fs.writeFile('config.json', JSON.stringify(this.config, null, 2));
            }

            // Load version if exists
            try {
                this.version = (await fs.readFile('version.txt', 'utf8')).trim();
            } catch (error) {
                await fs.writeFile('version.txt', this.version);
            }

            await this.showMenu();
        } catch (error) {
            console.error('Error during initialization:', error);
            process.exit(1);
        }
    }

    async showMenu() {
        while (true) {
            console.clear();
            const { choice } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: `SDK Generator CLI (v${this.version})`,
                    choices: [
                        'Generate Single SDK',
                        'Generate All SDKs',
                        'Add New SDK Type',
                        'Remove SDK Type',
                        'List Current SDKs',
                        'List Available SDKs',
                        'Bump Version',
                        'Exit'
                    ]
                }
            ]);

            switch (choice) {
                case 'Generate Single SDK':
                    await this.selectAndGenerateSDK();
                    break;
                case 'Generate All SDKs':
                    await this.generateAllSDKs();
                    break;
                case 'Add New SDK Type':
                    await this.addNewSDK();
                    break;
                case 'Remove SDK Type':
                    await this.removeSDK();
                    break;
                case 'List Current SDKs':
                    await this.listCurrentSDKs();
                    break;
                case 'List Available SDKs':
                    await this.listAvailableSDKs();
                    break;
                case 'Bump Version':
                    await this.bumpVersion();
                    break;
                case 'Exit':
                    return;
            }
        }
    }

    async generateAllSDKs() {
        const sdkTypes = Object.keys(this.config.sdks);

        if (sdkTypes.length === 0) {
            console.log('\nNo SDKs configured. Please add SDK types first.');
            await this.pause();
            return;
        }

        console.log('\nGenerating all configured SDKs...');

        const results = [];
        for (const sdkType of sdkTypes) {
            try {
                console.log(`\nGenerating ${sdkType} SDK...`);
                await this.generateSDK(sdkType);
                results.push({ sdk: sdkType, status: 'Success' });
            } catch (error) {
                results.push({ sdk: sdkType, status: 'Failed', error: error.message });
                console.error(`Error generating ${sdkType} SDK:`, error.message);
            }
        }

        // Display summary
        console.log('\nGeneration Summary:');
        console.log('------------------');
        results.forEach(result => {
            const status = result.status === 'Success'
                ? '\x1b[32m✓\x1b[0m' // Green checkmark
                : '\x1b[31m✗\x1b[0m'; // Red X
            console.log(`${status} ${result.sdk}: ${result.status}`);
            if (result.error) {
                console.log(`  Error: ${result.error}`);
            }
        });

        await this.pause();
    }

    async selectAndGenerateSDK() {
        const availableSDKs = Object.keys(this.config.sdks);

        if (availableSDKs.length === 0) {
            console.log('\nNo SDKs configured. Please add an SDK type first.');
            await this.pause();
            return;
        }

        const { sdkType } = await inquirer.prompt([
            {
                type: 'list',
                name: 'sdkType',
                message: 'Select SDK to generate:',
                choices: availableSDKs
            }
        ]);

        await this.generateSDK(sdkType);
        await this.pause();
    }

    async listCurrentSDKs() {
        console.log('\nCurrent SDKs:');
        Object.keys(this.config.sdks).forEach((sdk, index) => {
            console.log(`${index + 1}. ${sdk}`);
        });
        await this.pause();
    }

    async listAvailableSDKs() {
        console.log('\nAvailable SDKs that can be added:');
        Object.keys(this.config.availableSDKs).forEach((sdk, index) => {
            console.log(`${index + 1}. ${sdk}`);
        });
        await this.pause();
    }

    async addNewSDK() {
        const availableSDKs = Object.keys(this.config.availableSDKs)
            .filter(sdk => !this.config.sdks[sdk]);

        if (availableSDKs.length === 0) {
            console.log('\nNo additional SDKs available to add.');
            await this.pause();
            return;
        }

        const { sdkType } = await inquirer.prompt([
            {
                type: 'list',
                name: 'sdkType',
                message: 'Select SDK type to add:',
                choices: availableSDKs
            }
        ]);

        this.config.sdks[sdkType] = this.config.availableSDKs[sdkType];
        await fs.writeFile('config.json', JSON.stringify(this.config, null, 2));
        console.log(`\n${sdkType} SDK configuration added successfully!`);
        await this.pause();
    }

    async removeSDK() {
        const removableSDKs = Object.keys(this.config.sdks)
            .filter(sdk => sdk !== 'typescript-axios');

        if (removableSDKs.length === 0) {
            console.log('\nNo additional SDKs to remove.');
            await this.pause();
            return;
        }

        const { sdkType } = await inquirer.prompt([
            {
                type: 'list',
                name: 'sdkType',
                message: 'Select SDK type to remove:',
                choices: removableSDKs
            }
        ]);

        delete this.config.sdks[sdkType];
        await fs.writeFile('config.json', JSON.stringify(this.config, null, 2));
        console.log(`\n${sdkType} SDK configuration removed successfully!`);
        await this.pause();
    }

    async generateSDK(sdkType) {
        try {
            // Check dependencies first
            switch (sdkType) {
                case 'java':
                    try {
                        execSync('java -version', { stdio: 'ignore' });
                        execSync('mvn -v', { stdio: 'ignore' });
                    } catch (error) {
                        throw new Error('Java or Maven not found. Please install Java and Maven first.');
                    }
                    break;
                case 'python':
                    try {
                        execSync('python --version', { stdio: 'ignore' });
                        execSync('pip --version', { stdio: 'ignore' });
                    } catch (error) {
                        throw new Error('Python or pip not found. Please install Python first.');
                    }
                    break;
                // Add more dependency checks as needed
            }

            const sdk = this.config.sdks[sdkType];

            // Create output directory if it doesn't exist
            await fs.mkdir(sdk.outputDir, { recursive: true });

            // Prepare properties string
            const properties = Object.entries(sdk.properties)
                .map(([key, value]) => {
                    // Handle non-string values (like objects)
                    if (typeof value === 'object') {
                        return `${key}=${JSON.stringify(value)}`;
                    }
                    // Handle string values
                    return `${key}=${value.toString().replace('VERSION_PLACEHOLDER', this.version)}`;
                })
                .join(',');
            // Generate SDK
            console.log(`\nExecuting OpenAPI Generator for ${sdkType}...`);
            const command = `openapi-generator-cli generate -i openapi.yaml -g ${sdk.generator} -o ${sdk.outputDir} --additional-properties=${properties} --skip-validate-spec`;
            execSync(command, { stdio: 'inherit' });

            // Delete git_push script if it exists
            const gitPushScript = path.join(sdk.outputDir, 'git_push.sh');
            if (fsSync.existsSync(gitPushScript)) {
                await fs.unlink(gitPushScript);
            }

            // Install dependencies based on SDK type
            const currentDir = process.cwd();
            process.chdir(sdk.outputDir);

            try {
                switch (sdkType) {
                    case 'typescript-axios':
                    case 'typescript-fetch':
                    case 'javascript':
                        if (fsSync.existsSync('package.json')) {  
                            console.log(currentDir+sdk.outputDir);
                            await this.updatePackageJsonUrl(path.join(currentDir,sdk.outputDir),sdkType);
                            console.log('\nInstalling TypeScript dependencies...');
                            execSync('npm install', { stdio: 'inherit' });
                            // Update package.json URL for TypeScript Axios
                          
                        }
                        break;
                    case 'python':
                        if (fsSync.existsSync('setup.py')) {
                            console.log('\nInstalling Python dependencies...');
                            execSync('pip install -e .', { stdio: 'inherit' });
                        }
                        break;
                    case 'php':
                        if (fsSync.existsSync('composer.json')) {
                            console.log('\nInstalling PHP dependencies...');
                            execSync('composer install', { stdio: 'inherit' });
                        }
                        break;
                    case 'java':
                        if (fsSync.existsSync('pom.xml')) {
                            console.log('\nInstalling Java dependencies...');
                            execSync('mvn install -DskipTests', { stdio: 'inherit' });
                        }
                        break;
                    case 'ruby':
                        if (fsSync.existsSync('Gemfile')) {
                            console.log('\nInstalling Ruby dependencies...');
                            execSync('bundle install', { stdio: 'inherit' });
                        }
                        break;
                }
            } finally {
                process.chdir(currentDir); // Always return to original directory
            }

            console.log(`\n${sdkType} SDK generated successfully!`);
        } catch (error) {
            if (error.stdout) console.error(`stdout: ${error.stdout}`);
            if (error.stderr) console.error(`stderr: ${error.stderr}`);
            throw new Error(`Failed to generate ${sdkType} SDK: ${error.message}`);
        }
    }
    // New method to update the URL in package.json
    async updatePackageJsonUrl(outputDir,sdkType) {
        const packageJsonPath = path.join(outputDir, 'package.json');

        // Check if package.json exists
        if (!fsSync.existsSync(packageJsonPath)) {
            console.warn('\nNo package.json found in the output directory.');
            return;
        }

        // Read package.json
        let packageJson;
        try {
            const content = await fs.readFile(packageJsonPath, 'utf8');
            packageJson = JSON.parse(content);
        } catch (error) {
            console.error('\nError reading package.json:', error.message);
            return;
        }

        // Extract gitUserId and gitRepoId from config
        const { gitUserId, gitRepoId, url } = this.config.sdks[sdkType].properties;

        // Ensure both gitUserId and gitRepoId are defined
        if (!gitUserId || !gitRepoId) {
            console.warn('\ngitUserId or gitRepoId is missing in the configuration.');
            return;
        }

        // Update the repository URL
        packageJson.repository = packageJson.repository || {};
        packageJson.repository.url = url || ``;

        // Write updated package.json
        try {
            await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
            console.log(`\nUpdated repository URL in package.json to: ${packageJson.repository.url}`);
        } catch (error) {
            console.error('\nError writing updated package.json:', error.message);
        }
    }

    async bumpVersion() {
        const { type } = await inquirer.prompt([
            {
                type: 'list',
                name: 'type',
                message: 'Select version bump type:',
                choices: ['major', 'minor', 'patch']
            }
        ]);

        const [major, minor, patch] = this.version.split('.').map(Number);
        switch (type) {
            case 'major':
                this.version = `${major + 1}.0.0`;
                break;
            case 'minor':
                this.version = `${major}.${minor + 1}.0`;
                break;
            case 'patch':
                this.version = `${major}.${minor}.${patch + 1}`;
                break;
        }
        await fs.writeFile('version.txt', this.version);
        console.log(`\nVersion bumped to ${this.version}`);
        await this.pause();
    }

    async pause() {
        await inquirer.prompt([
            {
                type: 'input',
                name: 'continue',
                message: 'Press Enter to continue...'
            }
        ]);
    }
}

// Start the application
new SDKGenerator().init();