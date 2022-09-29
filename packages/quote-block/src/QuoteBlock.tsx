/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useBlockSettings, useEditorState } from '@frontify/app-bridge';
import { EditorActions, RichTextEditor } from '@frontify/fondue';
import '@frontify/fondue-tokens/styles';
import { toRgbaString, useGuidelineDesignTokens } from '@frontify/guideline-blocks-shared';
import { FC } from 'react';
import 'tailwindcss/tailwind.css';
import { DEFAULT_COLOR_VALUE } from './settings';
import { LineType, Props, QuoteSize, QuoteStyle, QuoteType, Settings, quoteSizeMap } from './types';
import { quoteIconMap } from './utilities';

const ACTIONS = [
    [EditorActions.TEXT_STYLES],
    [EditorActions.BOLD, EditorActions.ITALIC, EditorActions.UNDERLINE, EditorActions.STRIKETHROUGH],
    [EditorActions.ALIGN_LEFT, EditorActions.ALIGN_CENTER, EditorActions.ALIGN_RIGHT, EditorActions.ALIGN_JUSTIFY],
];

const DEFAULT_CONTENT_VALUE = '[{"type":"quote","children":[{"text":""}]}]';

export const QuoteBlock: FC<Props> = ({ appBridge }) => {
    const [blockSettings, setBlockSettings] = useBlockSettings<Settings>(appBridge);
    const isEditing = useEditorState(appBridge);
    const { designTokens } = useGuidelineDesignTokens();

    const isQuotationMarkType = blockSettings.type !== QuoteType.Indentation;
    const size = blockSettings.isCustomSize
        ? blockSettings.sizeValue ?? ''
        : quoteSizeMap[blockSettings.sizeChoice ?? QuoteSize.SmallSize];
    const quotesRgba = toRgbaString(blockSettings.quotesColor ?? DEFAULT_COLOR_VALUE);
    const borderRgba = toRgbaString(blockSettings.accentLinecolor ?? DEFAULT_COLOR_VALUE);
    const borderStyles = blockSettings.showAccentLine
        ? {
              borderLeftStyle: blockSettings.lineType ?? LineType.Solid,
              borderLeftWidth: blockSettings.lineWidthValue ?? '2px',
              borderLeftColor: borderRgba,
          }
        : undefined;

    const accentLineClassName = blockSettings.showAccentLine ? 'tw-pl-7' : 'tw-ml-7';
    const showAuthor = blockSettings.showAuthor && blockSettings.authorName;

    const onChangeContent = (value: string) => setBlockSettings({ ...blockSettings, content: value });

    return (
        <div data-test-id="quote-block" className={isEditing ? '' : 'tw-text-text'}>
            <div className={isQuotationMarkType ? 'tw-flex tw-justify-between tw-gap-x-7' : ''}>
                {isQuotationMarkType &&
                    quoteIconMap(size, quotesRgba)[blockSettings.quoteStyleLeft ?? QuoteStyle.DoubleUp]}
                <div data-test-id="quote-block-author" className="tw-flex-1 tw-w-full">
                    <div
                        style={isQuotationMarkType ? {} : borderStyles}
                        className={isQuotationMarkType ? '' : accentLineClassName}
                    >
                        <RichTextEditor
                            id={appBridge.getBlockId().toString()}
                            designTokens={designTokens ?? undefined}
                            placeholder="Add your quote text here"
                            value={blockSettings.content ?? DEFAULT_CONTENT_VALUE}
                            onTextChange={onChangeContent}
                            actions={ACTIONS}
                            readonly={!isEditing}
                        />
                    </div>
                    {showAuthor && <p className="tw-text-right">{`- ${blockSettings.authorName}`}</p>}
                </div>
                {isQuotationMarkType &&
                    quoteIconMap(size, quotesRgba)[blockSettings.quoteStyleRight ?? QuoteStyle.DoubleDown]}
            </div>
        </div>
    );
};
