# Segnivo\SDK\EmailCampaignsApi

All URIs are relative to https://api.segnivo.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**messagesGet()**](EmailCampaignsApi.md#messagesGet) | **GET** /messages | Get campaigns |
| [**messagesPost()**](EmailCampaignsApi.md#messagesPost) | **POST** /messages | Create a Campaign |
| [**messagesUidDeletePost()**](EmailCampaignsApi.md#messagesUidDeletePost) | **POST** /messages/{uid}/delete | Delete a campaign |
| [**messagesUidGet()**](EmailCampaignsApi.md#messagesUidGet) | **GET** /messages/{uid} | Get a campaign |
| [**messagesUidPatch()**](EmailCampaignsApi.md#messagesUidPatch) | **PATCH** /messages/{uid} | Update Campaign |
| [**messagesUidPausePost()**](EmailCampaignsApi.md#messagesUidPausePost) | **POST** /messages/{uid}/pause | Pause a campaign |
| [**messagesUidResumePost()**](EmailCampaignsApi.md#messagesUidResumePost) | **POST** /messages/{uid}/resume | Resume the delivery of a campaign |


## `messagesGet()`

```php
messagesGet(): object
```

Get campaigns

Returns a collection of all your campaigns

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\EmailCampaignsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->messagesGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailCampaignsApi->messagesGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

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

## `messagesPost()`

```php
messagesPost($campaignCreateRequest): object
```

Create a Campaign

Creat an email campaign for processing

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\EmailCampaignsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$campaignCreateRequest = new \Segnivo\SDK\Model\CampaignCreateRequest(); // \Segnivo\SDK\Model\CampaignCreateRequest

try {
    $result = $apiInstance->messagesPost($campaignCreateRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailCampaignsApi->messagesPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **campaignCreateRequest** | [**\Segnivo\SDK\Model\CampaignCreateRequest**](../Model/CampaignCreateRequest.md)|  | [optional] |

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

## `messagesUidDeletePost()`

```php
messagesUidDeletePost($uid, $body): object
```

Delete a campaign

Delete the specified campaign

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\EmailCampaignsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the campaign to delete
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->messagesUidDeletePost($uid, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailCampaignsApi->messagesUidDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the campaign to delete | |
| **body** | **object**|  | [optional] |

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

## `messagesUidGet()`

```php
messagesUidGet($uid): object
```

Get a campaign

Returns the specified campaign details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\EmailCampaignsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the campaign to fetch

try {
    $result = $apiInstance->messagesUidGet($uid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailCampaignsApi->messagesUidGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the campaign to fetch | |

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

## `messagesUidPatch()`

```php
messagesUidPatch($uid, $campaignUpdateRequest): object
```

Update Campaign

Updates a previously added campaign. Only Active and Paused campaigns can be updated.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\EmailCampaignsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the campaign to update
$campaignUpdateRequest = new \Segnivo\SDK\Model\CampaignUpdateRequest(); // \Segnivo\SDK\Model\CampaignUpdateRequest

try {
    $result = $apiInstance->messagesUidPatch($uid, $campaignUpdateRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailCampaignsApi->messagesUidPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the campaign to update | |
| **campaignUpdateRequest** | [**\Segnivo\SDK\Model\CampaignUpdateRequest**](../Model/CampaignUpdateRequest.md)|  | [optional] |

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

## `messagesUidPausePost()`

```php
messagesUidPausePost($uid, $body): object
```

Pause a campaign

Pause the specified campaign

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\EmailCampaignsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the campaign to pause
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->messagesUidPausePost($uid, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailCampaignsApi->messagesUidPausePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the campaign to pause | |
| **body** | **object**|  | [optional] |

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

## `messagesUidResumePost()`

```php
messagesUidResumePost($uid, $body): object
```

Resume the delivery of a campaign

Resume delivery of the specified campaign

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\EmailCampaignsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the campaign to resume
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->messagesUidResumePost($uid, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling EmailCampaignsApi->messagesUidResumePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the campaign to resume | |
| **body** | **object**|  | [optional] |

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
