import { type PropType } from 'vue';
import type { Color, Size } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string[] | number[]>;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<Size>;
        default: string;
        validator: (value: string) => boolean;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: Color) => boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string[] | number[]>;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<Size>;
        default: string;
        validator: (value: string) => boolean;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: Color) => boolean;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    success: boolean;
    warning: boolean;
    modelValue: string[] | number[];
    placeholder: string;
    label: string;
    disabled: boolean;
    error: boolean;
    size: Size;
    color: Color;
}>;
export default _default;
