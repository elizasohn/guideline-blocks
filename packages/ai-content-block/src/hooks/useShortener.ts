/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText, insertText } from '@udecode/plate';
import { enhancedTextExecutor } from '../GraphQL';

export const useShortener = () => {
    const shortener = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        const response = await enhancedTextExecutor({ text: value });
        if (response.enhancedText.shortened) {
            insertText(editor, response.enhancedText.shortened);
        }
    };

    return { shortener };
};
