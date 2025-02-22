# Segnivo\SDK\RelayApi

All URIs are relative to https://api.segnivo.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**relayEmailsIdGet()**](RelayApi.md#relayEmailsIdGet) | **GET** /relay/emails/{id} | Fetch Emails |
| [**relayRawPost()**](RelayApi.md#relayRawPost) | **POST** /relay/raw | Send a Raw Email Message |


## `relayEmailsIdGet()`

```php
relayEmailsIdGet($id, $limit): object
```

Fetch Emails

The `/emails` endpoint lets you fetch one or more marketing/transactional email(s) from your `Segnivo Messaging` account and it accepts two **optional** parameters.  - The `id` string of the email to fetch provided as a path variable      - The `limit` on the number of records to fetch (if email id is not provided) as a query string parameter. This value defaults to 100 if not provided.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\RelayApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$id = <string>; // string | The ID of the email to fetch
$limit = 100; // int | The number of records to fetch

try {
    $result = $apiInstance->relayEmailsIdGet($id, $limit);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelayApi->relayEmailsIdGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **id** | **string**| The ID of the email to fetch | |
| **limit** | **int**| The number of records to fetch | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `relayRawPost()`

```php
relayRawPost($message, $isTransactional, $trackClick, $trackOpen, $signDkim): object
```

Send a Raw Email Message

The `/raw` endpoint lets you send marketing and transactional emails from your `Segnivo Messaging` account by passing a raw RFC822 message to the `message` attribute in the request body.  The following parameters should be passed as a form data to the endpoint  - **message** - A raw RFC822 message      - **sign_dkim** (optional, defaults to `true`) - A boolean value on if a DKIM signature should be included in this message      - **track_click** (optional, defaults to `true`) - A boolean value on if email clicks should be tracked. If `true` links in the email will be rewritten to enable tracking      - **track_open** (optional, defaults to `true`) - A boolean value on if the email opens should be tracked      - **is_transactional** (optional, defaults to `false`) - A boolean value to flag this email as a transactional email

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\RelayApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$message = 'message_example'; // string | The raw email content in RFC822 format. This should include headers, body content, and any attachments.
$isTransactional = True; // bool | Indicates whether the email is transactional (e.g., receipts, order confirmations) or marketing. Transactional emails typically bypass unsubscribes.
$trackClick = True; // bool | Enables or disables click tracking within the email. When enabled, any hyperlinks in the email will be tracked to gather analytics on user interactions.
$trackOpen = True; // bool | Enables or disables open tracking for the email. When enabled, a tracking pixel is embedded in the email to monitor whether the recipient has opened it.
$signDkim = True; // bool | Specifies whether the email should be signed with a DKIM (DomainKeys Identified Mail) signature. DKIM helps improve email deliverability by ensuring the email's integrity.

try {
    $result = $apiInstance->relayRawPost($message, $isTransactional, $trackClick, $trackOpen, $signDkim);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling RelayApi->relayRawPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **message** | **string**| The raw email content in RFC822 format. This should include headers, body content, and any attachments. | [optional] |
| **isTransactional** | **bool**| Indicates whether the email is transactional (e.g., receipts, order confirmations) or marketing. Transactional emails typically bypass unsubscribes. | [optional] |
| **trackClick** | **bool**| Enables or disables click tracking within the email. When enabled, any hyperlinks in the email will be tracked to gather analytics on user interactions. | [optional] |
| **trackOpen** | **bool**| Enables or disables open tracking for the email. When enabled, a tracking pixel is embedded in the email to monitor whether the recipient has opened it. | [optional] |
| **signDkim** | **bool**| Specifies whether the email should be signed with a DKIM (DomainKeys Identified Mail) signature. DKIM helps improve email deliverability by ensuring the email&#39;s integrity. | [optional] |

### Return type

**object**

### Authorization

[apiKeyAuth](../../README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
