import { type PropType } from 'vue';
export interface MazTabsItem {
    label: string;
    disabled?: boolean;
}
declare const _default: import("vue").DefineComponent<{
    items: {
        type: PropType<MazTabsItem[]>;
        required: true;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    alignLeft: {
        type: BooleanConstructor;
        default: boolean;
    };
    useAnchor: {
        type: BooleanConstructor;
        default: boolean;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:model-value"[], "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: PropType<MazTabsItem[]>;
        required: true;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    alignLeft: {
        type: BooleanConstructor;
        default: boolean;
    };
    useAnchor: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number;
    alignLeft: boolean;
    useAnchor: boolean;
}>;
export default _default;
