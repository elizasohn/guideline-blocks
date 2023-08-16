/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText, insertText } from '@udecode/plate';
import { enhancedTextTranslationExecutor } from '../GraphQL';

export const useTranslator = (language: string) => {
    const translate = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        const response = await enhancedTextTranslationExecutor({ text: value, language });
        if (response.enhancedText.translated) {
            insertText(editor, response.enhancedText.translated);
        }
    };

    return { translate };
};
