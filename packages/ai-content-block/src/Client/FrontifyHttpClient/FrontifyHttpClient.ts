/* (c) Copyright Frontify Ltd., all rights reserved. */

import { FrontifyHttpClientError } from './FrontifyHttpClientErrors';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
type RequestOptions = {
    method: string;
    headers: RequestHeaders;
    body?: string;
    signal?: AbortSignal;
};
export type RequestHeaders = {
    'X-CSRF-TOKEN'?: string;
    'Content-Type'?: string;
    'X-Frontify-Beta'?: string;
    'X-Frontify-Development-Flags'?: string;
    Authorization?: string;
};
type FrontifyEndpointResponse<T> = {
    currentPage?: number;
    totalPages?: number;
    data: T;
    success: boolean;
};
type HttpUtilResponse<T> = {
    result: FrontifyEndpointResponse<T>;
};

let csrfToken = '';

const getCsrfToken = (): string => {
    if (!csrfToken) {
        const tokenElement = document.getElementsByName('x-csrf-token');

        if (tokenElement.length > 0) {
            csrfToken = (tokenElement[0] as HTMLMetaElement).content;
        }
    }

    return csrfToken;
};

export const getHeaders = () => {
    const X_CSRF_TOKEN = getCsrfToken();
    const CONTENT_TYPE = 'application/json; charset=utf-8';

    return {
        'Content-Type': CONTENT_TYPE,
        ...(X_CSRF_TOKEN ? { 'X-CSRF-TOKEN': X_CSRF_TOKEN } : {}),
    };
};

const request = async <T>(
    method: HttpMethod,
    url: string,
    data?: Record<never, never>,
    signal?: AbortSignal,
    headers?: RequestHeaders
): Promise<HttpUtilResponse<T>> => {
    const parameters: RequestOptions = {
        method,
        headers: {
            ...getHeaders(),
            ...headers,
        },
        ...(data && { body: JSON.stringify(data) }),
        ...(signal && { signal }),
    };

    const apiResponse = await fetch(url, parameters);
    const apiResponseJson = await apiResponse.json();

    if (!apiResponse.ok) {
        throw new FrontifyHttpClientError(apiResponseJson, apiResponse.status, apiResponseJson.error);
    }

    return {
        result: apiResponseJson as FrontifyEndpointResponse<T>,
    };
};

type DefaultFrontifyHttpResponse = Record<string, unknown>;

export class FrontifyHttpClient {
    static async get<T = DefaultFrontifyHttpResponse>(
        url: string,
        signal?: AbortSignal,
        headers?: RequestHeaders
    ): Promise<HttpUtilResponse<T>> {
        return request<T>('GET', url, '', signal, headers);
    }

    static async post<T = DefaultFrontifyHttpResponse>(
        url: string,
        data?: Record<never, never>,
        signal?: AbortSignal,
        headers?: RequestHeaders
    ): Promise<HttpUtilResponse<T>> {
        return request<T>('POST', url, data, signal, headers);
    }

    static async put<T = DefaultFrontifyHttpResponse>(
        url: string,
        data?: Record<never, never>,
        signal?: AbortSignal,
        headers?: RequestHeaders
    ): Promise<HttpUtilResponse<T>> {
        return request<T>('PUT', url, data, signal, headers);
    }

    static async patch<T = DefaultFrontifyHttpResponse>(
        url: string,
        data?: Record<never, never>,
        signal?: AbortSignal,
        headers?: RequestHeaders
    ): Promise<HttpUtilResponse<T>> {
        return request<T>('PATCH', url, data, signal, headers);
    }

    static async delete<T = DefaultFrontifyHttpResponse>(
        url: string,
        data?: Record<never, never>,
        signal?: AbortSignal,
        headers?: RequestHeaders
    ): Promise<HttpUtilResponse<T>> {
        return request<T>('DELETE', url, data, signal, headers);
    }
}
