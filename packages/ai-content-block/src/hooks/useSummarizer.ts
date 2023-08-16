/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText, insertText } from '@udecode/plate';
import { enhancedTextExecutor } from '../GraphQL';

export const useSummarizer = () => {
    const summarize = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        const response = await enhancedTextExecutor({ text: value });
        if (response.enhancedText.summarized) {
            insertText(editor, response.enhancedText.summarized);
        }
    };

    return { summarize };
};
