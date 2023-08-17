/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { DropdownItem } from './DropdownItem';
import { AiCopywriterDropdownProps } from './types';
import { useAiCopyWriterDropdown } from './useAiCopyWriterDropdown';
import { MarkToolbarButton, getPluginType } from '@udecode/plate';
import {
    IconLightning16,
    IconStylingWrapper,
    LoadingCircle,
    LoadingCircleSize,
    buttonStyles,
    getButtonClassNames,
} from '@frontify/fondue';

export const AiCopywriterDropdown = ({ id, editor, aiCopywriters = [], isLoading }: AiCopywriterDropdownProps) => {
    const {
        state: { toggle, isOpen },
        dropdownProps,
        triggerRef,
        dropdownRef,
    } = useAiCopyWriterDropdown(editor.id);

    return (
        <div ref={triggerRef}>
            <MarkToolbarButton
                key={id}
                type={getPluginType(editor, id)}
                icon={
                    <IconStylingWrapper
                        icon={isLoading ? <LoadingCircle size={LoadingCircleSize.ExtraSmall} /> : <IconLightning16 />}
                    />
                }
                classNames={getButtonClassNames()}
                styles={buttonStyles}
                onClick={toggle}
            />
            {isOpen && (
                <div
                    ref={dropdownRef}
                    {...dropdownProps}
                    className="tw-divide-y tw-divide-line tw-bg-base tw-shadow-md tw-border tw-border-line tw-z-[1000] tw-overflow-auto tw-min-h-[40px]"
                >
                    {aiCopywriters.map((aiCopywriter) => (
                        <DropdownItem editor={editor} key={aiCopywriter.label} onClick={aiCopywriter.function}>
                            <span>{aiCopywriter.label}</span>
                        </DropdownItem>
                    ))}
                </div>
            )}
        </div>
    );
};
