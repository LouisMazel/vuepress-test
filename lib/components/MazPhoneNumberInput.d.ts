import type { CountryCode } from 'libphonenumber-js';
import { type PropType } from 'vue';
import type { Color, Position, Size } from './types';
export type { Color, Size, Position } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        validator: (prop: string) => boolean;
        default: undefined;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    defaultPhoneNumber: {
        type: StringConstructor;
        default: undefined;
    };
    defaultCountryCode: {
        type: PropType<CountryCode>;
        default: undefined;
        validator: (code: CountryCode) => boolean;
    };
    preferredCountries: {
        type: PropType<CountryCode[]>;
        default: undefined;
    };
    ignoredCountries: {
        type: PropType<CountryCode[]>;
        default: undefined;
    };
    onlyCountries: {
        type: PropType<CountryCode[]>;
        default: undefined;
    };
    translations: {
        type: PropType<{
            countrySelector: {
                placeholder: string;
                error: string;
            };
            phoneInput: {
                placeholder: string;
                example: string;
            };
        }>;
        default: undefined;
    };
    listPosition: {
        type: PropType<Position>;
        default: string;
        validator: (value: Position) => boolean;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: PropType<Size>;
        default: string;
        validator: (value: string) => boolean;
    };
    noFlags: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    noExample: {
        type: BooleanConstructor;
        default: boolean;
    };
    noSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    noUseBrowserLocale: {
        type: BooleanConstructor;
        default: boolean;
    };
    fetchCountry: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCountrySelector: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCodeOnList: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    customCountriesList: {
        type: PropType<Record<CountryCode, string>>;
        default: undefined;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update" | "update:model-value" | "country-code")[], "update" | "update:model-value" | "country-code", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        validator: (prop: string) => boolean;
        default: undefined;
    };
    id: {
        type: StringConstructor;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    defaultPhoneNumber: {
        type: StringConstructor;
        default: undefined;
    };
    defaultCountryCode: {
        type: PropType<CountryCode>;
        default: undefined;
        validator: (code: CountryCode) => boolean;
    };
    preferredCountries: {
        type: PropType<CountryCode[]>;
        default: undefined;
    };
    ignoredCountries: {
        type: PropType<CountryCode[]>;
        default: undefined;
    };
    onlyCountries: {
        type: PropType<CountryCode[]>;
        default: undefined;
    };
    translations: {
        type: PropType<{
            countrySelector: {
                placeholder: string;
                error: string;
            };
            phoneInput: {
                placeholder: string;
                example: string;
            };
        }>;
        default: undefined;
    };
    listPosition: {
        type: PropType<Position>;
        default: string;
        validator: (value: Position) => boolean;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: string) => boolean;
    };
    size: {
        type: PropType<Size>;
        default: string;
        validator: (value: string) => boolean;
    };
    noFlags: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    noExample: {
        type: BooleanConstructor;
        default: boolean;
    };
    noSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    noUseBrowserLocale: {
        type: BooleanConstructor;
        default: boolean;
    };
    fetchCountry: {
        type: BooleanConstructor;
        default: boolean;
    };
    noCountrySelector: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCodeOnList: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    customCountriesList: {
        type: PropType<Record<CountryCode, string>>;
        default: undefined;
    };
}>> & {
    onUpdate?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    "onCountry-code"?: ((...args: any[]) => any) | undefined;
}, {
    id: string;
    modelValue: string;
    placeholder: string;
    defaultPhoneNumber: string;
    defaultCountryCode: CountryCode;
    preferredCountries: CountryCode[];
    ignoredCountries: CountryCode[];
    onlyCountries: CountryCode[];
    translations: {
        countrySelector: {
            placeholder: string;
            error: string;
        };
        phoneInput: {
            placeholder: string;
            example: string;
        };
    };
    listPosition: Position;
    color: Color;
    size: Size;
    noFlags: boolean;
    disabled: boolean;
    noExample: boolean;
    noSearch: boolean;
    noUseBrowserLocale: boolean;
    fetchCountry: boolean;
    noCountrySelector: boolean;
    showCodeOnList: boolean;
    error: boolean;
    customCountriesList: Record<CountryCode, string>;
}>;
export default _default;
