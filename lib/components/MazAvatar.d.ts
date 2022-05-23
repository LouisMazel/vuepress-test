import type { PropType } from 'vue';
import type { Color } from './types';
export type { Color } from './types';
declare const _default: import("vue").DefineComponent<{
    src: {
        type: PropType<string | null | undefined>;
        default: undefined;
    };
    caption: {
        type: PropType<string | null | undefined>;
        default: undefined;
    };
    href: {
        type: StringConstructor;
        default: undefined;
    };
    to: {
        type: ObjectConstructor;
        default: undefined;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: undefined;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    noElevation: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCaption: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageHeightFull: {
        type: BooleanConstructor;
        default: boolean;
    };
    noLoader: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonColor: {
        type: PropType<Color>;
        default: string;
        validator: (value: Color) => boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: PropType<string | null | undefined>;
        default: undefined;
    };
    caption: {
        type: PropType<string | null | undefined>;
        default: undefined;
    };
    href: {
        type: StringConstructor;
        default: undefined;
    };
    to: {
        type: ObjectConstructor;
        default: undefined;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: undefined;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    noElevation: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCaption: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageHeightFull: {
        type: BooleanConstructor;
        default: boolean;
    };
    noLoader: {
        type: BooleanConstructor;
        default: boolean;
    };
    buttonColor: {
        type: PropType<Color>;
        default: string;
        validator: (value: Color) => boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    src: string | null | undefined;
    caption: string | null | undefined;
    href: string;
    to: Record<string, any>;
    alt: string;
    target: string;
    size: string;
    bordered: boolean;
    clickable: boolean;
    square: boolean;
    noElevation: boolean;
    showCaption: boolean;
    imageHeightFull: boolean;
    noLoader: boolean;
    buttonColor: Color;
}>;
export default _default;
