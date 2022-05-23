import type { PropType } from 'vue';
import type { Color } from './types';
export interface ButtonsRadioOption {
    label: string;
    value: string | number;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    options: {
        type: PropType<ButtonsRadioOption[]>;
        required: true;
    };
    name: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<Color>;
        default: string;
    };
    noElevation: {
        type: BooleanConstructor;
        default: boolean;
    };
    orientation: {
        type: PropType<"row" | "col">;
        default: string;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:model-value" | "change")[], "update:model-value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    options: {
        type: PropType<ButtonsRadioOption[]>;
        required: true;
    };
    name: {
        type: PropType<string>;
        default: string;
    };
    color: {
        type: PropType<Color>;
        default: string;
    };
    noElevation: {
        type: BooleanConstructor;
        default: boolean;
    };
    orientation: {
        type: PropType<"row" | "col">;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    modelValue: string | number;
    color: Color;
    noElevation: boolean;
    orientation: "row" | "col";
}>;
export default _default;
