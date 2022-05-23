import { type Prop } from 'vue';
import type { Image } from './types';
export type { Image } from './types';
declare const _default: import("vue").DefineComponent<{
    image: Prop<Image, Image>;
    noPhoto: {
        type: BooleanConstructor;
        default: boolean;
    };
    noLoader: {
        type: BooleanConstructor;
        default: boolean;
    };
    noObserverOnce: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadOnce: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageHeightFull: {
        type: BooleanConstructor;
        default: boolean;
    };
    observerOptions: Prop<{
        root?: HTMLElement | null | undefined;
        threshold: number;
        rootMargin?: string | undefined;
    } | undefined, {
        root?: HTMLElement | null | undefined;
        threshold: number;
        rootMargin?: string | undefined;
    } | undefined>;
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("intersecting" | "loading" | "loaded" | "error")[], "intersecting" | "loading" | "loaded" | "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    image: Prop<Image, Image>;
    noPhoto: {
        type: BooleanConstructor;
        default: boolean;
    };
    noLoader: {
        type: BooleanConstructor;
        default: boolean;
    };
    noObserverOnce: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadOnce: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageHeightFull: {
        type: BooleanConstructor;
        default: boolean;
    };
    observerOptions: Prop<{
        root?: HTMLElement | null | undefined;
        threshold: number;
        rootMargin?: string | undefined;
    } | undefined, {
        root?: HTMLElement | null | undefined;
        threshold: number;
        rootMargin?: string | undefined;
    } | undefined>;
}>> & {
    onLoading?: ((...args: any[]) => any) | undefined;
    onLoaded?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
    onIntersecting?: ((...args: any[]) => any) | undefined;
}, {
    noPhoto: boolean;
    loadOnce: boolean;
    noLoader: boolean;
    noObserverOnce: boolean;
    imageHeightFull: boolean;
}>;
export default _default;
