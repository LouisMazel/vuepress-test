import { type PropType } from 'vue';
import type { Color, Size } from './types';
export type { Color, Size } from './types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string | number | boolean | null | undefined>;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: string) => boolean;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    hint: {
        type: StringConstructor;
        default: undefined;
    };
    inputClasses: {
        type: StringConstructor;
        default: undefined;
    };
    noBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    noRadius: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<Size>;
        default: string;
        validator: (value: string) => boolean;
    };
    debounce: {
        type: BooleanConstructor;
        default: boolean;
    };
    debounceDelay: {
        type: NumberConstructor;
        default: number;
    };
    validButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    validButtonLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
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
}, {
    inputValue: import("vue").WritableComputedRef<string | number | boolean | null | undefined>;
    shouldUp: import("vue").ComputedRef<boolean>;
    hasLabel: import("vue").ComputedRef<boolean>;
    computedPlaceholder: import("vue").ComputedRef<string | undefined>;
    isPasswordType: import("vue").ComputedRef<boolean>;
    inputType: import("vue").ComputedRef<string>;
    input: import("vue").Ref<HTMLElement | undefined>;
    isFocused: import("vue").Ref<boolean>;
    hasPasswordVisible: import("vue").Ref<boolean>;
    borderStyle: import("vue").ComputedRef<"maz-border-danger" | "maz-border-success" | "maz-border-warning" | "maz-border-black" | "maz-border-info" | "maz-border-primary" | "maz-border-secondary" | "maz-border-white" | "--default-border" | undefined>;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    change: (event: Event) => void;
    emitValue: (value: unknown) => void;
    hasRightPart: () => boolean;
    hasLeftPart: () => boolean;
    EyeOffIcon: any;
    EyeIcon: any;
    CheckIcon: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "blur" | "update:model-value" | "click" | "change" | "update")[], "focus" | "blur" | "update:model-value" | "click" | "change" | "update", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string | number | boolean | null | undefined>;
        default: undefined;
    };
    placeholder: {
        type: StringConstructor;
        default: undefined;
    };
    color: {
        type: PropType<Color>;
        default: string;
        validator: (value: string) => boolean;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    success: {
        type: BooleanConstructor;
        default: boolean;
    };
    warning: {
        type: BooleanConstructor;
        default: boolean;
    };
    hint: {
        type: StringConstructor;
        default: undefined;
    };
    inputClasses: {
        type: StringConstructor;
        default: undefined;
    };
    noBorder: {
        type: BooleanConstructor;
        default: boolean;
    };
    noRadius: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<Size>;
        default: string;
        validator: (value: string) => boolean;
    };
    debounce: {
        type: BooleanConstructor;
        default: boolean;
    };
    debounceDelay: {
        type: NumberConstructor;
        default: number;
    };
    validButton: {
        type: BooleanConstructor;
        default: boolean;
    };
    validButtonLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
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
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:model-value"?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    success: boolean;
    warning: boolean;
    modelValue: string | number | boolean | null | undefined;
    placeholder: string;
    color: Color;
    label: string;
    name: string;
    required: boolean;
    disabled: boolean;
    readonly: boolean;
    id: string;
    error: boolean;
    hint: string;
    inputClasses: string;
    noBorder: boolean;
    noRadius: boolean;
    size: Size;
    debounce: boolean;
    debounceDelay: number;
    validButton: boolean;
    validButtonLoading: boolean;
    autoFocus: boolean;
    leftIcon: string;
    rightIcon: string;
}>;
export default _default;
