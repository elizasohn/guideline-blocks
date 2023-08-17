/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText } from '@udecode/plate';
import { enhancedTextKeyTakeawaysExecutor } from '../GraphQL';
import { useState } from 'react';
import { insertContent } from '../helper';

export const useKeytakeaways = () => {
    const [isKeytakeawaysLoading, setIsKeytakeawaysLoading] = useState(false);
    const keytakeaways = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsKeytakeawaysLoading(true);
        const response = await enhancedTextKeyTakeawaysExecutor({ text: value });
        if (response.enhancedText.keyTakeaways) {
            insertContent(editor, response.enhancedText.keyTakeaways);
        }
        setIsKeytakeawaysLoading(false);
    };

    return { keytakeaways, isKeytakeawaysLoading };
};
