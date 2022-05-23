import { type PropType } from 'vue';
import type { Color } from '@components/types';
import type { PickerValue } from '../types';
import dayjs from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    hasTime: {
        type: BooleanConstructor;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        required: true;
    };
    color: {
        type: PropType<Color>;
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
    disabledWeekly: {
        type: PropType<number[]>;
        required: true;
    };
    disabledDates: {
        type: PropType<string[]>;
        required: true;
    };
    hoverredDay: {
        type: PropType<dayjs.Dayjs>;
        default: undefined;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "update:hoverred-day")[], "update:model-value" | "update:hoverred-day", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<PickerValue>;
        default: undefined;
    };
    calendarDate: {
        type: StringConstructor;
        required: true;
    };
    hasTime: {
        type: BooleanConstructor;
        required: true;
    };
    locale: {
        type: StringConstructor;
        required: true;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        required: true;
    };
    color: {
        type: PropType<Color>;
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
    disabledWeekly: {
        type: PropType<number[]>;
        required: true;
    };
    disabledDates: {
        type: PropType<string[]>;
        required: true;
    };
    hoverredDay: {
        type: PropType<dayjs.Dayjs>;
        default: undefined;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    "onUpdate:hoverred-day"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: PickerValue;
    minDate: string;
    maxDate: string;
    hoverredDay: dayjs.Dayjs;
}>;
export default _default;
