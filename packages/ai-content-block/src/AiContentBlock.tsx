/* (c) Copyright Frontify Ltd., all rights reserved. */

import { BlockProps } from '@frontify/guideline-blocks-settings';
import { useBlockSettings, useEditorState } from '@frontify/app-bridge';
import { ReactElement } from 'react';
import { Settings } from './types';
import { AiCopywriterPlugin, BoldPlugin, PluginComposer, RichTextEditor, SoftBreakPlugin } from '@frontify/fondue';
import { useRephrase, useShortener, useSummarizer } from './hooks';

export const AiContentBlock = ({ appBridge }: BlockProps): ReactElement => {
    const isEditing = useEditorState(appBridge);
    const [blockSettings, setBlockSettings] = useBlockSettings<Settings>(appBridge);
    const { rephrase } = useRephrase();
    const { summarize } = useSummarizer();
    const { shortener } = useShortener();
    const { content } = blockSettings;

    const plugins = new PluginComposer();
    plugins.setPlugin(
        new SoftBreakPlugin(),
        new BoldPlugin(),
        new AiCopywriterPlugin({
            aiCopywriters: [
                {
                    label: 'Rephrase',
                    function: rephrase,
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
        })
    );

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
