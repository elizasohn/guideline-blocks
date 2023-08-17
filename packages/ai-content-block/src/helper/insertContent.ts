/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, TDescendant } from '@udecode/plate';
import { markdownToSlate } from './markdownToSlate';

export const insertContent = (editor: PlateEditor, content: string) => {
    const nodes = markdownToSlate(content);
    console.log(nodes);
    if (nodes.length === 1 && !nodes[0].children) {
        editor.insertText(content);
    } else {
        for (const node of nodes) {
            editor.insertNode(node as TDescendant);
        }
    }
};
