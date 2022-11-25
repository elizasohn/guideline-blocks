/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Color, Template, useBlockSettings, useEditorState } from '@frontify/app-bridge';
import '@frontify/fondue-tokens/styles';
import { ReactElement, useCallback } from 'react';
import 'tailwindcss/tailwind.css';
import {
    BlockProps,
    PreviewType,
    Settings,
    cardPaddingValues,
    cornerRadiusValues,
    previewDisplayValues,
    previewHeightValues,
    previewImageAnchoringValues,
    textPositioningToFlexDirection,
} from './types';
import {
    Button,
    ButtonEmphasis,
    ButtonSize,
    EditorActions,
    IconPlus12,
    RichTextEditor,
    Text,
    merge,
} from '@frontify/fondue';
import { toRgbaString } from '@frontify/guideline-blocks-shared';

const TITLE_ACTIONS = [[EditorActions.TEXT_STYLES], [EditorActions.BOLD, EditorActions.ITALIC]];
const DESCRIPTION_ACTIONS = [
    [EditorActions.TEXT_STYLES],
    [EditorActions.BOLD, EditorActions.ITALIC, EditorActions.UNDERLINE, EditorActions.LINK],
    [
        EditorActions.ALIGN_LEFT,
        EditorActions.ALIGN_CENTER,
        EditorActions.ALIGN_RIGHT,
        EditorActions.ALIGN_JUSTIFY,
        EditorActions.UNORDERED_LIST,
        EditorActions.ORDERED_LIST,
    ],
];

const GAP = '32px';

export const TemplateBlock = ({ appBridge }: BlockProps): ReactElement => {
    const [blockSettings, setBlockSettings] = useBlockSettings<Settings>(appBridge);
    const isEditing = useEditorState(appBridge);
    const blockId = appBridge.getBlockId().toString();

    const {
        preview,
        isCardPaddingCustom,
        cardPaddingSimple,
        cardPaddingCustomTop,
        cardPaddingCustomLeft,
        cardPaddingCustomRight,
        cardPaddingCustomBottom,
        hasCardBackgroundColor,
        cardBackgroundColor,
        hasCardBorder,
        cardBorderColor,
        cardBorderStyle,
        cardBorderWidth,
        isCardCornerRadiusCustom,
        cardCornerRadiusSimple,
        cardCornerRadiusCustom,
        hasPreviewBackgroundColor,
        previewBackgroundColor,
        hasPreviewBorder,
        previewBorderColor,
        previewBorderStyle,
        previewBorderWidth,
        isPreviewCorderRadiusCustom,
        previewCornerRadiusSimple,
        previewCornerRadiusCustom,
        textPositioning,
        textRatio,
        textAnchoringHorizontal,
        textAnchoringVertical,
        isPreviewHeightCustom,
        previewHeightSimple,
        previewHeightCustom,
        previewDisplay,
        previewImageAnchoring,
    } = blockSettings;

    console.log(isPreviewHeightCustom, previewHeightSimple, previewHeightCustom);

    const hasPreview = useCallback(() => preview !== PreviewType.None, [preview]);
    const flexDirection = textPositioningToFlexDirection[textPositioning];
    const isRows = useCallback(
        () => hasPreview() && (flexDirection === 'row' || flexDirection === 'row-reverse'),
        [flexDirection, hasPreview]
    );

    const onChangeText = (value: string, key: string) => setBlockSettings({ ...blockSettings, [key]: value });

    const onTemplateSelected = useCallback((result: Template) => {
        console.log(result);
        //setBlockSettings({ ...blockSettings, template: result.id });
        appBridge.closeTemplateChooser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openTemplateChooser = () => appBridge.openTemplateChooser(onTemplateSelected);

    return (
        <div data-test-id="template-block">
            <div
                className="tw-border tw-border-black-20"
                style={{
                    backgroundColor: hasCardBackgroundColor ? toRgbaString(cardBackgroundColor as Color) : undefined,
                    borderRadius: isCardCornerRadiusCustom
                        ? cardCornerRadiusCustom
                        : cornerRadiusValues[cardCornerRadiusSimple],
                    border: hasCardBorder
                        ? `${cardBorderWidth} ${cardBorderStyle} ${toRgbaString(cardBorderColor as Color)}`
                        : 'none',
                    padding: isCardPaddingCustom
                        ? `${cardPaddingCustomTop} ${cardPaddingCustomRight} ${cardPaddingCustomBottom} ${cardPaddingCustomLeft}`
                        : cardPaddingValues[cardPaddingSimple],
                }}
            >
                <div
                    className="tw-flex"
                    style={{
                        flexDirection,
                        gap: GAP,
                        alignItems: isRows() ? textAnchoringHorizontal : textAnchoringVertical,
                    }}
                >
                    {hasPreview() && (
                        <div
                            style={{
                                width: isRows() ? `${100 - parseInt(textRatio)}%` : '100%',
                            }}
                        >
                            <div
                                className="tw-relative"
                                style={{
                                    backgroundColor: hasPreviewBackgroundColor
                                        ? toRgbaString(previewBackgroundColor as Color)
                                        : undefined,
                                    borderRadius: isPreviewCorderRadiusCustom
                                        ? previewCornerRadiusCustom
                                        : cornerRadiusValues[previewCornerRadiusSimple],
                                    border: hasPreviewBorder
                                        ? `${previewBorderWidth} ${previewBorderStyle} ${toRgbaString(
                                              previewBorderColor as Color
                                          )}`
                                        : 'none',
                                    height: isPreviewHeightCustom
                                        ? previewHeightCustom
                                        : previewHeightValues[previewHeightSimple],
                                }}
                            >
                                <img
                                    src=""
                                    className={merge([
                                        'tw-w-full tw-h-full',
                                        `tw-object-${previewDisplayValues[previewDisplay]}`,
                                    ])}
                                    style={{
                                        objectPosition: previewImageAnchoring
                                            ? previewImageAnchoringValues[previewImageAnchoring]
                                            : 'center',
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    <div
                        style={{
                            width: isRows() ? `${textRatio}%` : 'auto',
                        }}
                    >
                        <div className="tw-mb-2">
                            <RichTextEditor
                                id={`${blockId}-title`}
                                value={blockSettings.title}
                                placeholder="Template Name"
                                onTextChange={(value) => onChangeText(value, 'title')}
                                actions={TITLE_ACTIONS}
                                readonly={!isEditing}
                            />
                            <Text size={'small'}>0 pages</Text>
                        </div>
                        <RichTextEditor
                            id={`${blockId}-description`}
                            value={blockSettings.description}
                            placeholder="Use default Template description if available, add your own or leave it empty"
                            onTextChange={(value) => onChangeText(value, 'description')}
                            actions={DESCRIPTION_ACTIONS}
                            readonly={!isEditing}
                        />
                    </div>
                </div>
            </div>

            {isEditing && blockSettings.preview === PreviewType.None && (
                <div className="tw-mt-4 tw-flex tw-justify-end">
                    <Button
                        icon={<IconPlus12 />}
                        emphasis={ButtonEmphasis.Default}
                        size={ButtonSize.Small}
                        onClick={openTemplateChooser}
                    >
                        Add Template
                    </Button>
                </div>
            )}
        </div>
    );
};
