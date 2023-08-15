/* (c) Copyright Frontify Ltd., all rights reserved. */

import { BlockProps } from '@frontify/guideline-blocks-settings';
import { useBlockSettings, useEditorState } from '@frontify/app-bridge';
import { ReactElement } from 'react';
import { Settings } from './types';
import { AiCopywriterPlugin, PluginComposer, RichTextEditor } from '@frontify/fondue';
import { useRephrase } from './hooks';

export const AiContentBlock = ({ appBridge }: BlockProps): ReactElement => {
    const isEditing = useEditorState(appBridge);
    const [blockSettings, setBlockSettings] = useBlockSettings<Settings>(appBridge);
    const { rephrase } = useRephrase();
    const { content } = blockSettings;

    const plugins = new PluginComposer();
    plugins.setPlugin(
        new AiCopywriterPlugin({
            aiCopywriters: [
                {
                    label: 'Rephrase',
                    function: rephrase,
                },
                {
                    label: 'Summarize',
                    function: () => console.log('Summarize'),
                },
                {
                    label: 'Simplify',
                    function: () => console.log('Simplify'),
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
