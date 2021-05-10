/**
 * Adyen Recurring API
 * The Recurring APIs allow you to manage and remove your tokens or saved payment details. Tokens should be created with validation during a payment request.  For more information, refer to our [Tokenization documentation](https://docs.adyen.com/online-payments/tokenization). ## Authentication To connect to the Recurring API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/development-resources/api-credentials). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Recurring API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Recurring/v49/disable ```
 *
 * The version of the OpenAPI document: 49
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {RecurringDetail} from './recurringDetail';

export class RecurringDetailsResult {
    /**
    * The date when the recurring details were created.
    */
    'creationDate'?: Date;
    /**
    * Payment details stored for recurring payments.
    */
    'details'?: Array<RecurringDetail>;
    /**
    * The most recent email for this shopper (if available).
    */
    'lastKnownShopperEmail'?: string;
    /**
    * The reference you use to uniquely identify the shopper (e.g. user ID or account ID).
    */
    'shopperReference'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "Date"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<RecurringDetail>"
        },
        {
            "name": "lastKnownShopperEmail",
            "baseName": "lastKnownShopperEmail",
            "type": "string"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RecurringDetailsResult.attributeTypeMap;
    }
}
