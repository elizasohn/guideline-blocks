/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor } from '@udecode/plate';
import { guidelinePageSummaryExecutor } from '../GraphQL';
import { useState } from 'react';
import { insertContent } from '../helper';

export const usePageSummarizer = (pageId: string) => {
    const [isPageSummarizerLoading, setIsPageSummarizerLoading] = useState(false);

    const pageSummarizer = async (editor: PlateEditor) => {
        setIsPageSummarizerLoading(true);
        const response = await guidelinePageSummaryExecutor({ pageId });

        if (response.guidelinePage.summary) {
            insertContent(editor, response.guidelinePage.summary);
        }
        setIsPageSummarizerLoading(false);
    };

    return { pageSummarizer, isPageSummarizerLoading };
};
