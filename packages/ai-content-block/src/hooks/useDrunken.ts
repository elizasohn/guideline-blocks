/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText, insertText } from '@udecode/plate';
import { enhancedTextDrunkenPirateExecutor } from '../GraphQL';

export const useDrunken = () => {
    const drunken = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        const response = await enhancedTextDrunkenPirateExecutor({ text: value });
        if (response.enhancedText.drunken) {
            insertText(editor, response.enhancedText.drunken);
        }
    };

    return { drunken };
};
