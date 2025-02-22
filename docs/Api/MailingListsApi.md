# Segnivo\SDK\MailingListsApi

All URIs are relative to https://api.segnivo.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listsGet()**](MailingListsApi.md#listsGet) | **GET** /lists | Get mailing lists |
| [**listsPost()**](MailingListsApi.md#listsPost) | **POST** /lists | Create a Mailing List |
| [**listsUidAddFieldPost()**](MailingListsApi.md#listsUidAddFieldPost) | **POST** /lists/{uid}/add-field | Add a field |
| [**listsUidDeletePost()**](MailingListsApi.md#listsUidDeletePost) | **POST** /lists/{uid}/delete | Delete a list |
| [**listsUidGet()**](MailingListsApi.md#listsUidGet) | **GET** /lists/{uid} | Get a list |
| [**listsUidPatch()**](MailingListsApi.md#listsUidPatch) | **PATCH** /lists/{uid} | Update a List |


## `listsGet()`

```php
listsGet(): object
```

Get mailing lists

Returns all your existing lists

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\MailingListsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->listsGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MailingListsApi->listsGet: ', $e->getMessage(), PHP_EOL;
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

## `listsPost()`

```php
listsPost($mailingListRequest): object
```

Create a Mailing List

Create a new mailing list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\MailingListsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$mailingListRequest = new \Segnivo\SDK\Model\MailingListRequest(); // \Segnivo\SDK\Model\MailingListRequest

try {
    $result = $apiInstance->listsPost($mailingListRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MailingListsApi->listsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **mailingListRequest** | [**\Segnivo\SDK\Model\MailingListRequest**](../Model/MailingListRequest.md)|  | [optional] |

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

## `listsUidAddFieldPost()`

```php
listsUidAddFieldPost($uid, $mailingListAddFieldRequest): object
```

Add a field

Add a field to an existing list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\MailingListsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the list to add a field to.
$mailingListAddFieldRequest = new \Segnivo\SDK\Model\MailingListAddFieldRequest(); // \Segnivo\SDK\Model\MailingListAddFieldRequest

try {
    $result = $apiInstance->listsUidAddFieldPost($uid, $mailingListAddFieldRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MailingListsApi->listsUidAddFieldPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the list to add a field to. | |
| **mailingListAddFieldRequest** | [**\Segnivo\SDK\Model\MailingListAddFieldRequest**](../Model/MailingListAddFieldRequest.md)|  | [optional] |

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

## `listsUidDeletePost()`

```php
listsUidDeletePost($uid, $body): object
```

Delete a list

Delete an existing list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\MailingListsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the list to delete.
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->listsUidDeletePost($uid, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MailingListsApi->listsUidDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the list to delete. | |
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

## `listsUidGet()`

```php
listsUidGet($uid): object
```

Get a list

Returns detailed information about a specified list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\MailingListsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the mailing list to fetch.

try {
    $result = $apiInstance->listsUidGet($uid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MailingListsApi->listsUidGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the mailing list to fetch. | |

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

## `listsUidPatch()`

```php
listsUidPatch($uid, $mailingListRequest): object
```

Update a List

Update an existing mailing list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\MailingListsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the list to update.
$mailingListRequest = new \Segnivo\SDK\Model\MailingListRequest(); // \Segnivo\SDK\Model\MailingListRequest

try {
    $result = $apiInstance->listsUidPatch($uid, $mailingListRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling MailingListsApi->listsUidPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the list to update. | |
| **mailingListRequest** | [**\Segnivo\SDK\Model\MailingListRequest**](../Model/MailingListRequest.md)|  | [optional] |

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
