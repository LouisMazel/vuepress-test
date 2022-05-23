import { type PropType } from 'vue';
import type { Color } from './types';
export type { Color } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<number | number[]>;
        required: true;
        validator: (value: string) => boolean;
    };
    labels: {
        type: ArrayConstructor;
        default: undefined;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: StringConstructor;
        default: undefined;
    };
    noDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    log: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: string) => boolean;
    };
    noCursorAnim: {
        type: BooleanConstructor;
        default: boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<number | number[]>;
        required: true;
        validator: (value: string) => boolean;
    };
    labels: {
        type: ArrayConstructor;
        default: undefined;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: StringConstructor;
        default: undefined;
    };
    noDivider: {
        type: BooleanConstructor;
        default: boolean;
    };
    log: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: string) => boolean;
    };
    noCursorAnim: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    labels: unknown[];
    min: number;
    max: number;
    size: string;
    noDivider: boolean;
    log: boolean;
    color: Color;
    noCursorAnim: boolean;
}>;
export default _default;
