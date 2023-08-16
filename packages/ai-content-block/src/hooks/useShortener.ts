/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, TDescendant, getSelectionText } from '@udecode/plate';
import { enhancedTextShortenExecutor } from '../GraphQL';
import { useState } from 'react';
import { markdownToSlate } from '../helper';

export const useShortener = () => {
    const [isShortenerLoading, setIsShortenerLoading] = useState(false);

    const shortener = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsShortenerLoading(true);
        const response = await enhancedTextShortenExecutor({ text: value });
        if (response.enhancedText.shortened) {
            const nodes = markdownToSlate(response.enhancedText.shortened);
            for (const node of nodes) {
                editor.insertNode(node as TDescendant);
            }
        }
        setIsShortenerLoading(false);
    };

    return { shortener, isShortenerLoading };
};
