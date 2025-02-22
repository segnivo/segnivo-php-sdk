# # RelayEmailRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **string** | The subject of the email | [optional]
**fromName** | **string** | The full name of the sender | [optional]
**fromEmail** | **string** | The email of the sender | [optional]
**replyTo** | **string** | The email to which replies should be sent | [optional]
**contentType** | **string** | The content type of the email body | [optional] [default to 'html']
**recipients** | **string[]** | An array of email addresses to deliver this message | [optional]
**content** | **string** | The HTML or plain text content of the email | [optional]
**preheader** | **string** | The email preheader | [optional]
**customHeaders** | **object** | An object of custom headers to add to the email | [optional]
**deliveryAt** | **int** | The 10-digit unix timestamp of the date/time at which this email should be delivered | [optional]
**attachments** | **string[]** | An array of URLs of files to attach to the email | [optional]
**signDkim** | **bool** | A boolean value on if a DKIM signature should be included in this message | [optional] [default to true]
**trackClick** | **bool** | A boolean value on if email clicks should be tracked | [optional] [default to true]
**trackOpen** | **bool** | A boolean value on if the email opens should be tracked | [optional] [default to true]
**isTransactional** | **bool** | A boolean value to flag this email as a transactional email | [optional] [default to false]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
