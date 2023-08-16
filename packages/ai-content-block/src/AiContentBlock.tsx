/* (c) Copyright Frontify Ltd., all rights reserved. */

import { BlockProps } from '@frontify/guideline-blocks-settings';
import { useBlockSettings, useEditorState } from '@frontify/app-bridge';
import { ReactElement } from 'react';
import { Settings } from './types';
import {
    AiCopywriterPlugin,
    BoldPlugin,
    Heading1Plugin,
    Heading2Plugin,
    Heading3Plugin,
    Heading4Plugin,
    ItalicPlugin,
    OrderedListPlugin,
    ParagraphPlugin,
    PluginComposer,
    RichTextEditor,
    SoftBreakPlugin,
    TextStylePlugin,
    UnorderedListPlugin,
} from '@frontify/fondue';
import { useDrunken, useProperEnglish, useShortener, useSummarizer } from './hooks';
import { BlockStyles } from './styles';
import { useTranslator } from './hooks/useTranslator';

export const AiContentBlock = ({ appBridge }: BlockProps): ReactElement => {
    const isEditing = useEditorState(appBridge);
    const [blockSettings, setBlockSettings] = useBlockSettings<Settings>(appBridge);
    const { drunken, isDrunkenLoading } = useDrunken();
    const { summarize, isSummarizerLoading } = useSummarizer();
    const { shortener, isShortenerLoading } = useShortener();
    const { properEnglish, isProperEnglishLoading } = useProperEnglish();
    const { translate, isTranslatorLoading } = useTranslator('swissGerman');
    const { content } = blockSettings;

    const isLoading =
        isDrunkenLoading || isSummarizerLoading || isShortenerLoading || isProperEnglishLoading || isTranslatorLoading;

    const plugins = new PluginComposer();
    plugins.setPlugin([
        new TextStylePlugin({
            textStyles: [
                new Heading1Plugin({
                    styles: BlockStyles.heading1,
                }),
                new Heading2Plugin({
                    styles: BlockStyles.heading2,
                }),
                new Heading3Plugin({
                    styles: BlockStyles.heading3,
                }),
                new Heading4Plugin({
                    styles: BlockStyles.heading4,
                }),
                new ParagraphPlugin({
                    styles: BlockStyles.p,
                }),
            ],
        }),
        new SoftBreakPlugin(),
        new BoldPlugin(),
        new ItalicPlugin(),
        new OrderedListPlugin(),
        new UnorderedListPlugin(),
        new AiCopywriterPlugin({
            isLoading,
            aiCopywriters: [
                {
                    label: 'Drunken Pirate',
                    function: drunken,
                },
                {
                    label: 'Translate to Schweizerdeutsch',
                    function: translate,
                },
                {
                    label: 'Use Proper English',
                    function: properEnglish,
                },
                {
                    label: 'Summarize',
                    function: summarize,
                },
                {
                    label: 'Shorten',
                    function: shortener,
                },
            ],
        }),
    ]);

    return (
        <RichTextEditor
            value={content}
            readonly={!isEditing}
            border={false}
            plugins={plugins}
            onTextChange={(content: string) => setBlockSettings({ content })}
        />
    );
};
