import { type PropType } from 'vue';
import type { MazGalleryImage } from './types';
export type { MazGalleryImage } from './types';
declare const _default: import("vue").DefineComponent<{
    images: {
        type: PropType<MazGalleryImage[]>;
        default: undefined;
    };
    orientation: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    href: {
        type: StringConstructor;
        default: undefined;
    };
    hrefTarget: {
        type: StringConstructor;
        default: string;
    };
    footerAlign: {
        type: StringConstructor;
        default: string;
    };
    galleryWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    galleryHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    zoom: {
        type: BooleanConstructor;
        default: boolean;
    };
    elevation: {
        type: BooleanConstructor;
        default: boolean;
    };
    radius: {
        type: BooleanConstructor;
        default: boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    imagesShowCount: {
        type: NumberConstructor;
        default: number;
    };
    noRemaining: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClass: {
        type: StringConstructor;
        default: undefined;
    };
    noPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    overflowHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsable: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapseOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    images: {
        type: PropType<MazGalleryImage[]>;
        default: undefined;
    };
    orientation: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    href: {
        type: StringConstructor;
        default: undefined;
    };
    hrefTarget: {
        type: StringConstructor;
        default: string;
    };
    footerAlign: {
        type: StringConstructor;
        default: string;
    };
    galleryWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    galleryHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    zoom: {
        type: BooleanConstructor;
        default: boolean;
    };
    elevation: {
        type: BooleanConstructor;
        default: boolean;
    };
    radius: {
        type: BooleanConstructor;
        default: boolean;
    };
    bordered: {
        type: BooleanConstructor;
        default: boolean;
    };
    imagesShowCount: {
        type: NumberConstructor;
        default: number;
    };
    noRemaining: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClass: {
        type: StringConstructor;
        default: undefined;
    };
    noPadding: {
        type: BooleanConstructor;
        default: boolean;
    };
    overflowHidden: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsable: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapseOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    images: MazGalleryImage[];
    orientation: string;
    href: string;
    hrefTarget: string;
    footerAlign: string;
    galleryWidth: string | number;
    galleryHeight: string | number;
    zoom: boolean;
    elevation: boolean;
    radius: boolean;
    bordered: boolean;
    imagesShowCount: number;
    noRemaining: boolean;
    scale: boolean;
    wrapperClass: string;
    noPadding: boolean;
    overflowHidden: boolean;
    collapsable: boolean;
    collapseOpen: boolean;
}>;
export default _default;
