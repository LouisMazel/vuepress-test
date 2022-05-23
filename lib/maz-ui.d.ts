import * as vue from 'vue';
import { Component, App, Directive, Plugin } from 'vue';

declare function injectStrict<T>(key: string, fallback?: T): T;

declare type ArgumentTypes<F extends (...args: any[]) => void> = F extends (...args: infer A) => any ? A : never;
declare type MethodTypes = {
    cancel: () => void;
    flush: () => void;
};
declare function debounce<T extends (...args: any[]) => void>(fn: T, wait?: number, callFirst?: boolean): ((...args: ArgumentTypes<T>) => void) & MethodTypes;

declare type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T;
declare function truthyFilter<T>(value: T): value is Truthy<T>;

declare function mount(component: Component, { props, children, element, app, }?: {
    props?: Record<string, unknown>;
    children?: unknown;
    app?: App;
    element?: HTMLElement;
}): {
    vNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>;
    destroy: () => void;
    el: HTMLElement | undefined;
};

declare const DEFAULT_OPTIONS: {
    darkClass: string;
    storageThemeKey: string;
    storageThemeValueDark: string;
    storageThemeValueLight: string;
};
declare const theme: vue.Ref<string | undefined>;
declare type ThemeHandlerOptions = Partial<typeof DEFAULT_OPTIONS>;
declare const useThemeHandler: (opts?: ThemeHandlerOptions) => {
    autoSetTheme: () => void;
    toggleTheme: () => void;
    hasDarkTheme: vue.ComputedRef<boolean>;
    hasLightTheme: vue.ComputedRef<boolean>;
};

declare type IdleTimeoutCallback = ({ isIdle, eventType, }: {
    isIdle: boolean;
    eventType?: string;
}) => void;
interface IdleTimeoutStrictOption {
    element: HTMLElement | Document;
    timeout: number;
    once: boolean;
    immediate: boolean;
}
declare type IdleTimeoutOptions = Partial<IdleTimeoutStrictOption>;

declare class IdleTimeout {
    private readonly defaultOptions;
    private callback;
    private options;
    private timeoutHandler?;
    private isIdle;
    private isDestoy;
    private startTime;
    private remainingTime;
    private lastClientX;
    private lastClientY;
    private eventNames;
    constructor(callback: IdleTimeoutCallback, options?: IdleTimeoutOptions);
    pause(): void;
    resume(): void;
    reset(): void;
    destroy(): void;
    private resetTimeout;
    private handleEvent;
    private handleTimeout;
    get destroyed(): boolean;
    get timeout(): number;
    set timeout(value: number);
    get idle(): boolean;
    set idle(value: boolean);
}

declare type UserVisibilyCallback = ({ isVisible, }: {
    isVisible: boolean;
}) => void;
declare type UserVisibilyStrictOptions = {
    immediate: boolean;
    timeout: number;
    once: boolean;
};
declare type UserVisibilyOptions = Partial<UserVisibilyStrictOptions>;

declare class UserVisibility {
    private element;
    private callback;
    private eventHandlerFunction;
    private event;
    private timeoutHandler?;
    private options;
    private readonly defaultOptions;
    private isVisible;
    constructor(callback: UserVisibilyCallback, options: UserVisibilyOptions);
    private emitCallback;
    private eventHandler;
    private clearTimeout;
    private initTimeout;
    private addEventListener;
    private removeEventListener;
    destroy(): void;
}

declare const sleep: (duration: number) => Promise<unknown>;

declare const directive$1: Directive;
declare const plugin$6: Plugin;

declare const directive: Directive;
declare const plugin$5: Plugin;

declare const vZoomImg: Directive;

interface vZoomImgOptions {
    disabled?: boolean;
    scale?: boolean;
    blur?: boolean;
}
interface vZoomImgBindingOptions extends vZoomImgOptions {
    src: string;
    alt?: string;
}
declare type vZoomImgBinding = string | vZoomImgBindingOptions;

declare const plugin$4: {
    install(app: any): void;
};

declare const vLazyImg: Directive;

interface ClassOptions$1 {
    baseClass: string;
    loadingClass: string;
    loadedClass: string;
    errorClass: string;
    noPhotoClass: string;
    noPhoto: boolean;
    noUseErrorPhoto: boolean;
    observerOnce: boolean;
    loadOnce: boolean;
    observerOptions: {
        root?: HTMLElement | null;
        threshold: number;
        rootMargin?: string;
    };
    errorPhoto?: string;
    onLoading?: (el: Element) => unknown;
    onLoaded?: (el: Element) => unknown;
    onError?: (el: Element) => unknown;
    onIntersecting?: (el: Element) => unknown;
}
declare type vLazyImgOptions = Partial<ClassOptions$1>;
interface vLazyImgBindingOptions extends vLazyImgOptions {
    src?: string;
}
declare type vLazyImgBinding = string | vLazyImgBindingOptions;

declare const plugin$3: {
    install(app: any, opts?: vLazyImgOptions): void;
};

declare const installDirectives: {
    install(app: any): void;
};

interface FilterCurrencyOptions extends Intl.NumberFormatOptions {
    round?: boolean;
}
declare const currency: (number: number | string, locale: string, options: FilterCurrencyOptions) => string;

declare const capitalize: (value: string) => string;

declare const date: (date: string | number | Date, locale: string, options?: Intl.DateTimeFormatOptions | undefined) => string;

declare const number: (number: number | string, locale: string, options: Intl.NumberFormatOptions) => string;

declare const filters: {
    capitalize: (value: string) => string;
    currency: (number: string | number, locale: string, options: FilterCurrencyOptions) => string;
    date: (date: string | number | Date, locale: string, options?: Intl.DateTimeFormatOptions | undefined) => string;
    number: (number: string | number, locale: string, options: Intl.NumberFormatOptions) => string;
};
declare type Filters = typeof filters;
declare const installFilters: {
    install(app: any): void;
};

declare type ToasterPositions = 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left';
interface ToasterOptions {
    position?: ToasterPositions;
    timeout?: number;
    persistent?: boolean;
}

declare class ToasterHandler {
    private readonly app;
    private readonly globalOptions;
    constructor(app: App, globalOptions: ToasterOptions);
    private show;
    private getLocalOptions;
    success(message: string, options?: ToasterOptions): void;
    error(message: string, options?: ToasterOptions): void;
    info(message: string, options?: ToasterOptions): void;
    warning(message: string, options?: ToasterOptions): void;
}

declare const plugin$2: {
    install(app: any, options?: ToasterOptions | undefined): void;
};

declare type LoaderId = unknown;

declare class WaitHandler {
    private _loaders;
    get loaders(): vue.ComputedRef<unknown[]>;
    stop(loaderId?: LoaderId): void;
    start(loaderId?: LoaderId): () => void;
    get anyLoading(): vue.ComputedRef<boolean>;
    isLoading(loaderId?: LoaderId): boolean;
}
declare const instance$1: WaitHandler;
declare const plugin$1: {
    install: (app: any) => void;
};

interface AosOptions {
    router?: Record<string, any>;
    delay?: number;
    observer?: IntersectionObserverInit;
    animation?: {
        once?: boolean;
        duration?: number;
    };
}
interface ClassOptions extends Omit<AosOptions, 'router'> {
    delay: number;
    observer: IntersectionObserverInit & {
        threshold: number | number[];
        rootMargin: string;
    };
    animation: {
        once: boolean;
        duration: number;
    };
}
declare class AosHandler {
    options: ClassOptions;
    constructor(options?: Omit<AosOptions, 'router'>);
    handleObserver: () => Promise<void>;
    handleIntersect: IntersectionObserverCallback;
}
declare let instance: AosHandler;
declare const plugin: {
    install: (_app: any, options?: AosOptions | undefined) => void;
};

export { AosHandler, AosOptions, FilterCurrencyOptions, Filters, IdleTimeout, IdleTimeoutCallback, IdleTimeoutOptions, ThemeHandlerOptions, ToasterHandler, ToasterOptions, ToasterPositions, Truthy, UserVisibility, UserVisibilyCallback, UserVisibilyOptions, WaitHandler, instance as aosInstance, capitalize, currency, date, debounce, injectStrict, plugin as installAos, installDirectives, installFilters, plugin$2 as installToaster, plugin$1 as installWait, mount, number, sleep, theme, truthyFilter, useThemeHandler, directive$1 as vClickOutside, plugin$6 as vClickOutsideInstall, directive as vClosable, plugin$5 as vClosableInstall, vLazyImg, vLazyImgBinding, plugin$3 as vLazyImgInstall, vLazyImgOptions, vZoomImg, vZoomImgBinding, plugin$4 as vZoomImgInstall, vZoomImgOptions, instance$1 as waitInstance };
