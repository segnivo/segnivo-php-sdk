# Segnivo\SDK\SubscribersContactsApi

All URIs are relative to https://api.segnivo.com/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**contactsGet()**](SubscribersContactsApi.md#contactsGet) | **GET** /contacts | Get contacts |
| [**contactsPost()**](SubscribersContactsApi.md#contactsPost) | **POST** /contacts | Add a Contact |
| [**contactsUidAddTagPost()**](SubscribersContactsApi.md#contactsUidAddTagPost) | **POST** /contacts/{uid}/add-tag | Add tags to a contact |
| [**contactsUidDeletePost()**](SubscribersContactsApi.md#contactsUidDeletePost) | **POST** /contacts/{uid}/delete | Delete a contact |
| [**contactsUidGet()**](SubscribersContactsApi.md#contactsUidGet) | **GET** /contacts/{uid} | Get a contact |
| [**contactsUidPatch()**](SubscribersContactsApi.md#contactsUidPatch) | **PATCH** /contacts/{uid} | Update Contact |
| [**contactsUidSubscribePatch()**](SubscribersContactsApi.md#contactsUidSubscribePatch) | **PATCH** /contacts/{uid}/subscribe | Subscribe a contact |
| [**contactsUidUnsubscribePatch()**](SubscribersContactsApi.md#contactsUidUnsubscribePatch) | **PATCH** /contacts/{uid}/unsubscribe | Unsubscribe a contact |


## `contactsGet()`

```php
contactsGet($email, $perPage, $page): object
```

Get contacts

Returns a list of contacts/subscribers on your account  This endpoint accepts three **optional** query parameters  - `email` — An email address to search for. If set, the endpoint only returns subscribers that have an identical email address.      - `per_page` — A limit on the number of records to return.      - `page` — The parameter serves as an offset on the number of records returned.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$email = <string>; // string | An email address to search for.
$perPage = 20; // int | How many items should be returned ahead.
$page = 1; // int | The offset for the items to be returned, helps in pagination.

try {
    $result = $apiInstance->contactsGet($email, $perPage, $page);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **email** | **string**| An email address to search for. | [optional] |
| **perPage** | **int**| How many items should be returned ahead. | [optional] |
| **page** | **int**| The offset for the items to be returned, helps in pagination. | [optional] |

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

## `contactsPost()`

```php
contactsPost($addContactRequest): object
```

Add a Contact

Add a new contact/subscriber to your mailing list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$addContactRequest = new \Segnivo\SDK\Model\AddContactRequest(); // \Segnivo\SDK\Model\AddContactRequest

try {
    $result = $apiInstance->contactsPost($addContactRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **addContactRequest** | [**\Segnivo\SDK\Model\AddContactRequest**](../Model/AddContactRequest.md)|  | [optional] |

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

## `contactsUidAddTagPost()`

```php
contactsUidAddTagPost($uid, $contactsUidAddTagPostRequest): object
```

Add tags to a contact

Add tags to an existing contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to update with the tags.
$contactsUidAddTagPostRequest = new \Segnivo\SDK\Model\ContactsUidAddTagPostRequest(); // \Segnivo\SDK\Model\ContactsUidAddTagPostRequest

try {
    $result = $apiInstance->contactsUidAddTagPost($uid, $contactsUidAddTagPostRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidAddTagPost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to update with the tags. | |
| **contactsUidAddTagPostRequest** | [**\Segnivo\SDK\Model\ContactsUidAddTagPostRequest**](../Model/ContactsUidAddTagPostRequest.md)|  | [optional] |

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

## `contactsUidDeletePost()`

```php
contactsUidDeletePost($uid, $body): object
```

Delete a contact

Delete an existing contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to delete.
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->contactsUidDeletePost($uid, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidDeletePost: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to delete. | |
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

## `contactsUidGet()`

```php
contactsUidGet($uid): object
```

Get a contact

Fetch detailed contact information for specified a contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to get.

try {
    $result = $apiInstance->contactsUidGet($uid);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidGet: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to get. | |

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

## `contactsUidPatch()`

```php
contactsUidPatch($uid, $contactUpdateRequest): object
```

Update Contact

Update the specified subscriber/contact

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to update.
$contactUpdateRequest = new \Segnivo\SDK\Model\ContactUpdateRequest(); // \Segnivo\SDK\Model\ContactUpdateRequest

try {
    $result = $apiInstance->contactsUidPatch($uid, $contactUpdateRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidPatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to update. | |
| **contactUpdateRequest** | [**\Segnivo\SDK\Model\ContactUpdateRequest**](../Model/ContactUpdateRequest.md)|  | [optional] |

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

## `contactsUidSubscribePatch()`

```php
contactsUidSubscribePatch($uid, $listUid, $body): object
```

Subscribe a contact

Subscribe a contact to a list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to subscribe.
$listUid = <string>; // string | (Required) The uid of the mail list to subscribe the contact.
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->contactsUidSubscribePatch($uid, $listUid, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidSubscribePatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to subscribe. | |
| **listUid** | **string**| (Required) The uid of the mail list to subscribe the contact. | [optional] |
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

## `contactsUidUnsubscribePatch()`

```php
contactsUidUnsubscribePatch($uid, $listUid, $body): object
```

Unsubscribe a contact

Unsubscribe a contact from a list

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');


// Configure API key authorization: apiKeyAuth
$config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKey('X-API-KEY', 'YOUR_API_KEY');
// Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
// $config = Segnivo\SDK\Configuration::getDefaultConfiguration()->setApiKeyPrefix('X-API-KEY', 'Bearer');


$apiInstance = new Segnivo\SDK\Api\SubscribersContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client(),
    $config
);
$uid = <string>; // string | (Required) The uid of the contact to unsubscribe.
$listUid = <string>; // string | (Required) The uid of the mail list to unsubscribe the contact.
$body = array('key' => new \stdClass); // object

try {
    $result = $apiInstance->contactsUidUnsubscribePatch($uid, $listUid, $body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling SubscribersContactsApi->contactsUidUnsubscribePatch: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **uid** | **string**| (Required) The uid of the contact to unsubscribe. | |
| **listUid** | **string**| (Required) The uid of the mail list to unsubscribe the contact. | [optional] |
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
