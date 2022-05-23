export declare type ModelValueSimple = string | number | null | undefined | boolean;
export declare type MazGalleryImage = {
    src: string;
    alt?: string;
} | string;
export declare type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'white' | 'black' | 'transparent';
export declare const colors: Color[];
export declare type Size = 'mini' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type Position = 'top' | 'top right' | 'top left' | 'bottom' | 'bottom right' | 'bottom left' | 'left' | 'right';
export interface Source {
    srcset?: string;
    media?: string;
}
export interface DataImage {
    sources?: Source[];
}
export declare type Image = DataImage | string;
