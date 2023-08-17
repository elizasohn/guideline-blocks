/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText } from '@udecode/plate';
import { enhancedTextProperEnglishExecutor } from '../GraphQL';
import { useState } from 'react';
import { insertContent } from '../helper';

export const useProperEnglish = () => {
    const [isProperEnglishLoading, setIsProperEnglishLoading] = useState(false);

    const properEnglish = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsProperEnglishLoading(true);
        const response = await enhancedTextProperEnglishExecutor({ text: value });
        if (response.enhancedText.properEnglish) {
            insertContent(editor, response.enhancedText.properEnglish);
        }
        setIsProperEnglishLoading(false);
    };

    return { properEnglish, isProperEnglishLoading };
};
