/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MarkdownToSlate, Transform } from '@frontify/fondue';
import { TNode } from '@udecode/plate';

export const markdownToSlate = (markdown: string) => {
    return Transform.use<string, TNode[]>(new MarkdownToSlate()).process(markdown) as TNode[];
};
