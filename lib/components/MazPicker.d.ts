import { type PropType, type StyleValue } from 'vue';
import type { Color, Position } from './types';
import type { PickerValue, PickerShortcut } from './MazPicker/types';
export type { PickerValue } from './MazPicker/types';
export type { Color, Position } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    inputDateStyle: {
        type: PropType<Intl.DateTimeFormatOptions>;
        default: () => {
            dateStyle: string;
        };
    };
    locale: {
        type: StringConstructor;
        default: undefined;
    };
    style: {
        type: PropType<StyleValue>;
        default: undefined;
    };
    noHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    customElementSelector: {
        type: StringConstructor;
        default: undefined;
    };
    double: {
        type: BooleanConstructor;
        default: boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: Color) => boolean;
    };
    pickerPosition: {
        type: PropType<Position>;
        default: undefined;
        validator: (value: Position) => boolean;
    };
    time: {
        type: BooleanConstructor;
        default: boolean;
    };
    onlyTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    minuteInterval: {
        type: NumberConstructor;
        default: number;
    };
    noUseBrowserLocale: {
        type: BooleanConstructor;
        default: boolean;
    };
    noFetchLocal: {
        type: BooleanConstructor;
        default: boolean;
    };
    noShortcuts: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortcuts: {
        type: PropType<PickerShortcut[]>;
        default: () => {
            label: string;
            identifier: string;
            value: {
                start: string;
                end: string;
            };
        }[];
    };
    shortcut: {
        type: StringConstructor;
        default: undefined;
    };
    minDate: {
        type: StringConstructor;
        default: undefined;
    };
    maxDate: {
        type: StringConstructor;
        default: undefined;
    };
    disabledWeekly: {
        type: PropType<number[]>;
        default: () => never[];
        validator: (value: number) => boolean;
    };
    disabledDates: {
        type: PropType<string[]>;
        default: () => never[];
    };
    disabledHours: {
        type: PropType<number[]>;
        default: () => never[];
        validator: (value: number) => boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "close")[], "update:model-value" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    inputDateStyle: {
        type: PropType<Intl.DateTimeFormatOptions>;
        default: () => {
            dateStyle: string;
        };
    };
    locale: {
        type: StringConstructor;
        default: undefined;
    };
    style: {
        type: PropType<StyleValue>;
        default: undefined;
    };
    noHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    autoClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    customElementSelector: {
        type: StringConstructor;
        default: undefined;
    };
    double: {
        type: BooleanConstructor;
        default: boolean;
    };
    inline: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: Color) => boolean;
    };
    pickerPosition: {
        type: PropType<Position>;
        default: undefined;
        validator: (value: Position) => boolean;
    };
    time: {
        type: BooleanConstructor;
        default: boolean;
    };
    onlyTime: {
        type: BooleanConstructor;
        default: boolean;
    };
    minuteInterval: {
        type: NumberConstructor;
        default: number;
    };
    noUseBrowserLocale: {
        type: BooleanConstructor;
        default: boolean;
    };
    noFetchLocal: {
        type: BooleanConstructor;
        default: boolean;
    };
    noShortcuts: {
        type: BooleanConstructor;
        default: boolean;
    };
    shortcuts: {
        type: PropType<PickerShortcut[]>;
        default: () => {
            label: string;
            identifier: string;
            value: {
                start: string;
                end: string;
            };
        }[];
    };
    shortcut: {
        type: StringConstructor;
        default: undefined;
    };
    minDate: {
        type: StringConstructor;
        default: undefined;
    };
    maxDate: {
        type: StringConstructor;
        default: undefined;
    };
    disabledWeekly: {
        type: PropType<number[]>;
        default: () => never[];
        validator: (value: number) => boolean;
    };
    disabledDates: {
        type: PropType<string[]>;
        default: () => never[];
    };
    disabledHours: {
        type: PropType<number[]>;
        default: () => never[];
        validator: (value: number) => boolean;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: PickerValue;
    format: string;
    open: boolean;
    label: string;
    placeholder: string;
    inputDateStyle: Intl.DateTimeFormatOptions;
    locale: string;
    style: StyleValue;
    noHeader: boolean;
    firstDayOfWeek: number;
    autoClose: boolean;
    customElementSelector: string;
    double: boolean;
    inline: boolean;
    color: Color;
    pickerPosition: Position;
    time: boolean;
    onlyTime: boolean;
    minuteInterval: number;
    noUseBrowserLocale: boolean;
    noFetchLocal: boolean;
    noShortcuts: boolean;
    shortcuts: PickerShortcut[];
    shortcut: string;
    minDate: string;
    maxDate: string;
    disabledWeekly: number[];
    disabledDates: string[];
    disabledHours: number[];
}>;
export default _default;
