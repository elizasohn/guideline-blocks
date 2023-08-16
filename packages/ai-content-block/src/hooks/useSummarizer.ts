/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, TDescendant, TNode, getSelectionText } from '@udecode/plate';
import { enhancedTextSummaryExecutor } from '../GraphQL';
import { useState } from 'react';
import { MarkdownToSlate, Transform, TreeOfNodes } from '@frontify/fondue';

export const useSummarizer = () => {
    const [isSummarizerLoading, setIsSummarizerLoading] = useState(false);

    const summarize = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsSummarizerLoading(true);
        const response = await enhancedTextSummaryExecutor({ text: value });
        if (response.enhancedText.summarized) {
            const treeNodes = Transform.use<string, TreeOfNodes>(new MarkdownToSlate()).process(
                response.enhancedText.summarized
            ) as TNode[];

            for (const node of treeNodes) {
                console.log(node);
                editor.insertNode(node as TDescendant);
            }
        }
        setIsSummarizerLoading(false);
    };

    return { summarize, isSummarizerLoading };
};
