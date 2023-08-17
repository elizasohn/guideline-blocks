/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText } from '@udecode/plate';
import { enhancedTextPromptedExecutor } from '../GraphQL';
import { useState } from 'react';
import { insertContent } from '../helper';

export const usePrompted = () => {
    const [isPromptedLoading, setIsPromptedLoading] = useState(false);
    const prompted = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsPromptedLoading(true);
        const response = await enhancedTextPromptedExecutor({ text: value });
        if (response.enhancedText.prompted) {
            insertContent(editor, response.enhancedText.prompted);
        }
        setIsPromptedLoading(false);
    };

    return { prompted, isPromptedLoading };
};
