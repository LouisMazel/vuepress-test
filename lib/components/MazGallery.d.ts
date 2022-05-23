import { type PropType } from 'vue';
import type { MazGalleryImage } from './types';
export type { MazGalleryImage } from './types';
declare const _default: import("vue").DefineComponent<{
    images: {
        type: PropType<MazGalleryImage[]>;
        default: () => never[];
    };
    imagesShownCount: {
        type: NumberConstructor;
        default: number;
    };
    noRemaining: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    noHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    noWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    noRadius: {
        type: BooleanConstructor;
        default: boolean;
    };
    noZoom: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasEmptyLayer: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    blur: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    sizeStyle: import("vue").ComputedRef<{
        height?: string | undefined;
        minHeight?: string | undefined;
        flex?: string | undefined;
        width?: string | undefined;
    }>;
    imagesCount: import("vue").ComputedRef<number>;
    shouldHaveRemainingLayer: (i: number) => boolean | 0;
    imagesShown: import("vue").ComputedRef<{
        src: string;
        alt?: string | undefined;
    }[]>;
    numberImagesRemaining: import("vue").ComputedRef<number>;
    imagesHidden: import("vue").ComputedRef<{
        src: string;
        alt?: string | undefined;
    }[]>;
    NoPhotographyIcon: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    images: {
        type: PropType<MazGalleryImage[]>;
        default: () => never[];
    };
    imagesShownCount: {
        type: NumberConstructor;
        default: number;
    };
    noRemaining: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    noHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    noWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    noRadius: {
        type: BooleanConstructor;
        default: boolean;
    };
    noZoom: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasEmptyLayer: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    blur: {
        type: BooleanConstructor;
        default: boolean;
    };
    scale: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    images: MazGalleryImage[];
    imagesShownCount: number;
    noRemaining: boolean;
    height: string | number;
    noHeight: boolean;
    width: string | number;
    noWidth: boolean;
    noRadius: boolean;
    noZoom: boolean;
    hasEmptyLayer: boolean;
    lazy: boolean;
    blur: boolean;
    scale: boolean;
}>;
export default _default;
