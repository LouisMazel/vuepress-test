import type { CountryCallingCode, CountryCode, NationalNumber, NumberType } from 'libphonenumber-js';
import type locales from './constantes/locales';
export declare type Result = {
    isValid: boolean;
    countryCode?: CountryCode;
    countryCallingCode?: CountryCallingCode;
    nationalNumber?: NationalNumber;
    type?: NumberType;
    formatInternational?: string;
    formatNational?: string;
    uri?: string;
    e164?: string;
};
export declare type Translations = typeof locales;
export declare type Country = {
    iso2: CountryCode;
    dialCode: CountryCallingCode;
    name: string;
};
