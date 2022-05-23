import { type PropType } from 'vue';
import type { Color, Size } from './types';
export type { Color, Size } from './types';
declare const _default: import("vue").DefineComponent<{
    variant: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
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
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    pastel: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    noUnderline: {
        type: BooleanConstructor;
        default: boolean;
    };
    noLeading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fab: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftIcon: {
        type: StringConstructor;
        default: undefined;
    };
    rightIcon: {
        type: StringConstructor;
        default: undefined;
    };
    noPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    noElevation: {
        type: BooleanConstructor;
        default: boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    variant: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
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
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    rounded: {
        type: BooleanConstructor;
        default: boolean;
    };
    outline: {
        type: BooleanConstructor;
        default: boolean;
    };
    pastel: {
        type: BooleanConstructor;
        default: boolean;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    noUnderline: {
        type: BooleanConstructor;
        default: boolean;
    };
    noLeading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    fab: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftIcon: {
        type: StringConstructor;
        default: undefined;
    };
    rightIcon: {
        type: StringConstructor;
        default: undefined;
    };
    noPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    noElevation: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    variant: string;
    size: Size;
    color: Color;
    type: string;
    rounded: boolean;
    outline: boolean;
    pastel: boolean;
    block: boolean;
    noUnderline: boolean;
    noLeading: boolean;
    loading: boolean;
    disabled: boolean;
    fab: boolean;
    leftIcon: string;
    rightIcon: string;
    noPadding: boolean;
    noElevation: boolean;
}>;
export default _default;
