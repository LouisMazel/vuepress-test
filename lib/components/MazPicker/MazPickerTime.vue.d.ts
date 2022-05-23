import { type PropType } from 'vue';
import { type DateTimeFormatOptions } from './utils';
import type { PickerValue } from './types';
import type { Color } from '../types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    formatterOptions: {
        type: PropType<DateTimeFormatOptions>;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: PropType<Color>;
        required: true;
    };
    isOpen: {
        type: BooleanConstructor;
        required: true;
    };
    hasDate: {
        type: BooleanConstructor;
        required: true;
    };
    minuteInterval: {
        type: NumberConstructor;
        required: true;
    };
    disabledHours: {
        type: PropType<number[]>;
        default: undefined;
    };
    format: {
        type: StringConstructor;
        required: true;
    };
    isHour12: {
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
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    formatterOptions: {
        type: PropType<DateTimeFormatOptions>;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: PropType<Color>;
        required: true;
    };
    isOpen: {
        type: BooleanConstructor;
        required: true;
    };
    hasDate: {
        type: BooleanConstructor;
        required: true;
    };
    minuteInterval: {
        type: NumberConstructor;
        required: true;
    };
    disabledHours: {
        type: PropType<number[]>;
        default: undefined;
    };
    format: {
        type: StringConstructor;
        required: true;
    };
    isHour12: {
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
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: PickerValue;
    disabledHours: number[];
    minDate: string;
    maxDate: string;
}>;
export default _default;
