/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, TDescendant, getSelectionText, insertText } from '@udecode/plate';
import { enhancedTextProperEnglishExecutor } from '../GraphQL';
import { useState } from 'react';
import { markdownToSlate } from '../helper';

export const useProperEnglish = () => {
    const [isProperEnglishLoading, setIsProperEnglishLoading] = useState(false);

    const properEnglish = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsProperEnglishLoading(true);
        const response = await enhancedTextProperEnglishExecutor({ text: value });
        if (response.enhancedText.properEnglish) {
            const nodes = markdownToSlate(response.enhancedText.properEnglish);
            for (const node of nodes) {
                editor.insertNode(node as TDescendant);
            }
            insertText(editor, response.enhancedText.properEnglish);
        }
        setIsProperEnglishLoading(false);
    };

    return { properEnglish, isProperEnglishLoading };
};
