/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText } from '@udecode/plate';

export const useRephrase = () => {
    const rephrase = (editor: PlateEditor) => {
        console.log(getSelectionText(editor));
    };

    return { rephrase };
};
