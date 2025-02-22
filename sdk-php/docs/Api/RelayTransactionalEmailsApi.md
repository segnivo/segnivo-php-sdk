# Segnivo\SDK\RelayTransactionalEmailsApi

All URIs are relative to https://api.segnivo.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**relaySendPost()**](RelayTransactionalEmailsApi.md#relaySendPost) | **POST** /relay/send | Send an Email |


## `relaySendPost()`

```php
relaySendPost($relayEmailRequest): object
```

Send an Email

The `/send` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account.  The following data should be passed in JSON format in the request body  - **subject** - The subject of the email      - **from_name** (optional) - The full name of the sender      - **from_email** - The email of the sender      - **reply_to** (optional) - The email to which replies should be sent      - **content_type** (optional, defaults to `html`) - The content type of the email body. Accepts either `text` or `html`      - **recipients** - An array/collection of email addresses to deliver this message, max. 50      - **content** - The HTML or plain text content of the email      - **preheader** (optional) - The email preheader      - **custom_headers** (optional) - An object of custom headers to add to the email      - **delivery_at** (optional) - The 10-digit unix timestamp of the date/time at which this email should be delivered      - **attachments** (optional) - An array/collection of the URLs of files to attach to the email      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email       #### 🔖 Important  **`is_transactional`** must only be set to `true` for transactional emails. Setting this to `true` for marketing emails will result in your API access being revoked and your account disabled.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\RelayTransactionalEmailsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$relayEmailRequest = new \Segnivo\SDK\Model\RelayEmailRequest(); // \Segnivo\SDK\Model\RelayEmailRequest

try {
    $result = $apiInstance->relaySendPost($relayEmailRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelayTransactionalEmailsApi->relaySendPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **relayEmailRequest** | [**\Segnivo\SDK\Model\RelayEmailRequest**](../Model/RelayEmailRequest.md)|  | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
