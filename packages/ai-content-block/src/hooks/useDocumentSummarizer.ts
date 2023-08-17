/* (c) Copyright Frontify Ltd., all rights reserved. */

/*import { PlateEditor } from '@udecode/plate';
import { guidelineDocumentSummaryExecutor } from '../GraphQL';
import { useState } from 'react';
import { insertContent } from '../helper';

export const useDocumentSummarizer = (documentId: string) => {
    const [isDocumentSummarizerLoading, setIsDocumentSummarizerLoading] = useState(false);
    const documentSummarizer = async (editor: PlateEditor) => {
        setIsDocumentSummarizerLoading(true);
        const response = await guidelineDocumentSummaryExecutor({ documentId });
        if (response) {
            insertContent(editor, response);
        }
        setIsDocumentSummarizerLoading(false);
    };

    return { documentSummarizer, isDocumentSummarizerLoading };
};
*/
