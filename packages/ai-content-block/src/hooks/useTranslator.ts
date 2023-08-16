/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, TDescendant, getSelectionText } from '@udecode/plate';
import { enhancedTextTranslationExecutor } from '../GraphQL';
import { useState } from 'react';
import { markdownToSlate } from '../helper';

export const useTranslator = (language: string) => {
    const [isTranslatorLoading, setIsTranslatorLoading] = useState(false);

    const translate = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsTranslatorLoading(true);
        const response = await enhancedTextTranslationExecutor({ text: value, language });
        if (response.enhancedText.translated) {
            const nodes = markdownToSlate(response.enhancedText.translated);
            for (const node of nodes) {
                editor.insertNode(node as TDescendant);
            }
        }
        setIsTranslatorLoading(false);
    };

    return { translate, isTranslatorLoading };
};
