import type { PropType } from 'vue';
import type { Color } from './types';
export type { Color } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: Color) => boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: Color) => boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    id: string;
    name: string;
    color: Color;
}>;
export default _default;
