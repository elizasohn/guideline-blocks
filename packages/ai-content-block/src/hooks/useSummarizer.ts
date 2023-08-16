/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, TDescendant, getSelectionText } from '@udecode/plate';
import { enhancedTextSummaryExecutor } from '../GraphQL';
import { useState } from 'react';
import { markdownToSlate } from '../helper';

export const useSummarizer = () => {
    const [isSummarizerLoading, setIsSummarizerLoading] = useState(false);

    const summarize = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsSummarizerLoading(true);
        const response = await enhancedTextSummaryExecutor({ text: value });
        if (response.enhancedText.summarized) {
            const nodes = markdownToSlate(response.enhancedText.summarized);
            for (const node of nodes) {
                editor.insertNode(node as TDescendant);
            }
        }
        setIsSummarizerLoading(false);
    };

    return { summarize, isSummarizerLoading };
};
