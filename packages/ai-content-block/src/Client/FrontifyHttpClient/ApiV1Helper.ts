/* (c) Copyright Frontify Ltd., all rights reserved. */

export const isApiV1Enabled = (): boolean => {
    const tokenElement = document.getElementsByName('v1-api-token');
    if (tokenElement.length > 0) {
        return (tokenElement[0] as HTMLMetaElement).content !== '';
    }
    return false;
};

export const getApiV1Token = (): string => {
    const tokenElement = document.getElementsByName('v1-api-token');
    return (tokenElement[0] as HTMLMetaElement).content;
};

export const setApiV1Token = (token: string): void => {
    (document.getElementsByName('v1-api-token')[0] as HTMLMetaElement).content = token;
};
