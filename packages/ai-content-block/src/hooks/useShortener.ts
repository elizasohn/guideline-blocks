/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText, insertText } from '@udecode/plate';
import { enhancedTextShortenExecutor } from '../GraphQL';
import { useState } from 'react';

export const useShortener = () => {
    const [isShortenerLoading, setIsShortenerLoading] = useState(false);

    const shortener = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsShortenerLoading(true);
        const response = await enhancedTextShortenExecutor({ text: value });
        if (response.enhancedText.shortened) {
            insertText(editor, response.enhancedText.shortened);
        }
        setIsShortenerLoading(false);
    };

    return { shortener, isShortenerLoading };
};
