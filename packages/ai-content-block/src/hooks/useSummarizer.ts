/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText } from '@udecode/plate';
import { enhancedTextSummaryExecutor } from '../GraphQL';
import { useState } from 'react';
import { insertContent } from '../helper/insertContent';

export const useSummarizer = () => {
    const [isSummarizerLoading, setIsSummarizerLoading] = useState(false);

    const summarize = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsSummarizerLoading(true);
        const response = await enhancedTextSummaryExecutor({ text: value });
        if (response.enhancedText.summarized) {
            insertContent(editor, response.enhancedText.summarized);
        }
        setIsSummarizerLoading(false);
    };

    return { summarize, isSummarizerLoading };
};
