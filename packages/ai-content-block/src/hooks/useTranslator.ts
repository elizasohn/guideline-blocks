/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText, insertText } from '@udecode/plate';
import { enhancedTextTranslationExecutor } from '../GraphQL';
import { useState } from 'react';

export const useTranslator = (language: string) => {
    const [isTranslatorLoading, setIsTranslatorLoading] = useState(false);

    const translate = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsTranslatorLoading(true);
        const response = await enhancedTextTranslationExecutor({ text: value, language });
        if (response.enhancedText.translated) {
            insertText(editor, response.enhancedText.translated);
        }
        setIsTranslatorLoading(false);
    };

    return { translate, isTranslatorLoading };
};
