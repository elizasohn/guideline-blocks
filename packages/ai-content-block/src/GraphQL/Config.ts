/* (c) Copyright Frontify Ltd., all rights reserved. */

import { getHeaders } from '../Client/FrontifyHttpClient';

export const GraphQLConfig = {
    internalEndpoint: '/graphql-internal',
    supportedUrls: ['/user/info', '/brand/list/', '/library/list/'],
};

type Types =
    | 'account'
    | 'asset'
    | 'asset-variant'
    | 'assetSubmission'
    | 'assetSubmissionRequest'
    | 'assetTemplate'
    | 'assetTemplateItem'
    | 'attachment'
    | 'brand'
    | 'collection'
    | 'comment'
    | 'commentReply'
    | 'customMetadataProperty'
    | 'customMetadataPropertyOption'
    | 'customMetadataValue'
    | 'document'
    | 'external-product'
    | 'externalDataSource'
    | 'folder'
    | 'group'
    | 'libraryDocument'
    | 'license'
    | 'metadata-field'
    | 'metadata-value'
    | 'portal'
    | 'project'
    | 'shareLink'
    | 'user'
    | 'user-group'
    | 'webhook'
    | 'webhook-event'
    | 'workflow'
    | 'workflow-checklist-item'
    | 'workflow-checklist-preset'
    | 'workflow-status'
    | 'workflow-task';

export const GRAPHQL_INTERNAL_API_DEV_FLAG = 'GRAPHQL_INTERNAL_API';

export const isGraphQLEndpointSupported = (endpoint: string) =>
    GraphQLConfig.supportedUrls.includes(endpoint.replace('/api', ''));

export const getBase64Id = (identifier: number, type: Types): string => btoa(JSON.stringify({ identifier, type }));

export const decodeBase64Id = (base64Id: string): { identifier: number; type: string } => JSON.parse(atob(base64Id));

export const graphQlEndpoint = GraphQLConfig.internalEndpoint;

export const getFetchParams = () => ({
    headers: getHeaders(),
});
