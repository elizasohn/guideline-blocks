/* (c) Copyright Frontify Ltd., all rights reserved. */

import { DefaultStandardMetadataType, PartialSettingsType, RequiredSettingsType } from './type';

export const STANDARD_METADATA: (keyof PartialSettingsType)[] = [
    'description',
    'creator',
    'copyrightStatus',
    'copyrightNotice',
];
export const STANDARD_METADATA_LABEL: Record<keyof PartialSettingsType, string> = {
    description: 'Description',
    creator: 'Creator',
    copyrightStatus: 'Copyright Status',
    copyrightNotice: 'Copyright Notice',
};

export const REQUIRED_FORM_DATA: (keyof RequiredSettingsType)[] = ['disclaimer'];

export const REQUIRED_FORM_DATA_LABEL: Record<keyof RequiredSettingsType, string> = {
    name: 'Name',
    email: 'Email',
    disclaimer: 'disclaimer',
};

export const defaultStandardMetaData: (keyof DefaultStandardMetadataType)[] = ['name', 'email'];
