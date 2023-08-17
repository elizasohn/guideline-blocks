/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText } from '@udecode/plate';
import { enhancedTextDrunkenPirateExecutor } from '../GraphQL';
import { useState } from 'react';
import { insertContent } from '../helper';

export const useDrunken = () => {
    const [isDrunkenLoading, setIsDrunkenLoading] = useState(false);
    const drunken = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsDrunkenLoading(true);
        const response = await enhancedTextDrunkenPirateExecutor({ text: value });
        if (response.enhancedText.drunken) {
            insertContent(editor, response.enhancedText.drunken);
        }
        setIsDrunkenLoading(false);
    };

    return { drunken, isDrunkenLoading };
};
