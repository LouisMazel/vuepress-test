import { type PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    selector: {
        type: StringConstructor;
        default: string;
    };
    beforeClose: {
        type: PropType<() => boolean>;
        default: undefined;
    };
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    backdropClass: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
        default: () => never[];
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    escKey: {
        type: BooleanConstructor;
        default: boolean;
    };
    zOffset: {
        type: NumberConstructor;
        default: number;
    };
    defaultZIndex: {
        type: NumberConstructor;
        default: number;
    };
    modalClass: {
        type: StringConstructor;
        default: undefined;
    };
}, {
    present: import("vue").Ref<boolean>;
    openModal: () => boolean;
    close: () => boolean;
    onBackdropClicked: () => void;
    onBackdropAnimationEnter: () => void;
    onBackdropAnimationLeave: () => void;
    toggleModal: (show: boolean, ...rest: unknown[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "close" | "update:model-value")[], "open" | "close" | "update:model-value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    selector: {
        type: StringConstructor;
        default: string;
    };
    beforeClose: {
        type: PropType<() => boolean>;
        default: undefined;
    };
    persistent: {
        type: BooleanConstructor;
        default: boolean;
    };
    backdropClass: {
        type: (StringConstructor | ArrayConstructor | ObjectConstructor)[];
        default: () => never[];
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    escKey: {
        type: BooleanConstructor;
        default: boolean;
    };
    zOffset: {
        type: NumberConstructor;
        default: number;
    };
    defaultZIndex: {
        type: NumberConstructor;
        default: number;
    };
    modalClass: {
        type: StringConstructor;
        default: undefined;
    };
}>> & {
    onOpen?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    selector: string;
    beforeClose: () => boolean;
    persistent: boolean;
    backdropClass: string | unknown[] | Record<string, any>;
    transition: string;
    escKey: boolean;
    zOffset: number;
    defaultZIndex: number;
    modalClass: string;
}>;
export default _default;
