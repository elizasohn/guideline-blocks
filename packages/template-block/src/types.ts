/* (c) Copyright Frontify Ltd., all rights reserved. */

import { AppBridgeBlock, Asset } from '@frontify/app-bridge';
import { Color } from '@frontify/fondue';

export type BlockProps = {
    appBridge: AppBridgeBlock;
};

export type Settings = {
    title: string;
    description: string;

    // basics

    template?: Template;
    preview: PreviewType;
    previewCustom?: Asset;

    // layout

    isCardPaddingCustom: boolean;
    cardPaddingCustomTop?: string;
    cardPaddingCustomLeft?: string;
    cardPaddingCustomRight?: string;
    cardPaddingCustomBottom?: string;
    cardPaddingSimple: CardPaddingType;

    textPositioning: TextPositioningType;

    textRatio: TextRatioType;

    textAnchoring: AnchoringType;

    isPreviewHeightCustom: boolean;
    previewHeightCustom?: string;
    previewHeightSimple: PreviewHeightType;

    previewDisplay: PreviewDisplayType;

    previewImageAnchoring?: AnchoringType;

    // style

    hasCardBackgroundColor: boolean;
    cardBackgroundColor?: Color;

    hasCardBorder: boolean;
    cardBorderStyle?: BorderStyleType;
    cardBorderWidth?: string;
    cardBorderColor?: Color;

    isCardCornerRadiusCustom: boolean;
    cardCornerRadiusCustom?: string;
    cardCornerRadiusSimple: CornerRadiusType;

    hasPreviewBackgroundColor: boolean;
    previewBackgroundColor?: Color;

    hasPreviewBorder: boolean;
    previewBorderStyle?: BorderStyleType;
    previewBorderWidth?: string;
    previewBorderColor?: Color;

    isPreviewCorderRadiusCustom: boolean;
    previewCornerRadiusCustom?: string;
    previewCornerRadiusSimple: CornerRadiusType;
};

export type Template = {
    id: number;
    name: string;
    description: string;
    pages: number;
    previewUrl: string[];
};

export enum PreviewType {
    None = 'none',
    Template = 'template',
    Custom = 'custom',
}

export enum CardPaddingType {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export const cardPaddingValues: Record<CardPaddingType, string> = {
    [CardPaddingType.Small]: '36px',
    [CardPaddingType.Medium]: '60px',
    [CardPaddingType.Large]: '96px',
};

export enum TextPositioningType {
    Bottom = 'bottom',
    Top = 'top',
    Right = 'right',
    Left = 'left',
}

export enum AnchoringType {
    Start = 'start',
    Center = 'center',
    End = 'end',
}

export enum TextRatioType {
    OneQuarter = '25%',
    OneThird = '33.3333%',
    OneHalf = '50%',
    TwoThirds = '66.6666%',
    ThreeQuarters = '75%',
}

export enum PreviewHeightType {
    Auto = 'auto',
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export const previewHeightValues: Record<PreviewHeightType, string> = {
    [PreviewHeightType.Auto]: 'auto',
    [PreviewHeightType.Small]: '240px',
    [PreviewHeightType.Medium]: '480px',
    [PreviewHeightType.Large]: '640px',
};

export enum PreviewDisplayType {
    Fit = 'fit',
    Fill = 'fill',
}

export enum BorderStyleType {
    Solid = 'solid',
    Dotted = 'dotted',
    Dashed = 'dashed',
}

export enum CornerRadiusType {
    None = 'none',
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

export const cornerRadiusValues: Record<CornerRadiusType, string> = {
    [CornerRadiusType.None]: '0px',
    [CornerRadiusType.Small]: '2px',
    [CornerRadiusType.Medium]: '4px',
    [CornerRadiusType.Large]: '12px',
};
