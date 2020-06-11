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
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



export class OutputText {
    'alignment'?: OutputText.AlignmentEnum;
    'characterHeight'?: OutputText.CharacterHeightEnum;
    'characterSet'?: number;
    'characterStyle'?: OutputText.CharacterStyleEnum;
    'characterWidth'?: OutputText.CharacterWidthEnum;
    'color'?: OutputText.ColorEnum;
    'endOfLineFlag'?: boolean;
    'font'?: string;
    'startColumn'?: number;
    'startRow'?: number;
    'text'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "alignment",
            "baseName": "Alignment",
            "type": "OutputText.AlignmentEnum"
        },
        {
            "name": "characterHeight",
            "baseName": "CharacterHeight",
            "type": "OutputText.CharacterHeightEnum"
        },
        {
            "name": "characterSet",
            "baseName": "CharacterSet",
            "type": "number"
        },
        {
            "name": "characterStyle",
            "baseName": "CharacterStyle",
            "type": "OutputText.CharacterStyleEnum"
        },
        {
            "name": "characterWidth",
            "baseName": "CharacterWidth",
            "type": "OutputText.CharacterWidthEnum"
        },
        {
            "name": "color",
            "baseName": "Color",
            "type": "OutputText.ColorEnum"
        },
        {
            "name": "endOfLineFlag",
            "baseName": "EndOfLineFlag",
            "type": "boolean"
        },
        {
            "name": "font",
            "baseName": "Font",
            "type": "string"
        },
        {
            "name": "startColumn",
            "baseName": "StartColumn",
            "type": "number"
        },
        {
            "name": "startRow",
            "baseName": "StartRow",
            "type": "number"
        },
        {
            "name": "text",
            "baseName": "Text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OutputText.attributeTypeMap;
    }
}

export namespace OutputText {
    export enum AlignmentEnum {
        Centred = <any> 'Centred',
        Justified = <any> 'Justified',
        Left = <any> 'Left',
        Right = <any> 'Right'
    }
    export enum CharacterHeightEnum {
        DoubleHeight = <any> 'DoubleHeight',
        HalfHeight = <any> 'HalfHeight',
        SingleHeight = <any> 'SingleHeight'
    }
    export enum CharacterStyleEnum {
        Bold = <any> 'Bold',
        Italic = <any> 'Italic',
        Normal = <any> 'Normal',
        Underlined = <any> 'Underlined'
    }
    export enum CharacterWidthEnum {
        DoubleWidth = <any> 'DoubleWidth',
        SingleWidth = <any> 'SingleWidth'
    }
    export enum ColorEnum {
        Black = <any> 'Black',
        Blue = <any> 'Blue',
        Cyan = <any> 'Cyan',
        Green = <any> 'Green',
        Magenta = <any> 'Magenta',
        Red = <any> 'Red',
        White = <any> 'White',
        Yellow = <any> 'Yellow'
    }
}