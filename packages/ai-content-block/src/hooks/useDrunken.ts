/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, TDescendant, getSelectionText } from '@udecode/plate';
import { enhancedTextDrunkenPirateExecutor } from '../GraphQL';
import { useState } from 'react';
import { markdownToSlate } from '../helper';

export const useDrunken = () => {
    const [isDrunkenLoading, setIsDrunkenLoading] = useState(false);
    const drunken = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsDrunkenLoading(true);
        const response = await enhancedTextDrunkenPirateExecutor({ text: value });
        if (response.enhancedText.drunken) {
            const nodes = markdownToSlate(response.enhancedText.drunken);
            for (const node of nodes) {
                editor.insertNode(node as TDescendant);
            }
        }
        setIsDrunkenLoading(false);
    };

    return { drunken, isDrunkenLoading };
};
