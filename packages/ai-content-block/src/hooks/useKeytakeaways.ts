/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getSelectionText } from '@udecode/plate';
import { enhancedTextKeyTakeawaysExecutor } from '../GraphQL';
import { useState } from 'react';
import { insertContent } from '../helper';
import { BaseEditor, Transforms } from 'slate';

export const useKeytakeaways = () => {
    const [isKeytakeawaysLoading, setIsKeytakeawaysLoading] = useState(false);
    const keytakeaways = async (editor: PlateEditor) => {
        const value = getSelectionText(editor);
        setIsKeytakeawaysLoading(true);
        const response = await enhancedTextKeyTakeawaysExecutor({ text: value });
        if (response.enhancedText.keyTakeaways) {
            if (editor.selection) {
                const endpoint =
                    editor.selection.focus.offset > editor.selection.anchor.offset
                        ? editor.selection.focus
                        : editor.selection.anchor;
                Transforms.select(editor as BaseEditor, {
                    anchor: endpoint,
                    focus: endpoint,
                });
            }
            insertContent(editor, response.enhancedText.keyTakeaways);
        }
        setIsKeytakeawaysLoading(false);
    };

    return { keytakeaways, isKeytakeawaysLoading };
};
