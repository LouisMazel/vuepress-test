import { type PropType } from 'vue';
import type { Color } from '../types';
import type { PickerShortcut, PickerValue } from './types';
import type { DateTimeFormatOptions } from './utils';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: PropType<Color>;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    noHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        required: true;
    };
    double: {
        type: BooleanConstructor;
        required: true;
    };
    hasDate: {
        type: BooleanConstructor;
        required: true;
    };
    minDate: {
        type: StringConstructor;
        default: undefined;
    };
    maxDate: {
        type: StringConstructor;
        default: undefined;
    };
    inline: {
        type: BooleanConstructor;
        required: true;
    };
    noShortcuts: {
        type: BooleanConstructor;
        required: true;
    };
    shortcuts: {
        type: PropType<PickerShortcut[]>;
        required: true;
    };
    shortcut: {
        type: StringConstructor;
        default: undefined;
    };
    hasTime: {
        type: BooleanConstructor;
        required: true;
    };
    isOpen: {
        type: BooleanConstructor;
        required: true;
    };
    format: {
        type: StringConstructor;
        required: true;
    };
    isHour12: {
        type: BooleanConstructor;
        required: true;
    };
    formatterOptions: {
        type: PropType<DateTimeFormatOptions>;
        required: true;
    };
    minuteInterval: {
        type: NumberConstructor;
        required: true;
    };
    disabledWeekly: {
        type: PropType<number[]>;
        required: true;
    };
    disabledHours: {
        type: PropType<number[]>;
        required: true;
    };
    disabledDates: {
        type: PropType<string[]>;
        required: true;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "update:calendar-date" | "close")[], "update:model-value" | "update:calendar-date" | "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: PropType<Color>;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    noHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        required: true;
    };
    double: {
        type: BooleanConstructor;
        required: true;
    };
    hasDate: {
        type: BooleanConstructor;
        required: true;
    };
    minDate: {
        type: StringConstructor;
        default: undefined;
    };
    maxDate: {
        type: StringConstructor;
        default: undefined;
    };
    inline: {
        type: BooleanConstructor;
        required: true;
    };
    noShortcuts: {
        type: BooleanConstructor;
        required: true;
    };
    shortcuts: {
        type: PropType<PickerShortcut[]>;
        required: true;
    };
    shortcut: {
        type: StringConstructor;
        default: undefined;
    };
    hasTime: {
        type: BooleanConstructor;
        required: true;
    };
    isOpen: {
        type: BooleanConstructor;
        required: true;
    };
    format: {
        type: StringConstructor;
        required: true;
    };
    isHour12: {
        type: BooleanConstructor;
        required: true;
    };
    formatterOptions: {
        type: PropType<DateTimeFormatOptions>;
        required: true;
    };
    minuteInterval: {
        type: NumberConstructor;
        required: true;
    };
    disabledWeekly: {
        type: PropType<number[]>;
        required: true;
    };
    disabledHours: {
        type: PropType<number[]>;
        required: true;
    };
    disabledDates: {
        type: PropType<string[]>;
        required: true;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    "onUpdate:calendar-date"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: PickerValue;
    noHeader: boolean;
    minDate: string;
    maxDate: string;
    shortcut: string;
}>;
export default _default;
