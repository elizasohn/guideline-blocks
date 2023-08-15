/* (c) Copyright Frontify Ltd., all rights reserved. */

import { AiContentBlock } from './AiContentBlock';
import { settings } from './settings';
import { defineBlock } from '@frontify/guideline-blocks-settings';

export default defineBlock({
    block: AiContentBlock,
    settings,
});
