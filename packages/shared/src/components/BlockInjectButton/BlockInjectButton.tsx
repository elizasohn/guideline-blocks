/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    ActionMenu,
    Flyout,
    IconArrowCircleUp20,
    IconImageStack20,
    LoadingCircle,
    MenuItemContentSize,
} from '@frontify/fondue';
import React from 'react';
import { DragEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { joinClassNames } from '../../utilities/react/joinClassNames';
import { BlockInjectButtonProps } from './types';

export const BlockInjectButton = ({
    onDrop,
    label,
    icon,
    secondaryLabel,
    isLoading,
    fillParentContainer,
    onAssetChooseClick,
    onUploadClick,
    withMenu = true,
    onClick,
    verticalLayout,
}: BlockInjectButtonProps) => {
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [menuPosition, setMenuPosition] = useState<[number, number] | undefined>();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleDrop: DragEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        setIsDraggingOver(false);
        onDrop && onDrop(event.dataTransfer.files);
    };

    const openMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (!buttonRef.current || isLoading) {
            return;
        }
        const { left, top } = buttonRef.current.getBoundingClientRect();
        const XInsideComponent = event.clientX - left;
        const YInsideComponent = event.clientY - top;
        setMenuPosition([XInsideComponent, YInsideComponent]);
    };

    const horizontalGroupStyles =
        '[&:not(:first-child)]:tw-border-l-0  first:tw-rounded-tl first:tw-rounded-bl last:tw-rounded-tr last:tw-rounded-br';
    const verticalGroupStyles =
        '[&:not(:first-child)]:tw-border-t-0  first:tw-rounded-tl first:tw-rounded-tr last:tw-rounded-br last:tw-rounded-bl';

    return (
        <button
            ref={buttonRef}
            data-test-id="block-inject-button"
            className={joinClassNames([
                ' tw-font-body tw-relative tw-text-[14px] tw-leading-4 tw-text-text-weak tw-border tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-gap-3 tw-w-full',
                verticalLayout ? verticalGroupStyles : horizontalGroupStyles,
                !isLoading &&
                    'hover:tw-text-blank-state-hover hover:tw-bg-blank-state-hover-inverse hover:tw-border-blank-state-line-hover active:tw-text-blank-state-pressed active:tw-bg-blank-state-pressed-inverse active:tw-border-blank-state-line-hover',
                isDraggingOver && '[&>*]:tw-pointer-events-none',
                isDraggingOver || !!menuPosition
                    ? 'tw-text-blank-state-pressed tw-bg-blank-state-pressed-inverse tw-border-blank-state-line-hover hover:tw-text-blank-state-pressed hover:tw-border-blank-state-line-hover hover:tw-bg-blank-state-pressed-inverse'
                    : 'tw-bg-blank-state-shaded-inverse tw-border-blank-state-line tw-text-blank-state-shaded ',
                fillParentContainer ? 'tw-h-full' : 'tw-h-[72px]',
                isDraggingOver && !isLoading ? 'tw-border-dashed' : 'tw-border-solid',
            ])}
            onDragEnter={onDrop ? () => setIsDraggingOver(true) : undefined}
            onDragLeave={onDrop ? () => setIsDraggingOver(false) : undefined}
            onDrop={onDrop ? handleDrop : undefined}
            onClick={(event) => {
                withMenu && openMenu(event);
                onClick?.();
            }}
        >
            {isLoading ? (
                <LoadingCircle />
            ) : (
                <>
                    <div>{icon}</div>
                    <div className="tw-flex tw-flex-col tw-items-start">
                        <div className="tw-font-medium">{label}</div>
                        {secondaryLabel && <div className="tw-font-normal">{secondaryLabel}</div>}
                    </div>
                </>
            )}
            {menuPosition && (
                <div
                    className="tw-absolute tw-left-0 tw-top-full tw-z-20"
                    style={{
                        left: menuPosition[0],
                        top: menuPosition[1],
                    }}
                >
                    <Flyout
                        onOpenChange={(isOpen) => !isOpen && setMenuPosition(undefined)}
                        isOpen={true}
                        fitContent
                        hug={false}
                        legacyFooter={false}
                        trigger={<div />}
                    >
                        <ActionMenu
                            menuBlocks={[
                                {
                                    id: 'menu',
                                    menuItems: [
                                        ...(onUploadClick
                                            ? [
                                                  {
                                                      id: 'upload',
                                                      size: MenuItemContentSize.XSmall,
                                                      title: 'Upload asset',
                                                      onClick: () => {
                                                          onUploadClick();
                                                          setMenuPosition(undefined);
                                                      },

                                                      initialValue: true,
                                                      decorator: (
                                                          <div className="tw-mr-2">
                                                              <IconArrowCircleUp20 />
                                                          </div>
                                                      ),
                                                  },
                                              ]
                                            : []),
                                        ...(onAssetChooseClick
                                            ? [
                                                  {
                                                      id: 'asset',
                                                      size: MenuItemContentSize.XSmall,
                                                      title: 'Browse asset',
                                                      onClick: () => {
                                                          onAssetChooseClick();
                                                          setMenuPosition(undefined);
                                                      },
                                                      initialValue: true,
                                                      decorator: (
                                                          <div className="tw-mr-2">
                                                              <IconImageStack20 />
                                                          </div>
                                                      ),
                                                  },
                                              ]
                                            : []),
                                    ],
                                },
                            ]}
                        />
                    </Flyout>
                </div>
            )}
        </button>
    );
};
