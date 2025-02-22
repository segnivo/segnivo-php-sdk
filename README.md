# segnivo-sdk

**API Version**: 1.7

**Date**: 9th July, 2024

## 📄 Getting Started

This API is based on the REST API architecture, allowing the user to easily manage their data with this resource-based approach.

Every API call is established on which specific request type (GET, POST, PUT, DELETE) will be used.

The API must not be abused and should be used within acceptable limits.

To start using this API, you will need not create or access an existing Segnivo account to obtain your API key ([retrievable from your account settings](https://messaging.segnivo.com/account/api)).

- You must use a valid API Key to send requests to the API endpoints.
    
- The API only responds to HTTPS-secured communications. Any requests sent via HTTP return an HTTP 301 redirect to the corresponding HTTPS resources.
    
- The API returns request responses in JSON format. When an API request returns an error, it is sent in the JSON response as an error key or with details in the message key.
    

### 🔖 **Need some help?**

In case you have questions or need clarity with interacting with some endpoints feel free to create a support ticket on your account or you can send an email ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)) directly and we would be happy to help.

---

## Authentication

As noted earlier, this API uses API keys for authentication. You can generate a Segnivo API key in the [API](https://messaging.segnivo.com/account/api) section of your account settings.

You must include an API key in each request to this API with the `X-API-KEY` request header.

### Authentication error response

If an API key is missing, malformed, or invalid, you will receive an HTTP 401 Unauthorized response code.

## Rate and usage limits

API access rate limits apply on a per-API endpoint basis in unit time. The limit is 10k requests per hour for most endpoints and 1m requests per hour for transactional/relay email-sending endpoints. Also, depending on your plan, you may have usage limits. If you exceed either limit, your request will return an HTTP 429 Too Many Requests status code or HTTP 403 if sending credits have been exhausted.

### 503 response

An HTTP `503` response from our servers may indicate there is an unexpected spike in API access traffic, while this rarely happens, we ensure the server is usually operational within the next two to five minutes. If the outage persists or you receive any other form of an HTTP `5XX` error, contact support ([<i>developers@segnivo.com</i>](https://mailto:developers@segnivo.com)).

### Request headers

To make a successful request, some or all of the following headers must be passed with the request.

| **Header** | **Description** |
| --- | --- |
| Content-Type | Required and should be `application/json` in most cases. |
| Accept | Required and should be `application/json` in most cases |
| Content-Length | Required for `POST`, `PATCH`, and `PUT` requests containing a request body. The value must be the number of bytes rather than the number of characters in the request body. |
| X-API-KEY | Required. Specifies the API key used for authorization. |

##### 🔖 Note with example requests and code snippets

If/when you use the code snippets used as example requests, remember to calculate and add the `Content-Length` header. Some request libraries, frameworks, and tools automatically add this header for you while a few do not. Kindly check and ensure yours does or add it yourself.


## Installation & Usage

### Requirements

PHP 7.4 and later.
Should also work with PHP 8.0.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/GIT_USER_ID/GIT_REPO_ID.git"
    }
  ],
  "require": {
    "GIT_USER_ID/GIT_REPO_ID": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/segnivo-sdk/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\EmailAddressVerificationApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$emailAddressVerificationRequest = new \Segnivo\SDK\Model\EmailAddressVerificationRequest(); // \Segnivo\SDK\Model\EmailAddressVerificationRequest

try {
    $result = $apiInstance->validateEmailPost($emailAddressVerificationRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailAddressVerificationApi->validateEmailPost: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.segnivo.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EmailAddressVerificationApi* | [**validateEmailPost**](docs/Api/EmailAddressVerificationApi.md#validateemailpost) | **POST** /validate-email | Email Address Verification Validation
*EmailCampaignsApi* | [**messagesGet**](docs/Api/EmailCampaignsApi.md#messagesget) | **GET** /messages | Get campaigns
*EmailCampaignsApi* | [**messagesPost**](docs/Api/EmailCampaignsApi.md#messagespost) | **POST** /messages | Create a Campaign
*EmailCampaignsApi* | [**messagesUidDeletePost**](docs/Api/EmailCampaignsApi.md#messagesuiddeletepost) | **POST** /messages/{uid}/delete | Delete a campaign
*EmailCampaignsApi* | [**messagesUidGet**](docs/Api/EmailCampaignsApi.md#messagesuidget) | **GET** /messages/{uid} | Get a campaign
*EmailCampaignsApi* | [**messagesUidPatch**](docs/Api/EmailCampaignsApi.md#messagesuidpatch) | **PATCH** /messages/{uid} | Update Campaign
*EmailCampaignsApi* | [**messagesUidPausePost**](docs/Api/EmailCampaignsApi.md#messagesuidpausepost) | **POST** /messages/{uid}/pause | Pause a campaign
*EmailCampaignsApi* | [**messagesUidResumePost**](docs/Api/EmailCampaignsApi.md#messagesuidresumepost) | **POST** /messages/{uid}/resume | Resume the delivery of a campaign
*MailingListsApi* | [**listsGet**](docs/Api/MailingListsApi.md#listsget) | **GET** /lists | Get mailing lists
*MailingListsApi* | [**listsPost**](docs/Api/MailingListsApi.md#listspost) | **POST** /lists | Create a Mailing List
*MailingListsApi* | [**listsUidAddFieldPost**](docs/Api/MailingListsApi.md#listsuidaddfieldpost) | **POST** /lists/{uid}/add-field | Add a field
*MailingListsApi* | [**listsUidDeletePost**](docs/Api/MailingListsApi.md#listsuiddeletepost) | **POST** /lists/{uid}/delete | Delete a list
*MailingListsApi* | [**listsUidGet**](docs/Api/MailingListsApi.md#listsuidget) | **GET** /lists/{uid} | Get a list
*MailingListsApi* | [**listsUidPatch**](docs/Api/MailingListsApi.md#listsuidpatch) | **PATCH** /lists/{uid} | Update a List
*RelayApi* | [**relayEmailsIdGet**](docs/Api/RelayApi.md#relayemailsidget) | **GET** /relay/emails/{id} | Fetch Emails
*RelayApi* | [**relayRawPost**](docs/Api/RelayApi.md#relayrawpost) | **POST** /relay/raw | Send a Raw Email Message
*RelayTransactionalEmailsApi* | [**relaySendPost**](docs/Api/RelayTransactionalEmailsApi.md#relaysendpost) | **POST** /relay/send | Send an Email
*SubscribersContactsApi* | [**contactsGet**](docs/Api/SubscribersContactsApi.md#contactsget) | **GET** /contacts | Get contacts
*SubscribersContactsApi* | [**contactsPost**](docs/Api/SubscribersContactsApi.md#contactspost) | **POST** /contacts | Add a Contact
*SubscribersContactsApi* | [**contactsUidAddTagPost**](docs/Api/SubscribersContactsApi.md#contactsuidaddtagpost) | **POST** /contacts/{uid}/add-tag | Add tags to a contact
*SubscribersContactsApi* | [**contactsUidDeletePost**](docs/Api/SubscribersContactsApi.md#contactsuiddeletepost) | **POST** /contacts/{uid}/delete | Delete a contact
*SubscribersContactsApi* | [**contactsUidGet**](docs/Api/SubscribersContactsApi.md#contactsuidget) | **GET** /contacts/{uid} | Get a contact
*SubscribersContactsApi* | [**contactsUidPatch**](docs/Api/SubscribersContactsApi.md#contactsuidpatch) | **PATCH** /contacts/{uid} | Update Contact
*SubscribersContactsApi* | [**contactsUidSubscribePatch**](docs/Api/SubscribersContactsApi.md#contactsuidsubscribepatch) | **PATCH** /contacts/{uid}/subscribe | Subscribe a contact
*SubscribersContactsApi* | [**contactsUidUnsubscribePatch**](docs/Api/SubscribersContactsApi.md#contactsuidunsubscribepatch) | **PATCH** /contacts/{uid}/unsubscribe | Unsubscribe a contact

## Models

- [AddContactRequest](docs/Model/AddContactRequest.md)
- [CampaignCreateRequest](docs/Model/CampaignCreateRequest.md)
- [CampaignUpdateRequest](docs/Model/CampaignUpdateRequest.md)
- [ContactUpdateRequest](docs/Model/ContactUpdateRequest.md)
- [ContactsUidAddTagPostRequest](docs/Model/ContactsUidAddTagPostRequest.md)
- [EmailAddressVerificationRequest](docs/Model/EmailAddressVerificationRequest.md)
- [MailingListAddFieldRequest](docs/Model/MailingListAddFieldRequest.md)
- [MailingListRequest](docs/Model/MailingListRequest.md)
- [MailingListRequestContact](docs/Model/MailingListRequestContact.md)
- [RelayEmailRequest](docs/Model/RelayEmailRequest.md)

## Authorization

Authentication schemes defined for the API:
### apiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-KEY
- **Location**: HTTP header


## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author



## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0.0`
    - Package version: `1.0.0`
    - Generator version: `7.11.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
