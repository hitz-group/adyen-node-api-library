/**
 * Adyen for Platforms: Account API
 * The Account API provides endpoints for managing account-related entities on your platform. These related entities include account holders, accounts, bank accounts, shareholders, and KYC-related documents. The management operations include actions such as creation, retrieval, updating, and deletion of them.  For more information, refer to our [documentation](https://docs.adyen.com/platforms). ## Authentication To connect to the Account API, you must use basic authentication credentials of your web service user. If you don\'t have one, contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@MarketPlace.YourMarketPlace\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning The Account API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://cal-test.adyen.com/cal/services/Account/v6/createAccountHolder ```
 *
 * The version of the OpenAPI document: 6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class PersonalDocumentData {
    /**
    * The expiry date of the document,   in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.
    */
    'expirationDate'?: string;
    /**
    * The country where the document was issued, in the two-character  [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.
    */
    'issuerCountry'?: string;
    /**
    * The state where the document was issued (if applicable).
    */
    'issuerState'?: string;
    /**
    * The number in the document.
    */
    'number'?: string;
    /**
    * The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.  To delete an existing entry for a document `type`, send only the `type` field in your request. 
    */
    'type': PersonalDocumentData.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "string"
        },
        {
            "name": "issuerCountry",
            "baseName": "issuerCountry",
            "type": "string"
        },
        {
            "name": "issuerState",
            "baseName": "issuerState",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PersonalDocumentData.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PersonalDocumentData.attributeTypeMap;
    }
}

export namespace PersonalDocumentData {
    export enum TypeEnum {
        Drivinglicense = <any> 'DRIVINGLICENSE',
        Id = <any> 'ID',
        Passport = <any> 'PASSPORT',
        Socialsecurity = <any> 'SOCIALSECURITY',
        Visa = <any> 'VISA'
    }
}