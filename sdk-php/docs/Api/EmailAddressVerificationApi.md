# Segnivo\SDK\EmailAddressVerificationApi

All URIs are relative to https://api.segnivo.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**validateEmailPost()**](EmailAddressVerificationApi.md#validateEmailPost) | **POST** /validate-email | Email Address Verification Validation |


## `validateEmailPost()`

```php
validateEmailPost($emailAddressVerificationRequest): object
```

Email Address Verification Validation

The `/validate-email` endpoint allows you to pass the email addresses you wish to verify and get a response on each of their status.  The following data should be passed in JSON format in the request body  - **emails** - An array/collection containing a minimum of one and maximum of fifty email addresses for verification/validation.

### Example

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

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **emailAddressVerificationRequest** | [**\Segnivo\SDK\Model\EmailAddressVerificationRequest**](../Model/EmailAddressVerificationRequest.md)|  | [optional] |

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
