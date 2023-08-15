/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText } from '@udecode/plate';
import { enhancedTextExecutor } from '../GraphQL';

export const useRephrase = () => {
    const rephrase = (editor: PlateEditor) => {
        const value = getSelectionText(editor);

        enhancedTextExecutor({ text: value }).then((response) => {
            console.log(response);
        });
    };

    return { rephrase };
};
