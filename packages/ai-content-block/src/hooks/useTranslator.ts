/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText } from '@udecode/plate';
import { enhancedTextTranslationExecutor } from '../GraphQL';
import { useState } from 'react';
import { insertContent } from '../helper';

export const useTranslator = (language: string) => {
    const [isTranslatorLoading, setIsTranslatorLoading] = useState(false);

    const translate = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsTranslatorLoading(true);
        const response = await enhancedTextTranslationExecutor({ text: value, language });
        if (response.enhancedText.translated) {
            insertContent(editor, response.enhancedText.translated);
        }
        setIsTranslatorLoading(false);
    };

    return { translate, isTranslatorLoading };
};
