import { type PropType } from 'vue';
import type { Color, ModelValueSimple, Position, Size } from './types';
export declare type MazSelectOptions = Record<string, ModelValueSimple>;
export type { Color, Size, ModelValueSimple, Position } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<ModelValueSimple>;
        default: undefined;
    };
    options: {
        type: PropType<MazSelectOptions[]>;
        required: true;
    };
    optionValueKey: {
        type: StringConstructor;
        default: string;
    };
    optionLabelKey: {
        type: StringConstructor;
        default: string;
    };
    optionInputValueKey: {
        type: StringConstructor;
        default: string;
    };
    listPosition: {
        type: PropType<Position>;
        default: string;
        validator: (value: Position) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: string) => boolean;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxListHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxListWidth: {
        type: NumberConstructor;
        default: undefined;
    };
    size: {
        type: PropType<Size>;
        default: string;
        validator: (value: string) => boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open" | "update:model-value" | "blur")[], "close" | "open" | "update:model-value" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<ModelValueSimple>;
        default: undefined;
    };
    options: {
        type: PropType<MazSelectOptions[]>;
        required: true;
    };
    optionValueKey: {
        type: StringConstructor;
        default: string;
    };
    optionLabelKey: {
        type: StringConstructor;
        default: string;
    };
    optionInputValueKey: {
        type: StringConstructor;
        default: string;
    };
    listPosition: {
        type: PropType<Position>;
        default: string;
        validator: (value: Position) => boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: string) => boolean;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxListHeight: {
        type: NumberConstructor;
        default: number;
    };
    maxListWidth: {
        type: NumberConstructor;
        default: undefined;
    };
    size: {
        type: PropType<Size>;
        default: string;
        validator: (value: string) => boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
}, {
    open: boolean;
    modelValue: ModelValueSimple;
    optionValueKey: string;
    optionLabelKey: string;
    optionInputValueKey: string;
    listPosition: Position;
    disabled: boolean;
    color: Color;
    itemHeight: number;
    maxListHeight: number;
    maxListWidth: number;
    size: Size;
}>;
export default _default;
