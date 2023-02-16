/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import { useRef } from 'react';
import { BoardProps } from '../types';
import { Axis } from './Axis';
import { Item } from './Item';
import { styleSettingsToCss } from '../utilities/settingsToCss';
import { splitBlockSettingsByArea } from '../utilities/splitBlockSettingsByArea';

export const Board = ({ items, assets, setItems, deleteItem, isEditing, blockSettings }: BoardProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);
    const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

    const { xAxisLeftLabel, xAxisRightLabel, yAxisTopLabel, yAxisBottomLabel } = blockSettings;
    const { axisStyle, boardStyle, itemStyle } = splitBlockSettingsByArea(blockSettings);

    const boardCss = styleSettingsToCss(boardStyle);

    const handleDragEnd = (event: DragEndEvent) => {
        if (!containerRef.current) {
            return;
        }
        const { width, height } = containerRef.current.getBoundingClientRect();
        const deltaXInPercentage = (event.delta.x * 100) / width;
        const deltaYInPercentage = (event.delta.y * 100) / height;
        const newItems = items.map((item) =>
            item.id === event.active.id
                ? {
                      ...item,
                      position: {
                          x: item.position.x + deltaXInPercentage,
                          y: item.position.y + deltaYInPercentage,
                      },
                  }
                : item
        );
        setItems(newItems);
    };

    const itemsWithImages = items.map((item) => ({
        ...item,
        src: assets.find((asset) => asset.id === item.assetId)?.genericUrl,
    }));

    return (
        <div
            style={boardCss}
            className="tw-w-full tw-flex tw-rounded tw-h-[613px] sm:tw-h-[500px] tw-relative tw-border tw-p-2 sm:tw-p-3"
        >
            <DndContext modifiers={[restrictToParentElement]} sensors={sensors} onDragEnd={handleDragEnd}>
                <div ref={containerRef} className="tw-relative tw-h-full tw-w-full">
                    <div className="tw-absolute tw-w-full tw-top-1/2 -tw-translate-y-1/2">
                        <Axis
                            minLabel={xAxisLeftLabel}
                            maxLabel={xAxisRightLabel}
                            orientation="horizontal"
                            style={axisStyle}
                        />
                    </div>
                    <div className="tw-absolute tw-h-full tw-left-1/2 -tw-translate-x-1/2">
                        <Axis
                            minLabel={yAxisBottomLabel}
                            maxLabel={yAxisTopLabel}
                            orientation="vertical"
                            style={axisStyle}
                        />
                    </div>
                    {itemsWithImages.map((item, i) => (
                        <Item
                            key={i}
                            isEditing={isEditing}
                            id={item.id}
                            src={item.src}
                            xPosition={item.position.x}
                            yPosition={item.position.y}
                            style={itemStyle}
                            deleteItem={() => deleteItem(item)}
                        />
                    ))}
                </div>
            </DndContext>
        </div>
    );
};
