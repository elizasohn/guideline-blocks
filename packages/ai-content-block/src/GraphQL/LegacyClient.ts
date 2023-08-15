/* (c) Copyright Frontify Ltd., all rights reserved. */

import { FrontifyHttpClient } from '../Client/FrontifyHttpClient';

export const requester = async <R, V>(query: string, variables: V) => {
    const { result } = await FrontifyHttpClient.post<R>('/graphql-internal', { query, variables });

    return result.data;
};
