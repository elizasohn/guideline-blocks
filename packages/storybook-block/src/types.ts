/* (c) Copyright Frontify Ltd., all rights reserved. */

import { AppBridgeNative } from '@frontify/app-bridge';
import { Color } from '@frontify/arcade';

export type BlockProps = {
    appBridge: AppBridgeNative;
};

export type BorderSelectionType = [StorybookBorderStyle, string, Color];

export type Settings = {
    style?: StorybookStyle;
    url?: string;
    isCustomHeight?: boolean;
    heightChoice?: StorybookHeight;
    heightValue?: string;
    positioning?: StorybookPosition;
    hasBorder?: boolean;
    borderSelection?: BorderSelectionType;
    hasCustomBorderRadius?: boolean;
    borderRadiusChoice?: StorybookBorderRadius;
    borderRadiusValue?: string;
};

export enum StorybookStyle {
    Default = 'Default',
    WithoutAddons = 'WithoutAddons',
}

export enum StorybookBorderRadius {
    None = 'None',
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
}

export enum StorybookBorderStyle {
    Solid = 'Solid',
    Dotted = 'Dotted',
    Dashed = 'Dashed',
}

export enum StorybookHeight {
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
}

export enum StorybookPosition {
    Vertical = 'Vertical',
    Horizontal = 'Horizontal',
}

export const borderStyles: Record<StorybookBorderStyle, string> = {
    [StorybookBorderStyle.Solid]: 'solid',
    [StorybookBorderStyle.Dotted]: 'dotted',
    [StorybookBorderStyle.Dashed]: 'dashed',
};

export const borderRadiusClasses: Record<StorybookBorderRadius, string> = {
    [StorybookBorderRadius.None]: 'tw-rounded-none',
    [StorybookBorderRadius.Small]: 'tw-rounded',
    [StorybookBorderRadius.Medium]: 'tw-rounded-md',
    [StorybookBorderRadius.Large]: 'tw-rounded-lg',
};

export const heights: Record<StorybookHeight, string> = {
    [StorybookHeight.Small]: '400px',
    [StorybookHeight.Medium]: '600px',
    [StorybookHeight.Large]: '800px',
};
