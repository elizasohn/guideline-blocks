/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText } from '@udecode/plate';
import { enhancedTextShortenExecutor } from '../GraphQL';
import { useState } from 'react';
import { insertContent } from '../helper';

export const useShortener = () => {
    const [isShortenerLoading, setIsShortenerLoading] = useState(false);

    const shortener = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsShortenerLoading(true);
        const response = await enhancedTextShortenExecutor({ text: value });
        if (response.enhancedText.shortened) {
            insertContent(editor, response.enhancedText.shortened);
        }
        setIsShortenerLoading(false);
    };

    return { shortener, isShortenerLoading };
};
