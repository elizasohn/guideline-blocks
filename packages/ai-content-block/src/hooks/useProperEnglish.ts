/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText, insertText } from '@udecode/plate';
import { enhancedTextProperEnglishExecutor } from '../GraphQL';

export const useProperEnglish = () => {
    const properEnglish = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        const response = await enhancedTextProperEnglishExecutor({ text: value });
        if (response.enhancedText.properEnglish) {
            insertText(editor, response.enhancedText.properEnglish);
        }
    };

    return { properEnglish };
};
