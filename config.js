const config = {
  company: "segnivo",
  sdks: {
    "typescript-fetch": {
      "npmName": "segnivo-typescript-sdk",
      "generator": "typescript-fetch",
      "outputDir": "sdk-typescript",
      "properties": {
        "npmName": "segnivo-typescript-sdk",
        "supportsES6": "true",
        "npmVersion": "VERSION_PLACEHOLDER",
        "typescriptThreePlus": "true",
        "modelPropertyNaming": "camelCase",
        "apiDocumentation": "true",
        "generateApiDocumentation": "true",
        "moduleName": "Segnivo-Sdk",
        "projectName": "segnivo-typescript-sdk",
        "npmRepository": "https://registry.npmjs.org",
        "generateModelDocumentation": "true",
        "gitUserId": "segnivo",
        "gitRepoId": "segnivo-sdk",
        "generateDocumentation": "true",
        "withNodeImports": "true",
        "supportsES6":"true",
        "url": "https://github.com/segnivo/segnivo-sdk/tree/main/sdk-typescript",
        templateDir: "templates"
      }
    }
    ,
    "php": {
      invokerPackage: "Segnivo\\SDK",
      generator: "php",
      outputDir: "sdk-php",
      properties: {
        apiPackage: "Api",
        modelPackage: "Model",
        artifactUrl: "https://github.com/segnivo/segnivo-sdk/tree/main/sdk-php",
        packageName: "segnivo-sdk",
        artifactVersion: "VERSION_PLACEHOLDER",
        composerPackageName: "segnivo/php-sdk",
        composerProjectName: "segnivo-php-sdk",
        "developerName": "Hanis.Hapsa",
        "developerEmail": "hanis.hapsa@segnivo.com",
        "developerOrganization": "Segnivo",
        "developerOrganizationUrl": "https://github.com/segnivo/segnivo-sdk/tree/main/sdk-php",
        phpVersion: "8.1",
        hideGenerationTimestamp: "true",
        sortParamsByRequiredFlag: "true",
        sortModelPropertiesByRequiredFlag: "true",
        generatePropertyTags: "true",
        variableNamingConvention: "camelCase",
        invokerPackage: "Segnivo\\SDK",
        srcBasePath: "src",
        gitUserId: "segnivo",
        gitRepoId: "segnivo-sdk"
      }
    },
    "python": {
      packageName: "segnivo_sdk",
      generator: "python",
      outputDir: "sdk-python",  
      gitRepoId: "segnivo-sdk",
      properties: {
        packageVersion: "VERSION_PLACEHOLDER",
        packageName: "segnivo_sdk",
        projectName: "segnivo-python-sdk",
        packageUrl: "https://github.com/segnivo/segnivo-sdk/tree/main/sdk-python",
        pythonVersion: ">=3.7",
        generateSourceCodeOnly: "false",
        useNose: "true",
        sortParamsByRequiredFlag: "true",
        sortModelPropertiesByRequiredFlag: "true",
        generateModelDocumentation: "true",
        hideGenerationTimestamp: "true",
        "git-user-id": "segnivo",
      
      }
    }
  },
  availableSDKs: {
    "ruby": {
      "generator": "ruby",
      "outputDir": "sdk-ruby",
      "properties": {
        "gemName": "segnivo_sdk",
        "moduleName": "SegnivoSDK",
        "gemVersion": "VERSION_PLACEHOLDER",
        "gemLicense": "MIT",
        "gemAuthor": "Segnivo",
        "gemAuthorEmail": "developers@segnivo.com",
        // Simplified description without special characters
        "gemDescription": "Segnivo.API.SDK.for.Ruby",
        "gemSummary": "Segnivo.Ruby.SDK",
        "gemHomepage": "https://github.com/segnivo/segnivo-sdk/tree/main/sdk-ruby",
        // Fix gemRequiredRubyVersion format
        "gemRequiredRubyVersion": ">=2.7",
        // Simplified metadata
        //   "gemMetadata": JSON.stringify({
        //       "documentation_uri": "https://docs.segnivo.com",
        //       "source_code_uri": "https://github.com/munchads/ruby-sdk"
        //   }),
        // Core functionality options
        //   "library": "typhoeus",
        "sortParamsByRequiredFlag": "true",
        "sortModelPropertiesByRequiredFlag": "true",
        "hideGenerationTimestamp": "true",
        "ensureUniqueParams": "true",
        "useAutoload": "false",
        "disallowAdditionalPropertiesIfNotPresent": "false",
        "gitUserId": "segnivo",
        "gitRepoId": "segnivo-sdk"
      }
    },
    "java": {

      "generator": "java",
      "outputDir": "sdk-java",
      "properties": {
        // Existing properties 
        "artifactId": "segnivo-sdk",
        "groupId": "com.segnivo",
        "artifactUrl": "https://github.com/segnivo/segnivo-sdk/tree/main/sdk-java",
        "artifactDescription": "This.is.the.offical.sdk.for.segnivo.client",
        "artifactVersion": "VERSION_PLACEHOLDER",
        "apiPackage": "com.segnivo.sdk.api",
        "modelPackage": "com.segnivo.sdk.model",
        "invokerPackage": "com.segnivo.sdk",
        "library": "resttemplate",
        "dateLibrary": "java8",
        "java8": "true",
        "hideGenerationTimestamp": "true",
        "serializationLibrary": "jackson",

        // Maven Central required properties
        "licenseName": "Apache-License-2.0",
        "licenseUrl": "http://www.apache.org/licenses/LICENSE-2.0.txt",
        "developerName": "Hanis.Hapsa",
        "developerEmail": "hanis.hapsa@segnivo.com",
        "developerOrganization": "Segnivo",
        "developerOrganizationUrl": "https://github.com/segnivo/segnivo-sdk/tree/main/sdk-java",
        "scmConnection": "scm:git:git://github.com/segnivo/segnivo-sdk.git",
        "scmDeveloperConnection": "scm:git:ssh://github.com:segnivo/segnivo-sdk.git",
        "scmUrl": "https://github.com/segnivo/segnivo-sdk/sdk-java",
      }
    },
  }
};

module.exports = config;