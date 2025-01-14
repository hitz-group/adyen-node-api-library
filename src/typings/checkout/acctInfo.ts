/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including 3D Secure), mobile wallets, and local payment methods (for example, iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/online-payments).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v68/payments ```
 *
 * The version of the OpenAPI document: 68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



export class AcctInfo {
    /**
    * Length of time that the cardholder has had the account with the 3DS Requestor.
    */
    'chAccAgeInd'?: string;
    /**
    * String that the cardholder’s account with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added.
    */
    'chAccChange'?: string;
    /**
    * Length of time since the cardholder’s account information with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added.
    */
    'chAccChangeInd'?: string;
    /**
    * String that cardholder’s account with the 3DS Requestor had a password change or account reset.
    */
    'chAccPwChange'?: string;
    /**
    * Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset.
    */
    'chAccPwChangeInd'?: string;
    /**
    * String that the cardholder opened the account with the 3DS Requestor.
    */
    'chAccString'?: string;
    /**
    * Number of purchases with this cardholder account during the previous six months.
    */
    'nbPurchaseAccount'?: string;
    /**
    * String that the payment account was enrolled in the cardholder’s account with the 3DS Requestor.
    */
    'paymentAccAge'?: string;
    /**
    * Indicates the length of time that the payment account was enrolled in the cardholder’s account with the 3DS Requestor.
    */
    'paymentAccInd'?: string;
    /**
    * Number of Add Card attempts in the last 24 hours.
    */
    'provisionAttemptsDay'?: string;
    /**
    * String when the shipping address used for this transaction was first used with the 3DS Requestor.
    */
    'shipAddressUsage'?: string;
    /**
    * Indicates when the shipping address used for this transaction was first used with the 3DS Requestor.
    */
    'shipAddressUsageInd'?: string;
    /**
    * Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction.
    */
    'shipNameIndicator'?: string;
    /**
    * Indicates whether the 3DS Requestor has experienced suspicious activity (including previous fraud) on the cardholder account.
    */
    'suspiciousAccActivity'?: string;
    /**
    * Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours.
    */
    'txnActivityDay'?: string;
    /**
    * Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year.
    */
    'txnActivityYear'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chAccAgeInd",
            "baseName": "chAccAgeInd",
            "type": "string"
        },
        {
            "name": "chAccChange",
            "baseName": "chAccChange",
            "type": "string"
        },
        {
            "name": "chAccChangeInd",
            "baseName": "chAccChangeInd",
            "type": "string"
        },
        {
            "name": "chAccPwChange",
            "baseName": "chAccPwChange",
            "type": "string"
        },
        {
            "name": "chAccPwChangeInd",
            "baseName": "chAccPwChangeInd",
            "type": "string"
        },
        {
            "name": "chAccString",
            "baseName": "chAccString",
            "type": "string"
        },
        {
            "name": "nbPurchaseAccount",
            "baseName": "nbPurchaseAccount",
            "type": "string"
        },
        {
            "name": "paymentAccAge",
            "baseName": "paymentAccAge",
            "type": "string"
        },
        {
            "name": "paymentAccInd",
            "baseName": "paymentAccInd",
            "type": "string"
        },
        {
            "name": "provisionAttemptsDay",
            "baseName": "provisionAttemptsDay",
            "type": "string"
        },
        {
            "name": "shipAddressUsage",
            "baseName": "shipAddressUsage",
            "type": "string"
        },
        {
            "name": "shipAddressUsageInd",
            "baseName": "shipAddressUsageInd",
            "type": "string"
        },
        {
            "name": "shipNameIndicator",
            "baseName": "shipNameIndicator",
            "type": "string"
        },
        {
            "name": "suspiciousAccActivity",
            "baseName": "suspiciousAccActivity",
            "type": "string"
        },
        {
            "name": "txnActivityDay",
            "baseName": "txnActivityDay",
            "type": "string"
        },
        {
            "name": "txnActivityYear",
            "baseName": "txnActivityYear",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AcctInfo.attributeTypeMap;
    }
}

