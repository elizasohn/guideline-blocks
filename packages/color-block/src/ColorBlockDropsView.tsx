/* (c) Copyright Frontify Ltd., all rights reserved. */

import { FC } from 'react';

import {
    Button,
    ButtonStyle,
    IconPlus,
    IconSize,
    IconTrash,
    RichTextEditor,
    Tooltip,
    TooltipPosition,
    useCopy,
} from '@frontify/fondue';
import { joinClassNames, useGuidelineDesignTokens } from '@frontify/guideline-blocks-shared';

import { ColorBlockDropsViewProps } from './types';
import { mapColorSpaces } from './helpers/mapColorSpaces';
import { ColorsBlockColorPicker } from './components/ColorsBlockColorPicker';

export const ColorBlockDropsView: FC<ColorBlockDropsViewProps> = ({
    colors,
    colorSpaces,
    isEditing,
}: ColorBlockDropsViewProps) => {
    const { designTokens } = useGuidelineDesignTokens();

    const { copy, status } = useCopy();

    return (
        <div className="tw-flex tw-flex-wrap tw-gap-y-8">
            {colors?.map((item) => (
                <div key={item} className="tw-group tw-flex tw-flex-col tw-items-center tw-w-1/6">
                    <div
                        className={joinClassNames([
                            'tw-relative tw-w-[100px] tw-h-[100px] tw-rounded-full tw-mb-3 tw-bg-black-warm tw-transition-all',
                            isEditing && 'group-hover:tw-shadow-inset-hover-strong',
                            !isEditing && 'group-hover:tw-shadow-inset-hover-weak',
                        ])}
                    >
                        {isEditing && (
                            <div
                                className={joinClassNames([
                                    'tw-absolute tw-hidden tw-top-[-0.25rem] tw-right-[-0.25rem]',
                                    isEditing && 'group-hover:tw-block',
                                ])}
                            >
                                <Button icon={<IconTrash size={IconSize.Size20} />} style={ButtonStyle.Secondary} />
                            </div>
                        )}
                    </div>

                    <div className="tw-flex tw-w-[100px] tw-mb-3 tw-text-m tw-font-bold tw-text-black tw-text-center">
                        <RichTextEditor designTokens={designTokens ?? undefined} readonly={!isEditing} />
                    </div>

                    {colorSpaces?.map((colorSpaceID: string) => {
                        const mappedColorSpace = mapColorSpaces(colorSpaceID);

                        return (
                            <div key={colorSpaceID} className="tw-flex tw-items-center tw-mb-1 last:tw-mb-0">
                                <div className="tw-mr-1 tw-text-s tw-text-black-70">{mappedColorSpace.value}</div>

                                {!isEditing ? (
                                    <Tooltip
                                        withArrow
                                        position={TooltipPosition.Right}
                                        hoverDelay={0}
                                        content={
                                            <>
                                                <div>Color Name</div>
                                                <div>#100100</div>
                                                <span className="tw-text-black-50">
                                                    {status === 'error' && 'Error???'}
                                                    {status === 'idle' && 'Click to copy'}
                                                    {status === 'success' && 'Copied!'}
                                                </span>
                                            </>
                                        }
                                        triggerElement={
                                            <div
                                                className="tw-relative tw-z-[1] tw-cursor-pointer tw-text-s tw-text-black-80"
                                                onClick={() => copy('test')}
                                            >
                                                {mappedColorSpace.placeholder}
                                            </div>
                                        }
                                    />
                                ) : (
                                    <div className="tw-text-s tw-text-black-80">{mappedColorSpace.placeholder}</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            ))}

            {isEditing && (
                <div className="tw-flex tw-flex-col tw-items-center tw-w-1/6">
                    <ColorsBlockColorPicker onSelect={(value) => console.log(value)}>
                        <div className="tw-flex tw-justify-center tw-items-center tw-w-[100px] tw-h-[100px] tw-mx-auto tw-cursor-pointer tw-rounded-full tw-mb-3 tw-text-black tw-bg-gray-add-button">
                            <IconPlus size={IconSize.Size24} />
                        </div>
                    </ColorsBlockColorPicker>

                    <div className="tw-flex tw-w-[100px] tw-mb-3 tw-text-m tw-font-bold tw-text-black tw-text-center">
                        <RichTextEditor
                            designTokens={designTokens ?? undefined}
                            readonly={!isEditing}
                            placeholder="Color Name"
                        />
                    </div>

                    {colorSpaces?.map((colorSpaceID: string) => {
                        const mappedColorSpace = mapColorSpaces(colorSpaceID);

                        return (
                            <div key={colorSpaceID} className="tw-flex tw-items-center tw-mb-1 last:tw-mb-0">
                                <div className="tw-mr-1 tw-text-s tw-text-black-50">{mappedColorSpace.value}</div>

                                <div className="tw-text-s tw-text-black-50">{mappedColorSpace.placeholder}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
