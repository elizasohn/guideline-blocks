/* (c) Copyright Frontify Ltd., all rights reserved. */

import { OrderableListItem } from '@frontify/fondue';
import { ChecklistContent } from '../types';

export const reorderList = <T extends OrderableListItem<ChecklistContent>>(
    array: T[],
    originalIndex: number,
    newIndex: number,
): T[] =>
    array.map((value, index) => {
        if (index === newIndex) {
            return { ...value, sort: originalIndex };
        }
        if (index === originalIndex) {
            return { ...value, sort: newIndex };
        }
        return value;
    });
