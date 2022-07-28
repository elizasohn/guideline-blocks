/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconEnum } from '@frontify/fondue';
import { BaseBlock } from './base';

export type Choice = {
    label?: string | number;
    icon?: IconEnum;
    value: string | number;
};

export type ChoicesType = {
    choices: Choice[];
} & BaseBlock<string | number>;
