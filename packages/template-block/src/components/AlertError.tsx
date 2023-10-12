/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconExclamationMarkTriangle } from '@frontify/fondue';

export type AlertErrorProps = {
    errorMessage: string;
};

export const AlertError = ({ errorMessage }: AlertErrorProps) => {
    return (
        <span
            aria-live="assertive"
            className="tw-p-5 tw-flex tw-gap-4 tw-mb-4 tw-items-center tw-rounded-sm tw-transition-opacity tw-ease-in-out tw-bg-box-negative tw-text-box-negative-inverse"
        >
            <span>
                <IconExclamationMarkTriangle />
            </span>
            {errorMessage}
        </span>
    );
};
