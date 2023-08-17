/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';

import { AiCopywriterDropdown } from './AiCopywriterDropdown';
import { AiCopywriterButtonProps } from './AiCopywriterDropdown/types';
import { ButtonWrapper } from '@frontify/fondue';

export const AiCopywriterButton = ({ editor, id, aiCopywriters, isLoading }: AiCopywriterButtonProps) => {
    return (
        <ButtonWrapper id={id}>
            <AiCopywriterDropdown id={id} editor={editor} aiCopywriters={aiCopywriters} isLoading={isLoading} />
        </ButtonWrapper>
    );
};
