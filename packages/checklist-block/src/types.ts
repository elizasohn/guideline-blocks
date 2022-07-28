/* (c) Copyright Frontify Ltd., all rights reserved. */

import { AppBridgeNative } from '@frontify/app-bridge';
import { ButtonSize, Color, ItemDragState, OrderableListItem } from '@frontify/fondue';
import { Padding, PaddingExtendedSettings, paddingStyleMap } from '@frontify/guideline-blocks-shared';
import { MouseEvent, ReactElement } from 'react';

export type ChecklistProps = {
    appBridge: AppBridgeNative;
};

export type ChecklistItemProps = {
    item?: ChecklistContent;
    toggleCompleted?: (value: boolean) => void;
    isDragFocusVisible?: boolean;
    dragState?: ItemDragState;
    onTextModified?: (text: string) => void;
    mode: ChecklistItemMode;
    isFirst?: boolean;
    isLast?: boolean;
    onMoveItem?: (id: string, num: number) => void;
    onRemoveItem?: (id: string) => void;
};

export type CheckboxProps = {
    id: string;
    disabled?: boolean;
    checked: boolean;
    onChange?: (isChecked: boolean) => void;
    ariaLabel?: string;
    showLabel: boolean;
    label: string;
    dateCompleted?: number;
};

export type CheckboxLabelProps = {
    htmlFor: string;
    disabled?: boolean;
    dateInMs?: number;
    children: string;
};

export type ChecklistButtonProps = {
    disabled?: boolean;
    onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
    icon: ReactElement;
    size?: ButtonSize;
};

export type TextEditorProps = {
    value: string;
    onTextModified?: (text: string) => void;
    placeholder?: string;
    readonly?: boolean;
    resetOnSave: boolean;
};

export type ImperativeFocusHandle = {
    focus: () => void;
};

export type ProgressBarProps = {
    trackColor: string;
    fillColor: string;
    percentage: number;
};

export type ProgressHeaderProps = {
    value: string;
};

export type ChecklistContent = {
    text: string;
    id: string;
    updatedAt: number;
    completed: boolean;
};

export type UpdateableItem<T = Record<string, unknown>> = T & {
    id: string;
};

export enum ChecklistItemMode {
    Edit = 'Edit',
    View = 'View',
    Create = 'Create',
}

export enum ChecklistDecoration {
    Checkbox = 'Checkbox',
    Strikethrough = 'Strikethrough',
    Highlight = 'Highlight',
}
export enum StrikethroughType {
    Solid = 'Solid',
    Dashed = 'Dashed',
    Double = 'Double',
    Dotted = 'Dotted',
    Wavy = 'Wavy',
}

export const StrikethroughStyleType: Record<StrikethroughType, string> = {
    [StrikethroughType.Solid]: 'solid',
    [StrikethroughType.Dashed]: 'dashed',
    [StrikethroughType.Double]: 'double',
    [StrikethroughType.Dotted]: 'dotted',
    [StrikethroughType.Wavy]: 'wavy',
};

export enum ProgressBarType {
    Percentage = 'Percentage',
    Bar = 'Bar',
    Fraction = 'Fraction',
}

export type StrikethroughStyle = {
    color?: string;
    width?: string;
    style?: string;
};

export type ChecklistItemStyle = {
    checkbox: string;
    color: string;
};

export type ToggleableStyle = {
    checked: string;
    unchecked: string;
};

export type DecorationStyle = {
    [key: string]: string;
};

export type Settings = PaddingExtendedSettings & {
    content: OrderableListItem<ChecklistContent>[];
    incompleteTextColor: Color;
    incompleteCheckboxColor: Color;
    completeTextColor: Color;
    completeCheckboxColor: Color;
    completedDecoration: ChecklistDecoration;
    highlightColor: Color;
    dateVisible: boolean;
    progressBarVisible: boolean;
    progressBarType: string;
    progressBarFillColor: Color;
    progressBarTrackColor: Color;
    strikethroughStyle: StrikethroughType;
    strikethroughWidth: string;
    strikethroughColor: Color;
};

export const DefaultValues: Settings = {
    content: [],
    hasExtendedCustomPadding: false,
    extendedPaddingChoice: Padding.Small,
    extendedPaddingTop: paddingStyleMap[Padding.Small],
    extendedPaddingRight: paddingStyleMap[Padding.Small],
    extendedPaddingBottom: paddingStyleMap[Padding.Small],
    extendedPaddingLeft: paddingStyleMap[Padding.Small],
    incompleteTextColor: { r: 45, g: 50, b: 50, a: 1 },
    incompleteCheckboxColor: { r: 108, g: 112, b: 112, a: 1 },
    completeTextColor: { r: 255, g: 55, b: 90, a: 1 },
    completeCheckboxColor: { r: 255, g: 55, b: 90, a: 1 },
    completedDecoration: ChecklistDecoration.Strikethrough,
    highlightColor: { r: 190, g: 225, b: 212, a: 1 },
    dateVisible: true,
    progressBarVisible: true,
    progressBarType: ProgressBarType.Bar,
    progressBarFillColor: { r: 0, g: 200, b: 165, a: 1 },
    progressBarTrackColor: { r: 222, g: 240, b: 233, a: 1 },
    strikethroughStyle: StrikethroughType.Solid,
    strikethroughWidth: '1px',
    strikethroughColor: { r: 255, g: 55, b: 90, a: 1 },
};
