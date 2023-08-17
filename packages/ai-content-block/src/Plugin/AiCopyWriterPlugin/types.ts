/* (c) Copyright Frontify Ltd., all rights reserved. */

import { TEditor } from '@udecode/plate';

export type AiCopywriter = {
    label: string;
    function: (editor: TEditor) => void;
};
