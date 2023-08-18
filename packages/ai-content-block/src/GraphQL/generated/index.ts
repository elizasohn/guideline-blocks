/* (c) Copyright Frontify Ltd., all rights reserved. */

// THIS IS A GENERATED FILE

import { getFetchParams, graphQlEndpoint } from '../Config';
import { requester } from '../LegacyClient';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(graphQlEndpoint as string, {
    method: "POST",
    ...(getFetchParams()),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Any` scalar type represents any of the supported types: Null, Integer, Float, String, Boolean, Enum, Object and List. */
  Any: { input: any; output: any; }
  /** The `BigInt` scalar type represents big integers (2^63 signed). */
  BigInt: { input: any; output: any; }
  /** The `DateTime` scalar type represents datetime data in RFC3339_EXTENDED format (ie. 2001-12-31T22:10:30.000+00:00) */
  DateTime: { input: any; output: any; }
  /** The `Email` scalar type represents email addresses. */
  Email: { input: any; output: any; }
  /** The `Json` scalar type represents valid JSON returnable types. */
  Json: { input: any; output: any; }
  /** Represents an integer or a float value between `0` and `1`, corresponding to percentage values between 0% and 100% (both inclusive). */
  Percent: { input: any; output: any; }
  /** The `RgbColorChannel` scalar represents an integer value between 0 and 255 (both inclusive). */
  RgbColorChannel: { input: any; output: any; }
  /** The `Url` scalar type represents absolute urls. */
  Url: { input: any; output: any; }
};

export type Account = Node & {
  __typename?: 'Account';
  /** **INTERNAL** Search `AccountCollaborator` item(s). */
  collaborators?: Maybe<AccountCollaboratorItems>;
  /** `Account` Id. */
  id: Scalars['ID']['output'];
  /** **BETA** List and search `AccountSearch` item(s). */
  search?: Maybe<AccountSearchItems>;
  /** List and search `UserGroupItems`. */
  userGroups?: Maybe<UserGroupItems>;
  /** List and search `UserItems`. */
  users?: Maybe<UserItems>;
};


export type AccountCollaboratorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query: AccountCollaboratorQueryInput;
};


export type AccountSearchArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AccountQueryInput>;
};


export type AccountUserGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type AccountUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type AccountCollaborator = AccountUser | UserGroup;

export type AccountCollaboratorItems = {
  __typename?: 'AccountCollaboratorItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of `AccountCollaborator` items. */
  items?: Maybe<Array<Maybe<AccountCollaborator>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type AccountCollaboratorQueryInput = {
  /** **INTERNAL** Search term. Must be at least 3 characters long to provide search results. */
  term: Scalars['String']['input'];
};

export type AccountQueryFilterInput = {
  /** Specify the sources to search in. */
  sources?: InputMaybe<Array<AccountQuerySourceInput>>;
};

export type AccountQueryInput = {
  /** Use filters to reduce the set of matched results. */
  filter?: InputMaybe<AccountQueryFilterInput>;
  /** Sort order of matched results. */
  sortBy?: InputMaybe<AccountQuerySortByInput>;
  /** Search term used to retrieve matched results. */
  term?: InputMaybe<Scalars['String']['input']>;
};

/** Search sorting option. Defines how the search results should be sorted. */
export enum AccountQuerySortByInput {
  /** Sort the results by newest. */
  Newest = 'NEWEST',
  /** Sort the results by oldest. */
  Oldest = 'OLDEST',
  /** Sort the results by relevance. */
  Relevance = 'RELEVANCE'
}

export type AccountQuerySourceInput = {
  /** Specify the Ids of the source type you want to search in. If no Ids are specified, a search will be performed on all accessible Ids of the type. */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Specify the source type to search in. */
  type: AccountQuerySourceTypeInput;
};

/** Search sources option. Defines the location of the search results. */
export enum AccountQuerySourceTypeInput {
  /** Search for the results in `Libraries`. */
  Libraries = 'LIBRARIES',
  /** Search for the results in the `LibraryPages`. */
  LibraryPages = 'LIBRARY_PAGES',
  /** Search for the results in the `WorkspaceProjects`. */
  WorkspaceProjects = 'WORKSPACE_PROJECTS'
}

export type AccountSearchItems = {
  __typename?: 'AccountSearchItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of `AccountSearchResult` items. */
  items?: Maybe<Array<Maybe<AccountSearchResult>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type AccountSearchResult = Audio | Document | File | Image | Video;

export type AccountUser = Node & User & {
  __typename?: 'AccountUser';
  /** `AccountUser` avatar. */
  avatar?: Maybe<Scalars['Url']['output']>;
  /** `AccountUser` email. */
  email: Scalars['Email']['output'];
  /** **INTERNAL** `AccountUser` gravatar hash. */
  gravatarHash?: Maybe<Scalars['String']['output']>;
  /** `AccountUser` Id. */
  id: Scalars['ID']['output'];
  /** `AccountUser` name. */
  name?: Maybe<Scalars['String']['output']>;
  /** **INTERNAL** `AccountUser` permissions. */
  permissions?: Maybe<UserPermissions>;
};

export type AddAssetLicense = {
  __typename?: 'AddAssetLicense';
  /** `Asset` details. */
  asset?: Maybe<Asset>;
  /** `License` details. */
  license?: Maybe<License>;
};

export type AddAssetLicenseInput = {
  /** `Asset` Id. */
  assetId: Scalars['ID']['input'];
  /** `License` Id. */
  licenseId: Scalars['ID']['input'];
};

export type AddAssetMetadataFieldValue = {
  __typename?: 'AddAssetMetadataFieldValue';
  /** `DateTime` of the `MetadataValue` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** `User` who created the `MetadataValue`. */
  creator: User;
  /** `MetadataValue` Id. */
  id: Scalars['ID']['output'];
  /** `MetadataField` related to the `MetadataValue`. */
  metadataField: MetadataField;
  /** `DateTime` of the `MetadataValue` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** `User` who last modified the `MetadataValue`. */
  modifier?: Maybe<User>;
  /** `MetadataValue` value. */
  value: Scalars['String']['output'];
};

export type AddAssetMetadataFieldValueInput = {
  /** `Asset` Id. */
  assetId: Scalars['ID']['input'];
  /** Metadata field Id. */
  metadataFieldId: Scalars['ID']['input'];
  /** Value to be assigned to `Asset` and `Metadata Field`. */
  value: Scalars['String']['input'];
};

export type AddAssetPreviewImage = {
  __typename?: 'AddAssetPreviewImage';
  /** The newly created `Asset` preview image processing job response. */
  job: AssetPreviewProcessingJob;
};

export type AddAssetPreviewImageInput = {
  /** `Asset` Id. */
  assetId: Scalars['ID']['input'];
  /** `File` Id. Signed Id returned by `uploadFile` mutation. */
  fileId: Scalars['ID']['input'];
};

export type AddAssetRelations = {
  __typename?: 'AddAssetRelations';
  /** `Asset` details. */
  asset: Asset;
  /** Related `Assets` details. */
  relatedAssets?: Maybe<Array<Maybe<Asset>>>;
};

export type AddAssetRelationsInput = {
  /** `Asset` Id. */
  assetId: Scalars['ID']['input'];
  /** Related `Asset` Id list. */
  relatedAssetIds: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type AddAssetTags = {
  __typename?: 'AddAssetTags';
  /** `Asset` details. */
  asset?: Maybe<Asset>;
};

export type AddAssetTagsInput = {
  /** `Asset` Id. */
  id: Scalars['ID']['input'];
  /** List of `Tag` values linked to `Asset`. */
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export type AddAssetsCustomMetadata = {
  __typename?: 'AddAssetsCustomMetadata';
  /** List of the `Asset` Ids where the new `CustomMetadata` values were added. */
  assetIds: Array<Scalars['ID']['output']>;
};

export type AddAssetsCustomMetadataInput = {
  /** Set of the `Asset` Ids on which `CustomMetadata` should be added. */
  assetIds: Array<Scalars['ID']['input']>;
  /** `CustomMetadata` to add to the given set of the `Assets`. */
  customMetadata: Array<CustomMetadataInput>;
};

export type AddCollectionAssets = {
  __typename?: 'AddCollectionAssets';
  /** `Collection` details. */
  collection?: Maybe<Collection>;
};

export type AddCollectionAssetsInput = {
  /** Ids of the `Assets` to add to the `Collection`. Must be in the same `Library` as the `Collection`. */
  assetIds: Array<Scalars['ID']['input']>;
  /** `Collection` Id. */
  collectionId: Scalars['ID']['input'];
};

export type AddCustomMetadata = {
  __typename?: 'AddCustomMetadata';
  /** List of the parent Ids where the new `CustomMetadata` values were added. */
  parentIds: Array<Scalars['ID']['output']>;
};

export type AddCustomMetadataInput = {
  /** `CustomMetadata` property and respective values to add to the given set of parents. */
  customMetadata: Array<CustomMetadataInput>;
  /** Set of parent Ids to which `CustomMetadata` should be added. */
  parentIds: Array<Scalars['ID']['input']>;
};

export type AddCustomMetadataPropertyOptionInput = {
  /** Define `CustomMetadataPropertyOption` as default. Applies to newly created `Assets` only. */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** `CustomMetadataPropertyOption` value. */
  value: Scalars['String']['input'];
};

export type AddCustomMetadataPropertyOptions = {
  __typename?: 'AddCustomMetadataPropertyOptions';
  /** `CustomMetadataProperty` details. */
  customMetadataProperty: CustomMetadataProperty;
};

export type AddCustomMetadataPropertyOptionsInput = {
  /** List of `CustomMetadataPropertyOption` items to add to existing `CustomMetadataProperty`. */
  options: Array<AddCustomMetadataPropertyOptionInput>;
  /** `CustomMetadataProperty` Id. */
  propertyId: Scalars['ID']['input'];
};

export type AddWorkflowChecklistItem = {
  __typename?: 'AddWorkflowChecklistItem';
  /** **BETA** The created `WorkflowChecklistItem`. */
  checklistItem?: Maybe<WorkflowChecklistItem>;
};

export type AddWorkflowChecklistItemInput = {
  /** **BETA** `User` Id of `WorkflowChecklistItem` assignee. */
  assigneeUserId?: InputMaybe<Scalars['ID']['input']>;
  /** **BETA** Content of the `WorkflowChecklistItem`. */
  content: Scalars['String']['input'];
  /** **BETA** `WorkflowTask` Id where the `WorkflowChecklistItem` should be created. */
  id: Scalars['ID']['input'];
};

export type AddWorkflowChecklistPreset = {
  __typename?: 'AddWorkflowChecklistPreset';
  /** **BETA** The created `WorkflowChecklistPreset`. */
  checklistPreset?: Maybe<WorkflowChecklistPreset>;
};

export type AddWorkflowChecklistPresetInput = {
  /** **BETA** `User` Id of `WorkflowChecklistPreset` assignee. */
  assigneeUserId?: InputMaybe<Scalars['ID']['input']>;
  /** **BETA** Content of the `WorkflowChecklistPreset`. */
  content: Scalars['String']['input'];
  /** **BETA** `WorkflowStatus` Id where the `WorkflowChecklistPreset` should be created. */
  id: Scalars['ID']['input'];
};

export type AddWorkflowStatusAssignees = {
  __typename?: 'AddWorkflowStatusAssignees';
  /** **BETA** The updated `WorkflowStatus`. */
  workflowStatus?: Maybe<WorkflowStatus>;
};

export type AddWorkflowStatusAssigneesInput = {
  /** **BETA** `WorkflowStatus` Id. */
  id: Scalars['ID']['input'];
  /** **BETA** List of `User` Ids to be assigned to `WorkflowStatus`. */
  userIds: Array<Scalars['ID']['input']>;
};

export type AddWorkflowTaskAssignees = {
  __typename?: 'AddWorkflowTaskAssignees';
  /** **BETA** The updated `WorkflowTask`. */
  workflowTask?: Maybe<WorkflowTask>;
};

export type AddWorkflowTaskAssigneesInput = {
  /** **BETA** `WorkflowTask` Id. */
  id: Scalars['ID']['input'];
  /** **BETA** List of `User` Ids to assign to the `WorkflowTask`. */
  userIds: Array<Scalars['ID']['input']>;
};

export type AggregatedAssetsCustomMetadata = {
  __typename?: 'AggregatedAssetsCustomMetadata';
  /** **INTERNAL** `CustomMetadataProperty` details. */
  property: CustomMetadataProperty;
  /** **INTERNAL** `AggregatedCustomMetadataSelection` details. */
  values: Array<AggregatedCustomMetadataSelection>;
};

export type AggregatedCustomMetadataSelection = {
  __typename?: 'AggregatedCustomMetadataSelection';
  /** **INTERNAL** `AggregatedCustomMetadataSelection` count. */
  count: Scalars['Int']['output'];
  /** **INTERNAL** `AggregatedCustomMetadataSelection` value. */
  value?: Maybe<Scalars['Any']['output']>;
};

export type AnalyticsDashboardUserPermission = {
  __typename?: 'AnalyticsDashboardUserPermission';
  /** **INTERNAL** Check if `User` has `AnalyticsDashboard` `VIEW` permission. */
  canView: Scalars['Boolean']['output'];
};

export type ApproveAssetSubmissions = {
  __typename?: 'ApproveAssetSubmissions';
  /** The newly created `Asset` Ids. */
  assetIds: Array<Scalars['ID']['output']>;
  /** The `AssetSubmission` Ids that failed creating new `Asset` items. */
  failedIds: Array<Scalars['ID']['output']>;
};

export type ApproveAssetSubmissionsInput = {
  /** `AssetSubmission` Ids. */
  ids: Array<Scalars['ID']['input']>;
  /** `AssetSubmissionRequest` token. */
  token?: InputMaybe<Scalars['String']['input']>;
};

/** `AssetInterface` for `Asset` returnable types. */
export type Asset = {
  /** List of `Asset`'s `Attachments`. */
  attachments?: Maybe<Array<Maybe<AssetAttachment>>>;
  /** Paginated list of `AssetComment` items for `Asset`. */
  comments?: Maybe<AssetCommentItems>;
  /** `Asset` copyright details. */
  copyright?: Maybe<Copyright>;
  /** DateTime of the `Asset` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `creator` is the `User` who created the asset on Frontify. */
  creator: User;
  /** `Asset` permissions of the current `User`. */
  currentUserPermissions: AssetUserPermissions;
  /** List of `CustomMetadataProperty` items and values associated to `Asset`. */
  customMetadata: Array<CustomMetadata>;
  /** Description of the `Asset`. */
  description?: Maybe<Scalars['String']['output']>;
  /** `Asset` expiration date. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** External Id of the `Asset`. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** `Asset` id. */
  id: Scalars['ID']['output'];
  /** List of `Asset`'s licenses. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** Metadata values details. This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataValues?: Maybe<Array<Maybe<MetadataValue>>>;
  /** DateTime of the `Asset`'s last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `modifier` is the `User` who last modified the asset on Frontify. */
  modifier?: Maybe<User>;
  /** Paginated list of `Asset` items related to `Asset`. */
  relatedAssets: AssetItems;
  /** Represents the conversion status of the `Asset`. Example: FINISHED. */
  status: AssetStatusType;
  /** List of `Asset`'s tags. */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Title of the `Asset`. */
  title: Scalars['String']['output'];
  /** **BETA** `AssetVariant` items of the asset. */
  variants?: Maybe<AssetVariantItems>;
  /** **BETA** The `WorkflowTask` this `Asset` is linked to. */
  workflowTask?: Maybe<WorkflowTask>;
};


/** `AssetInterface` for `Asset` returnable types. */
export type AssetCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetCommentQueryInput>;
};


/** `AssetInterface` for `Asset` returnable types. */
export type AssetRelatedAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** `AssetInterface` for `Asset` returnable types. */
export type AssetVariantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetAttachment = Attachment & Node & {
  __typename?: 'AssetAttachment';
  /**
   * **DEPRECATED** Id of the `Asset` `Attachment`. This field will be removed. | Date: 2022-07-01T00:00:00.000+00:00
   * @deprecated This field will be removed. | Date: 2022-07-01T00:00:00.000+00:00
   */
  assetId: Scalars['ID']['output'];
  /** `DateTime` of the `Attachment` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `creator` is the `User` who created this `Attachment`. */
  creator: User;
  /** Signed `Url` to download the original `AssetAttachment` from Frontify. */
  downloadUrl?: Maybe<Scalars['Url']['output']>;
  /** Extension of the `Attachment` `File`. */
  extension?: Maybe<Scalars['String']['output']>;
  /** External Id of the `Attachment`. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** Filename of the `Attachment` `File`. */
  filename?: Maybe<Scalars['String']['output']>;
  /** `Attachment` Id. */
  id: Scalars['ID']['output'];
  /** `DateTime` of the `Attachment`last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `modifier` is the `User` who last modified this `Attachment`. */
  modifier?: Maybe<User>;
  /** Name of the `Attachment`. */
  name?: Maybe<Scalars['String']['output']>;
  /** Size of the `Attachment` `File` in bytes. */
  size?: Maybe<Scalars['BigInt']['output']>;
  /** Mediatype (MIME) of the `Attachment`. */
  type?: Maybe<Scalars['String']['output']>;
};


export type AssetAttachmentDownloadUrlArgs = {
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
  validityInDays?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetComment = Comment & Node & {
  __typename?: 'AssetComment';
  /** The content of the `AssetComment`. Contains `User` mentions in the format `@[user:USER_ID].` */
  content: Scalars['String']['output'];
  /** `DateTime` of the `AssetComment`'s creation. */
  createdAt: Scalars['DateTime']['output'];
  /** `User` who created the `AssetComment`. */
  creator: User;
  /** `AssetComment` permissions of the current `User`. */
  currentUserPermissions: AssetCommentUserPermissions;
  /** `AssetComment` id. */
  id: Scalars['ID']['output'];
  /** Indicates if an `AssetComment` is resolved or not. */
  isResolved: Scalars['Boolean']['output'];
  /** The `AssetComment` `Marking` if it exists. */
  marking?: Maybe<Marking>;
  /** Mentioned `User` list in the `content` field. */
  mentionedUsers: Array<Maybe<User>>;
  /** `DateTime` of the `AssetComment`'s last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** `User` who last modified the `AssetComment`. */
  modifier?: Maybe<User>;
  /** `AssetComment`'s `AssetCommentReplyItems` list. */
  replies: AssetCommentReplyItems;
};


export type AssetCommentRepliesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetCommentItems = {
  __typename?: 'AssetCommentItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of `AssetComment` type comments. */
  items?: Maybe<Array<Maybe<AssetComment>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type AssetCommentQueryInput = {
  /** Filter `AssetComment` by status. */
  status?: AssetCommentStatusFilter;
};

export type AssetCommentReply = Comment & {
  __typename?: 'AssetCommentReply';
  /** The content of the `AssetCommentReply`. Contains `User` mentions in the format `@[user:USER_ID].` */
  content: Scalars['String']['output'];
  /** The `DateTime` of creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` representing the creator. */
  creator: User;
  /** The id of the current `AssetCommentReply`. */
  id: Scalars['ID']['output'];
  /** Mentioned `User` list in the `content` field. */
  mentionedUsers: Array<Maybe<User>>;
  /** The `DateTime` of the last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` representing the last modifier. */
  modifier?: Maybe<User>;
};

export type AssetCommentReplyItems = {
  __typename?: 'AssetCommentReplyItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `AssetCommentReply`. */
  items?: Maybe<Array<Maybe<AssetCommentReply>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

/** Defines how the `AssetComment` list should be filtered. */
export enum AssetCommentStatusFilter {
  All = 'ALL',
  Open = 'OPEN',
  Resolved = 'RESOLVED'
}

export type AssetCommentUserPermissions = {
  __typename?: 'AssetCommentUserPermissions';
  /** Check if the current user can delete this `AssetComment`. */
  canDelete: Scalars['Boolean']['output'];
  /** Check if the current user can edit this `AssetComment`. */
  canEdit: Scalars['Boolean']['output'];
  /** Check if the current user can reply to this `AssetComment`. */
  canReply: Scalars['Boolean']['output'];
};

export type AssetItems = {
  __typename?: 'AssetItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** `Asset` items list. */
  items?: Maybe<Array<Maybe<Asset>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type AssetPreviewProcessingJob = {
  __typename?: 'AssetPreviewProcessingJob';
  /** `Asset` Id. */
  assetId: Scalars['ID']['output'];
};

export type AssetProcessingJob = {
  __typename?: 'AssetProcessingJob';
  /** `Asset` Id. */
  assetId: Scalars['ID']['output'];
};

export type AssetQueryFilterConditionInput = {
  /** **REQUIRED** for type `CUSTOM_METADATA_VALUE` to identify which `CustomMetadataProperty` it is compared against. You can find all available `CustomMetadataProperty` on the project. */
  customMetadataPropertyId?: InputMaybe<Scalars['ID']['input']>;
  /** **REQUIRED** for type `METADATA_VALUE` to identify which metadata field it is compared against. You can find all available `metadataFields` on the project. */
  metadataFieldId?: InputMaybe<Scalars['ID']['input']>;
  /** Defines how the value of the `Asset` is compared to the provided value. */
  operator?: InputMaybe<ConditionOperator>;
  /** Defines which property of the `Asset` is compared to the provided value. */
  type: ConditionType;
  /** The value which is compared against the property of the `Asset`. */
  value: Scalars['String']['input'];
};

export type AssetQueryFilterInput = {
  /** The Asset must pass **all conditions** in this List to be present in the result set. */
  andConditions?: InputMaybe<Array<InputMaybe<AssetQueryFilterConditionInput>>>;
  /** The Asset must pass **at least one condition** in this List to be present in the result set. */
  orConditions?: InputMaybe<Array<InputMaybe<AssetQueryFilterConditionInput>>>;
};

/** Search sorting option. Defines how the search results should be sorted. */
export enum AssetQueryFilterSortType {
  /** Sorts the results by the newest `Assets`. */
  Newest = 'NEWEST',
  /** Sorts the results by the oldest `Assets`. */
  Oldest = 'OLDEST',
  /** Sorts the results by the relevance (query score). */
  Relevance = 'RELEVANCE',
  /** Sorts the results ascending by the title of the `Assets`. */
  TitleAscending = 'TITLE_ASCENDING',
  /** sorts the results descending by the title of the `Assets`. */
  TitleDescending = 'TITLE_DESCENDING'
}

export type AssetQueryInFolderInput = {
  /** `Folder` Id. */
  id: Scalars['ID']['input'];
};

export type AssetQueryInput = {
  /** Limit the result set by the externalId of an `Asset`. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** Use filters to reduce the set of matched `Asset` items by complex filtering. */
  filter?: InputMaybe<AssetQueryFilterInput>;
  /** Limit the result set to a specific `Folder` of this `Library`. */
  inFolder?: InputMaybe<AssetQueryInFolderInput>;
  /** Limit the result set by the search term. */
  search?: InputMaybe<Scalars['String']['input']>;
  /** Sort set of the matched `AssetItems`. */
  sortBy?: InputMaybe<AssetQueryFilterSortType>;
  /** **DEPRECATED** Filter the `Asset` types present in the result set.  This field will be removed. Use `types` instead. | Date: 2022-07-01T00:00:00.000+00:00 */
  type?: InputMaybe<Array<InputMaybe<AssetType>>>;
  /** Limit the result set by the `Asset` types. */
  types?: InputMaybe<Array<InputMaybe<AssetType>>>;
};

/** List of possible `Asset` status types. */
export enum AssetStatusType {
  Finished = 'FINISHED',
  Processing = 'PROCESSING',
  ProcessingFailed = 'PROCESSING_FAILED'
}

export type AssetSubmission = {
  __typename?: 'AssetSubmission';
  /** `DateTime` of the `AssetSubmission` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the associated `AssetSubmissionRequest`. */
  creator: User;
  /** `AssetSubmission` Id. */
  id: Scalars['ID']['output'];
  /** Metadata to be linked to the `Asset` once the `AssetSubmission` is approved. */
  metadata?: Maybe<Array<CustomMetadata>>;
  /** `DateTime` of the `AssetSubmission` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `AssetSubmission`. */
  modifier?: Maybe<User>;
  /** `AssetSubmissionRequest` id linked to the `AssetSubmission`. */
  requestId: Scalars['ID']['output'];
  /** `AssetSubmission` status. */
  status: AssetSubmissionStatus;
  /** `AssetSubmission` submitter. */
  submitter: AssetSubmissionSubmitter;
};

export type AssetSubmissionCopyrightInput = {
  /** `AssetSubmission`'s `Asset` author. */
  author?: InputMaybe<Scalars['String']['input']>;
  /** `AssetSubmission`'s `Asset` copyright notice. Supports medium text length (16 MB). */
  notice?: InputMaybe<Scalars['String']['input']>;
  /** `AssetSubmission`'s `Asset` copyright status. */
  status?: CopyrightStatus;
};

export type AssetSubmissionCustomMetadataInput = {
  /** `CustomMetadataProperty` Id. */
  propertyId: Scalars['ID']['input'];
  /** `CustomMetadataProperty` value. */
  value: Scalars['Any']['input'];
};

export type AssetSubmissionMetadataInput = {
  /** `AssetSubmission`'s `Asset` copyright details. */
  copyright?: InputMaybe<AssetSubmissionCopyrightInput>;
  /** `AssetSubmission`'s `Asset` `CustomMetadataProperty` values. */
  custom?: InputMaybe<Array<AssetSubmissionCustomMetadataInput>>;
  /** `AssetSubmission`'s `Asset` description. */
  description?: InputMaybe<Scalars['String']['input']>;
};

export type AssetSubmissionRequest = {
  __typename?: 'AssetSubmissionRequest';
  /** `AssetSubmissionRequest` configuration settings. */
  configuration?: Maybe<Scalars['Json']['output']>;
  /** `DateTime` of the `AssetSubmissionRequest` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the `AssetSubmissionRequest`. */
  creator: User;
  /** `AssetSubmissionRequest` description. */
  description: Scalars['String']['output'];
  /** `AssetSubmissionRequest` Id. */
  id: Scalars['ID']['output'];
  /** `DateTime` of the `AssetSubmissionRequest` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `AssetSubmissionRequest`. */
  modifier?: Maybe<User>;
  /** `AssetSubmissionRequest` destination `Project` id. */
  projectId: Scalars['ID']['output'];
  /** `AssetSubmissionRequest` title. */
  title: Scalars['String']['output'];
  /** **INTERNAL** `AssetSubmissionRequest` tokens. */
  tokens: Array<AssetSubmissionRequestToken>;
};

export type AssetSubmissionRequestToken = {
  __typename?: 'AssetSubmissionRequestToken';
  /** **INTERNAL** `DateTime` of the `AssetSubmissionRequest` token's creation. */
  createdAt: Scalars['DateTime']['output'];
  /** **INTERNAL** The `User` who created the `AssetSubmissionRequest` token. */
  creator: User;
  /** **INTERNAL** Email of the `AssetSubmissionRequest` token recipient. */
  email?: Maybe<Scalars['String']['output']>;
  /** **INTERNAL** `DateTime` of the `AssetSubmissionRequest` token expiration. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** **INTERNAL** `DateTime` of the `AssetSubmissionRequest` token's last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** **INTERNAL** The `User` who last modified the `AssetSubmissionRequest` token. */
  modifier?: Maybe<User>;
  /** **INTERNAL** Name of the `AssetSubmissionRequest` token recipient. */
  name?: Maybe<Scalars['String']['output']>;
  /** **INTERNAL** `AssetSubmissionRequest` id linked to token. */
  requestId: Scalars['ID']['output'];
  /** **INTERNAL** `AssetSubmissionRequest` token. */
  token?: Maybe<Scalars['String']['output']>;
};

/** Defines all the possible `AssetSubmission` statuses. */
export enum AssetSubmissionStatus {
  Approved = 'APPROVED',
  Archived = 'ARCHIVED',
  Rejected = 'REJECTED',
  Submitted = 'SUBMITTED'
}

export type AssetSubmissionSubmitter = {
  __typename?: 'AssetSubmissionSubmitter';
  /** `AssetSubmission` submitter email. */
  email: Scalars['String']['output'];
  /** `AssetSubmission` submitter name. */
  name: Scalars['String']['output'];
};

export type AssetSubmissionSubmitterInput = {
  /** `AssetSubmission` submitter email. */
  email: Scalars['Email']['input'];
  /** `AssetSubmission` submitter name. */
  name: Scalars['String']['input'];
};

export type AssetTemplateItem = {
  __typename?: 'AssetTemplateItem';
  /** **INTERNAL** Item `Changes`. */
  changes?: Maybe<Scalars['Any']['output']>;
  /** **INTERNAL** Item `Settings`. */
  settings?: Maybe<Scalars['Any']['output']>;
};

/** The type of an `asset`. */
export enum AssetType {
  Audio = 'AUDIO',
  Document = 'DOCUMENT',
  File = 'FILE',
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type AssetUserPermissions = {
  __typename?: 'AssetUserPermissions';
  /** Check if current user has `Comment` creation permissions for a specific `Asset`. */
  canComment: Scalars['Boolean']['output'];
  /** Check if current user has `Asset` deleting permissions for a specific `Asset`. */
  canDelete: Scalars['Boolean']['output'];
  /** Check if current user has `Asset` download permissions for a specific `Asset`. */
  canDownload: Scalars['Boolean']['output'];
  /** Check if current user has `Asset` editing permissions for a specific `Asset`. */
  canEdit: Scalars['Boolean']['output'];
};

export type AssetVariant = {
  __typename?: 'AssetVariant';
  /** Signed `Url` to download the original `AssetVariant` from Frontify. */
  downloadUrl?: Maybe<Scalars['Url']['output']>;
  /** Filename of the `AssetVariant` `File`. */
  filename?: Maybe<Scalars['String']['output']>;
  /** The key to identify the variant. */
  key: Scalars['ID']['output'];
};


export type AssetVariantDownloadUrlArgs = {
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
  validityInDays?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetVariantItems = {
  __typename?: 'AssetVariantItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** `AssetVariant` items list. */
  items: Array<Maybe<AssetVariant>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type AssetVariantProcessingJob = {
  __typename?: 'AssetVariantProcessingJob';
  /** `AssetVariant` Id. */
  variantId: Scalars['ID']['output'];
};

/** `AttachmentInterface` for `Attachment` returnable types. */
export type Attachment = {
  /** The `Attachment`'s related `Asset` Id. */
  assetId: Scalars['ID']['output'];
  /** `DateTime` of the `Attachment` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the `Attachment` on Frontify. */
  creator: User;
  /** The `Attachment`'s original file extension. */
  extension?: Maybe<Scalars['String']['output']>;
  /** The `Attachment`'s External Id. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** The `Attachment`'s filename. */
  filename?: Maybe<Scalars['String']['output']>;
  /** `Attachment` Id. */
  id: Scalars['ID']['output'];
  /** `DateTime` of the `Attachment`'s last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `Attachment` on Frontify. */
  modifier?: Maybe<User>;
  /** The `Attachment`'s name or title. */
  name?: Maybe<Scalars['String']['output']>;
  /** The `Attachment`'s size in bytes. */
  size?: Maybe<Scalars['BigInt']['output']>;
  /** The `Attachment`'s Media (MIME) type. */
  type?: Maybe<Scalars['String']['output']>;
};

export type AttachmentProcessingJob = {
  __typename?: 'AttachmentProcessingJob';
  /** `Attachment` Id. */
  attachmentId: Scalars['ID']['output'];
};

export type Audio = Asset & Node & {
  __typename?: 'Audio';
  /** `Attachment` items linked to `Asset`. */
  attachments?: Maybe<Array<Maybe<AssetAttachment>>>;
  /** Represents the Author of the `Asset`. Example: Photographer Name. */
  author?: Maybe<Scalars['String']['output']>;
  /** Paginated list of `AssetComment` items for `Asset`. */
  comments?: Maybe<AssetCommentItems>;
  /** `Asset` copyright details. */
  copyright?: Maybe<Copyright>;
  /** `DateTime` of the `Asset` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the `Asset`. */
  creator: User;
  /** Current `User` `Asset` permissions. */
  currentUserPermissions: AssetUserPermissions;
  /** List of `CustomMetadataProperty` items and values associated to `Asset`. */
  customMetadata: Array<CustomMetadata>;
  /** Description of the `Asset`. */
  description?: Maybe<Scalars['String']['output']>;
  /** Signed `Url` to download the original `Audio` type file. */
  downloadUrl?: Maybe<Scalars['Url']['output']>;
  /** `Asset` expiry date. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Extension of the `Asset` `File`. */
  extension: Scalars['String']['output'];
  /** External Id of the `Asset`. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** `ExternalProduct` items linked to `Asset`. */
  externalProducts?: Maybe<Array<Maybe<ExternalProduct>>>;
  /** Original filename of the `Asset` `File`. */
  filename?: Maybe<Scalars['String']['output']>;
  /** `Asset` id. */
  id: Scalars['ID']['output'];
  /** `License` items linked to `Asset`. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `MetadataValue` items linked to `Asset`. This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataValues?: Maybe<Array<Maybe<MetadataValue>>>;
  /** `DateTime` of the `Asset` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `Asset`. */
  modifier?: Maybe<User>;
  /** Preview `Url` of converted `Audio` file in mp3 format. */
  previewUrl: Scalars['Url']['output'];
  /** Paginated list of `Asset` items related to `Asset`. */
  relatedAssets: AssetItems;
  /** Size of the `Asset` `File` in bytes. */
  size?: Maybe<Scalars['BigInt']['output']>;
  /** Represents the conversion status of the `Asset`. Example: FINISHED. */
  status: AssetStatusType;
  /** List of `Tag` items linked to `Asset` */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Title of the `Asset`. */
  title: Scalars['String']['output'];
  /** **BETA** `AssetVariant` items of the asset. */
  variants?: Maybe<AssetVariantItems>;
  /** **BETA** The `WorkflowTask` this `Asset` is linked to. */
  workflowTask?: Maybe<WorkflowTask>;
};


export type AudioCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetCommentQueryInput>;
};


export type AudioDownloadUrlArgs = {
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
  validityInDays?: InputMaybe<Scalars['Int']['input']>;
};


export type AudioPreviewUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type AudioRelatedAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type AudioVariantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Brand = Node & {
  __typename?: 'Brand';
  /** `Brand` avatar. */
  avatar?: Maybe<Scalars['Url']['output']>;
  /**
   * **DEPRECATED** `Brand` color. This field will be removed. Use `rgbaColor` instead. | Date: 2023-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `rgbaColor` instead. | Date: 2023-01-01T00:00:00.000+00:00
   */
  color?: Maybe<Scalars['String']['output']>;
  /** `Brand` `CustomMetadataProperty` items list. */
  customMetadataProperties: Array<CustomMetadataProperty>;
  /** **BETA** Paginated list of `Guideline` items for `Brand`. */
  guidelines?: Maybe<GuidelineItems>;
  /** `Brand` Id. */
  id: Scalars['ID']['output'];
  /** Retrieve all `Library` items. */
  libraries?: Maybe<LibraryItems>;
  /** `Brand` name. */
  name: Scalars['String']['output'];
  /**
   * **DEPRECATED** Retrieve all `Projects`. This field will be removed. Use `libraries` or `workspaceProjects` instead. | Date: 2023-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `libraries` or `workspaceProjects` instead. | Date: 2023-01-01T00:00:00.000+00:00
   */
  projects?: Maybe<Array<Maybe<Project>>>;
  /** `Brand` color. */
  rgbaColor?: Maybe<RgbaColor>;
  /** **BETA** Search for the assets on the brand level. */
  search?: Maybe<BrandSearchItems>;
  /** `Brand` slug. */
  slug?: Maybe<Scalars['String']['output']>;
  /** Retrieve all `Workspace` items. */
  workspaceProjects?: Maybe<WorkspaceItems>;
};


export type BrandGuidelinesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type BrandLibrariesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<LibraryQueryInput>;
};


export type BrandProjectsArgs = {
  types?: InputMaybe<Array<InputMaybe<ProjectType>>>;
};


export type BrandSearchArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<BrandQueryInput>;
};


export type BrandWorkspaceProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<WorkspaceProjectQueryInput>;
};

export type BrandQueryFilterInput = {
  /** **BETA** Filter set of the matched results by the externalId. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** Filter set of the matched results by single tag or list of tags. */
  hasTags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** **BETA** Specify the sources to search in. */
  sources?: InputMaybe<Array<BrandQuerySourceInput>>;
};

export type BrandQueryInput = {
  /** Use filters to reduce the set of matched results. */
  filter?: InputMaybe<BrandQueryFilterInput>;
  /** **DEPRECATED** Specify the sources of the matched results. This field will be removed. Use `filter.sources` instead. | Date: 2023-07-01T00:00:00.000+00:00 */
  searchIn?: InputMaybe<Array<InputMaybe<BrandSearchQuerySource>>>;
  /** Sort order of matched results. */
  sortBy?: InputMaybe<BrandQuerySortByInput>;
  /** Search term used to retrieve matched results. */
  term?: InputMaybe<Scalars['String']['input']>;
};

/** Search sorting option. Defines how the search results should be sorted. */
export enum BrandQuerySortByInput {
  /** Sort the results by newest. */
  Newest = 'NEWEST',
  /** Sort the results by oldest. */
  Oldest = 'OLDEST',
  /** Sort the results by relevance. */
  Relevance = 'RELEVANCE'
}

export type BrandQuerySourceInput = {
  /** Specify the Ids of the source type you want to search in. If no Ids are specified, a search will be performed on all accessible Ids of the type. */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Specify the source type to search in. */
  type: BrandQuerySourceTypeInput;
};

/** Search sources option. Defines the location of the search results. */
export enum BrandQuerySourceTypeInput {
  /** Search for the results in `Libraries`. */
  Libraries = 'LIBRARIES',
  /** Search for the results in the `LibraryPages`. */
  LibraryPages = 'LIBRARY_PAGES',
  /** Search for the results in the `WorkspaceProjects`. */
  WorkspaceProjects = 'WORKSPACE_PROJECTS'
}

export type BrandSearchItems = {
  __typename?: 'BrandSearchItems';
  /** List of `BrandSearchResult` edges. */
  edges?: Maybe<Array<Maybe<BrandSearchResultEdge>>>;
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of `BrandSearchResult` items. */
  items?: Maybe<Array<Maybe<BrandSearchResult>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

/** Search sources option. Defines the location of the search results. */
export enum BrandSearchQuerySource {
  /** Search for the results in the whole `Brand`. */
  Everywhere = 'EVERYWHERE',
  /** Search for the results in `Libraries`. */
  Libraries = 'LIBRARIES',
  /** Search for the results in the `LibraryPages`. */
  LibraryViews = 'LIBRARY_VIEWS',
  /** Search for the results in the `WorkspaceProjects`. */
  WorkspaceProjects = 'WORKSPACE_PROJECTS'
}

export type BrandSearchResult = Audio | Document | File | Image | Video;

export type BrandSearchResultEdge = {
  __typename?: 'BrandSearchResultEdge';
  /** `BrandSearchResult` node. */
  node?: Maybe<BrandSearchResult>;
  /** `BrandSearchResult` title. */
  title: Scalars['String']['output'];
};

export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  /** `Breadcrumb` folder id. */
  id?: Maybe<Scalars['ID']['output']>;
  /** `Breadcrumb` folder name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  /** `Collection`'s `Asset` items list. */
  assets: AssetItems;
  /** `Collection`'s permissions of the current `User`. */
  currentUserPermissions: CollectionUserPermissions;
  /** `Collection` Id. */
  id: Scalars['ID']['output'];
  /**
   * **DEPRECATED** `Collection`'s privacy state setting. This field will be removed. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. | Date: 2024-01-01T00:00:00.000+00:00
   */
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  /** `Collection` name. */
  name: Scalars['String']['output'];
};


export type CollectionAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type CollectionItems = {
  __typename?: 'CollectionItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of `Collection` items. */
  items?: Maybe<Array<Maybe<Collection>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type CollectionUserPermissions = {
  __typename?: 'CollectionUserPermissions';
  /** Check if the current user can add `Assets` in this `Collection`. */
  canAddAssets: Scalars['Boolean']['output'];
  /** Check if the current user can remove `Assets` from this `Collection`. */
  canRemoveAssets: Scalars['Boolean']['output'];
};

/** `CommentInterface` for `Comment` returnable types. */
export type Comment = {
  /** The `Comment` message. */
  content: Scalars['String']['output'];
  /** The `DateTime` of the `Comment` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` representing the `Comment` creator. */
  creator: User;
  /** The `Comment` identifier. */
  id: Scalars['ID']['output'];
  /** The `DateTime` of the `Comment` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The last `User` to modify the `Comment`. */
  modifier?: Maybe<User>;
};

/**
 * Condition operators. Defines how the value of the `Asset` is compared to the provided value.
 * Supported Operators:
 * - **IS**: equals to the provided value.
 * - **IS_NOT**: is not equal to provided value.
 */
export enum ConditionOperator {
  Is = 'IS',
  IsNot = 'IS_NOT'
}

/**
 * Condition types. A Condition defines which field value of the `Asset` is compared against a given value.
 * We currently support 4 different kinds of Conditions on `Assets`:
 * - **TAG**: Refers to a tag of the `Asset`.
 * - **METADATA_VALUE**: Refers to a value of a custom `MetadataField` of an `Asset`.
 * - **CUSTOM_METADATA_VALUE**: Refers to a value of a `CustomMetadata` of an `Asset`.
 * - **EXTERNAL_ID**: Refers to the `externalId` assigned to the `Asset`.
 * - **FILE_EXTENSION**: Refers to the file extension of an `Asset`.
 */
export enum ConditionType {
  CustomMetadataValue = 'CUSTOM_METADATA_VALUE',
  ExternalId = 'EXTERNAL_ID',
  FileExtension = 'FILE_EXTENSION',
  MetadataValue = 'METADATA_VALUE',
  Tag = 'TAG'
}

export type Copyright = {
  __typename?: 'Copyright';
  /** **INTERNAL** Asset copyright must be accepted before downloading the asset. */
  isDownloadConsentRequired?: Maybe<Scalars['Boolean']['output']>;
  /** Asset `copyright` notice. */
  notice?: Maybe<Scalars['String']['output']>;
  /** Asset `copyright` status. */
  status: CopyrightStatus;
};

/** List of possible asset `copyright` status. */
export enum CopyrightStatus {
  Copyrighted = 'COPYRIGHTED',
  Public = 'PUBLIC',
  Unknown = 'UNKNOWN'
}

export type CreateAccountUser = {
  __typename?: 'CreateAccountUser';
  /** The newly created `AccountUser`. */
  accountUser?: Maybe<AccountUser>;
};

export type CreateAccountUserInput = {
  /** Email of the `AccountUser` to be created. */
  email: Scalars['Email']['input'];
  /** Name of the `AccountUser` to be created. Must be a valid non-empty string. */
  name: Scalars['String']['input'];
};

export type CreateAsset = {
  __typename?: 'CreateAsset';
  /** The newly created `Asset` processing job response. */
  job: AssetProcessingJob;
};

export type CreateAssetComment = {
  __typename?: 'CreateAssetComment';
  /** `AssetComment` details. */
  comment: AssetComment;
};

export type CreateAssetCommentInput = {
  /** Id of the `Asset` where you wish to create a new `AssetComment`. */
  assetId: Scalars['ID']['input'];
  /** `AssetComment` content. Can include `User` mentions by wrapping an authorized `Project` `User` Id in the form of `@[user:<id>]` where `<id>` is the `User` integer or global identifier. */
  content: Scalars['String']['input'];
  /** Add a `Marking` (highlighted area) to the new `AssetComment`. */
  marking?: InputMaybe<MarkingInput>;
};

export type CreateAssetInput = {
  /** Represents the Author of the `Asset`. Example: Photographer Name */
  author?: InputMaybe<Scalars['String']['input']>;
  /** Add `Asset` copyright details. */
  copyright?: InputMaybe<CreateCopyrightInput>;
  /** `Asset` description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** **Cannot be used in conjunction with `parentId` that is from a `Folder`.** An array of strings representing the directory, if a folder does not exist, it is created. Example: ["My Folder", "Sub-Folder"] will create the necessary folders if they do not yet exist and place the `Asset` in it. */
  directory?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Expiry Date. `Asset` will expire once the defined date is reached. */
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** `Asset` external Id. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** File Id. Signed Id returned in `uploadFile`. */
  fileId: Scalars['ID']['input'];
  /** The parent Id, where the `Asset` should be located in. Should either be a `Library`, `WorkspaceProject` or `Folder` Id. **Cannot be used in conjunction with `directory` if the Id is from a `Folder`. ** */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** **DEPRECATED** `Library` or `Workspace` Id. This value is ignored if `parentId` is set. This field will be removed. Use `parentId` instead. | Date: 2023-07-01T00:00:00.000+00:00 */
  projectId?: InputMaybe<Scalars['ID']['input']>;
  /** Skip file's EXIF metadata. When true, it will ignore all file metadata contents. */
  skipFileMetadata?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of tags to create with `Asset` */
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
  /** `Asset` title or display name. */
  title: Scalars['String']['input'];
  /** **DEPRECATED** `Asset` workflow status. Workflow logic will be automatically managed if not properly set. This field will be removed. | Date: 2022-07-01T00:00:00.000+00:00 */
  workflowStatus?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAssetSubmissionRequest = {
  __typename?: 'CreateAssetSubmissionRequest';
  /** The newly created `AssetSubmissionRequest`. */
  assetSubmissionRequest: AssetSubmissionRequest;
};

export type CreateAssetSubmissionRequestInput = {
  /** **INTERNAL** `AssetSubmissionRequest` auto approval configuration settings. */
  allowAutoApproval?: InputMaybe<Scalars['Boolean']['input']>;
  /** `AssetSubmissionRequest` description. */
  description: Scalars['String']['input'];
  /** `AssetSubmissionRequest` Id. */
  destinationId: Scalars['ID']['input'];
  /** `AssetSubmissionRequest` title. */
  title: Scalars['String']['input'];
};

export type CreateAssetSubmissions = {
  __typename?: 'CreateAssetSubmissions';
  /** The newly created `AssetSubmission` Ids. */
  assetSubmissionIds: Array<Maybe<Scalars['ID']['output']>>;
};

export type CreateAssetSubmissionsInput = {
  /** **INTERNAL** Should immediately create the `Assets` without requiring further approval. */
  autoApprove?: InputMaybe<Scalars['Boolean']['input']>;
  /** File Ids. Signed Ids returned in `uploadFile`. */
  fileIds: Array<Scalars['ID']['input']>;
  /** `AssetSubmission`'s `Assets` metadata. */
  metadata?: InputMaybe<AssetSubmissionMetadataInput>;
  /** `AssetSubmissionRequest` Id. */
  requestId: Scalars['ID']['input'];
  /** `AssetSubmission` submitter. */
  submitter: AssetSubmissionSubmitterInput;
  /** `AssetSubmissionRequest` token. */
  token: Scalars['String']['input'];
};

export type CreateAssetVariant = {
  __typename?: 'CreateAssetVariant';
  /** The newly created `AssetVariant` processing job response. */
  job: AssetVariantProcessingJob;
};

export type CreateAssetVariantInput = {
  /** `Asset` Id. Currently, only `Assets` from Logo and Icon `Library` type are supported. */
  assetId: Scalars['ID']['input'];
  /** File Id. Signed Id returned in `uploadFile`. */
  fileId: Scalars['ID']['input'];
  /** `AssetVariant` key composed of the color space and the file extension. Examples: RGB:JPG, CMYK:SVG */
  key: Scalars['String']['input'];
};

export type CreateAssetWorkflowTask = {
  __typename?: 'CreateAssetWorkflowTask';
  /** **BETA** The newly created `WorkflowTask`. */
  workflowTask?: Maybe<WorkflowTask>;
};

export type CreateAssetWorkflowTaskInput = {
  /** **BETA** Id of the `Asset` which should be linked to the `WorkflowTask`. */
  assetId: Scalars['ID']['input'];
  /** **BETA** List of `User` ids to be assigned to the `WorkflowTask`. Currently, only one Id is supported. */
  assigneeUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** **BETA** `WorkflowTask` enter message. Optionally required by a `EnterRule` of the given `WorkflowStatus`. */
  statusEnterMessage?: InputMaybe<Scalars['String']['input']>;
  /** **BETA** Id of the `WorkflowStatus` where the `WorkflowTask` should be created. */
  workflowStatusId: Scalars['ID']['input'];
};

export type CreateAttachment = {
  __typename?: 'CreateAttachment';
  /** The newly created `Attachment` processing job response. */
  job: AttachmentProcessingJob;
};

export type CreateAttachmentInput = {
  /** Attachment external Id. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** File Id. Signed Id returned in `uploadFile`. */
  fileId: Scalars['ID']['input'];
  /** Attachment name or display name. */
  name: Scalars['String']['input'];
  /** Parent Id. */
  parentId: Scalars['ID']['input'];
};

export type CreateCollection = {
  __typename?: 'CreateCollection';
  /** The newly created `Collection` details. */
  collection: Collection;
};

export type CreateCollectionInput = {
  /** Name of the `Collection`. */
  name: Scalars['String']['input'];
  /** Id of the parent where you wish to create a new `Collection`. Currently supported for `Library` type parent entities only. */
  parentId: Scalars['ID']['input'];
};

export type CreateCopyrightInput = {
  /** `Asset` copyright notice. Supports medium text length. */
  notice?: InputMaybe<Scalars['String']['input']>;
  /** `Asset` copyright status. */
  status?: CopyrightStatus;
};

export type CreateCustomMetadataProperty = {
  __typename?: 'CreateCustomMetadataProperty';
  /**
   * **DEPRECATED** **INTERNAL** The newly created `CustomMetadataProperty`. This field will be removed. Use `property` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `property` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  customMetadataProperty: CustomMetadataProperty;
  /** The newly created `CustomMetadataProperty`. */
  property: CustomMetadataProperty;
};

export type CreateCustomMetadataPropertyInput = {
  /** Set a `CustomMetadataProperty` default value. This setting will be ignored for properties that are not of `SELECT` or `MULTISELECT` type  (use options for these cases instead). Applies to newly uploaded `Assets` only. */
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  /** **INTERNAL** Set a dependency to another `CustomMetadataProperty`. */
  dependency?: InputMaybe<CustomMetadataPropertyDependencyInput>;
  /** `CustomMetadataProperty` help text. */
  helpText?: InputMaybe<Scalars['String']['input']>;
  /** **INTERNAL** Define if `CustomMetadataProperty` is editable. */
  isEditable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Define if `CustomMetadataProperty` is required. */
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** **INTERNAL** Define if `CustomMetadataProperty` is searchable. */
  isSearchable?: InputMaybe<Scalars['Boolean']['input']>;
  /** **INTERNAL** Define if `CustomMetadataProperty` is viewable. */
  isViewable?: InputMaybe<Scalars['Boolean']['input']>;
  /** `CustomMetadataProperty` display name. */
  name: Scalars['String']['input'];
  /** `CustomMetadataProperty` parent Id. */
  parentId: Scalars['ID']['input'];
  /** **INTERNAL** Permissions defined for this property. */
  permissions?: InputMaybe<Array<CustomMetadataPropertyPermissionInput>>;
  /** Position in the list of newly created `CustomMetadataProperty`. */
  position?: InputMaybe<CustomMetadataPropertyPositionInput>;
  /** **INTERNAL** Determines if the value of a `CustomMetadataProperty` of type `URL` should be opened in a new tab. */
  shouldBeOpenedInANewTab?: InputMaybe<Scalars['Boolean']['input']>;
  /** `CustomMetadataProperty` type. */
  type: CreateCustomMetadataPropertyTypeInput;
};

export type CreateCustomMetadataPropertyTypeInput = {
  /** `CustomMetadataProperty` type name. */
  name: CustomMetadataPropertyTypeName;
  /** Define CustomMetadataProperty` options for `SELECT` or `MULTISELECT` type properties. */
  options?: InputMaybe<Array<CreateCustomMetadataPropertyTypeOptionInput>>;
};

export type CreateCustomMetadataPropertyTypeOptionInput = {
  /** Define `CustomMetadataPropertyOption` as default. Applies to newly created `Assets` only. */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** `CustomMetadataPropertyOption` value. */
  value: Scalars['String']['input'];
};

export type CreateExternalAsset = {
  __typename?: 'CreateExternalAsset';
  /** The newly created `Asset` processing job response. */
  job: AssetProcessingJob;
};

export type CreateExternalAssetInput = {
  /** External `Asset` allow interactions. */
  allowInteractions?: InputMaybe<Scalars['Boolean']['input']>;
  /** Represents the Author of the External `Asset`. */
  author?: InputMaybe<Scalars['String']['input']>;
  /** External `Asset` copyright details. */
  copyright?: InputMaybe<CreateCopyrightInput>;
  /** External `Asset` description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** External `Asset` destination folder. Folders will be created if they don't exist. */
  directory?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Expiry Date. External `Asset` will expire once the defined date is reached. */
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** External `Asset` external Id. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** External `Asset` fixed height. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** Destination `Project` Id. */
  projectId: Scalars['ID']['input'];
  /** External `Asset` title or display name. */
  title: Scalars['String']['input'];
  /** External `Asset` `Url`. */
  url: Scalars['Url']['input'];
  /** External `Asset` fixed width. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateFolder = {
  __typename?: 'CreateFolder';
  /** The newly created `Folder`. */
  folder?: Maybe<Folder>;
};

export type CreateFolderInput = {
  /** `Folder` description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** `Folder` name. */
  name: Scalars['String']['input'];
  /** The parent Id of the `Folder` creation destination. Possible identifiers are `Library`/`Workspace` or `Folder`. */
  parentId: Scalars['ID']['input'];
};

export type CreateLicense = {
  __typename?: 'CreateLicense';
  /** `License` details. */
  license: License;
};

export type CreateLicenseInput = {
  /** Apply `License` to new assets by default. */
  addByDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** `License` terms. */
  license: Scalars['String']['input'];
  /** `Library` Id. */
  projectId: Scalars['ID']['input'];
  /** Require user to accept `License` terms before download. */
  requireConsensus?: InputMaybe<Scalars['Boolean']['input']>;
  /** `License` title. */
  title: Scalars['String']['input'];
};

export type CreateMetadataField = {
  __typename?: 'CreateMetadataField';
  /** Created `MetadataField`. */
  metadataField: MetadataField;
};

export type CreateMetadataFieldInput = {
  /** Allow an empty value as a valid `SELECT` type `Metadata Field` value. */
  allowEmptyValue?: InputMaybe<Scalars['Boolean']['input']>;
  /** Allow multiple values in `SELECT` type `Metadata Field`. */
  allowMultipleValues?: InputMaybe<Scalars['Boolean']['input']>;
  /** New custom metadata default value option. This value will be set to all new assets. */
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  /** Allow users to edit `Metadata Field` values in the Frontify UI. */
  isEditable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Allow users to search for `Metadata Field` values in the Frontify UI. */
  isSearchable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Show/hide `Metadata Field` values in the Frontify UI. */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Create custom metadata field label. */
  label: Scalars['String']['input'];
  /** `Project`/`Library` Id where metadata field should be created. */
  projectId: Scalars['ID']['input'];
  /** Create custom metadata field type. */
  type?: MetadataFieldType;
  /** Create custom metadata field allowed values. Only valid for `SELECT` type fields. */
  values?: InputMaybe<Array<InputMaybe<MetadataFieldValuesInput>>>;
};

export type CreatePermissionToken = {
  __typename?: 'CreatePermissionToken';
  /** **INTERNAL** Permission token with the requested scope for `Assets` or `Collections`. */
  permissionToken: Scalars['String']['output'];
};

export type CreatePermissionTokenInput = {
  /** **INTERNAL** Id of the `Document` where the `PermissionToken` will be applicable. Relevant for `Collection` type parents only. */
  documentId?: InputMaybe<Scalars['ID']['input']>;
  /** **INTERNAL** List of `parentIds` used on the permission token. */
  parentIds: Array<Scalars['ID']['input']>;
};

export type CreateShareLink = {
  __typename?: 'CreateShareLink';
  /** **INTERNAL** The created `ShareLink`. */
  shareLink: ShareLink;
};

export type CreateShareLinkInput = {
  /** **INTERNAL** `ShareLink` expiration date. */
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** **INTERNAL** The `parentId` of the `ShareLink`. Supported types of `parentId` are `project` and `libraryDocument` Id. */
  parentId: Scalars['ID']['input'];
  /** **INTERNAL** `ShareLink` password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** **INTERNAL** Permission token composed of timestamp, payload and scope. */
  permissionToken: Scalars['String']['input'];
  /** **INTERNAL** The usage key of the resource to which the `ShareLink` is attached. Example: `asset:15`. */
  usageKey: Scalars['String']['input'];
};

export type CreateShareLinkPermissionToken = {
  __typename?: 'CreateShareLinkPermissionToken';
  /** **INTERNAL** The created `PermissionToken`. */
  permissionToken: Scalars['String']['output'];
};

export type CreateShareLinkPermissionTokenInput = {
  /** **INTERNAL** `ShareLink` password. Applies to password protected `ShareLink`. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** **INTERNAL** `ShareLink` Id. */
  shareLinkId: Scalars['String']['input'];
};

export type CreateWorkflowStatus = {
  __typename?: 'CreateWorkflowStatus';
  /** **BETA** The newly created `WorkflowStatus`. */
  workflowStatus?: Maybe<WorkflowStatus>;
};

export type CreateWorkflowStatusInput = {
  /** **BETA** Color of the `WorkflowStatus`. */
  color?: InputMaybe<RgbaColorInput>;
  /** **BETA** Title of the `WorkflowStatus`. */
  title: Scalars['String']['input'];
  /** **BETA** `Workflow` Id where `WorkflowStatus` should be created. */
  workflowId: Scalars['ID']['input'];
};

export type CreateWorkspaceProject = {
  __typename?: 'CreateWorkspaceProject';
  /** `WorkspaceProject` details. */
  project: Workspace;
};

export type CreateWorkspaceProjectInput = {
  /** Id of the `Brand` where `Project` should be inserted. */
  brandId: Scalars['ID']['input'];
  /** `Workspace` type `Project` name. */
  name: Scalars['String']['input'];
};

/** `CustomMetadataInterface` for `CustomMetadata` returnable types. */
export type CustomMetadata = {
  /** `CustomMetadataProperty` details. */
  property: CustomMetadataProperty;
};

export type CustomMetadataInput = {
  /** `CustomMetadataProperty` Id. */
  propertyId: Scalars['ID']['input'];
  /** `CustomMetadataProperty` value. */
  value?: InputMaybe<Scalars['Any']['input']>;
};

export type CustomMetadataProperty = {
  __typename?: 'CustomMetadataProperty';
  /** `DateTime` of the `CustomMetadataProperty` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** `User` who created the `CustomMetadataProperty`. */
  creator: User;
  /** `CustomMetadataProperty` value set to newly update `Assets` by default. */
  defaultValue?: Maybe<Scalars['Any']['output']>;
  /** **INTERNAL** `CustomMetadataPropertyDependency` details. */
  dependency?: Maybe<CustomMetadataPropertyDependency>;
  /** **INTERNAL** `CustomMetadataProperty` Ids that cannot be used as dependee properties. */
  forbiddenDependeePropertyIds?: Maybe<Array<Scalars['ID']['output']>>;
  /** `CustomMetadataProperty` help text. */
  helpText?: Maybe<Scalars['String']['output']>;
  /** `CustomMetadataProperty` Id. */
  id: Scalars['ID']['output'];
  /** **INTERNAL** Indicates if a `CustomMetadataProperty` is editable. */
  isEditable: Scalars['Boolean']['output'];
  /** Indicates if a `CustomMetadataProperty` is required to be defined. */
  isRequired: Scalars['Boolean']['output'];
  /** **INTERNAL** Indicates if a `CustomMetadataProperty` is searchable. */
  isSearchable: Scalars['Boolean']['output'];
  /** **INTERNAL** Indicates if a `CustomMetadataProperty` is viewable. */
  isViewable: Scalars['Boolean']['output'];
  /** `DateTime` of the `CustomMetadataProperty`'s last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** `User` who last modified the `CustomMetadataProperty`. */
  modifier?: Maybe<User>;
  /** `CustomMetadataProperty` name. */
  name: Scalars['String']['output'];
  /** **INTERNAL** `CustomMetadataProperty` permissions. */
  permissions?: Maybe<CustomMetadataPropertyPermissions>;
  /** `CustomMetadataProperty` type details. */
  type: CustomMetadataPropertyType;
  /**
   * **DEPRECATED** **INTERNAL** `CustomMetadataPropertyValueType` details. This field will be removed. Use `type` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `type` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  valueType: CustomMetadataPropertyValueType;
};

export type CustomMetadataPropertyBasicPermission = {
  __typename?: 'CustomMetadataPropertyBasicPermission';
  /** **INTERNAL** Permission level granted to the subject. */
  permissionLevel: CustomMetadataPropertyPermissionLevel;
  /** **INTERNAL** Subject granted with the permission. */
  subject: CustomMetadataPropertyBasicPermissionSubject;
};

/** Subjects defined for basic custom metadata property permissions. */
export enum CustomMetadataPropertyBasicPermissionSubject {
  /** Those with `admin` permissions in the scope where the property is defined. */
  Admin = 'ADMIN',
  /** Those with `edit` permissions in the scope where the property is defined. */
  Editor = 'EDITOR',
  /** Everyone. */
  Everyone = 'EVERYONE',
  /** Only authenticated users. */
  Internal = 'INTERNAL'
}

export type CustomMetadataPropertyCustomPermission = {
  __typename?: 'CustomMetadataPropertyCustomPermission';
  /** **INTERNAL** Permission level granted to the subject. */
  permissionLevel: CustomMetadataPropertyPermissionLevel;
  /** **INTERNAL** Subject representing the specific user or group granted with the permission. */
  subject: AccountCollaborator;
};

export type CustomMetadataPropertyDateValueType = CustomMetadataPropertyValueType & {
  __typename?: 'CustomMetadataPropertyDateValueType';
  /** `CustomMetadataPropertyValueType` property type. */
  propertyType: Scalars['String']['output'];
};

/** `CustomMetadataPropertyDependencyInterface` for `CustomMetadataPropertyDependency` returnable types. */
export type CustomMetadataPropertyDependency = {
  /** The dependee `CustomMetadataProperty` Id. */
  propertyId: Scalars['ID']['output'];
  /** The `CustomMetadataPropertyDependency` type. */
  type: Scalars['String']['output'];
};

export type CustomMetadataPropertyDependencyInput = {
  /** **INTERNAL** Dependee property details. */
  property: CustomMetadataPropertyDependencyPropertyInput;
  /** `CustomMetadataPropertyDependency` type. */
  type: CustomMetadataPropertyDependencyType;
};

export type CustomMetadataPropertyDependencyPropertyInput = {
  /** The dependee `CustomMetadataProperty` Id. */
  id: Scalars['ID']['input'];
  /** `CustomMetadataPropertyOption` Id for the dependency type `SELECT_EQUALS`. */
  optionId?: InputMaybe<Scalars['ID']['input']>;
  /** `CustomMetadataPropertyOption` Ids for the dependency type `SELECT_ONE_OF`. */
  optionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** List of possible `CustomMetadataPropertyDependency` types. */
export enum CustomMetadataPropertyDependencyType {
  Filled = 'FILLED',
  SelectEquals = 'SELECT_EQUALS',
  SelectOneOf = 'SELECT_ONE_OF'
}

export type CustomMetadataPropertyLongTextValueType = CustomMetadataPropertyValueType & {
  __typename?: 'CustomMetadataPropertyLongTextValueType';
  /** `CustomMetadataPropertyValueType` property type. */
  propertyType: Scalars['String']['output'];
};

export type CustomMetadataPropertyMultiSelectValueType = CustomMetadataPropertyValueType & {
  __typename?: 'CustomMetadataPropertyMultiSelectValueType';
  /** `MultiSelectPropertyValueType` options. */
  options: Array<Maybe<CustomMetadataPropertyOption>>;
  /** `CustomMetadataPropertyValueType` property type. */
  propertyType: Scalars['String']['output'];
};

export type CustomMetadataPropertyNumberValueType = CustomMetadataPropertyValueType & {
  __typename?: 'CustomMetadataPropertyNumberValueType';
  /** `CustomMetadataPropertyValueType` property type. */
  propertyType: Scalars['String']['output'];
};

export type CustomMetadataPropertyOption = {
  __typename?: 'CustomMetadataPropertyOption';
  /** `CustomMetadataPropertyOption` Id. */
  id: Scalars['ID']['output'];
  /** Indicates if a `CustomMetadataPropertyOption` value is set to newly updated `Assets` by default. */
  isDefault: Scalars['Boolean']['output'];
  /** `CustomMetadataPropertyOption` value. */
  value: Scalars['String']['output'];
};

export type CustomMetadataPropertyOptionInput = {
  /** `CustomMetadataPropertyOption` Id. This is an optional field only consider for editing purposes. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Define `CustomMetadataPropertyOption` as default. Applies to newly created `Assets` only. */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** `CustomMetadataPropertyOption` value. */
  value: Scalars['String']['input'];
};

export type CustomMetadataPropertyPermissionInput = {
  /** **INTERNAL** Permission level granted to the subject. */
  permissionLevel: CustomMetadataPropertyPermissionLevel;
  /**
   * **INTERNAL** Subject representing one specific user, a user group, or a role granted with the permission
   *                 e.g.: "user:123", "group:88", "admin", "editor", "internal", "everyone".
   */
  subject: Scalars['String']['input'];
};

/** Permission levels allowed for a custom metadata property. */
export enum CustomMetadataPropertyPermissionLevel {
  /** Allows updating and deleting `CustomMetadataProperty` items */
  Admin = 'ADMIN',
  /** Allows assigning, updating or removing `CustomMetadataProperty` values. */
  Edit = 'EDIT',
  /** Allows viewing the custom metadata property and its custom metadata values. */
  View = 'VIEW'
}

export type CustomMetadataPropertyPermissions = {
  __typename?: 'CustomMetadataPropertyPermissions';
  /** **INTERNAL** List of basic permissions defined for the custom metadata property. */
  basic?: Maybe<Array<Maybe<CustomMetadataPropertyBasicPermission>>>;
  /** **INTERNAL** List of custom permissions defined for the custom metadata property. */
  custom?: Maybe<Array<Maybe<CustomMetadataPropertyCustomPermission>>>;
};

export type CustomMetadataPropertyPositionInput = {
  /** `CustomMetadataProperty` position placement. */
  placement: CustomMetadataPropertyPositionPlacement;
  /** `CustomMetadataProperty` Id used as positional reference for `BEFORE` and `AFTER` placements. */
  targetId?: InputMaybe<Scalars['ID']['input']>;
};

/** List of possible `CustomMetadataProperty` position placement options. */
export enum CustomMetadataPropertyPositionPlacement {
  After = 'AFTER',
  Before = 'BEFORE',
  First = 'FIRST',
  Last = 'LAST'
}

export type CustomMetadataPropertySelectValueType = CustomMetadataPropertyValueType & {
  __typename?: 'CustomMetadataPropertySelectValueType';
  /** `SelectPropertyValueType` options. */
  options: Array<Maybe<CustomMetadataPropertyOption>>;
  /** `CustomMetadataPropertyValueType` property type. */
  propertyType: Scalars['String']['output'];
};

export type CustomMetadataPropertySelectValueTypeDependencyTypeEquals = CustomMetadataPropertyDependency & {
  __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals';
  /** The dependee `CustomMetadataProperty` Id. */
  propertyId: Scalars['ID']['output'];
  /** `CustomMetadataPropertyOption` Id. */
  propertyOptionId: Scalars['ID']['output'];
  /** `CustomMetadataPropertyDependency` type. */
  type: Scalars['String']['output'];
};

export type CustomMetadataPropertySelectValueTypeDependencyTypeOneOf = CustomMetadataPropertyDependency & {
  __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf';
  /** The dependee `CustomMetadataProperty` Id. */
  propertyId: Scalars['ID']['output'];
  /** `CustomMetadataPropertyOption` property option ids. */
  propertyOptionIds: Array<Maybe<Scalars['ID']['output']>>;
  /** `CustomMetadataPropertyDependency` type. */
  type: Scalars['String']['output'];
};

export type CustomMetadataPropertyTextValueType = CustomMetadataPropertyValueType & {
  __typename?: 'CustomMetadataPropertyTextValueType';
  /** `CustomMetadataPropertyValueType` property type. */
  propertyType: Scalars['String']['output'];
};

/** `CustomMetadataPropertyTypeInterface` for `CustomMetadataPropertyType` returnable types. */
export type CustomMetadataPropertyType = {
  /** The `CustomMetadataProperty` type name. */
  name: Scalars['String']['output'];
};

export type CustomMetadataPropertyTypeDate = CustomMetadataPropertyType & {
  __typename?: 'CustomMetadataPropertyTypeDate';
  /** The `CustomMetadataProperty` type name. */
  name: Scalars['String']['output'];
};

export type CustomMetadataPropertyTypeLongText = CustomMetadataPropertyType & {
  __typename?: 'CustomMetadataPropertyTypeLongText';
  /** The `CustomMetadataProperty` type name. */
  name: Scalars['String']['output'];
};

export type CustomMetadataPropertyTypeMultiSelect = CustomMetadataPropertyType & {
  __typename?: 'CustomMetadataPropertyTypeMultiSelect';
  /** The `CustomMetadataProperty` type name. */
  name: Scalars['String']['output'];
  /** `MULTISELECT` type `CustomMetadataProperty` options. */
  options: Array<Maybe<CustomMetadataPropertyOption>>;
};

/** List of possible `CustomMetadataProperty` type names. */
export enum CustomMetadataPropertyTypeName {
  Date = 'DATE',
  Longtext = 'LONGTEXT',
  Multiselect = 'MULTISELECT',
  Number = 'NUMBER',
  Select = 'SELECT',
  Text = 'TEXT',
  Url = 'URL'
}

export type CustomMetadataPropertyTypeNumber = CustomMetadataPropertyType & {
  __typename?: 'CustomMetadataPropertyTypeNumber';
  /** The `CustomMetadataProperty` type name. */
  name: Scalars['String']['output'];
};

export type CustomMetadataPropertyTypeSelect = CustomMetadataPropertyType & {
  __typename?: 'CustomMetadataPropertyTypeSelect';
  /** The `CustomMetadataProperty` type name. */
  name: Scalars['String']['output'];
  /** `SELECT` type `CustomMetadataProperty` options. */
  options: Array<Maybe<CustomMetadataPropertyOption>>;
};

export type CustomMetadataPropertyTypeText = CustomMetadataPropertyType & {
  __typename?: 'CustomMetadataPropertyTypeText';
  /** The `CustomMetadataProperty` type name. */
  name: Scalars['String']['output'];
};

export type CustomMetadataPropertyTypeUrl = CustomMetadataPropertyType & {
  __typename?: 'CustomMetadataPropertyTypeUrl';
  /** The `CustomMetadataProperty` type name. */
  name: Scalars['String']['output'];
  /** **INTERNAL** Determines if a `URL` type `CustomMetadataProperty` value should be opened in a new tab. */
  shouldBeOpenedInANewTab: Scalars['Boolean']['output'];
};

export type CustomMetadataPropertyUrlValueType = CustomMetadataPropertyValueType & {
  __typename?: 'CustomMetadataPropertyUrlValueType';
  /** `CustomMetadataPropertyValueType` property type. */
  propertyType: Scalars['String']['output'];
  /** **INTERNAL** Determines if the value of a `CustomMetadataProperty` of type `URL` should be opened in a new tab. */
  shouldBeOpenedInANewTab: Scalars['Boolean']['output'];
};

/** `CustomMetadataPropertyValueTypeInterface` for `CustomMetadataPropertyValueType` returnable types. */
export type CustomMetadataPropertyValueType = {
  /** The `CustomMetadataPropertyValueType` property type. */
  propertyType: Scalars['String']['output'];
};

export type CustomMetadataPropertyValueTypeDependencyTypeFilled = CustomMetadataPropertyDependency & {
  __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled';
  /** The dependee `CustomMetadataProperty` Id. */
  propertyId: Scalars['ID']['output'];
  /** `CustomMetadataPropertyDependency` type. */
  type: Scalars['String']['output'];
};

export type CustomMetadataValue = CustomMetadata & {
  __typename?: 'CustomMetadataValue';
  /** `CustomMetadataProperty` details. */
  property: CustomMetadataProperty;
  /** `CustomMetadataProperty` value. Returns an object with `optionId` and `text` property values (for `SELECT` type only) or a string for other `CustomMetadataProperty` single value items. */
  value?: Maybe<Scalars['Any']['output']>;
};

export type CustomMetadataValues = CustomMetadata & {
  __typename?: 'CustomMetadataValues';
  /** `CustomMetadataProperty` details. */
  property: CustomMetadataProperty;
  /** `CustomMetadataProperty` values. Returns an empty list or a list of objects with `optionId` and `text` property values (for `MULTISELECT` type only). */
  values: Array<Maybe<Scalars['Any']['output']>>;
};

export type DeleteAccountUser = {
  __typename?: 'DeleteAccountUser';
  /** Id of the deleted `AccountUser`. */
  id?: Maybe<Scalars['ID']['output']>;
};

export type DeleteAccountUserInput = {
  /** Id of the `Account` from which the `AccountUser` should be deleted. */
  accountId: Scalars['ID']['input'];
  /** Id of the `AccountUser` to whom the permissions of the deleted `AccountUser` are being delegated. */
  delegateId: Scalars['ID']['input'];
  /** Id of the `AccountUser` to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteAsset = {
  __typename?: 'DeleteAsset';
  /**
   * **DEPRECATED** `Asset` details. This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  asset: Asset;
  /** The Id of the deleted `Asset`. */
  id: Scalars['ID']['output'];
};

export type DeleteAssetInput = {
  /** Id of the `Asset` to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteAssetSubmission = {
  __typename?: 'DeleteAssetSubmission';
  /** `AssetSubmission` Id. */
  id: Scalars['ID']['output'];
};

export type DeleteAssetSubmissionInput = {
  /** `AssetSubmission` Id. */
  id: Scalars['ID']['input'];
};

export type DeleteAssetSubmissionRequest = {
  __typename?: 'DeleteAssetSubmissionRequest';
  /** `AssetSubmissionRequest` Id. */
  id: Scalars['ID']['output'];
};

export type DeleteAssetSubmissionRequestInput = {
  /** `AssetSubmissionRequest` Id. */
  requestId: Scalars['ID']['input'];
};

export type DeleteAssetVariant = {
  __typename?: 'DeleteAssetVariant';
  /** `AssetVariant` Id. */
  id: Scalars['ID']['output'];
};

export type DeleteAssetVariantInput = {
  /** `Asset` Id of the `AssetVariant` to delete. */
  assetId: Scalars['String']['input'];
  /** Key of the `AssetVariant` to delete. Composed of the color space and the file extension. Examples: RGB:JPG, CMYK:SVG. */
  key: Scalars['String']['input'];
};

export type DeleteAttachment = {
  __typename?: 'DeleteAttachment';
  /**
   * **DEPRECATED** `Attachment` details. This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  attachment: Attachment;
  /** The Id of the deleted `Attachment`. */
  id: Scalars['ID']['output'];
};

export type DeleteAttachmentInput = {
  /** Id of the `Attachment` to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteCollection = {
  __typename?: 'DeleteCollection';
  /**
   * **DEPRECATED** `Collection` details. This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  collection: Collection;
  /** The Id of the deleted `Collection`. */
  id: Scalars['ID']['output'];
};

export type DeleteCollectionInput = {
  /** `Collection` Id. */
  collectionId: Scalars['ID']['input'];
};

export type DeleteComment = {
  __typename?: 'DeleteComment';
  /**
   * **DEPRECATED** `Comment` details. This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  comment: Comment;
  /** The Id of the deleted `Comment`. */
  id: Scalars['ID']['output'];
};

export type DeleteCommentInput = {
  /** Id of the `AssetComment` to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteCustomMetadataProperty = {
  __typename?: 'DeleteCustomMetadataProperty';
  /** The Id of the deleted `CustomMetadataProperty`. */
  id: Scalars['ID']['output'];
};

export type DeleteCustomMetadataPropertyInput = {
  /** `CustomMetadataProperty` Id. */
  id: Scalars['ID']['input'];
};

export type DeleteFolders = {
  __typename?: 'DeleteFolders';
  /** List of the deleted `Folder` ids. */
  ids?: Maybe<Array<Scalars['ID']['output']>>;
};

export type DeleteFoldersInput = {
  /** Ids of the `Folders` to delete. */
  ids: Array<Scalars['ID']['input']>;
};

export type DeleteLicense = {
  __typename?: 'DeleteLicense';
  /** The Id of the deleted `License`. */
  id: Scalars['ID']['output'];
  /**
   * **DEPRECATED** `License` details. This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  license: License;
};

export type DeleteLicenseInput = {
  /** Id of the `License` to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteMetadataField = {
  __typename?: 'DeleteMetadataField';
  /** The Id of the deleted `MetadataField`. */
  id: Scalars['ID']['output'];
  /**
   * **DEPRECATED** Deleted `MetadataField`. This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `id` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  metadataField: MetadataField;
};

export type DeleteMetadataFieldInput = {
  /** Id of the `MetadataField` to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteShareLink = {
  __typename?: 'DeleteShareLink';
  /** **INTERNAL** The Id of the deleted `ShareLink`. */
  shareLinkId: Scalars['String']['output'];
};

export type DeleteShareLinkInput = {
  /** **INTERNAL** Id of the `ShareLink` to be deleted. */
  shareLinkId: Scalars['String']['input'];
};

export type DeleteWorkflowStatus = {
  __typename?: 'DeleteWorkflowStatus';
  /** The Id of the deleted `WorkflowStatus`. */
  id: Scalars['ID']['output'];
};

export type DeleteWorkflowStatusInput = {
  /** **BETA** Id of the `WorkflowStatus` to be deleted. */
  id: Scalars['ID']['input'];
};

export type DeleteWorkflowTask = {
  __typename?: 'DeleteWorkflowTask';
  /** The Id of the deleted `WorkflowTask`. */
  id: Scalars['ID']['output'];
};

export type DeleteWorkflowTaskInput = {
  /** **BETA** Id of the `WorkflowTask` to be deleted. */
  id: Scalars['ID']['input'];
};

export type DisableWorkflowStatusEnterRule = {
  __typename?: 'DisableWorkflowStatusEnterRule';
  /** **INTERNAL** `WorkflowStatus` with the disabled `WorkflowStatusEnterRule`. */
  workflowStatus?: Maybe<WorkflowStatus>;
};

export type DisableWorkflowStatusEnterRuleInput = {
  /** **INTERNAL** The `WorkflowStatusEnterRule` to disable. */
  enterRule: WorkflowStatusEnterRule;
  /** **INTERNAL** WorkflowStatus` Id. */
  id: Scalars['ID']['input'];
};

export type Document = Asset & Node & {
  __typename?: 'Document';
  /** `Attachment` items linked to `Asset`. */
  attachments?: Maybe<Array<Maybe<AssetAttachment>>>;
  /** Represents the Author of the `Asset`. Example: Photographer Name. */
  author?: Maybe<Scalars['String']['output']>;
  /** Paginated list of `AssetComment` items for `Asset`. */
  comments?: Maybe<AssetCommentItems>;
  /** `Asset` copyright details. */
  copyright?: Maybe<Copyright>;
  /** `DateTime` of the `Asset` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the `Asset`. */
  creator: User;
  /** Current `User` `Asset` permissions. */
  currentUserPermissions: AssetUserPermissions;
  /** List of `CustomMetadataProperty` items and values associated to `Asset`. */
  customMetadata: Array<CustomMetadata>;
  /** Description of the `Asset`. */
  description?: Maybe<Scalars['String']['output']>;
  /** Signed `Url` to download the original `Document` type file. */
  downloadUrl?: Maybe<Scalars['Url']['output']>;
  /** `Asset` expiry date. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Extension of the `Asset` `File`. */
  extension: Scalars['String']['output'];
  /** External Id of the `Asset`. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** `ExternalProduct` items linked to `Asset`. */
  externalProducts?: Maybe<Array<Maybe<ExternalProduct>>>;
  /** Original filename of the `Asset` `File`. */
  filename?: Maybe<Scalars['String']['output']>;
  /** `Document` focal point position. Example: `[0.4803, 0.4340]`. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** `Document` height in pixels. */
  height: Scalars['Int']['output'];
  /** `Asset` id. */
  id: Scalars['ID']['output'];
  /** `License` items linked to `Asset`. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `MetadataValue` items linked to `Asset`. This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataValues?: Maybe<Array<Maybe<MetadataValue>>>;
  /** `DateTime` of the `Asset` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `Asset`. */
  modifier?: Maybe<User>;
  /** `Document` total number of pages. */
  pageCount?: Maybe<Scalars['Int']['output']>;
  /** Preview `Url` which has optional `width`, `height` and `page` arguments. If parameters are not specified, a `Url` without any parameters will be returned. */
  previewUrl: Scalars['Url']['output'];
  /** Paginated list of `Asset` items related to `Asset`. */
  relatedAssets: AssetItems;
  /** Size of the `Asset` `File` in bytes. */
  size?: Maybe<Scalars['BigInt']['output']>;
  /** Represents the conversion status of the `Asset`. Example: FINISHED. */
  status: AssetStatusType;
  /** List of `Tag` items linked to `Asset` */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Title of the `Asset`. */
  title: Scalars['String']['output'];
  /** **BETA** `AssetVariant` items of the asset. */
  variants?: Maybe<AssetVariantItems>;
  /** `Document` width in pixels. */
  width: Scalars['Int']['output'];
  /** **BETA** The `WorkflowTask` this `Asset` is linked to. */
  workflowTask?: Maybe<WorkflowTask>;
};


export type DocumentCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetCommentQueryInput>;
};


export type DocumentDownloadUrlArgs = {
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
  validityInDays?: InputMaybe<Scalars['Int']['input']>;
};


export type DocumentPreviewUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type DocumentRelatedAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type DocumentVariantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type DocumentLibrary = Library & Node & {
  __typename?: 'DocumentLibrary';
  /** **INTERNAL** `AggregatedAssetsCustomMetadata` for the given set of the `Assets`. */
  aggregatedAssetsCustomMetadata: Array<AggregatedAssetsCustomMetadata>;
  /**
   * **DEPRECATED** Amount of `Assets` contained in the `Library`/`Workspace`. This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  assetCount?: Maybe<Scalars['Int']['output']>;
  /** **BETA** List of `AssetSubmissionRequests` available for a `Library`. */
  assetSubmissionRequests: Array<AssetSubmissionRequest>;
  /** Search or list `Assets` in the `Library`/`Workspace`. */
  assets: AssetItems;
  /** Browse the `Library` `SubFolderItems` and `AssetItems`. */
  browse: LibraryRootFolder;
  /** `Library` collaborators. */
  collaborators?: Maybe<LibraryCollaborators>;
  /** `Library` `Collection` items list. */
  collections: CollectionItems;
  /** `Library`/`Workspace` color. */
  color?: Maybe<RgbaColor>;
  /** `Library` permissions of the current `User`. */
  currentUserPermissions: LibraryUserPermissions;
  /** Retrieve list of all `CustomMetadataProperty` items belonging to `Library`. */
  customMetadataProperties: Array<CustomMetadataProperty>;
  /** `Library`/`Workspace` Id. */
  id: Scalars['ID']['output'];
  /** `Library`/`Workspace` `License` items list. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `Library`/`Workspace` `MetadataField` items list. This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataFields?: Maybe<Array<Maybe<MetadataField>>>;
  /** `Library`/`Workspace` name. */
  name: Scalars['String']['output'];
  /** **BETA** The `Workflow` belonging to the given `Library`/`Workspace`. */
  workflow: Workflow;
};


export type DocumentLibraryAggregatedAssetsCustomMetadataArgs = {
  assetIds: Array<Scalars['ID']['input']>;
};


export type DocumentLibraryAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetQueryInput>;
};


export type DocumentLibraryCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type EditComment = {
  __typename?: 'EditComment';
  /** `Comment` details. */
  comment: Comment;
};

export type EditCommentInput = {
  /** `AssetComment` content to edit. Can include `User` mentions by wrapping an authorized `Project` `User` Id in the form of `@[user:<id>]` where `<id>` is the user identifier. */
  content: Scalars['String']['input'];
  /** `AssetComment` Id you wish to edit. */
  id: Scalars['ID']['input'];
};

export type EmbeddedContent = Asset & Node & {
  __typename?: 'EmbeddedContent';
  /** `Attachment` items linked to `Asset`. */
  attachments?: Maybe<Array<Maybe<AssetAttachment>>>;
  /** Represents the Author of the `Asset`. Example: Photographer Name. */
  author?: Maybe<Scalars['String']['output']>;
  /** Paginated list of `AssetComment` items for `Asset`. */
  comments?: Maybe<AssetCommentItems>;
  /** `Asset` copyright details. */
  copyright?: Maybe<Copyright>;
  /** `DateTime` of the `Asset` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the `Asset`. */
  creator: User;
  /** Current `User` `Asset` permissions. */
  currentUserPermissions: AssetUserPermissions;
  /** List of `CustomMetadataProperty` items and values associated to `Asset`. */
  customMetadata: Array<CustomMetadata>;
  /** Description of the `Asset`. */
  description?: Maybe<Scalars['String']['output']>;
  /** `Asset` expiry date. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** External Id of the `Asset`. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** `ExternalProduct` items linked to `Asset`. */
  externalProducts?: Maybe<Array<Maybe<ExternalProduct>>>;
  /** **INTERNAL** Html to embed in case the source url cannot be displayed in a iframe. */
  html?: Maybe<Scalars['String']['output']>;
  /** `Asset` id. */
  id: Scalars['ID']['output'];
  /** `License` items linked to `Asset`. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `MetadataValue` items linked to `Asset`. This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataValues?: Maybe<Array<Maybe<MetadataValue>>>;
  /** `DateTime` of the `Asset` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `Asset`. */
  modifier?: Maybe<User>;
  /** Preview of the embedded content. If the preview is not available, an svg icon will be returned. */
  previewUrl: Scalars['Url']['output'];
  /** Paginated list of `Asset` items related to `Asset`. */
  relatedAssets: AssetItems;
  /** **INTERNAL** URL to the content source. */
  sourceUrl: Scalars['Url']['output'];
  /** Represents the conversion status of the `Asset`. Example: FINISHED. */
  status: AssetStatusType;
  /** List of `Tag` items linked to `Asset` */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Title of the `Asset`. */
  title: Scalars['String']['output'];
  /** **BETA** `AssetVariant` items of the asset. */
  variants?: Maybe<AssetVariantItems>;
  /** **BETA** The `WorkflowTask` this `Asset` is linked to. */
  workflowTask?: Maybe<WorkflowTask>;
};


export type EmbeddedContentCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetCommentQueryInput>;
};


export type EmbeddedContentRelatedAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type EmbeddedContentVariantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type EnableWorkflowStatusEnterRule = {
  __typename?: 'EnableWorkflowStatusEnterRule';
  /** **BETA** `WorkflowStatus` with the enabled `WorkflowStatusEnterRule`. */
  workflowStatus?: Maybe<WorkflowStatus>;
};

export type EnableWorkflowStatusEnterRuleInput = {
  /** **INTERNAL** The `WorkflowStatusEnterRule` to enable. */
  enterRule: WorkflowStatusEnterRule;
  /** **INTERNAL** WorkflowStatus` Id. */
  id: Scalars['ID']['input'];
};

export type EnhancedText = {
  __typename?: 'EnhancedText';
  /** **INTERNAL** Drunken pirate text. */
  drunken?: Maybe<Scalars['String']['output']>;
  /** **INTERNAL** Get the key takeaways from the text. */
  keyTakeaways?: Maybe<Scalars['String']['output']>;
  /** **INTERNAL** Get the result for the text used a prompt. */
  prompted?: Maybe<Scalars['String']['output']>;
  /** **INTERNAL** Proper text. */
  properEnglish?: Maybe<Scalars['String']['output']>;
  /** **INTERNAL** A shortened version of the text. */
  shortened?: Maybe<Scalars['String']['output']>;
  /** **INTERNAL** Translated text. */
  translated?: Maybe<Scalars['String']['output']>;
};


export type EnhancedTextTranslatedArgs = {
  language: Scalars['String']['input'];
};

export type ExternalProduct = {
  __typename?: 'ExternalProduct';
  /** `External product` externalId. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** `External product` Id. */
  id: Scalars['ID']['output'];
  /** `External product` name. */
  name: Scalars['String']['output'];
  /** `External product` title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type File = Asset & Node & {
  __typename?: 'File';
  /** `Attachment` items linked to `Asset`. */
  attachments?: Maybe<Array<Maybe<AssetAttachment>>>;
  /** Represents the Author of the `Asset`. Example: Photographer Name. */
  author?: Maybe<Scalars['String']['output']>;
  /** Paginated list of `AssetComment` items for `Asset`. */
  comments?: Maybe<AssetCommentItems>;
  /** `Asset` copyright details. */
  copyright?: Maybe<Copyright>;
  /** `DateTime` of the `Asset` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the `Asset`. */
  creator: User;
  /** Current `User` `Asset` permissions. */
  currentUserPermissions: AssetUserPermissions;
  /** List of `CustomMetadataProperty` items and values associated to `Asset`. */
  customMetadata: Array<CustomMetadata>;
  /** Description of the `Asset`. */
  description?: Maybe<Scalars['String']['output']>;
  /** Signed `Url` to download the original `File` type file. */
  downloadUrl?: Maybe<Scalars['Url']['output']>;
  /** `Asset` expiry date. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Extension of the `Asset` `File`. */
  extension: Scalars['String']['output'];
  /** External Id of the `Asset`. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** `ExternalProduct` items linked to `Asset`. */
  externalProducts?: Maybe<Array<Maybe<ExternalProduct>>>;
  /** Original filename of the `Asset` `File`. */
  filename?: Maybe<Scalars['String']['output']>;
  /** `Asset` id. */
  id: Scalars['ID']['output'];
  /** `License` items linked to `Asset`. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `MetadataValue` items linked to `Asset`. This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataValues?: Maybe<Array<Maybe<MetadataValue>>>;
  /** `DateTime` of the `Asset` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `Asset`. */
  modifier?: Maybe<User>;
  /** `File` type icon in `svg` format. */
  previewUrl: Scalars['Url']['output'];
  /** Paginated list of `Asset` items related to `Asset`. */
  relatedAssets: AssetItems;
  /** Size of the `Asset` `File` in bytes. */
  size?: Maybe<Scalars['BigInt']['output']>;
  /** Represents the conversion status of the `Asset`. Example: FINISHED. */
  status: AssetStatusType;
  /** List of `Tag` items linked to `Asset` */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Title of the `Asset`. */
  title: Scalars['String']['output'];
  /** **BETA** `AssetVariant` items of the asset. */
  variants?: Maybe<AssetVariantItems>;
  /** **BETA** The `WorkflowTask` this `Asset` is linked to. */
  workflowTask?: Maybe<WorkflowTask>;
};


export type FileCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetCommentQueryInput>;
};


export type FileDownloadUrlArgs = {
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
  validityInDays?: InputMaybe<Scalars['Int']['input']>;
};


export type FileRelatedAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type FileVariantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** `FolderInterface` for `Folder` returnable types. */
export type Folder = {
  /** The `AssetItems` in the current `Library`/`Workspace`/`Folder`. */
  assets: AssetItems;
  /** A list of `Breadcrumb` items representing the parent folders structure for the current `SubFolder`. */
  breadcrumbs: Array<Breadcrumb>;
  /** `DateTime` of the `Folder` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the `Folder`. */
  creator: User;
  /** The `FolderItems` of the current `Library`/`Workspace`/`Folder`. */
  folders: FolderItems;
  /** `Folder` Id. */
  id: Scalars['ID']['output'];
  /** `DateTime` of the last `Folder` modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `Folder`. */
  modifier?: Maybe<User>;
  /** `Folder` name. */
  name: Scalars['String']['output'];
  /**
   * **DEPRECATED** The `SubFolderItems` of the current `Library`/`Workspace`/`SubFolder`. This field will be removed. Use `folders` instead. | Date: 2023-07-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `folders` instead. | Date: 2023-07-01T00:00:00.000+00:00
   */
  subFolders: SubFolderItems;
};


/** `FolderInterface` for `Folder` returnable types. */
export type FolderAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<FolderAssetQueryInput>;
};


/** `FolderInterface` for `Folder` returnable types. */
export type FolderFoldersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** `FolderInterface` for `Folder` returnable types. */
export type FolderSubFoldersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type FolderAssetQueryInput = {
  /** **INTERNAL** Use filters to reduce the set of matched results. */
  filter?: InputMaybe<AssetQueryFilterInput>;
  /** **BETA** Sort order of matched results. */
  sortBy?: InputMaybe<AssetQueryFilterSortType>;
  /** **INTERNAL** Search term used to retrieve matched results. */
  term?: InputMaybe<Scalars['String']['input']>;
};

export type FolderItems = {
  __typename?: 'FolderItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `Folder` */
  items?: Maybe<Array<Maybe<Folder>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type GrantSubjectsAnalyticsDashboardAccess = {
  __typename?: 'GrantSubjectsAnalyticsDashboardAccess';
  /** **INTERNAL** List of the subject Ids that were granted access to the Analytics Dashboard. */
  subjectIds: Array<Scalars['ID']['output']>;
};

export type GrantSubjectsAnalyticsDashboardAccessInput = {
  /** **INTERNAL** Id of the Analytics Dashboard being granted access to. */
  analyticsDashboardId: Scalars['ID']['input'];
  /** **INTERNAL** List of opaque identifiers (either `User`-s or `Group`-s) to be granted access to the Analytics Dashboard. */
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type GuideLinePage = {
  __typename?: 'GuideLinePage';
  /** **INTERNAL** The name of the page. */
  name: Scalars['String']['output'];
  /** **INTERNAL** Get some information */
  summary?: Maybe<Scalars['String']['output']>;
};

export type Guideline = Node & {
  __typename?: 'Guideline';
  /** `Guideline` color. */
  color?: Maybe<RgbaColor>;
  /** `Guideline` Id. */
  id: Scalars['ID']['output'];
  /** Paginated list of `LibraryPage` items for `Guideline`. */
  libraryPages: LibraryPageItems;
  /** `Guideline` name. */
  name?: Maybe<Scalars['String']['output']>;
  /** `Guideline` internal url. */
  url: Scalars['Url']['output'];
};


export type GuidelineLibraryPagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type GuidelineItems = {
  __typename?: 'GuidelineItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of `Guideline` type projects. */
  items?: Maybe<Array<Maybe<Guideline>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type IconLibrary = Library & Node & {
  __typename?: 'IconLibrary';
  /** **INTERNAL** `AggregatedAssetsCustomMetadata` for the given set of the `Assets`. */
  aggregatedAssetsCustomMetadata: Array<AggregatedAssetsCustomMetadata>;
  /**
   * **DEPRECATED** Amount of `Assets` contained in the `Library`/`Workspace`. This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  assetCount?: Maybe<Scalars['Int']['output']>;
  /** **BETA** List of `AssetSubmissionRequests` available for a `Library`. */
  assetSubmissionRequests: Array<AssetSubmissionRequest>;
  /** Search or list `Assets` in the `Library`/`Workspace`. */
  assets: AssetItems;
  /** Browse the `Library` `SubFolderItems` and `AssetItems`. */
  browse: LibraryRootFolder;
  /** `Library` collaborators. */
  collaborators?: Maybe<LibraryCollaborators>;
  /** `Library` `Collection` items list. */
  collections: CollectionItems;
  /** `Library`/`Workspace` color. */
  color?: Maybe<RgbaColor>;
  /** `Library` permissions of the current `User`. */
  currentUserPermissions: LibraryUserPermissions;
  /** Retrieve list of all `CustomMetadataProperty` items belonging to `Library`. */
  customMetadataProperties: Array<CustomMetadataProperty>;
  /** `Library`/`Workspace` Id. */
  id: Scalars['ID']['output'];
  /** `Library`/`Workspace` `License` items list. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `Library`/`Workspace` `MetadataField` items list. This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataFields?: Maybe<Array<Maybe<MetadataField>>>;
  /** `Library`/`Workspace` name. */
  name: Scalars['String']['output'];
  /** **BETA** The `Workflow` belonging to the given `Library`/`Workspace`. */
  workflow: Workflow;
};


export type IconLibraryAggregatedAssetsCustomMetadataArgs = {
  assetIds: Array<Scalars['ID']['input']>;
};


export type IconLibraryAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetQueryInput>;
};


export type IconLibraryCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Image = Asset & Node & {
  __typename?: 'Image';
  /** `Attachment` items linked to `Asset`. */
  attachments?: Maybe<Array<Maybe<AssetAttachment>>>;
  /** Represents the Author of the `Asset`. Example: Photographer Name. */
  author?: Maybe<Scalars['String']['output']>;
  /** Paginated list of `AssetComment` items for `Asset`. */
  comments?: Maybe<AssetCommentItems>;
  /** `Asset` copyright details. */
  copyright?: Maybe<Copyright>;
  /** `DateTime` of the `Asset` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the `Asset`. */
  creator: User;
  /** Current `User` `Asset` permissions. */
  currentUserPermissions: AssetUserPermissions;
  /** List of `CustomMetadataProperty` items and values associated to `Asset`. */
  customMetadata: Array<CustomMetadata>;
  /** Description of the `Asset`. */
  description?: Maybe<Scalars['String']['output']>;
  /** Signed `Url` to download the original `Image` type file. */
  downloadUrl?: Maybe<Scalars['Url']['output']>;
  /** `Asset` expiry date. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Extension of the `Asset` `File`. */
  extension: Scalars['String']['output'];
  /** External Id of the `Asset`. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** `ExternalProduct` items linked to `Asset`. */
  externalProducts?: Maybe<Array<Maybe<ExternalProduct>>>;
  /** Original filename of the `Asset` `File`. */
  filename?: Maybe<Scalars['String']['output']>;
  /** `Image` focal point position. Example: `[0.4803, 0.4340]`. */
  focalPoint?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  /** `Image` height in pixels. */
  height: Scalars['Int']['output'];
  /** `Asset` id. */
  id: Scalars['ID']['output'];
  /** `License` items linked to `Asset`. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `MetadataValue` items linked to `Asset`. This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataValues?: Maybe<Array<Maybe<MetadataValue>>>;
  /** `DateTime` of the `Asset` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `Asset`. */
  modifier?: Maybe<User>;
  /** Preview `Url` which has optional `width` and `height` URL parameters. If parameters are not specified, `Url` without any GET parameters will be returned. */
  previewUrl: Scalars['Url']['output'];
  /** Paginated list of `Asset` items related to `Asset`. */
  relatedAssets: AssetItems;
  /** Size of the `Asset` `File` in bytes. */
  size?: Maybe<Scalars['BigInt']['output']>;
  /** Represents the conversion status of the `Asset`. Example: FINISHED. */
  status: AssetStatusType;
  /** List of `Tag` items linked to `Asset` */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Title of the `Asset`. */
  title: Scalars['String']['output'];
  /** **BETA** `AssetVariant` items of the asset. */
  variants?: Maybe<AssetVariantItems>;
  /** `Image` width in pixels. */
  width: Scalars['Int']['output'];
  /** **BETA** The `WorkflowTask` this `Asset` is linked to. */
  workflowTask?: Maybe<WorkflowTask>;
};


export type ImageCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetCommentQueryInput>;
};


export type ImageDownloadUrlArgs = {
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
  validityInDays?: InputMaybe<Scalars['Int']['input']>;
};


export type ImagePreviewUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageRelatedAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageVariantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type InstallProjectWebhook = {
  __typename?: 'InstallProjectWebhook';
  /** `Webhook` details. */
  webhook: Webhook;
};

export type InstallProjectWebhookInput = {
  /** `ProjectWebhook` name. */
  name: Scalars['String']['input'];
  /** `Url` to send the `ProjectWebhook` notification to. */
  notificationUrl: Scalars['Url']['input'];
  /** Destination `Project` Id. */
  projectId: Scalars['ID']['input'];
};

export type InviteProjectUser = {
  __typename?: 'InviteProjectUser';
  /** `Project` where `User` was invited to. */
  project?: Maybe<Project>;
};

export type InviteProjectUserInput = {
  /** Email address of the `User` you would like to invite. */
  email: Scalars['Email']['input'];
  /** `Project` permission level of the `User` you are inviting. */
  permission?: ProjectPermission;
  /** Id of the `Project` you want to invite `User` to. */
  projectId: Scalars['ID']['input'];
  /** Start `Date` for `User` access permission validity. */
  validFrom?: InputMaybe<Scalars['DateTime']['input']>;
  /** End `Date` for `User` access permission validity. */
  validTo?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueAssetSubmissionRequestToken = {
  __typename?: 'IssueAssetSubmissionRequestToken';
  /** `AssetSubmissionRequest` token expiry date. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** `AssetSubmissionRequest` token. */
  token: Scalars['String']['output'];
};

export type IssueAssetSubmissionRequestTokenInput = {
  /** `AssetSubmissionRequest` email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Expiry Date. `AssetSubmissionRequest` token will expire when this `DateTime` is reached. */
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** `AssetSubmissionRequest` name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** `AssetSubmissionRequest` Id. */
  requestId: Scalars['ID']['input'];
};

/** `LibraryInterface` for `Library` returnable types. */
export type Library = {
  /** **INTERNAL** `AggregatedAssetsCustomMetadata` for the given set of the `Assets`. */
  aggregatedAssetsCustomMetadata: Array<AggregatedAssetsCustomMetadata>;
  /**
   * **DEPRECATED** Amount of `Assets` contained in this `Library`. This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  assetCount?: Maybe<Scalars['Int']['output']>;
  /** **BETA** List of `AssetSubmissionRequests` available for a `Library`. */
  assetSubmissionRequests: Array<AssetSubmissionRequest>;
  /** Search or list `Assets` in this `Library`. */
  assets: AssetItems;
  /** Browse the `Library`'s `SubFolderItems` and `AssetItems`. */
  browse: LibraryRootFolder;
  /** `Library` collaborators. */
  collaborators?: Maybe<LibraryCollaborators>;
  /** List `Collection` type items within a `Library`. */
  collections: CollectionItems;
  /** `Library` color. */
  color?: Maybe<RgbaColor>;
  /** Check current `User` permissions in a specific `Library`. */
  currentUserPermissions: LibraryUserPermissions;
  /** List of `CustomMetadataProperty` items belonging to a `Library`. */
  customMetadataProperties: Array<CustomMetadataProperty>;
  /** `Library` Id. */
  id: Scalars['ID']['output'];
  /** Retrieve list of all `Licenses` belonging to this `Library`. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** Retrieve list of all `MetadataFields` belonging to this `Library`. This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataFields?: Maybe<Array<Maybe<MetadataField>>>;
  /** `Library` name. */
  name: Scalars['String']['output'];
  /** **BETA** The `Workflow` belonging to the given `Library`. */
  workflow: Workflow;
};


/** `LibraryInterface` for `Library` returnable types. */
export type LibraryAggregatedAssetsCustomMetadataArgs = {
  assetIds: Array<Scalars['ID']['input']>;
};


/** `LibraryInterface` for `Library` returnable types. */
export type LibraryAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetQueryInput>;
};


/** `LibraryInterface` for `Library` returnable types. */
export type LibraryCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type LibraryCollaboratorUserEdge = {
  __typename?: 'LibraryCollaboratorUserEdge';
  /** `User` that has the least required permissions to collaborate on a `Library`.  */
  node: User;
  /** `User` role in the `Library`. */
  role: Scalars['String']['output'];
};

export type LibraryCollaboratorUserItems = {
  __typename?: 'LibraryCollaboratorUserItems';
  /** **BETA** List of `LibraryCollaboratorUserEdge` edges. */
  edges: Array<LibraryCollaboratorUserEdge>;
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of `User` items that have lowest required permissions to collaborate on a `Library`. */
  items: Array<Maybe<User>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type LibraryCollaborators = {
  __typename?: 'LibraryCollaborators';
  /** `LibraryCollaboratorUserItems` list. */
  users: LibraryCollaboratorUserItems;
};


export type LibraryCollaboratorsUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type LibraryItems = {
  __typename?: 'LibraryItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `Library` */
  items?: Maybe<Array<Maybe<Library>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type LibraryPage = Node & {
  __typename?: 'LibraryPage';
  /** `LibraryPage` `Asset` items list. */
  assets: LibraryPageAssetItems;
  /** **BETA** `LibraryPage` `Collection` items list. */
  collections: LibraryPageCollectionItems;
  /** `LibraryPage` Id. */
  id: Scalars['ID']['output'];
  /** `LibraryPage` title. */
  title: Scalars['String']['output'];
  /** `LibraryPage` type. */
  type: LibraryType;
};


export type LibraryPageAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<LibraryPageAssetQueryInput>;
};


export type LibraryPageCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<LibraryPageCollectionQueryInput>;
};

export type LibraryPageAssetItems = {
  __typename?: 'LibraryPageAssetItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `Asset`. */
  items?: Maybe<Array<Maybe<Asset>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type LibraryPageAssetQueryInput = {
  /** Search term used to retrieve matched results. */
  term?: InputMaybe<Scalars['String']['input']>;
};

export type LibraryPageCollection = Node & {
  __typename?: 'LibraryPageCollection';
  /** `LibraryPageCollection`'s `Asset` items list. */
  assets: AssetItems;
  /** `Collection` Id. */
  id: Scalars['ID']['output'];
  /** **INTERNAL** `LibraryPageCollection`'s pinned state setting. */
  isPinned: Scalars['Boolean']['output'];
  /** `LibraryPageCollection`'s privacy state setting. */
  isPrivate: Scalars['Boolean']['output'];
  /** `Collection` name. */
  name: Scalars['String']['output'];
};


export type LibraryPageCollectionAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type LibraryPageCollectionItems = {
  __typename?: 'LibraryPageCollectionItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of `LibraryPage` `Collection` items. */
  items: Array<Maybe<LibraryPageCollection>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type LibraryPageCollectionQueryFilterInput = {
  /** **INTERNAL** Filter set of the matched results by the scope of the `Collection`. */
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LibraryPageCollectionQueryInput = {
  /** **INTERNAL** Use filters to reduce the set of matched `Collections` items by filtering. */
  filter?: InputMaybe<LibraryPageCollectionQueryFilterInput>;
};

export type LibraryPageItems = {
  __typename?: 'LibraryPageItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `LibraryPage`. */
  items?: Maybe<Array<Maybe<LibraryPage>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type LibraryQueryFilterInput = {
  /** **INTERNAL** Filter the result set by `Library` types. */
  types?: InputMaybe<Array<InputMaybe<LibraryType>>>;
};

export type LibraryQueryInput = {
  /** **INTERNAL** Use filters to reduce the set of matched `Library` items by complex filtering. */
  filter?: InputMaybe<LibraryQueryFilterInput>;
  /** **BETA** Sort order of the `Library` query result set. */
  sortBy?: InputMaybe<LibraryQuerySort>;
};

/** Query sorting option. Defines how the search results should be sorted. */
export enum LibraryQuerySort {
  /** Sorts the results by the newest entry. */
  Newest = 'NEWEST',
  /** Sorts the results by the oldest entry`. */
  Oldest = 'OLDEST'
}

export type LibraryRootFolder = {
  __typename?: 'LibraryRootFolder';
  /** `Library`/`Workspace`'s `AssetItems` list. */
  assets: AssetItems;
  /** The `FolderItems` of the current `Library`/`Workspace`. */
  folders: FolderItems;
  /**
   * **DEPRECATED** The `SubFolderItems` of the current `Library`/`Workspace`. This field will be removed. Use `folders` instead. | Date: 2023-07-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `folders` instead. | Date: 2023-07-01T00:00:00.000+00:00
   */
  subFolders: SubFolderItems;
};


export type LibraryRootFolderAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<FolderAssetQueryInput>;
};


export type LibraryRootFolderFoldersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type LibraryRootFolderSubFoldersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** List of possible `Library` types. */
export enum LibraryType {
  DocumentLibrary = 'DOCUMENT_LIBRARY',
  IconLibrary = 'ICON_LIBRARY',
  LogoLibrary = 'LOGO_LIBRARY',
  MediaLibrary = 'MEDIA_LIBRARY'
}

export type LibraryUserPermissions = {
  __typename?: 'LibraryUserPermissions';
  /** Check if current `User` has `Asset` creation permissions in a specific `Library`. */
  canCreateAssets: Scalars['Boolean']['output'];
  /** Check if current `User` has `Collection` creation permissions in a specific `Library`. */
  canCreateCollections: Scalars['Boolean']['output'];
  /** Check if current `User` has `Collaborator` view permissions in a specific `Library`. */
  canViewCollaborators: Scalars['Boolean']['output'];
};

export type License = {
  __typename?: 'License';
  /** `License` is applied to new assets by default. */
  addByDefault: Scalars['Boolean']['output'];
  /** `License` id. */
  id: Scalars['ID']['output'];
  /** `License` terms. */
  license: Scalars['String']['output'];
  /** `License` requires `User` to accept terms before download. */
  requireConsensus: Scalars['Boolean']['output'];
  /** `License` title. */
  title: Scalars['String']['output'];
};

export type LogoLibrary = Library & Node & {
  __typename?: 'LogoLibrary';
  /** **INTERNAL** `AggregatedAssetsCustomMetadata` for the given set of the `Assets`. */
  aggregatedAssetsCustomMetadata: Array<AggregatedAssetsCustomMetadata>;
  /**
   * **DEPRECATED** Amount of `Assets` contained in the `Library`/`Workspace`. This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  assetCount?: Maybe<Scalars['Int']['output']>;
  /** **BETA** List of `AssetSubmissionRequests` available for a `Library`. */
  assetSubmissionRequests: Array<AssetSubmissionRequest>;
  /** Search or list `Assets` in the `Library`/`Workspace`. */
  assets: AssetItems;
  /** Browse the `Library` `SubFolderItems` and `AssetItems`. */
  browse: LibraryRootFolder;
  /** `Library` collaborators. */
  collaborators?: Maybe<LibraryCollaborators>;
  /** `Library` `Collection` items list. */
  collections: CollectionItems;
  /** `Library`/`Workspace` color. */
  color?: Maybe<RgbaColor>;
  /** `Library` permissions of the current `User`. */
  currentUserPermissions: LibraryUserPermissions;
  /** Retrieve list of all `CustomMetadataProperty` items belonging to `Library`. */
  customMetadataProperties: Array<CustomMetadataProperty>;
  /** `Library`/`Workspace` Id. */
  id: Scalars['ID']['output'];
  /** `Library`/`Workspace` `License` items list. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `Library`/`Workspace` `MetadataField` items list. This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataFields?: Maybe<Array<Maybe<MetadataField>>>;
  /** `Library`/`Workspace` name. */
  name: Scalars['String']['output'];
  /** **BETA** The `Workflow` belonging to the given `Library`/`Workspace`. */
  workflow: Workflow;
};


export type LogoLibraryAggregatedAssetsCustomMetadataArgs = {
  assetIds: Array<Scalars['ID']['input']>;
};


export type LogoLibraryAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetQueryInput>;
};


export type LogoLibraryCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing a visual `Marking` (highlighted point/area) of an `Asset`. */
export type Marking = {
  /** The `Marking` dimensions in percentage relative to the annotated subject size. */
  dimensions?: Maybe<MarkingDimensions>;
  /** **INTERNAL** The order of the `Marking` on the `Asset`. */
  order: Scalars['Int']['output'];
  /** The `Marking` position in percentage relative to the top left corner of the annotated subject. */
  position: MarkingPosition;
};

export type MarkingDimensions = {
  __typename?: 'MarkingDimensions';
  /** The height of the `Marking` area in percentage of the annotated subject total height, relative to the top left corner. */
  height?: Maybe<Scalars['Percent']['output']>;
  /** The width of the `Marking` area in percentage of the annotated subject total width, relative to the top left corner. */
  width?: Maybe<Scalars['Percent']['output']>;
};

export type MarkingDimensionsInput = {
  /** The height of the `Marking` area in percentage of the annotated subject total height. */
  height: Scalars['Percent']['input'];
  /** The width of the `Marking` area in percentage of the annotated subject total width. */
  width: Scalars['Percent']['input'];
};

export type MarkingInput = {
  /** The `Marking` dimensions in percentage of the annotated subject dimensions. */
  dimensions?: InputMaybe<MarkingDimensionsInput>;
  /** The `Marking` page. Applicable to `Assets` with the type `Document` only. */
  page?: InputMaybe<Scalars['Int']['input']>;
  /** The `Marking` position in percentage, in relation to the top left corner of the `Asset`. */
  position: MarkingPositionInput;
  /** **INTERNAL** The spread with `Marking`. Applicable to one page of multi page `Asset` with the type `PUBLISHER` only. */
  spread?: InputMaybe<Scalars['String']['input']>;
  /** The timeframe of the `Marking` area in percentage of total video length. Applicable to `Video` type `Assets` only. */
  timeframe?: InputMaybe<MarkingTimeframeInput>;
};

export type MarkingPosition = {
  __typename?: 'MarkingPosition';
  /** The horizontal position of the `Marking` in percentage, in relation to the `Asset` total width. */
  x: Scalars['Percent']['output'];
  /** The vertical position of the `Marking` in percentage, in relation to the `Asset` total height. */
  y: Scalars['Percent']['output'];
};

export type MarkingPositionInput = {
  /** The horizontal position of the `Marking` in percentage, in relation to the `Asset` top left corner. */
  x: Scalars['Percent']['input'];
  /** The vertical position of the `Marking` in percentage, in relation to the `Asset` top left corner. */
  y: Scalars['Percent']['input'];
};

export type MarkingTimeframe = {
  __typename?: 'MarkingTimeframe';
  /** The end of the `Marking` area in percentage of total video length. */
  end?: Maybe<Scalars['Percent']['output']>;
  /** The start of the `Marking` area in percentage of total video length. */
  start?: Maybe<Scalars['Percent']['output']>;
};

export type MarkingTimeframeInput = {
  /** The end of the `Marking` area in percentage of total video length. Defaults to video end (1) when the timeframe input property is set. */
  end?: InputMaybe<Scalars['Percent']['input']>;
  /** The start of the `Marking` area in percentage of total video length. Defaults to video start (0) when the timeframe input property is set. */
  start?: InputMaybe<Scalars['Percent']['input']>;
};

export type MediaLibrary = Library & Node & {
  __typename?: 'MediaLibrary';
  /** **INTERNAL** `AggregatedAssetsCustomMetadata` for the given set of the `Assets`. */
  aggregatedAssetsCustomMetadata: Array<AggregatedAssetsCustomMetadata>;
  /**
   * **DEPRECATED** Amount of `Assets` contained in the `Library`/`Workspace`. This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  assetCount?: Maybe<Scalars['Int']['output']>;
  /** **BETA** List of `AssetSubmissionRequests` available for a `Library`. */
  assetSubmissionRequests: Array<AssetSubmissionRequest>;
  /** Search or list `Assets` in the `Library`/`Workspace`. */
  assets: AssetItems;
  /** Browse the `Library` `SubFolderItems` and `AssetItems`. */
  browse: LibraryRootFolder;
  /** `Library` collaborators. */
  collaborators?: Maybe<LibraryCollaborators>;
  /** `Library` `Collection` items list. */
  collections: CollectionItems;
  /** `Library`/`Workspace` color. */
  color?: Maybe<RgbaColor>;
  /** `Library` permissions of the current `User`. */
  currentUserPermissions: LibraryUserPermissions;
  /** Retrieve list of all `CustomMetadataProperty` items belonging to `Library`. */
  customMetadataProperties: Array<CustomMetadataProperty>;
  /** `Library`/`Workspace` Id. */
  id: Scalars['ID']['output'];
  /** `Library`/`Workspace` `License` items list. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `Library`/`Workspace` `MetadataField` items list. This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataFields?: Maybe<Array<Maybe<MetadataField>>>;
  /** `Library`/`Workspace` name. */
  name: Scalars['String']['output'];
  /** **BETA** The `Workflow` belonging to the given `Library`/`Workspace`. */
  workflow: Workflow;
};


export type MediaLibraryAggregatedAssetsCustomMetadataArgs = {
  assetIds: Array<Scalars['ID']['input']>;
};


export type MediaLibraryAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetQueryInput>;
};


export type MediaLibraryCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type MetadataField = {
  __typename?: 'MetadataField';
  /** Allow an empty value as a valid `SELECT` type `MetadataField` value. */
  allowEmptyValue: Scalars['Boolean']['output'];
  /** Allow multiple values in `SELECT` type `MetadataField`. */
  allowMultipleValues: Scalars['Boolean']['output'];
  /** `DateTime` of the `MetadataField` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** `User` who created the `MetadataField`. */
  creator: User;
  /** Optional default value of the `MetadataField`. */
  defaultValue?: Maybe<Scalars['String']['output']>;
  /** `MetadataField` Id. */
  id: Scalars['ID']['output'];
  /** Allow users to edit `MetadataField` values. */
  isEditable: Scalars['Boolean']['output'];
  /** Allow users to search for `MetadataField` values. */
  isSearchable: Scalars['Boolean']['output'];
  /** Show/hide `MetadataField` values. */
  isVisible: Scalars['Boolean']['output'];
  /** `MetadataField`'s name. */
  label: Scalars['String']['output'];
  /** `DateTime` of the `MetadataField`'s last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** `User` who last modified `MetadataField`. */
  modifier?: Maybe<User>;
  /** `MetadataField`'s type. */
  type: Scalars['String']['output'];
  /** Possible values for `SELECT` type `MetadataField`. */
  values?: Maybe<Array<Maybe<MetadataFieldValues>>>;
};

/** List of possible custom `MetadataField` types. */
export enum MetadataFieldType {
  Date = 'DATE',
  Longtext = 'LONGTEXT',
  Number = 'NUMBER',
  Select = 'SELECT',
  Text = 'TEXT'
}

export type MetadataFieldValues = {
  __typename?: 'MetadataFieldValues';
  /** Default value for `SELECT` type `Metadata Field`. */
  default?: Maybe<Scalars['Boolean']['output']>;
  /** Value of `SELECT` type `Metadata Field`. */
  value?: Maybe<Scalars['String']['output']>;
};

export type MetadataFieldValuesInput = {
  /** Optional setting to define current `SELECT` type `Metadata Field` value as default. */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Possible value of `SELECT` type `Metadata Field`. */
  value: Scalars['String']['input'];
};

export type MetadataValue = {
  __typename?: 'MetadataValue';
  /** `DateTime` of the `MetadataValue` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** `User` who created the `MetadataValue`. */
  creator: User;
  /** `MetadataValue` Id. */
  id: Scalars['ID']['output'];
  /** `MetadataField` associated to `MetadataValue`. */
  metadataField: MetadataField;
  /** `DateTime` of the `MetadataValue`'s last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** `User` who last modified the `MetadataValue`. */
  modifier?: Maybe<User>;
  /** `MetadataValue`'s value. */
  value: Scalars['String']['output'];
};

export type MoveAssets = {
  __typename?: 'MoveAssets';
  /** List of moved `Asset` items. */
  assets?: Maybe<Array<Asset>>;
};

export type MoveAssetsInput = {
  /** Ids of the `Asset` items to be moved. */
  assetIds: Array<Scalars['ID']['input']>;
  /** Id of the destination entity where `Asset` items should be moved to. Allows `Library`/`Workspace`/`Folder` Ids only. */
  destinationId: Scalars['ID']['input'];
};

export type MoveCustomMetadataProperty = {
  __typename?: 'MoveCustomMetadataProperty';
  /** The moved `CustomMetadataProperty`. */
  customMetadataProperty: CustomMetadataProperty;
};

export type MoveCustomMetadataPropertyInput = {
  /** Id of the `CustomMetadataProperty` that will be moved. */
  id: Scalars['ID']['input'];
  /** Id of the parent entity where the `CustomMetadataProperty` is linked to. */
  parentId: Scalars['ID']['input'];
  /** `CustomMetadataProperty` new position details. */
  position: CustomMetadataPropertyPositionInput;
};

export type MoveFolders = {
  __typename?: 'MoveFolders';
  /** List of moved `Folder` ids. */
  ids?: Maybe<Array<Scalars['ID']['output']>>;
};

export type MoveFoldersInput = {
  /** Id of the destination entity where `Folder` items should be moved to. Allows `Library`/`Workspace`/`Folder` Ids only. */
  destinationId: Scalars['ID']['input'];
  /** Ids of the `Folder` items to be moved. */
  folderIds: Array<Scalars['ID']['input']>;
};

export type MoveWorkflowTask = {
  __typename?: 'MoveWorkflowTask';
  /** **BETA** The `WorkflowStatus` with the moved tasks. */
  workflowStatus?: Maybe<WorkflowStatus>;
};

export type MoveWorkflowTaskInput = {
  /** **BETA** `WorkflowTask` enter message. Optionally required by a `EnterRule` of the given `WorkflowStatus`. */
  statusEnterMessage?: InputMaybe<Scalars['String']['input']>;
  /** **BETA** The Id of the destination `WorkflowStatus`. */
  workflowStatusId: Scalars['ID']['input'];
  /** **BETA** List of `WorkflowTask` Ids to move. Limited to 100 Ids. */
  workflowTaskIds: Array<Scalars['ID']['input']>;
};

export type MultiPageMarking = Marking & {
  __typename?: 'MultiPageMarking';
  /** The `Marking` dimensions in percent of `Asset` dimensions. */
  dimensions?: Maybe<MarkingDimensions>;
  /** **INTERNAL** The order of the `Marking` on the `Asset`. */
  order: Scalars['Int']['output'];
  /** The `Asset` page where the `Marking` is set. */
  page?: Maybe<Scalars['Int']['output']>;
  /** The `Marking` position in percent relative to the top left corner of the `Asset`. */
  position: MarkingPosition;
  /** **INTERNAL** The `Marking` spread. Applicable to `Assets` with the type `Publisher` only. */
  spread?: Maybe<Scalars['String']['output']>;
};

/** `NodeInterface` is the base for all types. */
export type Node = {
  /** `Node` Id. */
  id: Scalars['ID']['output'];
};

export type Project = DocumentLibrary | IconLibrary | LogoLibrary | MediaLibrary | Workspace;

/** List of possible `Project` permission levels. */
export enum ProjectPermission {
  Admin = 'ADMIN',
  Comment = 'COMMENT',
  Edit = 'EDIT',
  Translate = 'TRANSLATE',
  View = 'VIEW'
}

/** Different `Project` types */
export enum ProjectType {
  DocumentLibrary = 'DOCUMENT_LIBRARY',
  IconLibrary = 'ICON_LIBRARY',
  LogoLibrary = 'LOGO_LIBRARY',
  MediaLibrary = 'MEDIA_LIBRARY',
  Workspace = 'WORKSPACE'
}

export type ProjectWebhook = Node & Webhook & {
  __typename?: 'ProjectWebhook';
  /** DateTime of the `Webhook` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `creator` is the `User` who created the `Webhook`. */
  creator: User;
  /** `Webhook` Id. */
  id: Scalars['ID']['output'];
  /** `Webhook` name. */
  name: Scalars['String']['output'];
  /** The `Url` which will be called by the `Webhook` */
  notificationUrl: Scalars['Url']['output'];
  /** Returns the associated `Project`. */
  project: Project;
  /** The randomly generated secret of the current `Webhook`. */
  secret: Scalars['String']['output'];
};

export type RemoveAssetLicense = {
  __typename?: 'RemoveAssetLicense';
  /** `Asset` details. */
  asset?: Maybe<Asset>;
  /** `License` details. */
  license?: Maybe<License>;
};

export type RemoveAssetLicenseInput = {
  /** `Asset` Id. */
  assetId: Scalars['ID']['input'];
  /** `License` Id. */
  licenseId: Scalars['ID']['input'];
};

export type RemoveAssetPreviewImage = {
  __typename?: 'RemoveAssetPreviewImage';
  /** `Asset` details. */
  asset?: Maybe<Asset>;
};

export type RemoveAssetPreviewImageInput = {
  /** `Asset` Id. */
  id: Scalars['ID']['input'];
};

export type RemoveAssetRelations = {
  __typename?: 'RemoveAssetRelations';
  /** `Asset` details. */
  asset: Asset;
  /** Related `Asset` items details. */
  relatedAssets: Array<Asset>;
};

export type RemoveAssetRelationsInput = {
  /** `Asset` Id. */
  assetId: Scalars['ID']['input'];
  /** Related `Asset` Id list. */
  relatedAssetIds: Array<Scalars['ID']['input']>;
};

export type RemoveAssetTags = {
  __typename?: 'RemoveAssetTags';
  /** `Asset` details. */
  asset?: Maybe<Asset>;
};

export type RemoveAssetTagsInput = {
  /** `Asset` Id. */
  id: Scalars['ID']['input'];
  /** `Asset` tags. */
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export type RemoveAssetsCustomMetadata = {
  __typename?: 'RemoveAssetsCustomMetadata';
  /** List of the `Asset` Ids where the `CustomMetadata` values were removed. */
  assetIds: Array<Scalars['ID']['output']>;
};

export type RemoveAssetsCustomMetadataInput = {
  /** Set of the `Asset` Ids from which `CustomMetadata` should be removed. */
  assetIds: Array<Scalars['ID']['input']>;
  /** `CustomMetadata` to remove to the given set of the `Assets`. */
  customMetadata: Array<CustomMetadataInput>;
};

export type RemoveCollectionAssets = {
  __typename?: 'RemoveCollectionAssets';
  /** `Collection` details. */
  collection?: Maybe<Collection>;
};

export type RemoveCollectionAssetsInput = {
  /** Ids of the `Assets` to remove from the `Collection`. */
  assetIds: Array<Scalars['ID']['input']>;
  /** `Collection` Id. */
  collectionId: Scalars['ID']['input'];
};

export type RemoveCustomMetadata = {
  __typename?: 'RemoveCustomMetadata';
  /** List of parentIds with removed `CustomMetadata` values. */
  parentIds: Array<Scalars['ID']['output']>;
};

export type RemoveCustomMetadataInput = {
  /** `CustomMetadata` to be removed from the list of parent Ids. */
  customMetadata: Array<CustomMetadataInput>;
  /** List of parent Ids where `CustomMetadata` should be removed from. */
  parentIds: Array<Scalars['ID']['input']>;
};

export type RemoveCustomMetadataPropertyOptions = {
  __typename?: 'RemoveCustomMetadataPropertyOptions';
  /** `CustomMetadataProperty` details. */
  customMetadataProperty: CustomMetadataProperty;
};

export type RemoveCustomMetadataPropertyOptionsInput = {
  /** `CustomMetadataPropertyOption` Ids. */
  optionIds: Array<Scalars['ID']['input']>;
  /** `CustomMetadataProperty` Id. */
  propertyId: Scalars['ID']['input'];
};

export type RemoveMetadataValue = {
  __typename?: 'RemoveMetadataValue';
  /** `DateTime` of the `MetadataValue` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** `User` who created the `MetadataValue`. */
  creator: User;
  /** `MetadataValue` Id. */
  id: Scalars['ID']['output'];
  /** `MetadataField` related to the `MetadataValue`. */
  metadataField: MetadataField;
  /** `DateTime` of the `MetadataValue` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** `User` who last modified the `MetadataValue`. */
  modifier?: Maybe<User>;
  /** `MetadataValue` value. */
  value: Scalars['String']['output'];
};

export type RemoveMetadataValueInput = {
  /** `MetadataValue` Id. */
  id: Scalars['ID']['input'];
};

export type RemoveWorkflowChecklistItem = {
  __typename?: 'RemoveWorkflowChecklistItem';
  /** **BETA** The deleted `WorkflowChecklistItem`. */
  checklistItem?: Maybe<WorkflowChecklistItem>;
};

export type RemoveWorkflowChecklistItemInput = {
  /** **BETA** The Id of the `WorkflowChecklistItem` to remove. */
  id: Scalars['ID']['input'];
};

export type RemoveWorkflowChecklistPreset = {
  __typename?: 'RemoveWorkflowChecklistPreset';
  /** **BETA** The deleted `WorkflowChecklistPreset`. */
  checklistPreset?: Maybe<WorkflowChecklistPreset>;
};

export type RemoveWorkflowChecklistPresetInput = {
  /** **BETA** The Id of the `WorkflowChecklistPreset` to remove. */
  id: Scalars['ID']['input'];
};

export type RemoveWorkflowStatusAssignees = {
  __typename?: 'RemoveWorkflowStatusAssignees';
  /** **BETA** The updated `WorkflowStatus`. */
  workflowStatus?: Maybe<WorkflowStatus>;
};

export type RemoveWorkflowStatusAssigneesInput = {
  /** **BETA** `WorkflowStatus` Id. */
  id: Scalars['ID']['input'];
  /** **BETA** List of `User` Ids to be unassigned from `WorkflowStatus`. */
  userIds: Array<Scalars['ID']['input']>;
};

export type RemoveWorkflowTaskAssignees = {
  __typename?: 'RemoveWorkflowTaskAssignees';
  /** **BETA** The updated `WorkflowTask`. */
  workflowTask?: Maybe<WorkflowTask>;
};

export type RemoveWorkflowTaskAssigneesInput = {
  /** **BETA** `WorkflowTask` Id. */
  id: Scalars['ID']['input'];
  /** **BETA** List of `User` Ids to unassign from the `WorkflowTask`. */
  userIds: Array<Scalars['ID']['input']>;
};

export type ReopenAssetComment = {
  __typename?: 'ReopenAssetComment';
  /** The reopened `AssetComment`. */
  comment?: Maybe<AssetComment>;
};

export type ReopenAssetCommentInput = {
  /** `AssetComment` Id to reopen. */
  id: Scalars['ID']['input'];
};

export type ReplaceAsset = {
  __typename?: 'ReplaceAsset';
  /** The newly created `Asset` processing job response. */
  job: AssetProcessingJob;
};

export type ReplaceAssetInput = {
  /** Parent `Asset` Id. */
  assetId: Scalars['ID']['input'];
  /** Signed file Id returned in `uploadFile`. */
  fileId: Scalars['ID']['input'];
};

export type ReplaceAssetVariant = {
  __typename?: 'ReplaceAssetVariant';
  /** The newly created `AssetVariant` processing job response. */
  job: AssetVariantProcessingJob;
};

export type ReplaceAssetVariantInput = {
  /** Parent `Asset` Id of the `AssetVariant` to replace. Currently, only `Assets` from Logo and Icon `Library` type are supported. */
  assetId: Scalars['ID']['input'];
  /** File Id. Signed Id returned in `uploadFile`. */
  fileId: Scalars['ID']['input'];
  /** `AssetVariant` key to replace. Composed of the color space and the file extension. Examples: RGB:JPG, CMYK:SVG */
  key: Scalars['String']['input'];
};

export type ReplaceExternalDataSourceFile = {
  __typename?: 'ReplaceExternalDataSourceFile';
  /** `ExternalDataSource` Id. */
  externalDataSourceId: Scalars['ID']['output'];
};

export type ReplaceExternalDataSourceFileInput = {
  /** `ExternalDataSource` Id. */
  externalDataSourceId: Scalars['ID']['input'];
  /** Signed `File` Id. */
  fileId: Scalars['ID']['input'];
};

export type ReplyToComment = {
  __typename?: 'ReplyToComment';
  /** `AssetCommentReply` details. */
  reply: AssetCommentReply;
};

export type ReplyToCommentInput = {
  /** `AssetComment` Id of the comment you want to reply to. */
  id: Scalars['ID']['input'];
  /** `AssetComment` reply content. Can include `User` mentions by wrapping an authorized `Project` `User` Id in the form of `@[user:<id>]` where `<id>` is the `User` integer or global identifier. */
  reply: Scalars['String']['input'];
};

export type ResolveAssetComment = {
  __typename?: 'ResolveAssetComment';
  /** The resolved `AssetComment`. */
  comment?: Maybe<AssetComment>;
};

export type ResolveAssetCommentInput = {
  /** `AssetComment` Id to resolve. */
  id: Scalars['ID']['input'];
};

export type RevokeAssetSubmissionRequestToken = {
  __typename?: 'RevokeAssetSubmissionRequestToken';
  /** `AssetSubmissionRequest` Id. */
  requestId: Scalars['ID']['output'];
  /** `AssetSubmissionRequest` token. */
  token: Scalars['String']['output'];
};

export type RevokeAssetSubmissionRequestTokenInput = {
  /** `AssetSubmissionRequest` Id. */
  requestId: Scalars['ID']['input'];
  /** `AssetSubmissionRequest` token. */
  token: Scalars['String']['input'];
};

export type RevokeSubjectsAnalyticsDashboardAccess = {
  __typename?: 'RevokeSubjectsAnalyticsDashboardAccess';
  /** **INTERNAL** List of the subject Ids that were revoked access to the Analytics Dashboard. */
  subjectIds: Array<Scalars['ID']['output']>;
};

export type RevokeSubjectsAnalyticsDashboardAccessInput = {
  /** **INTERNAL** Id of the Analytics Dashboard being revoked access to. */
  analyticsDashboardId: Scalars['ID']['input'];
  /** **INTERNAL** List of opaque identifiers (either `User`-s or `Group`-s) whose access to the Analytics Dashboard will be revoked. */
  subjectIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type RgbaColor = {
  __typename?: 'RgbaColor';
  /** Alpha channel value. */
  alpha: Scalars['Percent']['output'];
  /** Blue color channel value. */
  blue: Scalars['RgbColorChannel']['output'];
  /** Green color channel value. */
  green: Scalars['RgbColorChannel']['output'];
  /** Red color channel value. */
  red: Scalars['RgbColorChannel']['output'];
};

export type RgbaColorInput = {
  /** **BETA** Alpha channel value. */
  alpha: Scalars['Percent']['input'];
  /** **BETA** Blue color channel value. */
  blue: Scalars['RgbColorChannel']['input'];
  /** **BETA** Green color channel value. */
  green: Scalars['RgbColorChannel']['input'];
  /** **BETA** Red color channel value. */
  red: Scalars['RgbColorChannel']['input'];
};

export type RootMutation = {
  __typename?: 'RootMutation';
  /** Add a relation between an existing `Asset` and `License`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  addAssetLicense?: Maybe<AddAssetLicense>;
  /**
   * **DEPRECATED** Add a new relation between an existing `Asset` and an existing `MetadataField` with its value. The value will be automatically created and linked to its `MetadataField`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. This field will be removed. Use `addCustomMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `addCustomMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  addAssetMetadataFieldValue?: Maybe<AddAssetMetadataFieldValue>;
  /** Add new `Asset` preview image. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  addAssetPreviewImage?: Maybe<AddAssetPreviewImage>;
  /** Relate existing `Asset`s. The `relatedAssetIds` input field list is limited to 100 ids per request and cannot contain the same `assetId` input field value. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  addAssetRelations?: Maybe<AddAssetRelations>;
  /** Add new `Asset` tags. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  addAssetTags?: Maybe<AddAssetTags>;
  /**
   * **DEPRECATED** **INTERNAL** Add the new `CustomMetadata` with respective values to the given set of the `Assets`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. This field will be removed. Use `AddCustomMetadata` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `AddCustomMetadata` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  addAssetsCustomMetadata?: Maybe<AddAssetsCustomMetadata>;
  /** Add `Assets` to the existing `Collection`. Requires `basic:write` scope to be accessible and `Collection` permission level `EDIT`. */
  addCollectionAssets?: Maybe<AddCollectionAssets>;
  /** Add `CustomMetadata` values to a supported parent (`Asset` | `WorkspaceProject`). Requires `basic:write` scope to be accessible and permission level `EDIT` for the respective parent. */
  addCustomMetadata?: Maybe<AddCustomMetadata>;
  /** Add options to an existing `SELECT` or `MULTISELECT` type `CustomMetadataProperty`. RequiresRequires `basic:write` scope to be accessible and `CustomMetadataProperty` permission level `EDIT`. */
  addCustomMetadataPropertyOptions?: Maybe<AddCustomMetadataPropertyOptions>;
  /** **BETA** Add a new `WorkflowChecklistItem` for a given `WorkflowTask`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  addWorkflowChecklistItem?: Maybe<AddWorkflowChecklistItem>;
  /** **BETA** Add a new `WorkflowChecklistPreset` for a given `WorkflowStatus`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  addWorkflowChecklistPreset?: Maybe<AddWorkflowChecklistPreset>;
  /** **BETA** Add assignees to an existing `WorkflowStatus`. Currently, only one assignee is supported. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  addWorkflowStatusAssignees?: Maybe<AddWorkflowStatusAssignees>;
  /** **BETA** Add assignees to an existing `WorkflowTask`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  addWorkflowTaskAssignees?: Maybe<AddWorkflowTaskAssignees>;
  /** **INTERNAL** Create one or more `AssetSubmission` items. Requires a valid `AssetSubmissionRequest` token in the HTTP `Authorization` request header. */
  approveAssetSubmissions?: Maybe<ApproveAssetSubmissions>;
  /** **BETA** Create `AccountUser`. */
  createAccountUser?: Maybe<CreateAccountUser>;
  /** Create a new `Asset`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  createAsset?: Maybe<CreateAsset>;
  /** Create a new `Asset` `Comment`. Requires `basic:write` scope to be accessible and `Asset` permission level `COMMENT`. */
  createAssetComment?: Maybe<CreateAssetComment>;
  /** **INTERNAL** Create a new `AssetSubmissionRequest`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  createAssetSubmissionRequest?: Maybe<CreateAssetSubmissionRequest>;
  /** **INTERNAL** Create new `AssetSubmission` item(s). Requires a valid `AssetSubmissionRequest` `token` input. */
  createAssetSubmissions?: Maybe<CreateAssetSubmissions>;
  /** **BETA** Create a new `AssetVariant`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  createAssetVariant?: Maybe<CreateAssetVariant>;
  /** **BETA** Create a new `WorkflowTask` for an `Asset` in a given `WorkflowStatus`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  createAssetWorkflowTask?: Maybe<CreateAssetWorkflowTask>;
  /** Create a new `Attachment`. Attachments require a valid parent ID string. This mutation currently only supports attachments for parents of `Asset` type. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  createAttachment?: Maybe<CreateAttachment>;
  /** Create a new `Collection`. Currently supported for `Library` type parent entities only. Requires `basic:write` scope to be accessible and `Collection` permission level `EDIT`. */
  createCollection?: Maybe<CreateCollection>;
  /** Create a new `CustomMetadataProperty`. RequiresRequires `basic:write` scope to be accessible and `Brand` or `Project` permission level `EDIT`. */
  createCustomMetadataProperty?: Maybe<CreateCustomMetadataProperty>;
  /** Create a new External `Asset` from a url. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  createExternalAsset?: Maybe<CreateExternalAsset>;
  /** Create a new `Folder`. Requires `basic:write` scope to be accessible and `Project` or `Folder` permission level `EDIT`. */
  createFolder?: Maybe<CreateFolder>;
  /** Create a new `Project` `License`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  createLicense?: Maybe<CreateLicense>;
  /**
   * **DEPRECATED** Create a new `Project` `MetadataField` with your desired configuration. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. This field will be removed. Use `createCustomMetadataProperty` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `createCustomMetadataProperty` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  createMetadataField?: Maybe<CreateMetadataField>;
  /** **INTERNAL** Create a new permission token for multiple `Assets` or for a single `Collection` or `Folder`. */
  createPermissionToken?: Maybe<CreatePermissionToken>;
  /** **INTERNAL** Create a new `ShareLink` Requires `basic:write` scope to be accessible and a valid permission token. */
  createShareLink?: Maybe<CreateShareLink>;
  /** **INTERNAL** Create a new `PermissionToken`. Requires `basic:write` scope to be accessible. */
  createShareLinkPermissionToken?: Maybe<CreateShareLinkPermissionToken>;
  /** **BETA** Create new `WorkflowStatus` in a given `Workflow`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  createWorkflowStatus?: Maybe<CreateWorkflowStatus>;
  /** Create a new `Workspace` type `Project`. Requires `basic:write` scope to be accessible. */
  createWorkspaceProject?: Maybe<CreateWorkspaceProject>;
  /** **BETA** Delete an existing `AccountUser`. Requires `basic:write` scope to be accessible and `Account` permission level `ADMIN`. */
  deleteAccountUser?: Maybe<DeleteAccountUser>;
  /** Delete an existing `Asset`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  deleteAsset?: Maybe<DeleteAsset>;
  /** **INTERNAL** Delete an existing `AssetSubmission`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  deleteAssetSubmission?: Maybe<DeleteAssetSubmission>;
  /** **INTERNAL** Delete an existing `AssetSubmissionRequest`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  deleteAssetSubmissionRequest?: Maybe<DeleteAssetSubmissionRequest>;
  /** **BETA** Delete an existing `AssetVariant`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  deleteAssetVariant?: Maybe<DeleteAssetVariant>;
  /** Delete an existing `Attachment`. Requires `basic:write` scope to be accessible and depending on the `Attachment` type, either `Portal` or `Asset` permission level `EDIT`. */
  deleteAttachment?: Maybe<DeleteAttachment>;
  /** Delete an existing `Collection`. Requires `basic:write` scope to be accessible and `Collection` permission level `EDIT`. */
  deleteCollection?: Maybe<DeleteCollection>;
  /** Delete an existing `Comment`. This will update and/or remove all relations to that `Comment`. Requires `basic:write` scope to be accessible and `Asset` permission level `COMMENT`. */
  deleteComment?: Maybe<DeleteComment>;
  /** Delete an existing `CustomMetadataProperty`. */
  deleteCustomMetadataProperty?: Maybe<DeleteCustomMetadataProperty>;
  /** Delete the existing `Folders`. This will delete all of the `Assets` and `SubFolders` within the `Folders`. Requires `basic:write` scope to be accessible and `Folder` permission level `EDIT`. */
  deleteFolders?: Maybe<DeleteFolders>;
  /** Delete an existing `Project` `License`. This will remove all relations to that `License`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  deleteLicense?: Maybe<DeleteLicense>;
  /**
   * **DEPRECATED** Delete an existing `Project` `MetadataField`. Existing `MetadataField`'s with the same value with be automatically removed. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. This field will be removed. Use `deleteCustomMetadataProperty` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `deleteCustomMetadataProperty` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  deleteMetadataField?: Maybe<DeleteMetadataField>;
  /** **INTERNAL** Delete an existing `ShareLink`. Requires `basic:write` scope to be accessible. */
  deleteShareLink?: Maybe<DeleteShareLink>;
  /** **BETA** Delete an existing `WorkflowStatus`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  deleteWorkflowStatus?: Maybe<DeleteWorkflowStatus>;
  /** **BETA** Delete an existing `WorkflowTask`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  deleteWorkflowTask?: Maybe<DeleteWorkflowTask>;
  /** **INTERNAL** Disable a `WorkflowStatusEnterRule` of a `WorkflowStatus`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  disableWorkflowStatusEnterRule?: Maybe<DisableWorkflowStatusEnterRule>;
  /** Edit an existing `AssetComment`. Requires `basic:write` scope to be accessible and `Asset` permission level `COMMENT`. */
  editComment?: Maybe<EditComment>;
  /** **INTERNAL** Enable a `WorkflowStatusEnterRule` of a `WorkflowStatus`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  enableWorkflowStatusEnterRule?: Maybe<EnableWorkflowStatusEnterRule>;
  /** **INTERNAL** Grant user(s) and/or group(s) access to the Analytics Dashboard. */
  grantSubjectsAnalyticsDashboardAccess?: Maybe<GrantSubjectsAnalyticsDashboardAccess>;
  /** Install `Webhook`. Requires `webhook:write` scope to be accessible and `Project` permission level `EDIT`. */
  installProjectWebhook?: Maybe<InstallProjectWebhook>;
  /** Invite `Project` user. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. Limitations: Does not work if User Provisioning feature is enabled. */
  inviteProjectUser?: Maybe<InviteProjectUser>;
  /** **INTERNAL** Issue a new `AssetSubmissionRequest` token. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  issueAssetSubmissionRequestToken?: Maybe<IssueAssetSubmissionRequestToken>;
  /** Move existing `Asset` item(s) to the given `Library`, `Workspace` or `Folder` destination. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  moveAssets?: Maybe<MoveAssets>;
  /** **INTERNAL** Move an existing `CustomMetadataProperty` to another position. RequiresRequires `basic:write` scope to be accessible and `CustomMetadataProperty` permission level `EDIT`. */
  moveCustomMetadataProperty?: Maybe<MoveCustomMetadataProperty>;
  /** Move existing `Folder` item(s) to the given `Library`, `Workspace` or `Folder` destination. This operation will move all of the `Asset` item(s) and `SubFolder` item(s) within the provided `Folder` item(s). Requires `basic:write` scope to be accessible and `Folder` permission level `EDIT`. */
  moveFolders?: Maybe<MoveFolders>;
  /** **BETA** Move one or more `WorkflowTask` to a new `WorkflowStatus`. All `EnterRule` of the destination `WorkflowStatus` have to be satisfied to be able to move. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  moveWorkflowTask?: Maybe<MoveWorkflowTask>;
  /** Remove an existing relation between an `Asset` and a `License`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  removeAssetLicense?: Maybe<RemoveAssetLicense>;
  /** Remove existing `Asset` preview image. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  removeAssetPreviewImage?: Maybe<RemoveAssetPreviewImage>;
  /** **BETA** Remove existing relations between `Asset` items. The `relatedAssetIds` input field list is limited to 100 ids per request and cannot contain the same `assetId` input field value. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  removeAssetRelations?: Maybe<RemoveAssetRelations>;
  /** Remove existing `Asset` tags. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  removeAssetTags?: Maybe<RemoveAssetTags>;
  /**
   * **DEPRECATED** **INTERNAL** Remove the existing `CustomMetadata` from the given list of `Assets`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. This field will be removed. Use `RemoveCustomMetadata` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `RemoveCustomMetadata` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  removeAssetsCustomMetadata?: Maybe<RemoveAssetsCustomMetadata>;
  /** Remove `Assets` from the existing `Collection`. Requires `basic:write` scope to be accessible and `Collection` permission level `EDIT`. */
  removeCollectionAssets?: Maybe<RemoveCollectionAssets>;
  /** Remove `CustomMetadata` values from a supported parent (`Asset` | `WorkspaceProject`). Requires `basic:write` scope to be accessible and permission level `EDIT` for the respective parent. */
  removeCustomMetadata?: Maybe<RemoveCustomMetadata>;
  /** Remove options from an existing `SELECT` or `MULTISELECT` type `CustomMetadataProperty`. RequiresRequires `basic:write` scope to be accessible and `CustomMetadataProperty` permission level `EDIT`. */
  removeCustomMetadataPropertyOptions?: Maybe<RemoveCustomMetadataPropertyOptions>;
  /**
   * **DEPRECATED** Remove existing `MetadataField` value.Existing relations to that `MetadataField` with the same value will be automatically removed.Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. This field will be removed. Use `removeCustomMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `removeCustomMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  removeMetadataValue?: Maybe<RemoveMetadataValue>;
  /** **BETA** Remove a `WorkflowChecklistItem`.Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  removeWorkflowChecklistItem?: Maybe<RemoveWorkflowChecklistItem>;
  /** **BETA** Remove a `WorkflowChecklistPreset`.Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  removeWorkflowChecklistPreset?: Maybe<RemoveWorkflowChecklistPreset>;
  /** **BETA** Remove assignees from an existing `WorkflowStatus`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  removeWorkflowStatusAssignees?: Maybe<RemoveWorkflowStatusAssignees>;
  /** **BETA** Remove assignees from an existing `WorkflowTask`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  removeWorkflowTaskAssignees?: Maybe<RemoveWorkflowTaskAssignees>;
  /** Reopens a resolved `AssetComment`. Requires `basic:write` scope to be accessible and `Comment` permission level `EDIT`. */
  reopenAssetComment?: Maybe<ReopenAssetComment>;
  /** Replace an existing `Asset`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  replaceAsset?: Maybe<ReplaceAsset>;
  /** **BETA** Replace an existing `AssetVariant`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  replaceAssetVariant?: Maybe<ReplaceAssetVariant>;
  /** **BETA** Replace a `File` in `ExternalDataSource`. Requires `basic:write` scope to be accessible` permission level `EDIT`. */
  replaceExternalDataSourceFile?: Maybe<ReplaceExternalDataSourceFile>;
  /** Add a new reply to an existing `Asset` `Comment`. Requires `basic:write` scope to be accessible and `Asset` permission level `COMMENT`. */
  replyToComment?: Maybe<ReplyToComment>;
  /** Resolve an open `AssetComment`. Requires `basic:write` scope to be accessible and `Comment` permission level `EDIT`. */
  resolveAssetComment?: Maybe<ResolveAssetComment>;
  /** **INTERNAL** Revoke an existing `AssetSubmissionRequest` token. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  revokeAssetSubmissionRequestToken?: Maybe<RevokeAssetSubmissionRequestToken>;
  /** **INTERNAL** Revoke access of user(s) and/or group(s) from the Analytics Dashboard */
  revokeSubjectsAnalyticsDashboardAccess?: Maybe<RevokeSubjectsAnalyticsDashboardAccess>;
  /**
   * **DEPRECATED** **INTERNAL** Set the `CustomMetadata` with respective values to the given set of the `Assets`. It will overwrite the existing values for the already existing `CustomMetadata` on the `Assets` selection. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. This field will be removed. Use `SetCustomMetadata` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `SetCustomMetadata` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  setAssetsCustomMetadata?: Maybe<SetAssetsCustomMetadata>;
  /** Replace the existing set of the `Assets` in the `Collection` with the new set of the `Assets`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  setCollectionAssets?: Maybe<SetCollectionAssets>;
  /** **BETA** Set `CustomMetadataProperty` values to any supported parent (`WorkspaceProject` | `Asset`). Attention: Existing `CustomMetadataProperty` values for the selected parents will be overwritten and/or removed. Requires `basic:write` scope to be accessible and permission level `EDIT` for the respective parent. */
  setCustomMetadata?: Maybe<SetCustomMetadata>;
  /** Sync `Asset` tags. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  syncAssetTags?: Maybe<SyncAssetTags>;
  /** Uninstall `Webhook`. Requires `webhook:write` scope to be accessible and `Project` permission level `EDIT`. */
  uninstallWebhook?: Maybe<UninstallWebhook>;
  /** Update an existing `Asset`. Requires `basic:write` scope to be accessible and `Asset` permission level `EDIT`. */
  updateAsset?: Maybe<UpdateAsset>;
  /** **INTERNAL** Update an existing `AssetSubmission`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  updateAssetSubmission?: Maybe<UpdateAssetSubmission>;
  /** **INTERNAL** Update an existing `AssetSubmissionRequest`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  updateAssetSubmissionRequest?: Maybe<UpdateAssetSubmissionRequest>;
  /** **INTERNAL** Update an existing `AssetTemplate` item data changes. Requires `basic:write` scope to be accessible and `AssetTemplate` permission level `EDIT`. */
  updateAssetTemplateItem?: Maybe<UpdateAssetTemplateItem>;
  /** Update an existing `Collection`. Requires `basic:write` scope to be accessible and `Collection` permission level `EDIT`. */
  updateCollection?: Maybe<UpdateCollection>;
  /** Update an existing `CustomMetadataProperty`. RequiresRequires `basic:write` scope to be accessible and `CustomMetadataProperty` permission level `EDIT`. */
  updateCustomMetadataProperty?: Maybe<UpdateCustomMetadataProperty>;
  /** Update an existing `Folder`. Requires `basic:write` scope to be accessible and `Folder` permission level `EDIT`. */
  updateFolder?: Maybe<UpdateFolder>;
  /** **INTERNAL** Update `ShareLink`. Requires `basic:write` scope to be accessible. */
  updateShareLink?: Maybe<UpdateShareLink>;
  /** **BETA** Update an existing `WorkflowChecklistItem`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  updateWorkflowChecklistItem?: Maybe<UpdateWorkflowChecklistItem>;
  /** **BETA** Update an existing `WorkflowChecklistPreset`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  updateWorkflowChecklistPreset?: Maybe<UpdateWorkflowChecklistPreset>;
  /** **BETA** Update an existing `WorkflowStatus`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  updateWorkflowStatus?: Maybe<UpdateWorkflowStatus>;
  /** **BETA** Update an existing `WorkflowTask`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  updateWorkflowTask?: Maybe<UpdateWorkflowTask>;
  /** **INTERNAL** Update an existing `Workspace`. Requires `basic:write` scope to be accessible and `Project` permission level `EDIT`. */
  updateWorkspaceProject?: Maybe<UpdateWorkspaceProject>;
  /** Upload a new file. This stores the binary file temporarily so it can be then permanently linked to a specific type (ie. `Asset`, `Attachment`, `Revision`) after the upload is complete by using a different mutation. Requires `basic:write` scope to be accessible. */
  uploadFile?: Maybe<UploadFile>;
};


export type RootMutationAddAssetLicenseArgs = {
  input: AddAssetLicenseInput;
};


export type RootMutationAddAssetMetadataFieldValueArgs = {
  input: AddAssetMetadataFieldValueInput;
};


export type RootMutationAddAssetPreviewImageArgs = {
  input: AddAssetPreviewImageInput;
};


export type RootMutationAddAssetRelationsArgs = {
  input: AddAssetRelationsInput;
};


export type RootMutationAddAssetTagsArgs = {
  input: AddAssetTagsInput;
};


export type RootMutationAddAssetsCustomMetadataArgs = {
  input: AddAssetsCustomMetadataInput;
};


export type RootMutationAddCollectionAssetsArgs = {
  input: AddCollectionAssetsInput;
};


export type RootMutationAddCustomMetadataArgs = {
  input: AddCustomMetadataInput;
};


export type RootMutationAddCustomMetadataPropertyOptionsArgs = {
  input: AddCustomMetadataPropertyOptionsInput;
};


export type RootMutationAddWorkflowChecklistItemArgs = {
  input: AddWorkflowChecklistItemInput;
};


export type RootMutationAddWorkflowChecklistPresetArgs = {
  input: AddWorkflowChecklistPresetInput;
};


export type RootMutationAddWorkflowStatusAssigneesArgs = {
  input: AddWorkflowStatusAssigneesInput;
};


export type RootMutationAddWorkflowTaskAssigneesArgs = {
  input: AddWorkflowTaskAssigneesInput;
};


export type RootMutationApproveAssetSubmissionsArgs = {
  input: ApproveAssetSubmissionsInput;
};


export type RootMutationCreateAccountUserArgs = {
  input: CreateAccountUserInput;
};


export type RootMutationCreateAssetArgs = {
  input: CreateAssetInput;
};


export type RootMutationCreateAssetCommentArgs = {
  input: CreateAssetCommentInput;
};


export type RootMutationCreateAssetSubmissionRequestArgs = {
  input: CreateAssetSubmissionRequestInput;
};


export type RootMutationCreateAssetSubmissionsArgs = {
  input: CreateAssetSubmissionsInput;
};


export type RootMutationCreateAssetVariantArgs = {
  input: CreateAssetVariantInput;
};


export type RootMutationCreateAssetWorkflowTaskArgs = {
  input: CreateAssetWorkflowTaskInput;
};


export type RootMutationCreateAttachmentArgs = {
  input: CreateAttachmentInput;
};


export type RootMutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


export type RootMutationCreateCustomMetadataPropertyArgs = {
  input: CreateCustomMetadataPropertyInput;
};


export type RootMutationCreateExternalAssetArgs = {
  input: CreateExternalAssetInput;
};


export type RootMutationCreateFolderArgs = {
  input: CreateFolderInput;
};


export type RootMutationCreateLicenseArgs = {
  input: CreateLicenseInput;
};


export type RootMutationCreateMetadataFieldArgs = {
  input: CreateMetadataFieldInput;
};


export type RootMutationCreatePermissionTokenArgs = {
  input: CreatePermissionTokenInput;
};


export type RootMutationCreateShareLinkArgs = {
  input: CreateShareLinkInput;
};


export type RootMutationCreateShareLinkPermissionTokenArgs = {
  input: CreateShareLinkPermissionTokenInput;
};


export type RootMutationCreateWorkflowStatusArgs = {
  input: CreateWorkflowStatusInput;
};


export type RootMutationCreateWorkspaceProjectArgs = {
  input: CreateWorkspaceProjectInput;
};


export type RootMutationDeleteAccountUserArgs = {
  input: DeleteAccountUserInput;
};


export type RootMutationDeleteAssetArgs = {
  input: DeleteAssetInput;
};


export type RootMutationDeleteAssetSubmissionArgs = {
  input: DeleteAssetSubmissionInput;
};


export type RootMutationDeleteAssetSubmissionRequestArgs = {
  input: DeleteAssetSubmissionRequestInput;
};


export type RootMutationDeleteAssetVariantArgs = {
  input: DeleteAssetVariantInput;
};


export type RootMutationDeleteAttachmentArgs = {
  input: DeleteAttachmentInput;
};


export type RootMutationDeleteCollectionArgs = {
  input: DeleteCollectionInput;
};


export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type RootMutationDeleteCustomMetadataPropertyArgs = {
  input: DeleteCustomMetadataPropertyInput;
};


export type RootMutationDeleteFoldersArgs = {
  input: DeleteFoldersInput;
};


export type RootMutationDeleteLicenseArgs = {
  input: DeleteLicenseInput;
};


export type RootMutationDeleteMetadataFieldArgs = {
  input: DeleteMetadataFieldInput;
};


export type RootMutationDeleteShareLinkArgs = {
  input: DeleteShareLinkInput;
};


export type RootMutationDeleteWorkflowStatusArgs = {
  input: DeleteWorkflowStatusInput;
};


export type RootMutationDeleteWorkflowTaskArgs = {
  input: DeleteWorkflowTaskInput;
};


export type RootMutationDisableWorkflowStatusEnterRuleArgs = {
  input: DisableWorkflowStatusEnterRuleInput;
};


export type RootMutationEditCommentArgs = {
  input: EditCommentInput;
};


export type RootMutationEnableWorkflowStatusEnterRuleArgs = {
  input: EnableWorkflowStatusEnterRuleInput;
};


export type RootMutationGrantSubjectsAnalyticsDashboardAccessArgs = {
  input: GrantSubjectsAnalyticsDashboardAccessInput;
};


export type RootMutationInstallProjectWebhookArgs = {
  input: InstallProjectWebhookInput;
};


export type RootMutationInviteProjectUserArgs = {
  input: InviteProjectUserInput;
};


export type RootMutationIssueAssetSubmissionRequestTokenArgs = {
  input: IssueAssetSubmissionRequestTokenInput;
};


export type RootMutationMoveAssetsArgs = {
  input: MoveAssetsInput;
};


export type RootMutationMoveCustomMetadataPropertyArgs = {
  input: MoveCustomMetadataPropertyInput;
};


export type RootMutationMoveFoldersArgs = {
  input: MoveFoldersInput;
};


export type RootMutationMoveWorkflowTaskArgs = {
  input: MoveWorkflowTaskInput;
};


export type RootMutationRemoveAssetLicenseArgs = {
  input: RemoveAssetLicenseInput;
};


export type RootMutationRemoveAssetPreviewImageArgs = {
  input: RemoveAssetPreviewImageInput;
};


export type RootMutationRemoveAssetRelationsArgs = {
  input: RemoveAssetRelationsInput;
};


export type RootMutationRemoveAssetTagsArgs = {
  input: RemoveAssetTagsInput;
};


export type RootMutationRemoveAssetsCustomMetadataArgs = {
  input: RemoveAssetsCustomMetadataInput;
};


export type RootMutationRemoveCollectionAssetsArgs = {
  input: RemoveCollectionAssetsInput;
};


export type RootMutationRemoveCustomMetadataArgs = {
  input: RemoveCustomMetadataInput;
};


export type RootMutationRemoveCustomMetadataPropertyOptionsArgs = {
  input: RemoveCustomMetadataPropertyOptionsInput;
};


export type RootMutationRemoveMetadataValueArgs = {
  input: RemoveMetadataValueInput;
};


export type RootMutationRemoveWorkflowChecklistItemArgs = {
  input: RemoveWorkflowChecklistItemInput;
};


export type RootMutationRemoveWorkflowChecklistPresetArgs = {
  input: RemoveWorkflowChecklistPresetInput;
};


export type RootMutationRemoveWorkflowStatusAssigneesArgs = {
  input: RemoveWorkflowStatusAssigneesInput;
};


export type RootMutationRemoveWorkflowTaskAssigneesArgs = {
  input: RemoveWorkflowTaskAssigneesInput;
};


export type RootMutationReopenAssetCommentArgs = {
  input: ReopenAssetCommentInput;
};


export type RootMutationReplaceAssetArgs = {
  input: ReplaceAssetInput;
};


export type RootMutationReplaceAssetVariantArgs = {
  input: ReplaceAssetVariantInput;
};


export type RootMutationReplaceExternalDataSourceFileArgs = {
  input: ReplaceExternalDataSourceFileInput;
};


export type RootMutationReplyToCommentArgs = {
  input: ReplyToCommentInput;
};


export type RootMutationResolveAssetCommentArgs = {
  input: ResolveAssetCommentInput;
};


export type RootMutationRevokeAssetSubmissionRequestTokenArgs = {
  input: RevokeAssetSubmissionRequestTokenInput;
};


export type RootMutationRevokeSubjectsAnalyticsDashboardAccessArgs = {
  input: RevokeSubjectsAnalyticsDashboardAccessInput;
};


export type RootMutationSetAssetsCustomMetadataArgs = {
  input: SetAssetsCustomMetadataInput;
};


export type RootMutationSetCollectionAssetsArgs = {
  input: SetCollectionAssetsInput;
};


export type RootMutationSetCustomMetadataArgs = {
  input: SetCustomMetadataInput;
};


export type RootMutationSyncAssetTagsArgs = {
  input: SyncAssetTagsInput;
};


export type RootMutationUninstallWebhookArgs = {
  input: UninstallWebhookInput;
};


export type RootMutationUpdateAssetArgs = {
  input: UpdateAssetInput;
};


export type RootMutationUpdateAssetSubmissionArgs = {
  input: UpdateAssetSubmissionInput;
};


export type RootMutationUpdateAssetSubmissionRequestArgs = {
  input: UpdateAssetSubmissionRequestInput;
};


export type RootMutationUpdateAssetTemplateItemArgs = {
  input: UpdateAssetTemplateItemInput;
};


export type RootMutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};


export type RootMutationUpdateCustomMetadataPropertyArgs = {
  input: UpdateCustomMetadataPropertyInput;
};


export type RootMutationUpdateFolderArgs = {
  input: UpdateFolderInput;
};


export type RootMutationUpdateShareLinkArgs = {
  input: UpdateShareLinkInput;
};


export type RootMutationUpdateWorkflowChecklistItemArgs = {
  input: UpdateWorkflowChecklistItemInput;
};


export type RootMutationUpdateWorkflowChecklistPresetArgs = {
  input: UpdateWorkflowChecklistPresetInput;
};


export type RootMutationUpdateWorkflowStatusArgs = {
  input: UpdateWorkflowStatusInput;
};


export type RootMutationUpdateWorkflowTaskArgs = {
  input: UpdateWorkflowTaskInput;
};


export type RootMutationUpdateWorkspaceProjectArgs = {
  input: UpdateWorkspaceProjectInput;
};


export type RootMutationUploadFileArgs = {
  input: UploadFileInput;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  /** Retrieve current `Account` details. */
  account: Account;
  /** Retrieve `Asset` details by Id. */
  asset?: Maybe<Asset>;
  /** **INTERNAL** Retrieve `AssetSubmissionRequest` details by `Id` or `Token`. */
  assetSubmissionRequest?: Maybe<AssetSubmissionRequest>;
  /** Retrieve `Assets` details by Ids. */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /** Retrieve a `Brand` by its Id. */
  brand?: Maybe<Brand>;
  /** Retrieve `Brand` list for current `Account`. */
  brands?: Maybe<Array<Maybe<Brand>>>;
  /** Retrieve a unique client tracking id in the format: `<ACCOUNT_ID>-<USER_ID>`. */
  clientTrackingId?: Maybe<Scalars['ID']['output']>;
  /** Get the current `User`. */
  currentUser: User;
  /** **INTERNAL** Retrieve a enhanced version of the inputted text. */
  enhancedText: EnhancedText;
  /** **INTERNAL** Retrieve a Guideline page. */
  guidelinePage: GuideLinePage;
  /** Retrieve `Library` details by Id. */
  library?: Maybe<Library>;
  /** Retrieve `Node` details by Id. */
  node?: Maybe<Node>;
  /**
   * **DEPRECATED** Retrieve `Project` details by Id. This field will be removed. Use `library` or `workspaceProject` instead. | Date: 2023-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `library` or `workspaceProject` instead. | Date: 2023-01-01T00:00:00.000+00:00
   */
  project?: Maybe<Project>;
  /** **INTERNAL** Retrieve `ShareLinks` details by Ids. */
  shareLinks?: Maybe<Array<Maybe<ShareLink>>>;
  /** **INTERNAL** Retrieve `Assets` details by permission token. */
  sharedAssets?: Maybe<Array<Maybe<Asset>>>;
  /** **INTERNAL** Retrieve `Asset` details by token. */
  tokenizedAsset?: Maybe<Asset>;
  /** Retrieve `WebhookItems` related to current `Account`. */
  webhooks?: Maybe<WebhookItems>;
  /** Retrieve `WorkspaceProject` details by Id. */
  workspaceProject?: Maybe<Workspace>;
};


export type RootQueryAssetArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryAssetSubmissionRequestArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type RootQueryAssetsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type RootQueryBrandArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryEnhancedTextArgs = {
  text: Scalars['String']['input'];
};


export type RootQueryGuidelinePageArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryLibraryArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryProjectArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryShareLinksArgs = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  usageKeys?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type RootQuerySharedAssetsArgs = {
  permissionToken: Scalars['String']['input'];
};


export type RootQueryTokenizedAssetArgs = {
  token: Scalars['String']['input'];
};


export type RootQueryWebhooksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type RootQueryWorkspaceProjectArgs = {
  id: Scalars['ID']['input'];
};

export type SetAssetsCustomMetadata = {
  __typename?: 'SetAssetsCustomMetadata';
  /** List of the `Asset` Ids where the new `CustomMetadata` values were set. */
  assetIds: Array<Scalars['ID']['output']>;
};

export type SetAssetsCustomMetadataInput = {
  /** Set of the `Asset` Ids on which `CustomMetadata` should be set. */
  assetIds: Array<Scalars['ID']['input']>;
  /** `CustomMetadata` to set to the given set of the `Assets`. */
  customMetadata: Array<CustomMetadataInput>;
};

export type SetCollectionAssets = {
  __typename?: 'SetCollectionAssets';
  /** `Collection` details. */
  collection?: Maybe<Collection>;
};

export type SetCollectionAssetsInput = {
  /** Ids of the `Assets` to replace existing `Assets` in the `Collection`. Must be in the same `Library` as the `Collection`. */
  assetIds: Array<Scalars['ID']['input']>;
  /** `Collection` Id. */
  collectionId: Scalars['ID']['input'];
};

export type SetCustomMetadata = {
  __typename?: 'SetCustomMetadata';
  /** List of parentIds with newly `CustomMetadata` values set. */
  parentIds: Array<Scalars['ID']['output']>;
};

export type SetCustomMetadataInput = {
  /** `CustomMetadata` to be set to the list of `parentIds`. */
  customMetadata: Array<CustomMetadataInput>;
  /** List of `parentIds` where `CustomMetadata` should be set. */
  parentIds: Array<Scalars['ID']['input']>;
};

export type ShareLink = {
  __typename?: 'ShareLink';
  /** **INTERNAL** `ShareLink` expiration date. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** **INTERNAL** Indicates if `SharedLink` has an expiration date set. */
  hasExpirationDate: Scalars['Boolean']['output'];
  /** **INTERNAL** `ShareLink` Id. */
  id: Scalars['String']['output'];
  /** **INTERNAL** Indicates the status of the `ShareLink`. */
  isEnabled: Scalars['Boolean']['output'];
  /** **INTERNAL** Indicates the password protection of the `ShareLink`. */
  isPasswordProtected: Scalars['Boolean']['output'];
  /** **INTERNAL** `ShareLink` `Url`. */
  url: Scalars['Url']['output'];
  /** **INTERNAL** `ShareLink` usage key. */
  usageKey: Scalars['String']['output'];
};

export type SimpleMarking = Marking & {
  __typename?: 'SimpleMarking';
  /** The `Marking` dimensions in percent of `Asset` dimensions. */
  dimensions?: Maybe<MarkingDimensions>;
  /** **INTERNAL** The order of the `Marking` on the `Asset`. */
  order: Scalars['Int']['output'];
  /** The `Marking` position in percent relative to the top left corner of the `Asset`. */
  position: MarkingPosition;
};

export type SubFolder = Folder & Node & {
  __typename?: 'SubFolder';
  /** The `AssetItems` in the current `SubFolder`. */
  assets: AssetItems;
  /** A list of `Breadcrumb` items representing the parent folders structure for the current `SubFolder`. */
  breadcrumbs: Array<Breadcrumb>;
  /** `DateTime` of the `SubFolder` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the `SubFolder`. */
  creator: User;
  /** The `FolderItems` of the current `Folder`. */
  folders: FolderItems;
  /** `SubFolder` Id. */
  id: Scalars['ID']['output'];
  /** `DateTime` of the last `SubFolder` modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `SubFolder`. */
  modifier?: Maybe<User>;
  /** `SubFolder` name. */
  name: Scalars['String']['output'];
  /**
   * **DEPRECATED** The `SubFolderItems` of the current `SubFolder`. This field will be removed. Use `folders` instead. | Date: 2023-07-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `folders` instead. | Date: 2023-07-01T00:00:00.000+00:00
   */
  subFolders: SubFolderItems;
};


export type SubFolderAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<FolderAssetQueryInput>;
};


export type SubFolderFoldersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type SubFolderSubFoldersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type SubFolderItems = {
  __typename?: 'SubFolderItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `SubFolder` */
  items?: Maybe<Array<Maybe<SubFolder>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type SyncAssetTags = {
  __typename?: 'SyncAssetTags';
  /** `Asset` details. */
  asset?: Maybe<Asset>;
};

export type SyncAssetTagsInput = {
  /** `Asset` Id. */
  id: Scalars['ID']['input'];
  /** `Asset` tags. */
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
};

export type Tag = {
  __typename?: 'Tag';
  /** `Tag` source indicating how the tag was linked to the `Asset`. AUTO: created by AI `Asset` recognition. MANUAL: manually added. */
  source?: Maybe<TagSource>;
  /** `Tag` value. */
  value: Scalars['String']['output'];
};

export type TagInput = {
  /** Tag name. */
  value: Scalars['String']['input'];
};

/** The source of a `tag`. */
export enum TagSource {
  Auto = 'AUTO',
  Manual = 'MANUAL'
}

export type UninstallWebhook = {
  __typename?: 'UninstallWebhook';
  /** `Webhook` details. */
  webhook: Webhook;
};

export type UninstallWebhookInput = {
  /** Id of the `Webhook` to be uninstalled. */
  id: Scalars['ID']['input'];
};

export type UpdateAsset = {
  __typename?: 'UpdateAsset';
  /** `Asset` details. */
  asset?: Maybe<Asset>;
};

export type UpdateAssetDataInput = {
  /** Represents the Author of the `Asset`. Example: Photographer Name. */
  author?: InputMaybe<Scalars['String']['input']>;
  /** Change `Asset` copyright details. */
  copyright?: InputMaybe<UpdateCopyrightInput>;
  /** `Asset` description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Modify expiry date. `Asset` will expire once the defined date is reached. */
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** `Asset` filename, including extension. */
  filename?: InputMaybe<Scalars['String']['input']>;
  /** `Asset` title or display name. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAssetInput = {
  /** `Asset` data. */
  data: UpdateAssetDataInput;
  /** `Asset` Id. */
  id: Scalars['ID']['input'];
};

export type UpdateAssetSubmission = {
  __typename?: 'UpdateAssetSubmission';
  /** Updated `AssetSubmission` details. */
  assetSubmission: AssetSubmission;
};

export type UpdateAssetSubmissionDataInput = {
  /** **INTERNAL** `AssetSubmission` status. */
  status?: InputMaybe<AssetSubmissionStatus>;
};

export type UpdateAssetSubmissionInput = {
  /** `AssetSubmission` data. */
  data: UpdateAssetSubmissionDataInput;
  /** `AssetSubmission` Id. */
  id: Scalars['ID']['input'];
};

export type UpdateAssetSubmissionRequest = {
  __typename?: 'UpdateAssetSubmissionRequest';
  /** Updated `AssetSubmissionRequest` details. */
  assetSubmissionRequest: AssetSubmissionRequest;
};

export type UpdateAssetSubmissionRequestDataInput = {
  /** `AssetSubmissionRequest` description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** `AssetSubmissionRequest` title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAssetSubmissionRequestInput = {
  /** `AssetSubmissionRequest` data. */
  data: UpdateAssetSubmissionRequestDataInput;
  /** `AssetSubmissionRequest` Id. */
  id: Scalars['ID']['input'];
};

export type UpdateAssetTemplateItem = {
  __typename?: 'UpdateAssetTemplateItem';
  /** **INTERNAL** `AssetTemplateItem` details. */
  assetTemplateItem: AssetTemplateItem;
};

export type UpdateAssetTemplateItemDataInput = {
  /** **INTERNAL** `Changes` json. */
  changes?: InputMaybe<Scalars['Any']['input']>;
  /** **INTERNAL** `Settings` json. */
  settings?: InputMaybe<Scalars['Any']['input']>;
};

export type UpdateAssetTemplateItemInput = {
  /** **INTERNAL** `AssetTemplateItemData` data. */
  data: UpdateAssetTemplateItemDataInput;
  /** **INTERNAL** `AssetTemplate` Id. */
  id: Scalars['ID']['input'];
  /** **INTERNAL** `ItemId` Id. */
  itemId: Scalars['ID']['input'];
};

export type UpdateCollection = {
  __typename?: 'UpdateCollection';
  /** `Collection` details. */
  collection: Collection;
};

export type UpdateCollectionDataInput = {
  /** Name of the `Collection`. */
  name: Scalars['String']['input'];
};

export type UpdateCollectionInput = {
  /** `Collection` Id. */
  collectionId: Scalars['ID']['input'];
  /** `Collection` data. */
  data: UpdateCollectionDataInput;
};

export type UpdateCopyrightInput = {
  /** `Asset` copyright notice. */
  notice?: InputMaybe<Scalars['String']['input']>;
  /** `Asset` copyright status. */
  status: CopyrightStatus;
};

export type UpdateCustomMetadataProperty = {
  __typename?: 'UpdateCustomMetadataProperty';
  /**
   * **DEPRECATED** **INTERNAL** Name of the updated `CustomMetadataProperty`. This field will be removed. Use `property` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `property` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  customMetadataProperty: CustomMetadataProperty;
  /** Name of the updated `CustomMetadataProperty`. */
  property: CustomMetadataProperty;
};

export type UpdateCustomMetadataPropertyDataInput = {
  /** Set a `CustomMetadataProperty` default value. This setting will be ignored for properties that are not of `SELECT` or `MULTISELECT` type  (use options for these cases instead). Applies to newly uploaded `Assets` only. */
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  /** **INTERNAL** Set a dependency to another `CustomMetadataProperty`. */
  dependency?: InputMaybe<CustomMetadataPropertyDependencyInput>;
  /** `CustomMetadataProperty` help text. */
  helpText?: InputMaybe<Scalars['String']['input']>;
  /** **INTERNAL** Define if `CustomMetadataProperty` is editable. */
  isEditable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Define if `CustomMetadataProperty` is required. */
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** **INTERNAL** Define if `CustomMetadataProperty` is searchable. */
  isSearchable?: InputMaybe<Scalars['Boolean']['input']>;
  /** **INTERNAL** Define if `CustomMetadataProperty` is viewable. */
  isViewable?: InputMaybe<Scalars['Boolean']['input']>;
  /** `CustomMetadataProperty` display name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** **DEPRECATED** **INTERNAL** Define CustomMetadataProperty` options properties. This field will be removed. Use `type.options` instead. | Date: 2023-07-01T00:00:00.000+00:00 */
  options?: InputMaybe<Array<CustomMetadataPropertyOptionInput>>;
  /** **INTERNAL** Determines if the value of a `CustomMetadataProperty` of type `URL` should be opened in a new tab. */
  shouldBeOpenedInANewTab?: InputMaybe<Scalars['Boolean']['input']>;
  /** `CustomMetadataProperty` type details. */
  type?: InputMaybe<UpdateCustomMetadataPropertyTypeInput>;
};

export type UpdateCustomMetadataPropertyInput = {
  /** `CustomMetadataProperty` data. */
  data: UpdateCustomMetadataPropertyDataInput;
  /** `CustomMetadataProperty` Id. */
  id: Scalars['ID']['input'];
};

export type UpdateCustomMetadataPropertyTypeInput = {
  /** Define CustomMetadataProperty` options for `SELECT` or `MULTISELECT` type properties. */
  options?: InputMaybe<Array<UpdateCustomMetadataPropertyTypeOptionInput>>;
};

export type UpdateCustomMetadataPropertyTypeOptionInput = {
  /** `CustomMetadataPropertyOption` Id. This is an optional field only consider for editing purposes. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Define `CustomMetadataPropertyOption` as default. Applies to newly created `Assets` only. */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** `CustomMetadataPropertyOption` value. */
  value: Scalars['String']['input'];
};

export type UpdateFolder = {
  __typename?: 'UpdateFolder';
  /** `Folder` details. */
  folder?: Maybe<Folder>;
};

export type UpdateFolderDataInput = {
  /** `Folder` description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** `Folder` name or display name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFolderInput = {
  /** `Folder` data. */
  data: UpdateFolderDataInput;
  /** `Folder` Id. */
  id: Scalars['ID']['input'];
};

export type UpdateShareLink = {
  __typename?: 'UpdateShareLink';
  /** **INTERNAL** `ShareLink` details. */
  shareLink: ShareLink;
};

export type UpdateShareLinkDataInput = {
  /** **INTERNAL** `ShareLink` status. */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** **INTERNAL** `ShareLink` expiration date. */
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** **INTERNAL** `ShareLink` password. */
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateShareLinkInput = {
  /** **INTERNAL** `ShareLink` data. */
  data: UpdateShareLinkDataInput;
  /** **INTERNAL** `ShareLink` Id. */
  id: Scalars['String']['input'];
};

export type UpdateWorkflowChecklistItem = {
  __typename?: 'UpdateWorkflowChecklistItem';
  /** **BETA** The updated `WorkflowChecklistItem`. */
  checklistItem?: Maybe<WorkflowChecklistItem>;
};

export type UpdateWorkflowChecklistItemDataInput = {
  /** **BETA** `User` Id of `WorkflowChecklistItem` assignee. */
  assigneeUserId?: InputMaybe<Scalars['ID']['input']>;
  /** **BETA** Content of the `WorkflowChecklistItem`. */
  content?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkflowChecklistItemInput = {
  /** `WorkflowChecklistItem` data. */
  data: UpdateWorkflowChecklistItemDataInput;
  /** **BETA** `WorkflowChecklistItem` Id. */
  id: Scalars['ID']['input'];
};

export type UpdateWorkflowChecklistPreset = {
  __typename?: 'UpdateWorkflowChecklistPreset';
  /** **BETA** The updated `ChecklistPreset`. */
  checklistPreset?: Maybe<WorkflowChecklistPreset>;
};

export type UpdateWorkflowChecklistPresetDataInput = {
  /** **BETA** `User` Id of `WorkflowChecklistPreset` assignee. */
  assigneeUserId?: InputMaybe<Scalars['ID']['input']>;
  /** **BETA** Content of the `WorkflowChecklistPreset`. */
  content?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkflowChecklistPresetInput = {
  /** `WorkflowChecklistPreset` data. */
  data: UpdateWorkflowChecklistPresetDataInput;
  /** **BETA** `WorkflowChecklistPreset` Id. */
  id: Scalars['ID']['input'];
};

export type UpdateWorkflowStatus = {
  __typename?: 'UpdateWorkflowStatus';
  /** **BETA** The updated `WorkflowStatus`. */
  workflowStatus?: Maybe<WorkflowStatus>;
};

export type UpdateWorkflowStatusDataInput = {
  /** **BETA** `WorkflowStatus` color. */
  color?: InputMaybe<RgbaColorInput>;
  /** **INTERNAL** `WorkflowStatus` order. */
  order?: InputMaybe<Scalars['Int']['input']>;
  /** **BETA** `WorkflowStatus` title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkflowStatusInput = {
  /** **BETA** `WorkflowStatus` data. */
  data: UpdateWorkflowStatusDataInput;
  /** **BETA** `WorkflowStatus` Id. */
  id: Scalars['ID']['input'];
};

export type UpdateWorkflowTask = {
  __typename?: 'UpdateWorkflowTask';
  /** **BETA** The updated `WorkflowTask`. */
  workflowTask?: Maybe<WorkflowTask>;
};

export type UpdateWorkflowTaskDataInput = {
  /** **BETA** `WorkflowTask` description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** **BETA** `WorkflowTask` title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkflowTaskInput = {
  /** `WorkflowTask` data. */
  data: UpdateWorkflowTaskDataInput;
  /** **BETA** `WorkflowTask` Id. */
  id: Scalars['ID']['input'];
};

export type UpdateWorkspaceProject = {
  __typename?: 'UpdateWorkspaceProject';
  /** `WorkspaceProject` details. */
  project: Workspace;
};

export type UpdateWorkspaceProjectDataInput = {
  /** Date from which the `WorkspaceProject` is active. */
  beginsAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** `WorkspaceProject` description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Date after which the `WorkspaceProject` is no longer active. */
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** `WorkspaceProject` name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkspaceProjectInput = {
  /** `WorkspaceProject` data. */
  data: UpdateWorkspaceProjectDataInput;
  /** `WorkspaceProject` Id. */
  id: Scalars['ID']['input'];
};

export type UploadFile = {
  __typename?: 'UploadFile';
  /** Signed Id. */
  id: Scalars['ID']['output'];
  /** Arrays with upload `Urls` to upload the file. */
  urls: Array<Maybe<Scalars['Url']['output']>>;
};

export type UploadFileInput = {
  /** `File` chunk size in bytes. Value must be integer between 5MB and 1GB. */
  chunkSize?: InputMaybe<Scalars['BigInt']['input']>;
  /** `File` name. This value will be passed on to the `fileId` input variable used in file mutations such as `createAsset`, `replaceAsset`, `createAttachment` or `addAssetPreviewImage`. */
  filename: Scalars['String']['input'];
  /** `File` size in bytes. */
  size: Scalars['BigInt']['input'];
};

/** `UserInterface` for `User` returnable types. */
export type User = {
  /** `User` avatar. */
  avatar?: Maybe<Scalars['Url']['output']>;
  /** `User` email. */
  email: Scalars['Email']['output'];
  /** **INTERNAL** `User` gravatar hash. */
  gravatarHash?: Maybe<Scalars['String']['output']>;
  /** `User` Id. */
  id: Scalars['ID']['output'];
  /** `User` name. */
  name?: Maybe<Scalars['String']['output']>;
  /** **INTERNAL** `User` permissions. */
  permissions?: Maybe<UserPermissions>;
};

export type UserGroup = Node & {
  __typename?: 'UserGroup';
  /** `UserGroup` Id. */
  id: Scalars['ID']['output'];
  /** `UserGroup` name. */
  name?: Maybe<Scalars['String']['output']>;
  /** `UserGroup`'s `UserItems`. */
  users?: Maybe<UserItems>;
};


export type UserGroupUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type UserGroupItems = {
  __typename?: 'UserGroupItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `UserGroup`. */
  items?: Maybe<Array<Maybe<UserGroup>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type UserItems = {
  __typename?: 'UserItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** `User` items list. */
  items?: Maybe<Array<Maybe<User>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type UserPermissions = {
  __typename?: 'UserPermissions';
  /** **INTERNAL** Gets the current `User` permissions on the `AnalyticsDashboard`. */
  analyticsDashboard?: Maybe<AnalyticsDashboardUserPermission>;
};

export type Video = Asset & Node & {
  __typename?: 'Video';
  /** `Attachment` items linked to `Asset`. */
  attachments?: Maybe<Array<Maybe<AssetAttachment>>>;
  /** Represents the Author of the `Asset`. Example: Photographer Name. */
  author?: Maybe<Scalars['String']['output']>;
  /** `Video` bitrate in bits per second. */
  bitrate: Scalars['Int']['output'];
  /** Paginated list of `AssetComment` items for `Asset`. */
  comments?: Maybe<AssetCommentItems>;
  /** `Asset` copyright details. */
  copyright?: Maybe<Copyright>;
  /** `DateTime` of the `Asset` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `User` who created the `Asset`. */
  creator: User;
  /** Current `User` `Asset` permissions. */
  currentUserPermissions: AssetUserPermissions;
  /** List of `CustomMetadataProperty` items and values associated to `Asset`. */
  customMetadata: Array<CustomMetadata>;
  /** Description of the `Asset`. */
  description?: Maybe<Scalars['String']['output']>;
  /** Signed `Url` to download the original `Video` type file. */
  downloadUrl?: Maybe<Scalars['Url']['output']>;
  /** `Video` duration in seconds. */
  duration: Scalars['Float']['output'];
  /** `Asset` expiry date. */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Extension of the `Asset` `File`. */
  extension: Scalars['String']['output'];
  /** External Id of the `Asset`. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** `ExternalProduct` items linked to `Asset`. */
  externalProducts?: Maybe<Array<Maybe<ExternalProduct>>>;
  /** Original filename of the `Asset` `File`. */
  filename?: Maybe<Scalars['String']['output']>;
  /** `Video` height in pixels. */
  height: Scalars['Int']['output'];
  /** `Asset` id. */
  id: Scalars['ID']['output'];
  /** `License` items linked to `Asset`. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `MetadataValue` items linked to `Asset`. This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadata` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataValues?: Maybe<Array<Maybe<MetadataValue>>>;
  /** `DateTime` of the `Asset` last modification. */
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The `User` who last modified the `Asset`. */
  modifier?: Maybe<User>;
  /** Preview `Url` of converted `Video` in mp4 format. */
  previewUrl: Scalars['Url']['output'];
  /** Paginated list of `Asset` items related to `Asset`. */
  relatedAssets: AssetItems;
  /** Size of the `Asset` `File` in bytes. */
  size?: Maybe<Scalars['BigInt']['output']>;
  /** Represents the conversion status of the `Asset`. Example: FINISHED. */
  status: AssetStatusType;
  /** List of `Tag` items linked to `Asset` */
  tags?: Maybe<Array<Maybe<Tag>>>;
  /** Title of the `Asset`. */
  title: Scalars['String']['output'];
  /** **BETA** `AssetVariant` items of the asset. */
  variants?: Maybe<AssetVariantItems>;
  /** `Video` width in pixels. */
  width: Scalars['Int']['output'];
  /** **BETA** The `WorkflowTask` this `Asset` is linked to. */
  workflowTask?: Maybe<WorkflowTask>;
};


export type VideoCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetCommentQueryInput>;
};


export type VideoDownloadUrlArgs = {
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
  validityInDays?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoPreviewUrlArgs = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoRelatedAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoVariantsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type VideoMarking = Marking & {
  __typename?: 'VideoMarking';
  /** The `Marking` dimensions in percent of `Asset` dimensions. */
  dimensions?: Maybe<MarkingDimensions>;
  /** **INTERNAL** The order of the `Marking` on the `Asset`. */
  order: Scalars['Int']['output'];
  /** The `Marking` position in percent relative to the top left corner of the `Asset`. */
  position: MarkingPosition;
  /** The timeframe of the `Marking`. Applicable to `Video` type `Asset` items only. */
  timeframe?: Maybe<MarkingTimeframe>;
};

/** `WebhookInterface` for `Webhook` returnable types. */
export type Webhook = {
  /** `DateTime` of the `Asset` creation. */
  createdAt: Scalars['DateTime']['output'];
  /** The `creator` is the `User` who created the asset on Frontify. */
  creator: User;
  /** `Workspace` Id. */
  id: Scalars['ID']['output'];
  /** The name of the current `Webhook`. */
  name: Scalars['String']['output'];
  /** The `Url` which will be called by the `Webhook`. */
  notificationUrl: Scalars['Url']['output'];
  /** The randomly generated secret of the current `Webhook`. */
  secret: Scalars['String']['output'];
};

export type WebhookItems = {
  __typename?: 'WebhookItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `Webhook`. */
  items?: Maybe<Array<Maybe<Webhook>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type Workflow = {
  __typename?: 'Workflow';
  /** **BETA** Multiple statuses define a `Workflow`. They represent a line/row in the Kanban board of the current `Workflow`. */
  statuses: Array<Maybe<WorkflowStatus>>;
};

export type WorkflowChecklistItem = {
  __typename?: 'WorkflowChecklistItem';
  /** **BETA** The default assignee of the `WorkflowChecklistItem`. */
  assignedUser?: Maybe<User>;
  /** **BETA** The content of the `WorkflowChecklistItem`. */
  content: Scalars['String']['output'];
  /** **BETA** `WorkflowChecklistItem` Id. */
  id: Scalars['ID']['output'];
};

export type WorkflowChecklistItems = {
  __typename?: 'WorkflowChecklistItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `WorkflowChecklistItem`. */
  items?: Maybe<Array<Maybe<WorkflowChecklistItem>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type WorkflowChecklistPreset = {
  __typename?: 'WorkflowChecklistPreset';
  /** **BETA** The default assignee of the `WorkflowChecklistPreset`. */
  assignedUser?: Maybe<User>;
  /** **BETA** The content of the `WorkflowChecklistPreset`. */
  content: Scalars['String']['output'];
  /** **BETA** `WorkflowChecklistPreset` Id. */
  id: Scalars['ID']['output'];
};

export type WorkflowStatus = {
  __typename?: 'WorkflowStatus';
  /** **BETA** List of `User` assigned to this `WorkflowStatus`. */
  assignedUsers: Array<Maybe<User>>;
  /** **BETA** A list of `WorkflowPreset` that is used to create one or more `WorkflowChecklistItem`, which are appended to a `WorkflowTask` on entering this `WorkflowState`. */
  checklistPresets: Array<Maybe<WorkflowChecklistPreset>>;
  /** **BETA** The color of the `WorkflowStatus`. */
  color: RgbaColor;
  /** **BETA** A list of `WorkflowStatusEnterRule` which needs to be satisfied before a `WorkflowTask` can enter this `WorkflowStatus`. */
  enterRules: Array<Maybe<WorkflowStatusEnterRule>>;
  /** **BETA** `WorkflowStatus` id. */
  id: Scalars['ID']['output'];
  /** **BETA** The name of the `WorkflowStatus`. */
  name: Scalars['String']['output'];
  /** **INTERNAL** The defined index for ordering the `WorkflowStatuses`. */
  order: Scalars['Int']['output'];
  /** **BETA** A list of the `WorkflowTask` in the `WorkflowStatus`. */
  tasks: WorkflowStatusTaskItems;
};


export type WorkflowStatusTasksArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** A rule which needs to be satisfied for a `WorkflowTask` to enter a given `WorkflowStatus`. */
export enum WorkflowStatusEnterRule {
  TaskRequiresAssignee = 'TASK_REQUIRES_ASSIGNEE',
  TaskRequiresMessage = 'TASK_REQUIRES_MESSAGE'
}

export type WorkflowStatusTaskItems = {
  __typename?: 'WorkflowStatusTaskItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `WorkflowTask`. */
  items?: Maybe<Array<Maybe<WorkflowTask>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type WorkflowTask = {
  __typename?: 'WorkflowTask';
  /** **BETA** The `Asset` linked to the `WorkflowTask`. */
  asset?: Maybe<Asset>;
  /** **BETA** A list of `User` assigned to the `WorkflowTask`. */
  assignedUsers: Array<Maybe<User>>;
  /** **BETA** A list of the `WorkflowChecklistItem` in the `WorkflowTask`. */
  checklistItem: WorkflowChecklistItems;
  /** **BETA** `WorkflowTask` description. */
  description?: Maybe<Scalars['String']['output']>;
  /** **BETA** `WorkflowTask` Id. */
  id: Scalars['ID']['output'];
  /** **BETA** The `WorkflowStatus` of the `WorkflowTask`. */
  status: WorkflowStatus;
  /** **BETA** `WorkflowTask` title. */
  title?: Maybe<Scalars['String']['output']>;
};


export type WorkflowTaskChecklistItemArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Workspace = Node & {
  __typename?: 'Workspace';
  /**
   * **DEPRECATED** Amount of `Assets` contained in the `Library`/`Workspace`. This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `assets`.`total` instead. | Date: 2024-01-01T00:00:00.000+00:00
   */
  assetCount?: Maybe<Scalars['Int']['output']>;
  /** Search or list `Assets` in the `Library`/`Workspace`. */
  assets: AssetItems;
  /** **INTERNAL** `DateTime` after which the `Workspace` is active. */
  beginsAt?: Maybe<Scalars['DateTime']['output']>;
  /** Browse the `Workspace`'s `SubFolderItems` and `AssetItems`. */
  browse: WorkspaceRootFolder;
  /** `Workspace` collaborators. */
  collaborators?: Maybe<WorkspaceCollaborators>;
  /** `Library`/`Workspace` color. */
  color?: Maybe<RgbaColor>;
  /** **INTERNAL** `DateTime` of the `Workspace`'s creation. */
  createdAt: Scalars['DateTime']['output'];
  /** **INTERNAL** `User` who created the `Workspace`. */
  creator: User;
  /** `Workspace` permissions of the current `User`. */
  currentUserPermissions: WorkspaceUserPermissions;
  /** List of `CustomMetadataProperty` items and values associated to `Workspace`. */
  customMetadata: Array<CustomMetadata>;
  /** **INTERNAL** Description of the `Workspace`. */
  description?: Maybe<Scalars['String']['output']>;
  /** **INTERNAL** `DateTime` after which the `Workspace` is not active anymore. */
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  /** `Library`/`Workspace` Id. */
  id: Scalars['ID']['output'];
  /** **BETA** `Workspace` state. */
  isArchived: Scalars['Boolean']['output'];
  /** `Library`/`Workspace` `License` items list. */
  licenses?: Maybe<Array<Maybe<License>>>;
  /**
   * **DEPRECATED** `Library`/`Workspace` `MetadataField` items list. This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `customMetadataProperties` instead. | Date: 2025-01-01T00:00:00.000+00:00
   */
  metadataFields?: Maybe<Array<Maybe<MetadataField>>>;
  /** `Library`/`Workspace` name. */
  name: Scalars['String']['output'];
  /** **BETA** The `Workflow` belonging to the given `Library`/`Workspace`. */
  workflow: Workflow;
};


export type WorkspaceAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<AssetQueryInput>;
};

export type WorkspaceCollaboratorUserItems = {
  __typename?: 'WorkspaceCollaboratorUserItems';
  /** **BETA** List of `WorkspaceProjectCollaboratorUserEdgeType` edges. */
  edges: Array<WorkspaceProjectCollaboratorUserEdge>;
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of `User` items that have lowest required permissions to collaborate on a `Workspace`. */
  items?: Maybe<Array<Maybe<User>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type WorkspaceCollaborators = {
  __typename?: 'WorkspaceCollaborators';
  /** `WorkspaceCollaboratorUserItems` list. */
  users: WorkspaceCollaboratorUserItems;
};


export type WorkspaceCollaboratorsUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkspaceItems = {
  __typename?: 'WorkspaceItems';
  /** Indicates if a next page is available or not */
  hasNextPage: Scalars['Boolean']['output'];
  /** List of type `Workspace`. */
  items?: Maybe<Array<Maybe<Workspace>>>;
  /** Number of results per page. */
  limit: Scalars['Int']['output'];
  /** Current page number. */
  page: Scalars['Int']['output'];
  /** Total amount of results. */
  total: Scalars['Int']['output'];
};

export type WorkspaceProjectCollaboratorUserEdge = {
  __typename?: 'WorkspaceProjectCollaboratorUserEdge';
  /** `User` that has the least required permissions to collaborate on a `WorkspaceProject`.  */
  node: User;
  /** `User` role in the `WorkspaceProject`. */
  role: Scalars['String']['output'];
};

export type WorkspaceProjectQueryInput = {
  /** **BETA** Sort order of the `WorkspaceProject` query result set. */
  sortBy?: InputMaybe<WorkspaceProjectQuerySort>;
  /** **BETA** Limit the result set based on `WorkspaceProject` state. */
  state?: InputMaybe<WorkspaceProjectStateFilter>;
};

/** Query sorting option. Defines how the search results should be sorted. */
export enum WorkspaceProjectQuerySort {
  /** Sorts the results by the newest entry. */
  Newest = 'NEWEST',
  /** Sorts the results by the oldest entry`. */
  Oldest = 'OLDEST'
}

/** `WorkspaceProject` state filter. */
export enum WorkspaceProjectStateFilter {
  Active = 'ACTIVE',
  All = 'ALL',
  Archived = 'ARCHIVED'
}

export type WorkspaceRootFolder = {
  __typename?: 'WorkspaceRootFolder';
  /** `Library`/`Workspace`'s `AssetItems` list. */
  assets: AssetItems;
  /** The `FolderItems` of the current `Library`/`Workspace`. */
  folders: FolderItems;
  /**
   * **DEPRECATED** The `SubFolderItems` of the current `Library`/`Workspace`. This field will be removed. Use `folders` instead. | Date: 2023-07-01T00:00:00.000+00:00
   * @deprecated This field will be removed. Use `folders` instead. | Date: 2023-07-01T00:00:00.000+00:00
   */
  subFolders: SubFolderItems;
};


export type WorkspaceRootFolderAssetsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<FolderAssetQueryInput>;
};


export type WorkspaceRootFolderFoldersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type WorkspaceRootFolderSubFoldersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkspaceUserPermissions = {
  __typename?: 'WorkspaceUserPermissions';
  /** Check if current `User` has `Asset` creation permissions in a specific `Workspace`. */
  canCreateAssets: Scalars['Boolean']['output'];
  /** Check if current `User` has `Collaborator` view permissions in a specific `Workspace`. */
  canViewCollaborators: Scalars['Boolean']['output'];
};

export type UpdateAssetTemplateItemMutationVariables = Exact<{
  input: UpdateAssetTemplateItemInput;
}>;


export type UpdateAssetTemplateItemMutation = { __typename?: 'RootMutation', updateAssetTemplateItem?: { __typename?: 'UpdateAssetTemplateItem', assetTemplateItem: { __typename?: 'AssetTemplateItem', changes?: any | null, settings?: any | null } } | null };

export type AccountCollaboratorsQueryVariables = Exact<{
  term: Scalars['String']['input'];
}>;


export type AccountCollaboratorsQuery = { __typename?: 'RootQuery', account: { __typename?: 'Account', collaborators?: { __typename?: 'AccountCollaboratorItems', total: number, items?: Array<{ __typename?: 'AccountUser', id: string, name?: string | null, avatar?: any | null } | { __typename?: 'UserGroup', id: string, name?: string | null } | null> | null } | null } };

export type AddWorkflowChecklistPresetMutationVariables = Exact<{
  input: AddWorkflowChecklistPresetInput;
}>;


export type AddWorkflowChecklistPresetMutation = { __typename?: 'RootMutation', addWorkflowChecklistPreset?: { __typename?: 'AddWorkflowChecklistPreset', checklistPreset?: { __typename?: 'WorkflowChecklistPreset', id: string, content: string, assignedUser?: { __typename?: 'AccountUser', id: string } | null } | null } | null };

export type GrantSubjectsAnalyticsDashboardAccessMutationVariables = Exact<{
  input: GrantSubjectsAnalyticsDashboardAccessInput;
}>;


export type GrantSubjectsAnalyticsDashboardAccessMutation = { __typename?: 'RootMutation', grantSubjectsAnalyticsDashboardAccess?: { __typename?: 'GrantSubjectsAnalyticsDashboardAccess', subjectIds: Array<string> } | null };

export type RevokeSubjectsAnalyticsDashboardAccessMutationVariables = Exact<{
  input: RevokeSubjectsAnalyticsDashboardAccessInput;
}>;


export type RevokeSubjectsAnalyticsDashboardAccessMutation = { __typename?: 'RootMutation', revokeSubjectsAnalyticsDashboardAccess?: { __typename?: 'RevokeSubjectsAnalyticsDashboardAccess', subjectIds: Array<string> } | null };

export type AssetAnnotationsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AssetAnnotationsQuery = { __typename?: 'RootQuery', node?: { __typename?: 'Account' } | { __typename?: 'AccountUser' } | { __typename?: 'AssetAttachment' } | { __typename?: 'AssetComment' } | { __typename?: 'Audio' } | { __typename?: 'Brand' } | { __typename?: 'Collection' } | { __typename?: 'Document' } | { __typename?: 'DocumentLibrary' } | { __typename?: 'EmbeddedContent' } | { __typename?: 'File' } | { __typename?: 'Guideline' } | { __typename?: 'IconLibrary' } | { __typename?: 'Image', comments?: { __typename?: 'AssetCommentItems', total: number, page: number, limit: number, hasNextPage: boolean, items?: Array<{ __typename?: 'AssetComment', id: string, createdAt: any, modifiedAt?: any | null, content: string, isResolved: boolean, creator: { __typename?: 'AccountUser', id: string, name?: string | null, email: any, avatar?: any | null }, mentionedUsers: Array<{ __typename?: 'AccountUser', id: string, name?: string | null } | null>, replies: { __typename?: 'AssetCommentReplyItems', total: number, items?: Array<{ __typename?: 'AssetCommentReply', id: string, content: string, creator: { __typename?: 'AccountUser', name?: string | null }, mentionedUsers: Array<{ __typename?: 'AccountUser', id: string, name?: string | null } | null> } | null> | null }, marking?: { __typename?: 'MultiPageMarking', order: number, position: { __typename?: 'MarkingPosition', x: any, y: any }, dimensions?: { __typename?: 'MarkingDimensions', width?: any | null, height?: any | null } | null } | { __typename?: 'SimpleMarking', order: number, position: { __typename?: 'MarkingPosition', x: any, y: any }, dimensions?: { __typename?: 'MarkingDimensions', width?: any | null, height?: any | null } | null } | { __typename?: 'VideoMarking', order: number, position: { __typename?: 'MarkingPosition', x: any, y: any }, dimensions?: { __typename?: 'MarkingDimensions', width?: any | null, height?: any | null } | null } | null } | null> | null } | null } | { __typename?: 'LibraryPage' } | { __typename?: 'LibraryPageCollection' } | { __typename?: 'LogoLibrary' } | { __typename?: 'MediaLibrary' } | { __typename?: 'ProjectWebhook' } | { __typename?: 'SubFolder' } | { __typename?: 'UserGroup' } | { __typename?: 'Video' } | { __typename?: 'Workspace' } | null };

export type CreateAssetAnnotationMutationVariables = Exact<{
  input: CreateAssetCommentInput;
}>;


export type CreateAssetAnnotationMutation = { __typename?: 'RootMutation', createAssetComment?: { __typename?: 'CreateAssetComment', comment: { __typename?: 'AssetComment', id: string, content: string, createdAt: any, isResolved: boolean, creator: { __typename?: 'AccountUser', id: string, name?: string | null, email: any, avatar?: any | null, gravatarHash?: string | null }, replies: { __typename?: 'AssetCommentReplyItems', total: number }, marking?: { __typename?: 'MultiPageMarking', page?: number | null, spread?: string | null, order: number, position: { __typename?: 'MarkingPosition', x: any, y: any }, dimensions?: { __typename?: 'MarkingDimensions', width?: any | null, height?: any | null } | null } | { __typename?: 'SimpleMarking', order: number, position: { __typename?: 'MarkingPosition', x: any, y: any }, dimensions?: { __typename?: 'MarkingDimensions', width?: any | null, height?: any | null } | null } | { __typename?: 'VideoMarking', order: number, timeframe?: { __typename?: 'MarkingTimeframe', start?: any | null, end?: any | null } | null, position: { __typename?: 'MarkingPosition', x: any, y: any }, dimensions?: { __typename?: 'MarkingDimensions', width?: any | null, height?: any | null } | null } | null } } | null };

export type ReplyToAssetAnnotationMutationVariables = Exact<{
  input: ReplyToCommentInput;
}>;


export type ReplyToAssetAnnotationMutation = { __typename?: 'RootMutation', replyToComment?: { __typename?: 'ReplyToComment', reply: { __typename?: 'AssetCommentReply', id: string, createdAt: any, content: string, creator: { __typename?: 'AccountUser', id: string, name?: string | null, email: any, avatar?: any | null, gravatarHash?: string | null }, mentionedUsers: Array<{ __typename?: 'AccountUser', id: string, name?: string | null } | null> } } | null };

export type EditAssetAnnotationMutationVariables = Exact<{
  input: EditCommentInput;
}>;


export type EditAssetAnnotationMutation = { __typename?: 'RootMutation', editComment?: { __typename?: 'EditComment', comment: { __typename?: 'AssetComment', id: string, createdAt: any, content: string, creator: { __typename?: 'AccountUser', id: string, name?: string | null, email: any, avatar?: any | null } } | { __typename?: 'AssetCommentReply', id: string, createdAt: any, content: string, creator: { __typename?: 'AccountUser', id: string, name?: string | null, email: any, avatar?: any | null } } } | null };

export type DeleteAnnotationMutationVariables = Exact<{
  input: DeleteCommentInput;
}>;


export type DeleteAnnotationMutation = { __typename?: 'RootMutation', deleteComment?: { __typename?: 'DeleteComment', id: string } | null };

export type GetAssetSubmissionRequestTokensQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetAssetSubmissionRequestTokensQuery = { __typename?: 'RootQuery', library?: { __typename?: 'DocumentLibrary', assetSubmissionRequests: Array<{ __typename?: 'AssetSubmissionRequest', id: string, tokens: Array<{ __typename?: 'AssetSubmissionRequestToken', token?: string | null }> }> } | { __typename?: 'IconLibrary', assetSubmissionRequests: Array<{ __typename?: 'AssetSubmissionRequest', id: string, tokens: Array<{ __typename?: 'AssetSubmissionRequestToken', token?: string | null }> }> } | { __typename?: 'LogoLibrary', assetSubmissionRequests: Array<{ __typename?: 'AssetSubmissionRequest', id: string, tokens: Array<{ __typename?: 'AssetSubmissionRequestToken', token?: string | null }> }> } | { __typename?: 'MediaLibrary', assetSubmissionRequests: Array<{ __typename?: 'AssetSubmissionRequest', id: string, tokens: Array<{ __typename?: 'AssetSubmissionRequestToken', token?: string | null }> }> } | null };

export type CreateAssetSubmissionRequestMutationVariables = Exact<{
  input: CreateAssetSubmissionRequestInput;
}>;


export type CreateAssetSubmissionRequestMutation = { __typename?: 'RootMutation', createAssetSubmissionRequest?: { __typename?: 'CreateAssetSubmissionRequest', assetSubmissionRequest: { __typename?: 'AssetSubmissionRequest', id: string } } | null };

export type IssueAssetSubmissionRequestTokenMutationVariables = Exact<{
  input: IssueAssetSubmissionRequestTokenInput;
}>;


export type IssueAssetSubmissionRequestTokenMutation = { __typename?: 'RootMutation', issueAssetSubmissionRequestToken?: { __typename?: 'IssueAssetSubmissionRequestToken', token: string, expiresAt?: any | null } | null };

export type DeleteAssetSubmissionRequestMutationVariables = Exact<{
  input: DeleteAssetSubmissionRequestInput;
}>;


export type DeleteAssetSubmissionRequestMutation = { __typename?: 'RootMutation', deleteAssetSubmissionRequest?: { __typename?: 'DeleteAssetSubmissionRequest', id: string } | null };

export type AssetViewerQueryVariables = Exact<{
  assetId: Scalars['ID']['input'];
}>;


export type AssetViewerQuery = { __typename?: 'RootQuery', asset?: { __typename?: 'Audio', author?: string | null, extension: string, size?: any | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | { __typename?: 'Document', author?: string | null, width: number, height: number, extension: string, size?: any | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | { __typename?: 'EmbeddedContent', author?: string | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | { __typename?: 'File', author?: string | null, extension: string, size?: any | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | { __typename?: 'Image', author?: string | null, width: number, height: number, extension: string, size?: any | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | { __typename?: 'Video', author?: string | null, width: number, height: number, extension: string, size?: any | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | null };

export type AssetViewerWithTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type AssetViewerWithTokenQuery = { __typename?: 'RootQuery', tokenizedAsset?: { __typename?: 'Audio', author?: string | null, extension: string, size?: any | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | { __typename?: 'Document', author?: string | null, width: number, height: number, extension: string, size?: any | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | { __typename?: 'EmbeddedContent', author?: string | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | { __typename?: 'File', author?: string | null, extension: string, size?: any | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | { __typename?: 'Image', author?: string | null, width: number, height: number, extension: string, size?: any | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | { __typename?: 'Video', author?: string | null, width: number, height: number, extension: string, size?: any | null, id: string, title: string, description?: string | null, status: AssetStatusType, expiresAt?: any | null, createdAt: any, modifiedAt?: any | null, creator: { __typename?: 'AccountUser', id: string, name?: string | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, type: { __typename?: 'CustomMetadataPropertyTypeDate', name: string } | { __typename?: 'CustomMetadataPropertyTypeLongText', name: string } | { __typename?: 'CustomMetadataPropertyTypeMultiSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeNumber', name: string } | { __typename?: 'CustomMetadataPropertyTypeSelect', name: string } | { __typename?: 'CustomMetadataPropertyTypeText', name: string } | { __typename?: 'CustomMetadataPropertyTypeUrl', name: string, shouldBeOpenedInANewTab: boolean } } }>, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string } | null> | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null } | null, tags?: Array<{ __typename?: 'Tag', value: string, source?: TagSource | null } | null> | null } | null };

export type BrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type BrandsQuery = { __typename?: 'RootQuery', brands?: Array<{ __typename?: 'Brand', name: string, avatar?: any | null, slug?: string | null, globalObjectId: string, rgbaColor?: { __typename?: 'RgbaColor', red: any, green: any, blue: any, alpha: any } | null } | null> | null };

export type BrowseFolderQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BrowseFolderQuery = { __typename?: 'RootQuery', node?: { __typename?: 'Account' } | { __typename?: 'AccountUser' } | { __typename?: 'AssetAttachment' } | { __typename?: 'AssetComment' } | { __typename?: 'Audio' } | { __typename?: 'Brand' } | { __typename?: 'Collection' } | { __typename?: 'Document' } | { __typename?: 'DocumentLibrary' } | { __typename?: 'EmbeddedContent' } | { __typename?: 'File' } | { __typename?: 'Guideline' } | { __typename?: 'IconLibrary' } | { __typename?: 'Image' } | { __typename?: 'LibraryPage' } | { __typename?: 'LibraryPageCollection' } | { __typename?: 'LogoLibrary' } | { __typename?: 'MediaLibrary' } | { __typename?: 'ProjectWebhook' } | { __typename: 'SubFolder', id: string, name: string, folders: { __typename?: 'FolderItems', total: number, limit: number, page: number, hasNextPage: boolean, items?: Array<{ __typename: 'SubFolder', id: string, name: string, folders: { __typename?: 'FolderItems', total: number, limit: number } } | null> | null } } | { __typename?: 'UserGroup' } | { __typename?: 'Video' } | { __typename?: 'Workspace' } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'RootQuery', currentUser: { __typename?: 'AccountUser', email: any, name?: string | null, avatar?: any | null, gravatarHash?: string | null, globalObjectId: string, permissions?: { __typename?: 'UserPermissions', analyticsDashboard?: { __typename?: 'AnalyticsDashboardUserPermission', canView: boolean } | null } | null } };

export type EnhancedTextShortenQueryVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type EnhancedTextShortenQuery = { __typename?: 'RootQuery', enhancedText: { __typename?: 'EnhancedText', shortened?: string | null } };

export type EnhancedTextTranslationQueryVariables = Exact<{
  text: Scalars['String']['input'];
  language: Scalars['String']['input'];
}>;


export type EnhancedTextTranslationQuery = { __typename?: 'RootQuery', enhancedText: { __typename?: 'EnhancedText', translated?: string | null } };

export type EnhancedTextProperEnglishQueryVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type EnhancedTextProperEnglishQuery = { __typename?: 'RootQuery', enhancedText: { __typename?: 'EnhancedText', properEnglish?: string | null } };

export type EnhancedTextDrunkenPirateQueryVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type EnhancedTextDrunkenPirateQuery = { __typename?: 'RootQuery', enhancedText: { __typename?: 'EnhancedText', drunken?: string | null } };

export type EnhancedTextKeyTakeawaysQueryVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type EnhancedTextKeyTakeawaysQuery = { __typename?: 'RootQuery', enhancedText: { __typename?: 'EnhancedText', keyTakeaways?: string | null } };

export type EnhancedTextPromptedQueryVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type EnhancedTextPromptedQuery = { __typename?: 'RootQuery', enhancedText: { __typename?: 'EnhancedText', prompted?: string | null } };

export type GuidelinePageSummaryQueryVariables = Exact<{
  pageId: Scalars['ID']['input'];
}>;


export type GuidelinePageSummaryQuery = { __typename?: 'RootQuery', guidelinePage: { __typename?: 'GuideLinePage', summary?: string | null } };

export type GetSavedLibraryAssetsQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
  externalId: Scalars['ID']['input'];
  externalIdString: Scalars['String']['input'];
  fileExtension: Scalars['String']['input'];
  inFolder?: InputMaybe<AssetQueryInFolderInput>;
}>;


export type GetSavedLibraryAssetsQuery = { __typename?: 'RootQuery', library?: { __typename?: 'DocumentLibrary', assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string, title: string } | { __typename?: 'Document', id: string, title: string } | { __typename?: 'EmbeddedContent', id: string, title: string } | { __typename?: 'File', id: string, title: string } | { __typename?: 'Image', id: string, title: string } | { __typename?: 'Video', id: string, title: string } | null> | null }, browse: { __typename?: 'LibraryRootFolder', assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string, title: string } | { __typename?: 'Document', id: string, title: string } | { __typename?: 'EmbeddedContent', id: string, title: string } | { __typename?: 'File', id: string, title: string } | { __typename?: 'Image', id: string, title: string } | { __typename?: 'Video', id: string, title: string } | null> | null } } } | { __typename?: 'IconLibrary', assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string, title: string } | { __typename?: 'Document', id: string, title: string } | { __typename?: 'EmbeddedContent', id: string, title: string } | { __typename?: 'File', id: string, title: string } | { __typename?: 'Image', id: string, title: string } | { __typename?: 'Video', id: string, title: string } | null> | null }, browse: { __typename?: 'LibraryRootFolder', assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string, title: string } | { __typename?: 'Document', id: string, title: string } | { __typename?: 'EmbeddedContent', id: string, title: string } | { __typename?: 'File', id: string, title: string } | { __typename?: 'Image', id: string, title: string } | { __typename?: 'Video', id: string, title: string } | null> | null } } } | { __typename?: 'LogoLibrary', assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string, title: string } | { __typename?: 'Document', id: string, title: string } | { __typename?: 'EmbeddedContent', id: string, title: string } | { __typename?: 'File', id: string, title: string } | { __typename?: 'Image', id: string, title: string } | { __typename?: 'Video', id: string, title: string } | null> | null }, browse: { __typename?: 'LibraryRootFolder', assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string, title: string } | { __typename?: 'Document', id: string, title: string } | { __typename?: 'EmbeddedContent', id: string, title: string } | { __typename?: 'File', id: string, title: string } | { __typename?: 'Image', id: string, title: string } | { __typename?: 'Video', id: string, title: string } | null> | null } } } | { __typename?: 'MediaLibrary', assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string, title: string } | { __typename?: 'Document', id: string, title: string } | { __typename?: 'EmbeddedContent', id: string, title: string } | { __typename?: 'File', id: string, title: string } | { __typename?: 'Image', id: string, title: string } | { __typename?: 'Video', id: string, title: string } | null> | null }, browse: { __typename?: 'LibraryRootFolder', assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string, title: string } | { __typename?: 'Document', id: string, title: string } | { __typename?: 'EmbeddedContent', id: string, title: string } | { __typename?: 'File', id: string, title: string } | { __typename?: 'Image', id: string, title: string } | { __typename?: 'Video', id: string, title: string } | null> | null } } } | null };

export type GetSavedWorkspaceProjectAssetsQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
  externalId: Scalars['ID']['input'];
  externalIdString: Scalars['String']['input'];
  fileExtension: Scalars['String']['input'];
  inFolder?: InputMaybe<AssetQueryInFolderInput>;
}>;


export type GetSavedWorkspaceProjectAssetsQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string, title: string } | { __typename?: 'Document', id: string, title: string } | { __typename?: 'EmbeddedContent', id: string, title: string } | { __typename?: 'File', id: string, title: string } | { __typename?: 'Image', id: string, title: string } | { __typename?: 'Video', id: string, title: string } | null> | null }, browse: { __typename?: 'WorkspaceRootFolder', assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string, title: string } | { __typename?: 'Document', id: string, title: string } | { __typename?: 'EmbeddedContent', id: string, title: string } | { __typename?: 'File', id: string, title: string } | { __typename?: 'Image', id: string, title: string } | { __typename?: 'Video', id: string, title: string } | null> | null } } } | null };

export type FoldersFieldsFragment = { __typename?: 'FolderItems', total: number, limit: number, page: number, hasNextPage: boolean, items?: Array<{ __typename: 'SubFolder', id: string, name: string, folders: { __typename?: 'FolderItems', total: number, limit: number } } | null> | null };

export type FolderItemFieldsFragment = { __typename: 'SubFolder', id: string, name: string, folders: { __typename?: 'FolderItems', total: number, limit: number } };

export type LibrariesAndProjectsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  libraryTypes?: InputMaybe<Array<InputMaybe<LibraryType>> | InputMaybe<LibraryType>>;
}>;


export type LibrariesAndProjectsQuery = { __typename?: 'RootQuery', brand?: { __typename?: 'Brand', id: string, libraries?: { __typename?: 'LibraryItems', total: number, items?: Array<{ __typename: 'DocumentLibrary', id: string, name: string, browse: { __typename?: 'LibraryRootFolder', folders: { __typename?: 'FolderItems', total: number, limit: number, page: number, hasNextPage: boolean, items?: Array<{ __typename: 'SubFolder', id: string, name: string, folders: { __typename?: 'FolderItems', total: number, limit: number } } | null> | null } }, currentUserPermissions: { __typename?: 'LibraryUserPermissions', canCreateAssets: boolean } } | { __typename: 'IconLibrary', id: string, name: string, browse: { __typename?: 'LibraryRootFolder', folders: { __typename?: 'FolderItems', total: number, limit: number, page: number, hasNextPage: boolean, items?: Array<{ __typename: 'SubFolder', id: string, name: string, folders: { __typename?: 'FolderItems', total: number, limit: number } } | null> | null } }, currentUserPermissions: { __typename?: 'LibraryUserPermissions', canCreateAssets: boolean } } | { __typename: 'LogoLibrary', id: string, name: string, browse: { __typename?: 'LibraryRootFolder', folders: { __typename?: 'FolderItems', total: number, limit: number, page: number, hasNextPage: boolean, items?: Array<{ __typename: 'SubFolder', id: string, name: string, folders: { __typename?: 'FolderItems', total: number, limit: number } } | null> | null } }, currentUserPermissions: { __typename?: 'LibraryUserPermissions', canCreateAssets: boolean } } | { __typename: 'MediaLibrary', id: string, name: string, browse: { __typename?: 'LibraryRootFolder', folders: { __typename?: 'FolderItems', total: number, limit: number, page: number, hasNextPage: boolean, items?: Array<{ __typename: 'SubFolder', id: string, name: string, folders: { __typename?: 'FolderItems', total: number, limit: number } } | null> | null } }, currentUserPermissions: { __typename?: 'LibraryUserPermissions', canCreateAssets: boolean } } | null> | null } | null, workspaceProjects?: { __typename?: 'WorkspaceItems', total: number, items?: Array<{ __typename: 'Workspace', id: string, name: string, browse: { __typename?: 'WorkspaceRootFolder', folders: { __typename?: 'FolderItems', total: number, limit: number, page: number, hasNextPage: boolean, items?: Array<{ __typename: 'SubFolder', id: string, name: string, folders: { __typename?: 'FolderItems', total: number, limit: number } } | null> | null } }, currentUserPermissions: { __typename?: 'WorkspaceUserPermissions', canCreateAssets: boolean } } | null> | null } | null } | null };

export type LibraryPageCollectionsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LibraryPageCollectionsQuery = { __typename?: 'RootQuery', node?: { __typename: 'Account', id: string } | { __typename: 'AccountUser', id: string } | { __typename: 'AssetAttachment', id: string } | { __typename: 'AssetComment', id: string } | { __typename: 'Audio', id: string } | { __typename: 'Brand', id: string } | { __typename: 'Collection', id: string } | { __typename: 'Document', id: string } | { __typename: 'DocumentLibrary', id: string } | { __typename: 'EmbeddedContent', id: string } | { __typename: 'File', id: string } | { __typename: 'Guideline', id: string } | { __typename: 'IconLibrary', id: string } | { __typename: 'Image', id: string } | { __typename: 'LibraryPage', title: string, id: string, collections: { __typename?: 'LibraryPageCollectionItems', items: Array<{ __typename?: 'LibraryPageCollection', id: string, name: string, assets: { __typename?: 'AssetItems', items?: Array<{ __typename: 'Audio', previewUrl: any, extension: string, id: string, title: string } | { __typename: 'Document', previewUrl: any, extension: string, id: string, title: string } | { __typename: 'EmbeddedContent', id: string, title: string } | { __typename: 'File', previewUrl: any, extension: string, id: string, title: string } | { __typename: 'Image', previewUrl: any, extension: string, id: string, title: string } | { __typename: 'Video', previewUrl: any, extension: string, id: string, title: string } | null> | null } } | null> } } | { __typename: 'LibraryPageCollection', id: string } | { __typename: 'LogoLibrary', id: string } | { __typename: 'MediaLibrary', id: string } | { __typename: 'ProjectWebhook', id: string } | { __typename: 'SubFolder', id: string } | { __typename: 'UserGroup', id: string } | { __typename: 'Video', id: string } | { __typename: 'Workspace', id: string } | null };

export type AddCollectionAssetsMutationVariables = Exact<{
  input: AddCollectionAssetsInput;
}>;


export type AddCollectionAssetsMutation = { __typename?: 'RootMutation', addCollectionAssets?: { __typename?: 'AddCollectionAssets', collection?: { __typename?: 'Collection', id: string, name: string, isPrivate?: boolean | null, assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string } | { __typename?: 'Document', id: string } | { __typename?: 'EmbeddedContent', id: string } | { __typename?: 'File', id: string } | { __typename?: 'Image', id: string } | { __typename?: 'Video', id: string } | null> | null } } | null } | null };

export type RemoveCollectionAssetsMutationVariables = Exact<{
  input: RemoveCollectionAssetsInput;
}>;


export type RemoveCollectionAssetsMutation = { __typename?: 'RootMutation', removeCollectionAssets?: { __typename?: 'RemoveCollectionAssets', collection?: { __typename?: 'Collection', id: string, name: string, isPrivate?: boolean | null, assets: { __typename?: 'AssetItems', items?: Array<{ __typename?: 'Audio', id: string } | { __typename?: 'Document', id: string } | { __typename?: 'EmbeddedContent', id: string } | { __typename?: 'File', id: string } | { __typename?: 'Image', id: string } | { __typename?: 'Video', id: string } | null> | null } } | null } | null };

export type CreateCollectionMutationVariables = Exact<{
  input: CreateCollectionInput;
}>;


export type CreateCollectionMutation = { __typename?: 'RootMutation', createCollection?: { __typename?: 'CreateCollection', collection: { __typename?: 'Collection', id: string, name: string } } | null };

export type ProjectBasicInfoQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type ProjectBasicInfoQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', name: string, description?: string | null, beginsAt?: any | null, endsAt?: any | null, createdAt: any, creator: { __typename?: 'AccountUser', name?: string | null }, assets: { __typename?: 'AssetItems', total: number }, collaborators?: { __typename?: 'WorkspaceCollaborators', users: { __typename?: 'WorkspaceCollaboratorUserItems', total: number } } | null } | null };

export type WorkspaceProjectNameQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type WorkspaceProjectNameQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', name: string } | null };

export type WorkspaceProjectDescriptionQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type WorkspaceProjectDescriptionQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', description?: string | null } | null };

export type WorkspaceProjectBeginsAtQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type WorkspaceProjectBeginsAtQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', beginsAt?: any | null } | null };

export type WorkspaceProjectEndsAtQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type WorkspaceProjectEndsAtQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', endsAt?: any | null } | null };

export type WorkspaceProjectCreatedAtQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type WorkspaceProjectCreatedAtQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', createdAt: any } | null };

export type WorkspaceProjectAssetsTotalQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type WorkspaceProjectAssetsTotalQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', assets: { __typename?: 'AssetItems', total: number } } | null };

export type WorkspaceProjectCollaboratorsUsersTotalQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type WorkspaceProjectCollaboratorsUsersTotalQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', collaborators?: { __typename?: 'WorkspaceCollaborators', users: { __typename?: 'WorkspaceCollaboratorUserItems', total: number } } | null } | null };

export type WorkspaceProjectCreatorNameQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type WorkspaceProjectCreatorNameQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', creator: { __typename?: 'AccountUser', name?: string | null } } | null };

export type BrandCustomMetadataPropertiesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type BrandCustomMetadataPropertiesQuery = { __typename?: 'RootQuery', brand?: { __typename?: 'Brand', customMetadataProperties: Array<{ __typename?: 'CustomMetadataProperty', id: string, createdAt: any, modifiedAt?: any | null, defaultValue?: any | null, name: string, helpText?: string | null, isRequired: boolean, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string } }> } | null };

export type ProjectCustomMetadataPropertiesQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProjectCustomMetadataPropertiesQuery = { __typename?: 'RootQuery', library?: { __typename?: 'DocumentLibrary', customMetadataProperties: Array<{ __typename?: 'CustomMetadataProperty', id: string, createdAt: any, forbiddenDependeePropertyIds?: Array<string> | null, modifiedAt?: any | null, defaultValue?: any | null, name: string, helpText?: string | null, isRequired: boolean, isEditable: boolean, isSearchable: boolean, isViewable: boolean, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string, shouldBeOpenedInANewTab: boolean } }> } | { __typename?: 'IconLibrary', customMetadataProperties: Array<{ __typename?: 'CustomMetadataProperty', id: string, createdAt: any, forbiddenDependeePropertyIds?: Array<string> | null, modifiedAt?: any | null, defaultValue?: any | null, name: string, helpText?: string | null, isRequired: boolean, isEditable: boolean, isSearchable: boolean, isViewable: boolean, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string, shouldBeOpenedInANewTab: boolean } }> } | { __typename?: 'LogoLibrary', customMetadataProperties: Array<{ __typename?: 'CustomMetadataProperty', id: string, createdAt: any, forbiddenDependeePropertyIds?: Array<string> | null, modifiedAt?: any | null, defaultValue?: any | null, name: string, helpText?: string | null, isRequired: boolean, isEditable: boolean, isSearchable: boolean, isViewable: boolean, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string, shouldBeOpenedInANewTab: boolean } }> } | { __typename?: 'MediaLibrary', customMetadataProperties: Array<{ __typename?: 'CustomMetadataProperty', id: string, createdAt: any, forbiddenDependeePropertyIds?: Array<string> | null, modifiedAt?: any | null, defaultValue?: any | null, name: string, helpText?: string | null, isRequired: boolean, isEditable: boolean, isSearchable: boolean, isViewable: boolean, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string, shouldBeOpenedInANewTab: boolean } }> } | null };

export type CreateCustomMetadataPropertyMutationVariables = Exact<{
  input: CreateCustomMetadataPropertyInput;
}>;


export type CreateCustomMetadataPropertyMutation = { __typename?: 'RootMutation', createCustomMetadataProperty?: { __typename?: 'CreateCustomMetadataProperty', customMetadataProperty: { __typename?: 'CustomMetadataProperty', id: string, createdAt: any, forbiddenDependeePropertyIds?: Array<string> | null, modifiedAt?: any | null, defaultValue?: any | null, name: string, helpText?: string | null, isRequired: boolean, isEditable: boolean, isSearchable: boolean, isViewable: boolean, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string, shouldBeOpenedInANewTab: boolean } } } | null };

export type UpdateCustomMetadataPropertyMutationVariables = Exact<{
  input: UpdateCustomMetadataPropertyInput;
}>;


export type UpdateCustomMetadataPropertyMutation = { __typename?: 'RootMutation', updateCustomMetadataProperty?: { __typename?: 'UpdateCustomMetadataProperty', customMetadataProperty: { __typename?: 'CustomMetadataProperty', id: string, createdAt: any, modifiedAt?: any | null, defaultValue?: any | null, forbiddenDependeePropertyIds?: Array<string> | null, name: string, helpText?: string | null, isRequired: boolean, isEditable: boolean, isSearchable: boolean, isViewable: boolean, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string, shouldBeOpenedInANewTab: boolean } } } | null };

export type DeleteCustomMetadataPropertyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCustomMetadataPropertyMutation = { __typename?: 'RootMutation', deleteCustomMetadataProperty?: { __typename?: 'DeleteCustomMetadataProperty', id: string } | null };

export type MoveCustomMetadataPropertyMutationVariables = Exact<{
  input: MoveCustomMetadataPropertyInput;
}>;


export type MoveCustomMetadataPropertyMutation = { __typename?: 'RootMutation', moveCustomMetadataProperty?: { __typename?: 'MoveCustomMetadataProperty', customMetadataProperty: { __typename?: 'CustomMetadataProperty', createdAt: any, modifiedAt?: any | null, defaultValue?: any | null, name: string, helpText?: string | null, isRequired: boolean, globalObjectId: string } } | null };

type ProjectDependencyFields_CustomMetadataPropertySelectValueTypeDependencyTypeEquals_Fragment = { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string };

type ProjectDependencyFields_CustomMetadataPropertySelectValueTypeDependencyTypeOneOf_Fragment = { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string };

type ProjectDependencyFields_CustomMetadataPropertyValueTypeDependencyTypeFilled_Fragment = { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string };

export type ProjectDependencyFieldsFragment = ProjectDependencyFields_CustomMetadataPropertySelectValueTypeDependencyTypeEquals_Fragment | ProjectDependencyFields_CustomMetadataPropertySelectValueTypeDependencyTypeOneOf_Fragment | ProjectDependencyFields_CustomMetadataPropertyValueTypeDependencyTypeFilled_Fragment;

export type RemoveMetadataValueMutationVariables = Exact<{
  input: RemoveCustomMetadataInput;
}>;


export type RemoveMetadataValueMutation = { __typename?: 'RootMutation', removeCustomMetadata?: { __typename?: 'RemoveCustomMetadata', parentIds: Array<string> } | null };

export type ProjectMetadataValuesQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;


export type ProjectMetadataValuesQuery = { __typename?: 'RootQuery', workspaceProject?: { __typename?: 'Workspace', id: string, description?: string | null, createdAt: any, creator: { __typename?: 'AccountUser', id: string, name?: string | null, email: any, avatar?: any | null }, customMetadata: Array<{ __typename?: 'CustomMetadataValue', value?: any | null, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, defaultValue?: any | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string, shouldBeOpenedInANewTab: boolean } } } | { __typename?: 'CustomMetadataValues', values: Array<any | null>, property: { __typename?: 'CustomMetadataProperty', id: string, name: string, defaultValue?: any | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string, shouldBeOpenedInANewTab: boolean } } }> } | null };

export type ShareLinksQueryVariables = Exact<{
  usageKeys: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type ShareLinksQuery = { __typename?: 'RootQuery', shareLinks?: Array<{ __typename?: 'ShareLink', id: string, url: any, isEnabled: boolean, isPasswordProtected: boolean, hasExpirationDate: boolean, expiresAt?: any | null } | null> | null };

export type SharedAssetsQueryVariables = Exact<{
  permissionToken: Scalars['String']['input'];
}>;


export type SharedAssetsQuery = { __typename?: 'RootQuery', sharedAssets?: Array<{ __typename?: 'Audio', downloadUrl?: any | null, extension: string, filename?: string | null, size?: any | null, previewUrl: any, id: string, title: string, description?: string | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null, isDownloadConsentRequired?: boolean | null } | null, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string, requireConsensus: boolean } | null> | null } | { __typename?: 'Document', downloadUrl?: any | null, extension: string, filename?: string | null, height: number, size?: any | null, previewUrl: any, width: number, pageCount?: number | null, id: string, title: string, description?: string | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null, isDownloadConsentRequired?: boolean | null } | null, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string, requireConsensus: boolean } | null> | null } | { __typename?: 'EmbeddedContent', sourceUrl: any, html?: string | null, id: string, title: string, description?: string | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null, isDownloadConsentRequired?: boolean | null } | null, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string, requireConsensus: boolean } | null> | null } | { __typename?: 'File', downloadUrl?: any | null, extension: string, filename?: string | null, size?: any | null, previewUrl: any, id: string, title: string, description?: string | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null, isDownloadConsentRequired?: boolean | null } | null, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string, requireConsensus: boolean } | null> | null } | { __typename?: 'Image', downloadUrl?: any | null, extension: string, filename?: string | null, height: number, size?: any | null, previewUrl: any, width: number, id: string, title: string, description?: string | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null, isDownloadConsentRequired?: boolean | null } | null, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string, requireConsensus: boolean } | null> | null } | { __typename?: 'Video', downloadUrl?: any | null, extension: string, filename?: string | null, size?: any | null, previewUrl: any, width: number, height: number, id: string, title: string, description?: string | null, copyright?: { __typename?: 'Copyright', status: CopyrightStatus, notice?: string | null, isDownloadConsentRequired?: boolean | null } | null, licenses?: Array<{ __typename?: 'License', id: string, title: string, license: string, requireConsensus: boolean } | null> | null } | null> | null };

export type UpdateShareLinkMutationVariables = Exact<{
  input: UpdateShareLinkInput;
}>;


export type UpdateShareLinkMutation = { __typename?: 'RootMutation', updateShareLink?: { __typename?: 'UpdateShareLink', shareLink: { __typename?: 'ShareLink', id: string, isEnabled: boolean, isPasswordProtected: boolean, expiresAt?: any | null } } | null };

export type CreatePermissionTokenMutationVariables = Exact<{
  input: CreatePermissionTokenInput;
}>;


export type CreatePermissionTokenMutation = { __typename?: 'RootMutation', createPermissionToken?: { __typename?: 'CreatePermissionToken', permissionToken: string } | null };

export type CreateShareLinkMutationVariables = Exact<{
  input: CreateShareLinkInput;
}>;


export type CreateShareLinkMutation = { __typename?: 'RootMutation', createShareLink?: { __typename?: 'CreateShareLink', shareLink: { __typename?: 'ShareLink', id: string, url: any, isEnabled: boolean, isPasswordProtected: boolean, hasExpirationDate: boolean, expiresAt?: any | null } } | null };

export type DeleteShareLinkMutationVariables = Exact<{
  input: DeleteShareLinkInput;
}>;


export type DeleteShareLinkMutation = { __typename?: 'RootMutation', deleteShareLink?: { __typename?: 'DeleteShareLink', shareLinkId: string } | null };

export type PermissionTokenMutationVariables = Exact<{
  input: CreateShareLinkPermissionTokenInput;
}>;


export type PermissionTokenMutation = { __typename?: 'RootMutation', createShareLinkPermissionToken?: { __typename?: 'CreateShareLinkPermissionToken', permissionToken: string } | null };

export type CustomMetadataPropertySelectionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  assetIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type CustomMetadataPropertySelectionQuery = { __typename?: 'RootQuery', library?: { __typename?: 'DocumentLibrary', aggregatedAssetsCustomMetadata: Array<{ __typename?: 'AggregatedAssetsCustomMetadata', property: { __typename?: 'CustomMetadataProperty', defaultValue?: any | null, forbiddenDependeePropertyIds?: Array<string> | null, helpText?: string | null, id: string, isEditable: boolean, isRequired: boolean, name: string, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string } }, values: Array<{ __typename?: 'AggregatedCustomMetadataSelection', count: number, value?: any | null }> }> } | { __typename?: 'IconLibrary', aggregatedAssetsCustomMetadata: Array<{ __typename?: 'AggregatedAssetsCustomMetadata', property: { __typename?: 'CustomMetadataProperty', defaultValue?: any | null, forbiddenDependeePropertyIds?: Array<string> | null, helpText?: string | null, id: string, isEditable: boolean, isRequired: boolean, name: string, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string } }, values: Array<{ __typename?: 'AggregatedCustomMetadataSelection', count: number, value?: any | null }> }> } | { __typename?: 'LogoLibrary', aggregatedAssetsCustomMetadata: Array<{ __typename?: 'AggregatedAssetsCustomMetadata', property: { __typename?: 'CustomMetadataProperty', defaultValue?: any | null, forbiddenDependeePropertyIds?: Array<string> | null, helpText?: string | null, id: string, isEditable: boolean, isRequired: boolean, name: string, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string } }, values: Array<{ __typename?: 'AggregatedCustomMetadataSelection', count: number, value?: any | null }> }> } | { __typename?: 'MediaLibrary', aggregatedAssetsCustomMetadata: Array<{ __typename?: 'AggregatedAssetsCustomMetadata', property: { __typename?: 'CustomMetadataProperty', defaultValue?: any | null, forbiddenDependeePropertyIds?: Array<string> | null, helpText?: string | null, id: string, isEditable: boolean, isRequired: boolean, name: string, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string } }, values: Array<{ __typename?: 'AggregatedCustomMetadataSelection', count: number, value?: any | null }> }> } | null };

export type SetCustomMetadataPropertySelectionMutationVariables = Exact<{
  input: SetAssetsCustomMetadataInput;
}>;


export type SetCustomMetadataPropertySelectionMutation = { __typename?: 'RootMutation', setAssetsCustomMetadata?: { __typename?: 'SetAssetsCustomMetadata', assetIds: Array<string> } | null };

export type AddCustomMetadataPropertySelectionMutationVariables = Exact<{
  input: AddAssetsCustomMetadataInput;
}>;


export type AddCustomMetadataPropertySelectionMutation = { __typename?: 'RootMutation', addAssetsCustomMetadata?: { __typename?: 'AddAssetsCustomMetadata', assetIds: Array<string> } | null };

export type RemoveCustomMetadataPropertySelectionMutationVariables = Exact<{
  input: RemoveAssetsCustomMetadataInput;
}>;


export type RemoveCustomMetadataPropertySelectionMutation = { __typename?: 'RootMutation', removeAssetsCustomMetadata?: { __typename?: 'RemoveAssetsCustomMetadata', assetIds: Array<string> } | null };

export type PropertyFieldsFragment = { __typename?: 'CustomMetadataProperty', defaultValue?: any | null, forbiddenDependeePropertyIds?: Array<string> | null, helpText?: string | null, id: string, isEditable: boolean, isRequired: boolean, name: string, dependency?: { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string } | { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string } | null, valueType: { __typename?: 'CustomMetadataPropertyDateValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyLongTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyMultiSelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyNumberValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertySelectValueType', propertyType: string, options: Array<{ __typename?: 'CustomMetadataPropertyOption', id: string, value: string, isDefault: boolean } | null> } | { __typename?: 'CustomMetadataPropertyTextValueType', propertyType: string } | { __typename?: 'CustomMetadataPropertyUrlValueType', propertyType: string } };

export type ValuesSelectionFieldsFragment = { __typename?: 'AggregatedCustomMetadataSelection', count: number, value?: any | null };

type SidebarDependencyFields_CustomMetadataPropertySelectValueTypeDependencyTypeEquals_Fragment = { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeEquals', propertyOptionId: string, propertyId: string, type: string };

type SidebarDependencyFields_CustomMetadataPropertySelectValueTypeDependencyTypeOneOf_Fragment = { __typename?: 'CustomMetadataPropertySelectValueTypeDependencyTypeOneOf', propertyOptionIds: Array<string | null>, propertyId: string, type: string };

type SidebarDependencyFields_CustomMetadataPropertyValueTypeDependencyTypeFilled_Fragment = { __typename?: 'CustomMetadataPropertyValueTypeDependencyTypeFilled', propertyId: string, type: string };

export type SidebarDependencyFieldsFragment = SidebarDependencyFields_CustomMetadataPropertySelectValueTypeDependencyTypeEquals_Fragment | SidebarDependencyFields_CustomMetadataPropertySelectValueTypeDependencyTypeOneOf_Fragment | SidebarDependencyFields_CustomMetadataPropertyValueTypeDependencyTypeFilled_Fragment;

export type SetCustomMetadataMutationVariables = Exact<{
  input: SetCustomMetadataInput;
}>;


export type SetCustomMetadataMutation = { __typename?: 'RootMutation', setCustomMetadata?: { __typename?: 'SetCustomMetadata', parentIds: Array<string> } | null };

export type UpdateWorkspaceProjectMutationVariables = Exact<{
  input: UpdateWorkspaceProjectInput;
}>;


export type UpdateWorkspaceProjectMutation = { __typename?: 'RootMutation', updateWorkspaceProject?: { __typename?: 'UpdateWorkspaceProject', project: { __typename?: 'Workspace', id: string, name: string, description?: string | null, beginsAt?: any | null, endsAt?: any | null } } | null };

export type UpdateWorkspaceProjectNameMutationVariables = Exact<{
  input: UpdateWorkspaceProjectInput;
}>;


export type UpdateWorkspaceProjectNameMutation = { __typename?: 'RootMutation', updateWorkspaceProject?: { __typename?: 'UpdateWorkspaceProject', project: { __typename?: 'Workspace', name: string } } | null };

export type UpdateWorkspaceProjectDescriptionMutationVariables = Exact<{
  input: UpdateWorkspaceProjectInput;
}>;


export type UpdateWorkspaceProjectDescriptionMutation = { __typename?: 'RootMutation', updateWorkspaceProject?: { __typename?: 'UpdateWorkspaceProject', project: { __typename?: 'Workspace', description?: string | null } } | null };

export type UpdateWorkspaceProjectBeginsAtMutationVariables = Exact<{
  input: UpdateWorkspaceProjectInput;
}>;


export type UpdateWorkspaceProjectBeginsAtMutation = { __typename?: 'RootMutation', updateWorkspaceProject?: { __typename?: 'UpdateWorkspaceProject', project: { __typename?: 'Workspace', beginsAt?: any | null } } | null };

export type UpdateWorkspaceProjectEndsAtMutationVariables = Exact<{
  input: UpdateWorkspaceProjectInput;
}>;


export type UpdateWorkspaceProjectEndsAtMutation = { __typename?: 'RootMutation', updateWorkspaceProject?: { __typename?: 'UpdateWorkspaceProject', project: { __typename?: 'Workspace', endsAt?: any | null } } | null };

export const updateAssetTemplateItemExecutor = (variables: UpdateAssetTemplateItemMutationVariables) => requester<UpdateAssetTemplateItemMutation, UpdateAssetTemplateItemMutationVariables>(`mutation UpdateAssetTemplateItem($input: UpdateAssetTemplateItemInput!) {
  updateAssetTemplateItem(input: $input) {
    assetTemplateItem {
      changes
      settings
    }
  }
} `, variables)

export const accountCollaboratorsExecutor = (variables: AccountCollaboratorsQueryVariables) => requester<AccountCollaboratorsQuery, AccountCollaboratorsQueryVariables>(`query accountCollaborators($term: String!) {
  account {
    collaborators(query: {term: $term}) {
      total
      items {
        ... on User {
          id
          name
          avatar
        }
        ... on UserGroup {
          id
          name
        }
      }
    }
  }
} `, variables)

export const addWorkflowChecklistPresetExecutor = (variables: AddWorkflowChecklistPresetMutationVariables) => requester<AddWorkflowChecklistPresetMutation, AddWorkflowChecklistPresetMutationVariables>(`mutation AddWorkflowChecklistPreset($input: AddWorkflowChecklistPresetInput!) {
  addWorkflowChecklistPreset(input: $input) {
    checklistPreset {
      id
      assignedUser {
        id
      }
      content
    }
  }
} `, variables)

export const grantSubjectsAnalyticsDashboardAccessExecutor = (variables: GrantSubjectsAnalyticsDashboardAccessMutationVariables) => requester<GrantSubjectsAnalyticsDashboardAccessMutation, GrantSubjectsAnalyticsDashboardAccessMutationVariables>(`mutation GrantSubjectsAnalyticsDashboardAccess($input: GrantSubjectsAnalyticsDashboardAccessInput!) {
  grantSubjectsAnalyticsDashboardAccess(input: $input) {
    subjectIds
  }
} `, variables)
export const revokeSubjectsAnalyticsDashboardAccessExecutor = (variables: RevokeSubjectsAnalyticsDashboardAccessMutationVariables) => requester<RevokeSubjectsAnalyticsDashboardAccessMutation, RevokeSubjectsAnalyticsDashboardAccessMutationVariables>(`mutation RevokeSubjectsAnalyticsDashboardAccess($input: RevokeSubjectsAnalyticsDashboardAccessInput!) {
  revokeSubjectsAnalyticsDashboardAccess(input: $input) {
    subjectIds
  }
} `, variables)

export const assetAnnotationsExecutor = (variables: AssetAnnotationsQueryVariables) => requester<AssetAnnotationsQuery, AssetAnnotationsQueryVariables>(`query AssetAnnotations($id: ID!) {
  node(id: $id) {
    ... on Image {
      comments(limit: 2, page: 1) {
        total
        page
        limit
        hasNextPage
        items {
          id
          creator {
            id
            name
            email
            avatar
          }
          createdAt
          modifiedAt
          content
          mentionedUsers {
            id
            name
          }
          isResolved
          replies {
            total
            items {
              id
              creator {
                name
              }
              content
              mentionedUsers {
                id
                name
              }
            }
          }
          marking {
            order
            position {
              x
              y
            }
            dimensions {
              width
              height
            }
          }
        }
      }
    }
  }
} `, variables)
export const createAssetAnnotationExecutor = (variables: CreateAssetAnnotationMutationVariables) => requester<CreateAssetAnnotationMutation, CreateAssetAnnotationMutationVariables>(`mutation CreateAssetAnnotation($input: CreateAssetCommentInput!) {
  createAssetComment(input: $input) {
    comment {
      id
      content
      createdAt
      isResolved
      creator {
        id
        name
        email
        avatar
        gravatarHash
      }
      replies {
        total
      }
      marking {
        order
        ... on MultiPageMarking {
          page
          spread
        }
        ... on VideoMarking {
          timeframe {
            start
            end
          }
        }
        ... on Marking {
          position {
            x
            y
          }
          dimensions {
            width
            height
          }
        }
      }
    }
  }
} `, variables)
export const replyToAssetAnnotationExecutor = (variables: ReplyToAssetAnnotationMutationVariables) => requester<ReplyToAssetAnnotationMutation, ReplyToAssetAnnotationMutationVariables>(`mutation ReplyToAssetAnnotation($input: ReplyToCommentInput!) {
  replyToComment(input: $input) {
    reply {
      id
      creator {
        id
        name
        email
        avatar
        gravatarHash
      }
      createdAt
      content
      mentionedUsers {
        id
        name
      }
    }
  }
} `, variables)
export const editAssetAnnotationExecutor = (variables: EditAssetAnnotationMutationVariables) => requester<EditAssetAnnotationMutation, EditAssetAnnotationMutationVariables>(`mutation EditAssetAnnotation($input: EditCommentInput!) {
  editComment(input: $input) {
    comment {
      id
      creator {
        id
        name
        email
        avatar
      }
      createdAt
      content
    }
  }
} `, variables)
export const deleteAnnotationExecutor = (variables: DeleteAnnotationMutationVariables) => requester<DeleteAnnotationMutation, DeleteAnnotationMutationVariables>(`mutation DeleteAnnotation($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
  }
} `, variables)

export const getAssetSubmissionRequestTokensExecutor = (variables: GetAssetSubmissionRequestTokensQueryVariables) => requester<GetAssetSubmissionRequestTokensQuery, GetAssetSubmissionRequestTokensQueryVariables>(`query GetAssetSubmissionRequestTokens($id: ID!) {
  library(id: $id) {
    assetSubmissionRequests {
      id
      tokens {
        token
      }
    }
  }
} `, variables)
export const createAssetSubmissionRequestExecutor = (variables: CreateAssetSubmissionRequestMutationVariables) => requester<CreateAssetSubmissionRequestMutation, CreateAssetSubmissionRequestMutationVariables>(`mutation CreateAssetSubmissionRequest($input: CreateAssetSubmissionRequestInput!) {
  createAssetSubmissionRequest(input: $input) {
    assetSubmissionRequest {
      id
    }
  }
} `, variables)
export const issueAssetSubmissionRequestTokenExecutor = (variables: IssueAssetSubmissionRequestTokenMutationVariables) => requester<IssueAssetSubmissionRequestTokenMutation, IssueAssetSubmissionRequestTokenMutationVariables>(`mutation IssueAssetSubmissionRequestToken($input: IssueAssetSubmissionRequestTokenInput!) {
  issueAssetSubmissionRequestToken(input: $input) {
    token
    expiresAt
  }
} `, variables)
export const deleteAssetSubmissionRequestExecutor = (variables: DeleteAssetSubmissionRequestMutationVariables) => requester<DeleteAssetSubmissionRequestMutation, DeleteAssetSubmissionRequestMutationVariables>(`mutation DeleteAssetSubmissionRequest($input: DeleteAssetSubmissionRequestInput!) {
  deleteAssetSubmissionRequest(input: $input) {
    id
  }
} `, variables)

export const assetViewerExecutor = (variables: AssetViewerQueryVariables) => requester<AssetViewerQuery, AssetViewerQueryVariables>(`query AssetViewer($assetId: ID!) {
  asset(id: $assetId) {
    id
    title
    description
    status
    expiresAt
    createdAt
    creator {
      id
      name
    }
    modifiedAt
    customMetadata {
      property {
        id
        name
        type {
          name
          ... on CustomMetadataPropertyTypeLongText {
            name
          }
          ... on CustomMetadataPropertyTypeText {
            name
          }
          ... on CustomMetadataPropertyTypeLongText {
            name
          }
          ... on CustomMetadataPropertyTypeNumber {
            name
          }
          ... on CustomMetadataPropertyTypeDate {
            name
          }
          ... on CustomMetadataPropertyTypeUrl {
            name
            shouldBeOpenedInANewTab
          }
          ... on CustomMetadataPropertyTypeSelect {
            name
          }
          ... on CustomMetadataPropertyTypeMultiSelect {
            name
          }
        }
      }
      ... on CustomMetadataValue {
        value
      }
      ... on CustomMetadataValues {
        values
      }
    }
    licenses {
      id
      title
      license
    }
    ... on Audio {
      author
      extension
      size
    }
    ... on Document {
      author
      width
      height
      extension
      size
    }
    ... on EmbeddedContent {
      author
    }
    ... on File {
      author
      extension
      size
    }
    ... on Image {
      author
      width
      height
      extension
      size
    }
    ... on Video {
      author
      width
      height
      extension
      size
    }
    copyright {
      status
      notice
    }
    tags {
      value
      source
    }
  }
} `, variables)
export const assetViewerWithTokenExecutor = (variables: AssetViewerWithTokenQueryVariables) => requester<AssetViewerWithTokenQuery, AssetViewerWithTokenQueryVariables>(`query AssetViewerWithToken($token: String!) {
  tokenizedAsset(token: $token) {
    id
    title
    description
    status
    expiresAt
    createdAt
    creator {
      id
      name
    }
    modifiedAt
    customMetadata {
      property {
        id
        name
        type {
          name
          ... on CustomMetadataPropertyTypeLongText {
            name
          }
          ... on CustomMetadataPropertyTypeText {
            name
          }
          ... on CustomMetadataPropertyTypeLongText {
            name
          }
          ... on CustomMetadataPropertyTypeNumber {
            name
          }
          ... on CustomMetadataPropertyTypeDate {
            name
          }
          ... on CustomMetadataPropertyTypeUrl {
            name
            shouldBeOpenedInANewTab
          }
          ... on CustomMetadataPropertyTypeSelect {
            name
          }
          ... on CustomMetadataPropertyTypeMultiSelect {
            name
          }
        }
      }
      ... on CustomMetadataValue {
        value
      }
      ... on CustomMetadataValues {
        values
      }
    }
    licenses {
      id
      title
      license
    }
    ... on Audio {
      author
      extension
      size
    }
    ... on Document {
      author
      width
      height
      extension
      size
    }
    ... on EmbeddedContent {
      author
    }
    ... on File {
      author
      extension
      size
    }
    ... on Image {
      author
      width
      height
      extension
      size
    }
    ... on Video {
      author
      width
      height
      extension
      size
    }
    copyright {
      status
      notice
    }
    tags {
      value
      source
    }
  }
} `, variables)

export const brandsExecutor = () => requester<BrandsQuery, undefined>(`query Brands {
  brands {
    globalObjectId: id
    name
    rgbaColor {
      red
      green
      blue
      alpha
    }
    avatar
    slug
  }
} `, undefined)

export const browseFolderExecutor = (variables: BrowseFolderQueryVariables) => requester<BrowseFolderQuery, BrowseFolderQueryVariables>(`query BrowseFolder($id: ID!, $limit: Int) {
  node(id: $id) {
    ... on Folder {
      __typename
      id
      name
      folders(limit: $limit) {
        ...foldersFields
      }
    }
  }
} ${FoldersFieldsFragmentDoc}`, variables)

export const currentUserExecutor = () => requester<CurrentUserQuery, undefined>(`query CurrentUser {
  currentUser {
    globalObjectId: id
    email
    name
    avatar
    gravatarHash
    permissions {
      analyticsDashboard {
        canView
      }
    }
  }
} `, undefined)

export const enhancedTextShortenExecutor = (variables: EnhancedTextShortenQueryVariables) => requester<EnhancedTextShortenQuery, EnhancedTextShortenQueryVariables>(`query EnhancedTextShorten($text: String!) {
  enhancedText(text: $text) {
    shortened
  }
} `, variables)
export const enhancedTextTranslationExecutor = (variables: EnhancedTextTranslationQueryVariables) => requester<EnhancedTextTranslationQuery, EnhancedTextTranslationQueryVariables>(`query EnhancedTextTranslation($text: String!, $language: String!) {
  enhancedText(text: $text) {
    translated(language: $language)
  }
} `, variables)
export const enhancedTextProperEnglishExecutor = (variables: EnhancedTextProperEnglishQueryVariables) => requester<EnhancedTextProperEnglishQuery, EnhancedTextProperEnglishQueryVariables>(`query EnhancedTextProperEnglish($text: String!) {
  enhancedText(text: $text) {
    properEnglish
  }
} `, variables)
export const enhancedTextDrunkenPirateExecutor = (variables: EnhancedTextDrunkenPirateQueryVariables) => requester<EnhancedTextDrunkenPirateQuery, EnhancedTextDrunkenPirateQueryVariables>(`query EnhancedTextDrunkenPirate($text: String!) {
  enhancedText(text: $text) {
    drunken
  }
} `, variables)
export const enhancedTextKeyTakeawaysExecutor = (variables: EnhancedTextKeyTakeawaysQueryVariables) => requester<EnhancedTextKeyTakeawaysQuery, EnhancedTextKeyTakeawaysQueryVariables>(`query EnhancedTextKeyTakeaways($text: String!) {
  enhancedText(text: $text) {
    keyTakeaways
  }
} `, variables)
export const enhancedTextPromptedExecutor = (variables: EnhancedTextPromptedQueryVariables) => requester<EnhancedTextPromptedQuery, EnhancedTextPromptedQueryVariables>(`query EnhancedTextPrompted($text: String!) {
  enhancedText(text: $text) {
    prompted
  }
} `, variables)
export const guidelinePageSummaryExecutor = (variables: GuidelinePageSummaryQueryVariables) => requester<GuidelinePageSummaryQuery, GuidelinePageSummaryQueryVariables>(`query GuidelinePageSummary($pageId: ID!) {
  guidelinePage(id: $pageId) {
    summary
  }
} `, variables)

export const getSavedLibraryAssetsExecutor = (variables: GetSavedLibraryAssetsQueryVariables) => requester<GetSavedLibraryAssetsQuery, GetSavedLibraryAssetsQueryVariables>(`query GetSavedLibraryAssets($projectId: ID!, $externalId: ID!, $externalIdString: String!, $fileExtension: String!, $inFolder: AssetQueryInFolderInput) {
  library(id: $projectId) {
    assets(
      query: {inFolder: $inFolder, externalId: $externalId, filter: {andConditions: [{type: FILE_EXTENSION, value: $fileExtension}]}}
    ) {
      items {
        id
        title
      }
    }
    browse {
      assets(
        query: {filter: {andConditions: [{type: FILE_EXTENSION, value: $fileExtension}, {type: EXTERNAL_ID, value: $externalIdString}]}}
      ) {
        items {
          id
          title
        }
      }
    }
  }
} `, variables)

export const getSavedWorkspaceProjectAssetsExecutor = (variables: GetSavedWorkspaceProjectAssetsQueryVariables) => requester<GetSavedWorkspaceProjectAssetsQuery, GetSavedWorkspaceProjectAssetsQueryVariables>(`query GetSavedWorkspaceProjectAssets($projectId: ID!, $externalId: ID!, $externalIdString: String!, $fileExtension: String!, $inFolder: AssetQueryInFolderInput) {
  workspaceProject(id: $projectId) {
    assets(
      query: {inFolder: $inFolder, externalId: $externalId, filter: {andConditions: [{type: FILE_EXTENSION, value: $fileExtension}]}}
    ) {
      items {
        id
        title
      }
    }
    browse {
      assets(
        query: {filter: {andConditions: [{type: FILE_EXTENSION, value: $fileExtension}, {type: EXTERNAL_ID, value: $externalIdString}]}}
      ) {
        items {
          id
          title
        }
      }
    }
  }
} `, variables)

export const librariesAndProjectsExecutor = (variables: LibrariesAndProjectsQueryVariables) => requester<LibrariesAndProjectsQuery, LibrariesAndProjectsQueryVariables>(`query LibrariesAndProjects($id: ID!, $limit: Int, $libraryTypes: [LibraryType]) {
  brand(id: $id) {
    id
    libraries(limit: $limit, query: {filter: {types: $libraryTypes}}) {
      total
      items {
        __typename
        id
        name
        browse {
          folders(limit: $limit) {
            ...foldersFields
          }
        }
        currentUserPermissions {
          canCreateAssets
        }
      }
    }
    workspaceProjects(limit: $limit) {
      total
      items {
        __typename
        id
        name
        browse {
          folders(limit: $limit) {
            ...foldersFields
          }
        }
        currentUserPermissions {
          canCreateAssets
        }
      }
    }
  }
} ${FoldersFieldsFragmentDoc}`, variables)

export const libraryPageCollectionsExecutor = (variables: LibraryPageCollectionsQueryVariables) => requester<LibraryPageCollectionsQuery, LibraryPageCollectionsQueryVariables>(`query LibraryPageCollections($id: ID!) {
  node(id: $id) {
    id
    __typename
    ... on LibraryPage {
      title
      collections(query: {filter: {isPrivate: true}}) {
        items {
          id
          name
          assets {
            items {
              id
              title
              __typename
              ... on Image {
                previewUrl
                extension
              }
              ... on Audio {
                previewUrl
                extension
              }
              ... on Video {
                previewUrl
                extension
              }
              ... on Document {
                previewUrl
                extension
              }
              ... on File {
                previewUrl
                extension
              }
            }
          }
        }
      }
    }
  }
} `, variables)
export const addCollectionAssetsExecutor = (variables: AddCollectionAssetsMutationVariables) => requester<AddCollectionAssetsMutation, AddCollectionAssetsMutationVariables>(`mutation addCollectionAssets($input: AddCollectionAssetsInput!) {
  addCollectionAssets(input: $input) {
    collection {
      id
      name
      assets {
        items {
          id
        }
      }
      isPrivate
    }
  }
} `, variables)
export const removeCollectionAssetsExecutor = (variables: RemoveCollectionAssetsMutationVariables) => requester<RemoveCollectionAssetsMutation, RemoveCollectionAssetsMutationVariables>(`mutation removeCollectionAssets($input: RemoveCollectionAssetsInput!) {
  removeCollectionAssets(input: $input) {
    collection {
      id
      name
      assets {
        items {
          id
        }
      }
      isPrivate
    }
  }
} `, variables)
export const createCollectionExecutor = (variables: CreateCollectionMutationVariables) => requester<CreateCollectionMutation, CreateCollectionMutationVariables>(`mutation createCollection($input: CreateCollectionInput!) {
  createCollection(input: $input) {
    collection {
      id
      name
    }
  }
} `, variables)

export const projectBasicInfoExecutor = (variables: ProjectBasicInfoQueryVariables) => requester<ProjectBasicInfoQuery, ProjectBasicInfoQueryVariables>(`query ProjectBasicInfo($projectId: ID!) {
  workspaceProject(id: $projectId) {
    name
    creator {
      name
    }
    description
    beginsAt
    endsAt
    createdAt
    assets {
      total
    }
    collaborators {
      users {
        total
      }
    }
  }
} `, variables)
export const workspaceProjectNameExecutor = (variables: WorkspaceProjectNameQueryVariables) => requester<WorkspaceProjectNameQuery, WorkspaceProjectNameQueryVariables>(`query WorkspaceProjectName($projectId: ID!) {
  workspaceProject(id: $projectId) {
    name
  }
} `, variables)
export const workspaceProjectDescriptionExecutor = (variables: WorkspaceProjectDescriptionQueryVariables) => requester<WorkspaceProjectDescriptionQuery, WorkspaceProjectDescriptionQueryVariables>(`query WorkspaceProjectDescription($projectId: ID!) {
  workspaceProject(id: $projectId) {
    description
  }
} `, variables)
export const workspaceProjectBeginsAtExecutor = (variables: WorkspaceProjectBeginsAtQueryVariables) => requester<WorkspaceProjectBeginsAtQuery, WorkspaceProjectBeginsAtQueryVariables>(`query WorkspaceProjectBeginsAt($projectId: ID!) {
  workspaceProject(id: $projectId) {
    beginsAt
  }
} `, variables)
export const workspaceProjectEndsAtExecutor = (variables: WorkspaceProjectEndsAtQueryVariables) => requester<WorkspaceProjectEndsAtQuery, WorkspaceProjectEndsAtQueryVariables>(`query WorkspaceProjectEndsAt($projectId: ID!) {
  workspaceProject(id: $projectId) {
    endsAt
  }
} `, variables)
export const workspaceProjectCreatedAtExecutor = (variables: WorkspaceProjectCreatedAtQueryVariables) => requester<WorkspaceProjectCreatedAtQuery, WorkspaceProjectCreatedAtQueryVariables>(`query WorkspaceProjectCreatedAt($projectId: ID!) {
  workspaceProject(id: $projectId) {
    createdAt
  }
} `, variables)
export const workspaceProjectAssetsTotalExecutor = (variables: WorkspaceProjectAssetsTotalQueryVariables) => requester<WorkspaceProjectAssetsTotalQuery, WorkspaceProjectAssetsTotalQueryVariables>(`query WorkspaceProjectAssetsTotal($projectId: ID!) {
  workspaceProject(id: $projectId) {
    assets {
      total
    }
  }
} `, variables)
export const workspaceProjectCollaboratorsUsersTotalExecutor = (variables: WorkspaceProjectCollaboratorsUsersTotalQueryVariables) => requester<WorkspaceProjectCollaboratorsUsersTotalQuery, WorkspaceProjectCollaboratorsUsersTotalQueryVariables>(`query WorkspaceProjectCollaboratorsUsersTotal($projectId: ID!) {
  workspaceProject(id: $projectId) {
    collaborators {
      users {
        total
      }
    }
  }
} `, variables)
export const workspaceProjectCreatorNameExecutor = (variables: WorkspaceProjectCreatorNameQueryVariables) => requester<WorkspaceProjectCreatorNameQuery, WorkspaceProjectCreatorNameQueryVariables>(`query WorkspaceProjectCreatorName($projectId: ID!) {
  workspaceProject(id: $projectId) {
    creator {
      name
    }
  }
} `, variables)

export const brandCustomMetadataPropertiesExecutor = (variables: BrandCustomMetadataPropertiesQueryVariables) => requester<BrandCustomMetadataPropertiesQuery, BrandCustomMetadataPropertiesQueryVariables>(`query BrandCustomMetadataProperties($id: ID!) {
  brand(id: $id) {
    customMetadataProperties {
      id
      createdAt
      modifiedAt
      defaultValue
      name
      helpText
      isRequired
      valueType {
        propertyType
        ... on CustomMetadataPropertyTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyLongTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyDateValueType {
          propertyType
        }
        ... on CustomMetadataPropertyNumberValueType {
          propertyType
        }
        ... on CustomMetadataPropertySelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
        ... on CustomMetadataPropertyMultiSelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
      }
    }
  }
} `, variables)
export const projectCustomMetadataPropertiesExecutor = (variables: ProjectCustomMetadataPropertiesQueryVariables) => requester<ProjectCustomMetadataPropertiesQuery, ProjectCustomMetadataPropertiesQueryVariables>(`query ProjectCustomMetadataProperties($id: ID!) {
  library(id: $id) {
    customMetadataProperties {
      id
      createdAt
      dependency {
        ...projectDependencyFields
      }
      forbiddenDependeePropertyIds
      modifiedAt
      defaultValue
      name
      helpText
      isRequired
      isEditable
      isSearchable
      isViewable
      valueType {
        propertyType
        ... on CustomMetadataPropertyTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyLongTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyDateValueType {
          propertyType
        }
        ... on CustomMetadataPropertyNumberValueType {
          propertyType
        }
        ... on CustomMetadataPropertyUrlValueType {
          propertyType
          shouldBeOpenedInANewTab
        }
        ... on CustomMetadataPropertySelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
        ... on CustomMetadataPropertyMultiSelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
      }
    }
  }
} ${ProjectDependencyFieldsFragmentDoc}`, variables)
export const createCustomMetadataPropertyExecutor = (variables: CreateCustomMetadataPropertyMutationVariables) => requester<CreateCustomMetadataPropertyMutation, CreateCustomMetadataPropertyMutationVariables>(`mutation createCustomMetadataProperty($input: CreateCustomMetadataPropertyInput!) {
  createCustomMetadataProperty(input: $input) {
    customMetadataProperty {
      id
      createdAt
      dependency {
        ...projectDependencyFields
      }
      forbiddenDependeePropertyIds
      modifiedAt
      defaultValue
      name
      helpText
      isRequired
      isEditable
      isSearchable
      isViewable
      valueType {
        propertyType
        ... on CustomMetadataPropertyTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyLongTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyDateValueType {
          propertyType
        }
        ... on CustomMetadataPropertyNumberValueType {
          propertyType
        }
        ... on CustomMetadataPropertyUrlValueType {
          propertyType
          shouldBeOpenedInANewTab
        }
        ... on CustomMetadataPropertySelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
        ... on CustomMetadataPropertyMultiSelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
      }
    }
  }
} ${ProjectDependencyFieldsFragmentDoc}`, variables)
export const updateCustomMetadataPropertyExecutor = (variables: UpdateCustomMetadataPropertyMutationVariables) => requester<UpdateCustomMetadataPropertyMutation, UpdateCustomMetadataPropertyMutationVariables>(`mutation updateCustomMetadataProperty($input: UpdateCustomMetadataPropertyInput!) {
  updateCustomMetadataProperty(input: $input) {
    customMetadataProperty {
      id
      createdAt
      modifiedAt
      defaultValue
      dependency {
        ...projectDependencyFields
      }
      forbiddenDependeePropertyIds
      name
      helpText
      isRequired
      isEditable
      isSearchable
      isViewable
      valueType {
        propertyType
        ... on CustomMetadataPropertyTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyLongTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyDateValueType {
          propertyType
        }
        ... on CustomMetadataPropertyNumberValueType {
          propertyType
        }
        ... on CustomMetadataPropertyUrlValueType {
          propertyType
          shouldBeOpenedInANewTab
        }
        ... on CustomMetadataPropertySelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
        ... on CustomMetadataPropertyMultiSelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
      }
    }
  }
} ${ProjectDependencyFieldsFragmentDoc}`, variables)
export const deleteCustomMetadataPropertyExecutor = (variables: DeleteCustomMetadataPropertyMutationVariables) => requester<DeleteCustomMetadataPropertyMutation, DeleteCustomMetadataPropertyMutationVariables>(`mutation deleteCustomMetadataProperty($id: ID!) {
  deleteCustomMetadataProperty(input: {id: $id}) {
    id
  }
} `, variables)
export const moveCustomMetadataPropertyExecutor = (variables: MoveCustomMetadataPropertyMutationVariables) => requester<MoveCustomMetadataPropertyMutation, MoveCustomMetadataPropertyMutationVariables>(`mutation moveCustomMetadataProperty($input: MoveCustomMetadataPropertyInput!) {
  moveCustomMetadataProperty(input: $input) {
    customMetadataProperty {
      globalObjectId: id
      createdAt
      modifiedAt
      defaultValue
      name
      helpText
      isRequired
    }
  }
} `, variables)
export const removeMetadataValueExecutor = (variables: RemoveMetadataValueMutationVariables) => requester<RemoveMetadataValueMutation, RemoveMetadataValueMutationVariables>(`mutation removeMetadataValue($input: RemoveCustomMetadataInput!) {
  removeCustomMetadata(input: $input) {
    parentIds
  }
} `, variables)

export const projectMetadataValuesExecutor = (variables: ProjectMetadataValuesQueryVariables) => requester<ProjectMetadataValuesQuery, ProjectMetadataValuesQueryVariables>(`query ProjectMetadataValues($projectId: ID!) {
  workspaceProject(id: $projectId) {
    id
    description
    creator {
      id
      name
      email
      avatar
    }
    createdAt
    customMetadata {
      property {
        id
        name
        defaultValue
        valueType {
          propertyType
          ... on CustomMetadataPropertyTextValueType {
            propertyType
          }
          ... on CustomMetadataPropertyLongTextValueType {
            propertyType
          }
          ... on CustomMetadataPropertyDateValueType {
            propertyType
          }
          ... on CustomMetadataPropertyNumberValueType {
            propertyType
          }
          ... on CustomMetadataPropertyUrlValueType {
            propertyType
            shouldBeOpenedInANewTab
          }
          ... on CustomMetadataPropertySelectValueType {
            propertyType
            options {
              id
              value
              isDefault
            }
          }
          ... on CustomMetadataPropertyMultiSelectValueType {
            propertyType
            options {
              id
              value
              isDefault
            }
          }
        }
      }
      ... on CustomMetadataValue {
        value
      }
      ... on CustomMetadataValues {
        values
      }
    }
  }
} `, variables)

export const shareLinksExecutor = (variables: ShareLinksQueryVariables) => requester<ShareLinksQuery, ShareLinksQueryVariables>(`query ShareLinks($usageKeys: [String!]!) {
  shareLinks(usageKeys: $usageKeys) {
    id
    url
    isEnabled
    isPasswordProtected
    hasExpirationDate
    expiresAt
  }
} `, variables)
export const sharedAssetsExecutor = (variables: SharedAssetsQueryVariables) => requester<SharedAssetsQuery, SharedAssetsQueryVariables>(`query SharedAssets($permissionToken: String!) {
  sharedAssets(permissionToken: $permissionToken) {
    id
    title
    description
    copyright {
      status
      notice
      isDownloadConsentRequired
    }
    licenses {
      id
      title
      license
      requireConsensus
    }
    ... on Image {
      downloadUrl
      extension
      filename
      height
      size
      previewUrl
      width
    }
    ... on Audio {
      downloadUrl
      extension
      filename
      size
      previewUrl
    }
    ... on Video {
      downloadUrl
      extension
      filename
      size
      previewUrl
      width
      height
    }
    ... on Document {
      downloadUrl
      extension
      filename
      height
      size
      previewUrl
      width
      pageCount
    }
    ... on File {
      downloadUrl
      extension
      filename
      size
      previewUrl
    }
    ... on EmbeddedContent {
      sourceUrl
      html
    }
  }
} `, variables)
export const updateShareLinkExecutor = (variables: UpdateShareLinkMutationVariables) => requester<UpdateShareLinkMutation, UpdateShareLinkMutationVariables>(`mutation updateShareLink($input: UpdateShareLinkInput!) {
  updateShareLink(input: $input) {
    shareLink {
      id
      isEnabled
      isPasswordProtected
      expiresAt
    }
  }
} `, variables)
export const createPermissionTokenExecutor = (variables: CreatePermissionTokenMutationVariables) => requester<CreatePermissionTokenMutation, CreatePermissionTokenMutationVariables>(`mutation createPermissionToken($input: CreatePermissionTokenInput!) {
  createPermissionToken(input: $input) {
    permissionToken
  }
} `, variables)
export const createShareLinkExecutor = (variables: CreateShareLinkMutationVariables) => requester<CreateShareLinkMutation, CreateShareLinkMutationVariables>(`mutation createShareLink($input: CreateShareLinkInput!) {
  createShareLink(input: $input) {
    shareLink {
      id
      url
      isEnabled
      isPasswordProtected
      hasExpirationDate
      expiresAt
    }
  }
} `, variables)
export const deleteShareLinkExecutor = (variables: DeleteShareLinkMutationVariables) => requester<DeleteShareLinkMutation, DeleteShareLinkMutationVariables>(`mutation deleteShareLink($input: DeleteShareLinkInput!) {
  deleteShareLink(input: $input) {
    shareLinkId
  }
} `, variables)
export const permissionTokenExecutor = (variables: PermissionTokenMutationVariables) => requester<PermissionTokenMutation, PermissionTokenMutationVariables>(`mutation permissionToken($input: CreateShareLinkPermissionTokenInput!) {
  createShareLinkPermissionToken(input: $input) {
    permissionToken
  }
} `, variables)

export const customMetadataPropertySelectionExecutor = (variables: CustomMetadataPropertySelectionQueryVariables) => requester<CustomMetadataPropertySelectionQuery, CustomMetadataPropertySelectionQueryVariables>(`query CustomMetadataPropertySelection($id: ID!, $assetIds: [ID!]!) {
  library(id: $id) {
    aggregatedAssetsCustomMetadata(assetIds: $assetIds) {
      property {
        ...propertyFields
      }
      values {
        ...valuesSelectionFields
      }
    }
  }
} ${PropertyFieldsFragmentDoc}
${ValuesSelectionFieldsFragmentDoc}`, variables)
export const setCustomMetadataPropertySelectionExecutor = (variables: SetCustomMetadataPropertySelectionMutationVariables) => requester<SetCustomMetadataPropertySelectionMutation, SetCustomMetadataPropertySelectionMutationVariables>(`mutation SetCustomMetadataPropertySelection($input: SetAssetsCustomMetadataInput!) {
  setAssetsCustomMetadata(input: $input) {
    assetIds
  }
} `, variables)
export const addCustomMetadataPropertySelectionExecutor = (variables: AddCustomMetadataPropertySelectionMutationVariables) => requester<AddCustomMetadataPropertySelectionMutation, AddCustomMetadataPropertySelectionMutationVariables>(`mutation AddCustomMetadataPropertySelection($input: AddAssetsCustomMetadataInput!) {
  addAssetsCustomMetadata(input: $input) {
    assetIds
  }
} `, variables)
export const removeCustomMetadataPropertySelectionExecutor = (variables: RemoveCustomMetadataPropertySelectionMutationVariables) => requester<RemoveCustomMetadataPropertySelectionMutation, RemoveCustomMetadataPropertySelectionMutationVariables>(`mutation RemoveCustomMetadataPropertySelection($input: RemoveAssetsCustomMetadataInput!) {
  removeAssetsCustomMetadata(input: $input) {
    assetIds
  }
} `, variables)
export const setCustomMetadataExecutor = (variables: SetCustomMetadataMutationVariables) => requester<SetCustomMetadataMutation, SetCustomMetadataMutationVariables>(`mutation SetCustomMetadata($input: SetCustomMetadataInput!) {
  setCustomMetadata(input: $input) {
    parentIds
  }
} `, variables)

export const updateWorkspaceProjectExecutor = (variables: UpdateWorkspaceProjectMutationVariables) => requester<UpdateWorkspaceProjectMutation, UpdateWorkspaceProjectMutationVariables>(`mutation UpdateWorkspaceProject($input: UpdateWorkspaceProjectInput!) {
  updateWorkspaceProject(input: $input) {
    project {
      id
      name
      description
      beginsAt
      endsAt
    }
  }
} `, variables)
export const updateWorkspaceProjectNameExecutor = (variables: UpdateWorkspaceProjectNameMutationVariables) => requester<UpdateWorkspaceProjectNameMutation, UpdateWorkspaceProjectNameMutationVariables>(`mutation UpdateWorkspaceProjectName($input: UpdateWorkspaceProjectInput!) {
  updateWorkspaceProject(input: $input) {
    project {
      name
    }
  }
} `, variables)
export const updateWorkspaceProjectDescriptionExecutor = (variables: UpdateWorkspaceProjectDescriptionMutationVariables) => requester<UpdateWorkspaceProjectDescriptionMutation, UpdateWorkspaceProjectDescriptionMutationVariables>(`mutation UpdateWorkspaceProjectDescription($input: UpdateWorkspaceProjectInput!) {
  updateWorkspaceProject(input: $input) {
    project {
      description
    }
  }
} `, variables)
export const updateWorkspaceProjectBeginsAtExecutor = (variables: UpdateWorkspaceProjectBeginsAtMutationVariables) => requester<UpdateWorkspaceProjectBeginsAtMutation, UpdateWorkspaceProjectBeginsAtMutationVariables>(`mutation UpdateWorkspaceProjectBeginsAt($input: UpdateWorkspaceProjectInput!) {
  updateWorkspaceProject(input: $input) {
    project {
      beginsAt
    }
  }
} `, variables)
export const updateWorkspaceProjectEndsAtExecutor = (variables: UpdateWorkspaceProjectEndsAtMutationVariables) => requester<UpdateWorkspaceProjectEndsAtMutation, UpdateWorkspaceProjectEndsAtMutationVariables>(`mutation UpdateWorkspaceProjectEndsAt($input: UpdateWorkspaceProjectInput!) {
  updateWorkspaceProject(input: $input) {
    project {
      endsAt
    }
  }
} `, variables)

export const FolderItemFieldsFragmentDoc = `
    fragment folderItemFields on Folder {
  __typename
  id
  name
  folders(limit: $limit) {
    total
    limit
  }
}
    `;
export const FoldersFieldsFragmentDoc = `
    fragment foldersFields on FolderItems {
  total
  limit
  page
  hasNextPage
  items {
    ...folderItemFields
  }
}
    ${FolderItemFieldsFragmentDoc}`;
export const ProjectDependencyFieldsFragmentDoc = `
    fragment projectDependencyFields on CustomMetadataPropertyDependency {
  propertyId
  type
  ... on CustomMetadataPropertySelectValueTypeDependencyTypeEquals {
    propertyOptionId
  }
  ... on CustomMetadataPropertySelectValueTypeDependencyTypeOneOf {
    propertyOptionIds
  }
}
    `;
export const SidebarDependencyFieldsFragmentDoc = `
    fragment sidebarDependencyFields on CustomMetadataPropertyDependency {
  propertyId
  type
  ... on CustomMetadataPropertySelectValueTypeDependencyTypeEquals {
    propertyOptionId
  }
  ... on CustomMetadataPropertySelectValueTypeDependencyTypeOneOf {
    propertyOptionIds
  }
}
    `;
export const PropertyFieldsFragmentDoc = `
    fragment propertyFields on CustomMetadataProperty {
  defaultValue
  dependency {
    ...sidebarDependencyFields
  }
  forbiddenDependeePropertyIds
  helpText
  id
  isEditable
  isRequired
  name
  valueType {
    propertyType
    ... on CustomMetadataPropertyTextValueType {
      propertyType
    }
    ... on CustomMetadataPropertyLongTextValueType {
      propertyType
    }
    ... on CustomMetadataPropertyDateValueType {
      propertyType
    }
    ... on CustomMetadataPropertyNumberValueType {
      propertyType
    }
    ... on CustomMetadataPropertySelectValueType {
      propertyType
      options {
        id
        value
        isDefault
      }
    }
    ... on CustomMetadataPropertyMultiSelectValueType {
      propertyType
      options {
        id
        value
        isDefault
      }
    }
  }
}
    ${SidebarDependencyFieldsFragmentDoc}`;
export const ValuesSelectionFieldsFragmentDoc = `
    fragment valuesSelectionFields on AggregatedCustomMetadataSelection {
  count
  value
}
    `;
export const UpdateAssetTemplateItemDocument = `
    mutation UpdateAssetTemplateItem($input: UpdateAssetTemplateItemInput!) {
  updateAssetTemplateItem(input: $input) {
    assetTemplateItem {
      changes
      settings
    }
  }
}
    `;
export const useUpdateAssetTemplateItemMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateAssetTemplateItemMutation, TError, UpdateAssetTemplateItemMutationVariables, TContext>) =>
    useMutation<UpdateAssetTemplateItemMutation, TError, UpdateAssetTemplateItemMutationVariables, TContext>(
      ['UpdateAssetTemplateItem'],
      (variables?: UpdateAssetTemplateItemMutationVariables) => fetcher<UpdateAssetTemplateItemMutation, UpdateAssetTemplateItemMutationVariables>(UpdateAssetTemplateItemDocument, variables)(),
      options
    );
export const AccountCollaboratorsDocument = `
    query accountCollaborators($term: String!) {
  account {
    collaborators(query: {term: $term}) {
      total
      items {
        ... on User {
          id
          name
          avatar
        }
        ... on UserGroup {
          id
          name
        }
      }
    }
  }
}
    `;
export const useAccountCollaboratorsQuery = <
      TData = AccountCollaboratorsQuery,
      TError = unknown
    >(
      variables: AccountCollaboratorsQueryVariables,
      options?: UseQueryOptions<AccountCollaboratorsQuery, TError, TData>
    ) =>
    useQuery<AccountCollaboratorsQuery, TError, TData>(
      ['accountCollaborators', variables],
      fetcher<AccountCollaboratorsQuery, AccountCollaboratorsQueryVariables>(AccountCollaboratorsDocument, variables),
      options
    );

useAccountCollaboratorsQuery.getKey = (variables: AccountCollaboratorsQueryVariables) => ['accountCollaborators', variables];
;

export const AddWorkflowChecklistPresetDocument = `
    mutation AddWorkflowChecklistPreset($input: AddWorkflowChecklistPresetInput!) {
  addWorkflowChecklistPreset(input: $input) {
    checklistPreset {
      id
      assignedUser {
        id
      }
      content
    }
  }
}
    `;
export const useAddWorkflowChecklistPresetMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddWorkflowChecklistPresetMutation, TError, AddWorkflowChecklistPresetMutationVariables, TContext>) =>
    useMutation<AddWorkflowChecklistPresetMutation, TError, AddWorkflowChecklistPresetMutationVariables, TContext>(
      ['AddWorkflowChecklistPreset'],
      (variables?: AddWorkflowChecklistPresetMutationVariables) => fetcher<AddWorkflowChecklistPresetMutation, AddWorkflowChecklistPresetMutationVariables>(AddWorkflowChecklistPresetDocument, variables)(),
      options
    );
export const GrantSubjectsAnalyticsDashboardAccessDocument = `
    mutation GrantSubjectsAnalyticsDashboardAccess($input: GrantSubjectsAnalyticsDashboardAccessInput!) {
  grantSubjectsAnalyticsDashboardAccess(input: $input) {
    subjectIds
  }
}
    `;
export const useGrantSubjectsAnalyticsDashboardAccessMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<GrantSubjectsAnalyticsDashboardAccessMutation, TError, GrantSubjectsAnalyticsDashboardAccessMutationVariables, TContext>) =>
    useMutation<GrantSubjectsAnalyticsDashboardAccessMutation, TError, GrantSubjectsAnalyticsDashboardAccessMutationVariables, TContext>(
      ['GrantSubjectsAnalyticsDashboardAccess'],
      (variables?: GrantSubjectsAnalyticsDashboardAccessMutationVariables) => fetcher<GrantSubjectsAnalyticsDashboardAccessMutation, GrantSubjectsAnalyticsDashboardAccessMutationVariables>(GrantSubjectsAnalyticsDashboardAccessDocument, variables)(),
      options
    );
export const RevokeSubjectsAnalyticsDashboardAccessDocument = `
    mutation RevokeSubjectsAnalyticsDashboardAccess($input: RevokeSubjectsAnalyticsDashboardAccessInput!) {
  revokeSubjectsAnalyticsDashboardAccess(input: $input) {
    subjectIds
  }
}
    `;
export const useRevokeSubjectsAnalyticsDashboardAccessMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RevokeSubjectsAnalyticsDashboardAccessMutation, TError, RevokeSubjectsAnalyticsDashboardAccessMutationVariables, TContext>) =>
    useMutation<RevokeSubjectsAnalyticsDashboardAccessMutation, TError, RevokeSubjectsAnalyticsDashboardAccessMutationVariables, TContext>(
      ['RevokeSubjectsAnalyticsDashboardAccess'],
      (variables?: RevokeSubjectsAnalyticsDashboardAccessMutationVariables) => fetcher<RevokeSubjectsAnalyticsDashboardAccessMutation, RevokeSubjectsAnalyticsDashboardAccessMutationVariables>(RevokeSubjectsAnalyticsDashboardAccessDocument, variables)(),
      options
    );
export const AssetAnnotationsDocument = `
    query AssetAnnotations($id: ID!) {
  node(id: $id) {
    ... on Image {
      comments(limit: 2, page: 1) {
        total
        page
        limit
        hasNextPage
        items {
          id
          creator {
            id
            name
            email
            avatar
          }
          createdAt
          modifiedAt
          content
          mentionedUsers {
            id
            name
          }
          isResolved
          replies {
            total
            items {
              id
              creator {
                name
              }
              content
              mentionedUsers {
                id
                name
              }
            }
          }
          marking {
            order
            position {
              x
              y
            }
            dimensions {
              width
              height
            }
          }
        }
      }
    }
  }
}
    `;
export const useAssetAnnotationsQuery = <
      TData = AssetAnnotationsQuery,
      TError = unknown
    >(
      variables: AssetAnnotationsQueryVariables,
      options?: UseQueryOptions<AssetAnnotationsQuery, TError, TData>
    ) =>
    useQuery<AssetAnnotationsQuery, TError, TData>(
      ['AssetAnnotations', variables],
      fetcher<AssetAnnotationsQuery, AssetAnnotationsQueryVariables>(AssetAnnotationsDocument, variables),
      options
    );

useAssetAnnotationsQuery.getKey = (variables: AssetAnnotationsQueryVariables) => ['AssetAnnotations', variables];
;

export const CreateAssetAnnotationDocument = `
    mutation CreateAssetAnnotation($input: CreateAssetCommentInput!) {
  createAssetComment(input: $input) {
    comment {
      id
      content
      createdAt
      isResolved
      creator {
        id
        name
        email
        avatar
        gravatarHash
      }
      replies {
        total
      }
      marking {
        order
        ... on MultiPageMarking {
          page
          spread
        }
        ... on VideoMarking {
          timeframe {
            start
            end
          }
        }
        ... on Marking {
          position {
            x
            y
          }
          dimensions {
            width
            height
          }
        }
      }
    }
  }
}
    `;
export const useCreateAssetAnnotationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateAssetAnnotationMutation, TError, CreateAssetAnnotationMutationVariables, TContext>) =>
    useMutation<CreateAssetAnnotationMutation, TError, CreateAssetAnnotationMutationVariables, TContext>(
      ['CreateAssetAnnotation'],
      (variables?: CreateAssetAnnotationMutationVariables) => fetcher<CreateAssetAnnotationMutation, CreateAssetAnnotationMutationVariables>(CreateAssetAnnotationDocument, variables)(),
      options
    );
export const ReplyToAssetAnnotationDocument = `
    mutation ReplyToAssetAnnotation($input: ReplyToCommentInput!) {
  replyToComment(input: $input) {
    reply {
      id
      creator {
        id
        name
        email
        avatar
        gravatarHash
      }
      createdAt
      content
      mentionedUsers {
        id
        name
      }
    }
  }
}
    `;
export const useReplyToAssetAnnotationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ReplyToAssetAnnotationMutation, TError, ReplyToAssetAnnotationMutationVariables, TContext>) =>
    useMutation<ReplyToAssetAnnotationMutation, TError, ReplyToAssetAnnotationMutationVariables, TContext>(
      ['ReplyToAssetAnnotation'],
      (variables?: ReplyToAssetAnnotationMutationVariables) => fetcher<ReplyToAssetAnnotationMutation, ReplyToAssetAnnotationMutationVariables>(ReplyToAssetAnnotationDocument, variables)(),
      options
    );
export const EditAssetAnnotationDocument = `
    mutation EditAssetAnnotation($input: EditCommentInput!) {
  editComment(input: $input) {
    comment {
      id
      creator {
        id
        name
        email
        avatar
      }
      createdAt
      content
    }
  }
}
    `;
export const useEditAssetAnnotationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<EditAssetAnnotationMutation, TError, EditAssetAnnotationMutationVariables, TContext>) =>
    useMutation<EditAssetAnnotationMutation, TError, EditAssetAnnotationMutationVariables, TContext>(
      ['EditAssetAnnotation'],
      (variables?: EditAssetAnnotationMutationVariables) => fetcher<EditAssetAnnotationMutation, EditAssetAnnotationMutationVariables>(EditAssetAnnotationDocument, variables)(),
      options
    );
export const DeleteAnnotationDocument = `
    mutation DeleteAnnotation($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
  }
}
    `;
export const useDeleteAnnotationMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteAnnotationMutation, TError, DeleteAnnotationMutationVariables, TContext>) =>
    useMutation<DeleteAnnotationMutation, TError, DeleteAnnotationMutationVariables, TContext>(
      ['DeleteAnnotation'],
      (variables?: DeleteAnnotationMutationVariables) => fetcher<DeleteAnnotationMutation, DeleteAnnotationMutationVariables>(DeleteAnnotationDocument, variables)(),
      options
    );
export const GetAssetSubmissionRequestTokensDocument = `
    query GetAssetSubmissionRequestTokens($id: ID!) {
  library(id: $id) {
    assetSubmissionRequests {
      id
      tokens {
        token
      }
    }
  }
}
    `;
export const useGetAssetSubmissionRequestTokensQuery = <
      TData = GetAssetSubmissionRequestTokensQuery,
      TError = unknown
    >(
      variables: GetAssetSubmissionRequestTokensQueryVariables,
      options?: UseQueryOptions<GetAssetSubmissionRequestTokensQuery, TError, TData>
    ) =>
    useQuery<GetAssetSubmissionRequestTokensQuery, TError, TData>(
      ['GetAssetSubmissionRequestTokens', variables],
      fetcher<GetAssetSubmissionRequestTokensQuery, GetAssetSubmissionRequestTokensQueryVariables>(GetAssetSubmissionRequestTokensDocument, variables),
      options
    );

useGetAssetSubmissionRequestTokensQuery.getKey = (variables: GetAssetSubmissionRequestTokensQueryVariables) => ['GetAssetSubmissionRequestTokens', variables];
;

export const CreateAssetSubmissionRequestDocument = `
    mutation CreateAssetSubmissionRequest($input: CreateAssetSubmissionRequestInput!) {
  createAssetSubmissionRequest(input: $input) {
    assetSubmissionRequest {
      id
    }
  }
}
    `;
export const useCreateAssetSubmissionRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateAssetSubmissionRequestMutation, TError, CreateAssetSubmissionRequestMutationVariables, TContext>) =>
    useMutation<CreateAssetSubmissionRequestMutation, TError, CreateAssetSubmissionRequestMutationVariables, TContext>(
      ['CreateAssetSubmissionRequest'],
      (variables?: CreateAssetSubmissionRequestMutationVariables) => fetcher<CreateAssetSubmissionRequestMutation, CreateAssetSubmissionRequestMutationVariables>(CreateAssetSubmissionRequestDocument, variables)(),
      options
    );
export const IssueAssetSubmissionRequestTokenDocument = `
    mutation IssueAssetSubmissionRequestToken($input: IssueAssetSubmissionRequestTokenInput!) {
  issueAssetSubmissionRequestToken(input: $input) {
    token
    expiresAt
  }
}
    `;
export const useIssueAssetSubmissionRequestTokenMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<IssueAssetSubmissionRequestTokenMutation, TError, IssueAssetSubmissionRequestTokenMutationVariables, TContext>) =>
    useMutation<IssueAssetSubmissionRequestTokenMutation, TError, IssueAssetSubmissionRequestTokenMutationVariables, TContext>(
      ['IssueAssetSubmissionRequestToken'],
      (variables?: IssueAssetSubmissionRequestTokenMutationVariables) => fetcher<IssueAssetSubmissionRequestTokenMutation, IssueAssetSubmissionRequestTokenMutationVariables>(IssueAssetSubmissionRequestTokenDocument, variables)(),
      options
    );
export const DeleteAssetSubmissionRequestDocument = `
    mutation DeleteAssetSubmissionRequest($input: DeleteAssetSubmissionRequestInput!) {
  deleteAssetSubmissionRequest(input: $input) {
    id
  }
}
    `;
export const useDeleteAssetSubmissionRequestMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteAssetSubmissionRequestMutation, TError, DeleteAssetSubmissionRequestMutationVariables, TContext>) =>
    useMutation<DeleteAssetSubmissionRequestMutation, TError, DeleteAssetSubmissionRequestMutationVariables, TContext>(
      ['DeleteAssetSubmissionRequest'],
      (variables?: DeleteAssetSubmissionRequestMutationVariables) => fetcher<DeleteAssetSubmissionRequestMutation, DeleteAssetSubmissionRequestMutationVariables>(DeleteAssetSubmissionRequestDocument, variables)(),
      options
    );
export const AssetViewerDocument = `
    query AssetViewer($assetId: ID!) {
  asset(id: $assetId) {
    id
    title
    description
    status
    expiresAt
    createdAt
    creator {
      id
      name
    }
    modifiedAt
    customMetadata {
      property {
        id
        name
        type {
          name
          ... on CustomMetadataPropertyTypeLongText {
            name
          }
          ... on CustomMetadataPropertyTypeText {
            name
          }
          ... on CustomMetadataPropertyTypeLongText {
            name
          }
          ... on CustomMetadataPropertyTypeNumber {
            name
          }
          ... on CustomMetadataPropertyTypeDate {
            name
          }
          ... on CustomMetadataPropertyTypeUrl {
            name
            shouldBeOpenedInANewTab
          }
          ... on CustomMetadataPropertyTypeSelect {
            name
          }
          ... on CustomMetadataPropertyTypeMultiSelect {
            name
          }
        }
      }
      ... on CustomMetadataValue {
        value
      }
      ... on CustomMetadataValues {
        values
      }
    }
    licenses {
      id
      title
      license
    }
    ... on Audio {
      author
      extension
      size
    }
    ... on Document {
      author
      width
      height
      extension
      size
    }
    ... on EmbeddedContent {
      author
    }
    ... on File {
      author
      extension
      size
    }
    ... on Image {
      author
      width
      height
      extension
      size
    }
    ... on Video {
      author
      width
      height
      extension
      size
    }
    copyright {
      status
      notice
    }
    tags {
      value
      source
    }
  }
}
    `;
export const useAssetViewerQuery = <
      TData = AssetViewerQuery,
      TError = unknown
    >(
      variables: AssetViewerQueryVariables,
      options?: UseQueryOptions<AssetViewerQuery, TError, TData>
    ) =>
    useQuery<AssetViewerQuery, TError, TData>(
      ['AssetViewer', variables],
      fetcher<AssetViewerQuery, AssetViewerQueryVariables>(AssetViewerDocument, variables),
      options
    );

useAssetViewerQuery.getKey = (variables: AssetViewerQueryVariables) => ['AssetViewer', variables];
;

export const AssetViewerWithTokenDocument = `
    query AssetViewerWithToken($token: String!) {
  tokenizedAsset(token: $token) {
    id
    title
    description
    status
    expiresAt
    createdAt
    creator {
      id
      name
    }
    modifiedAt
    customMetadata {
      property {
        id
        name
        type {
          name
          ... on CustomMetadataPropertyTypeLongText {
            name
          }
          ... on CustomMetadataPropertyTypeText {
            name
          }
          ... on CustomMetadataPropertyTypeLongText {
            name
          }
          ... on CustomMetadataPropertyTypeNumber {
            name
          }
          ... on CustomMetadataPropertyTypeDate {
            name
          }
          ... on CustomMetadataPropertyTypeUrl {
            name
            shouldBeOpenedInANewTab
          }
          ... on CustomMetadataPropertyTypeSelect {
            name
          }
          ... on CustomMetadataPropertyTypeMultiSelect {
            name
          }
        }
      }
      ... on CustomMetadataValue {
        value
      }
      ... on CustomMetadataValues {
        values
      }
    }
    licenses {
      id
      title
      license
    }
    ... on Audio {
      author
      extension
      size
    }
    ... on Document {
      author
      width
      height
      extension
      size
    }
    ... on EmbeddedContent {
      author
    }
    ... on File {
      author
      extension
      size
    }
    ... on Image {
      author
      width
      height
      extension
      size
    }
    ... on Video {
      author
      width
      height
      extension
      size
    }
    copyright {
      status
      notice
    }
    tags {
      value
      source
    }
  }
}
    `;
export const useAssetViewerWithTokenQuery = <
      TData = AssetViewerWithTokenQuery,
      TError = unknown
    >(
      variables: AssetViewerWithTokenQueryVariables,
      options?: UseQueryOptions<AssetViewerWithTokenQuery, TError, TData>
    ) =>
    useQuery<AssetViewerWithTokenQuery, TError, TData>(
      ['AssetViewerWithToken', variables],
      fetcher<AssetViewerWithTokenQuery, AssetViewerWithTokenQueryVariables>(AssetViewerWithTokenDocument, variables),
      options
    );

useAssetViewerWithTokenQuery.getKey = (variables: AssetViewerWithTokenQueryVariables) => ['AssetViewerWithToken', variables];
;

export const BrandsDocument = `
    query Brands {
  brands {
    globalObjectId: id
    name
    rgbaColor {
      red
      green
      blue
      alpha
    }
    avatar
    slug
  }
}
    `;
export const useBrandsQuery = <
      TData = BrandsQuery,
      TError = unknown
    >(
      variables?: BrandsQueryVariables,
      options?: UseQueryOptions<BrandsQuery, TError, TData>
    ) =>
    useQuery<BrandsQuery, TError, TData>(
      variables === undefined ? ['Brands'] : ['Brands', variables],
      fetcher<BrandsQuery, BrandsQueryVariables>(BrandsDocument, variables),
      options
    );

useBrandsQuery.getKey = (variables?: BrandsQueryVariables) => variables === undefined ? ['Brands'] : ['Brands', variables];
;

export const BrowseFolderDocument = `
    query BrowseFolder($id: ID!, $limit: Int) {
  node(id: $id) {
    ... on Folder {
      __typename
      id
      name
      folders(limit: $limit) {
        ...foldersFields
      }
    }
  }
}
    ${FoldersFieldsFragmentDoc}`;
export const useBrowseFolderQuery = <
      TData = BrowseFolderQuery,
      TError = unknown
    >(
      variables: BrowseFolderQueryVariables,
      options?: UseQueryOptions<BrowseFolderQuery, TError, TData>
    ) =>
    useQuery<BrowseFolderQuery, TError, TData>(
      ['BrowseFolder', variables],
      fetcher<BrowseFolderQuery, BrowseFolderQueryVariables>(BrowseFolderDocument, variables),
      options
    );

useBrowseFolderQuery.getKey = (variables: BrowseFolderQueryVariables) => ['BrowseFolder', variables];
;

export const CurrentUserDocument = `
    query CurrentUser {
  currentUser {
    globalObjectId: id
    email
    name
    avatar
    gravatarHash
    permissions {
      analyticsDashboard {
        canView
      }
    }
  }
}
    `;
export const useCurrentUserQuery = <
      TData = CurrentUserQuery,
      TError = unknown
    >(
      variables?: CurrentUserQueryVariables,
      options?: UseQueryOptions<CurrentUserQuery, TError, TData>
    ) =>
    useQuery<CurrentUserQuery, TError, TData>(
      variables === undefined ? ['CurrentUser'] : ['CurrentUser', variables],
      fetcher<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, variables),
      options
    );

useCurrentUserQuery.getKey = (variables?: CurrentUserQueryVariables) => variables === undefined ? ['CurrentUser'] : ['CurrentUser', variables];
;

export const EnhancedTextShortenDocument = `
    query EnhancedTextShorten($text: String!) {
  enhancedText(text: $text) {
    shortened
  }
}
    `;
export const useEnhancedTextShortenQuery = <
      TData = EnhancedTextShortenQuery,
      TError = unknown
    >(
      variables: EnhancedTextShortenQueryVariables,
      options?: UseQueryOptions<EnhancedTextShortenQuery, TError, TData>
    ) =>
    useQuery<EnhancedTextShortenQuery, TError, TData>(
      ['EnhancedTextShorten', variables],
      fetcher<EnhancedTextShortenQuery, EnhancedTextShortenQueryVariables>(EnhancedTextShortenDocument, variables),
      options
    );

useEnhancedTextShortenQuery.getKey = (variables: EnhancedTextShortenQueryVariables) => ['EnhancedTextShorten', variables];
;

export const EnhancedTextTranslationDocument = `
    query EnhancedTextTranslation($text: String!, $language: String!) {
  enhancedText(text: $text) {
    translated(language: $language)
  }
}
    `;
export const useEnhancedTextTranslationQuery = <
      TData = EnhancedTextTranslationQuery,
      TError = unknown
    >(
      variables: EnhancedTextTranslationQueryVariables,
      options?: UseQueryOptions<EnhancedTextTranslationQuery, TError, TData>
    ) =>
    useQuery<EnhancedTextTranslationQuery, TError, TData>(
      ['EnhancedTextTranslation', variables],
      fetcher<EnhancedTextTranslationQuery, EnhancedTextTranslationQueryVariables>(EnhancedTextTranslationDocument, variables),
      options
    );

useEnhancedTextTranslationQuery.getKey = (variables: EnhancedTextTranslationQueryVariables) => ['EnhancedTextTranslation', variables];
;

export const EnhancedTextProperEnglishDocument = `
    query EnhancedTextProperEnglish($text: String!) {
  enhancedText(text: $text) {
    properEnglish
  }
}
    `;
export const useEnhancedTextProperEnglishQuery = <
      TData = EnhancedTextProperEnglishQuery,
      TError = unknown
    >(
      variables: EnhancedTextProperEnglishQueryVariables,
      options?: UseQueryOptions<EnhancedTextProperEnglishQuery, TError, TData>
    ) =>
    useQuery<EnhancedTextProperEnglishQuery, TError, TData>(
      ['EnhancedTextProperEnglish', variables],
      fetcher<EnhancedTextProperEnglishQuery, EnhancedTextProperEnglishQueryVariables>(EnhancedTextProperEnglishDocument, variables),
      options
    );

useEnhancedTextProperEnglishQuery.getKey = (variables: EnhancedTextProperEnglishQueryVariables) => ['EnhancedTextProperEnglish', variables];
;

export const EnhancedTextDrunkenPirateDocument = `
    query EnhancedTextDrunkenPirate($text: String!) {
  enhancedText(text: $text) {
    drunken
  }
}
    `;
export const useEnhancedTextDrunkenPirateQuery = <
      TData = EnhancedTextDrunkenPirateQuery,
      TError = unknown
    >(
      variables: EnhancedTextDrunkenPirateQueryVariables,
      options?: UseQueryOptions<EnhancedTextDrunkenPirateQuery, TError, TData>
    ) =>
    useQuery<EnhancedTextDrunkenPirateQuery, TError, TData>(
      ['EnhancedTextDrunkenPirate', variables],
      fetcher<EnhancedTextDrunkenPirateQuery, EnhancedTextDrunkenPirateQueryVariables>(EnhancedTextDrunkenPirateDocument, variables),
      options
    );

useEnhancedTextDrunkenPirateQuery.getKey = (variables: EnhancedTextDrunkenPirateQueryVariables) => ['EnhancedTextDrunkenPirate', variables];
;

export const EnhancedTextKeyTakeawaysDocument = `
    query EnhancedTextKeyTakeaways($text: String!) {
  enhancedText(text: $text) {
    keyTakeaways
  }
}
    `;
export const useEnhancedTextKeyTakeawaysQuery = <
      TData = EnhancedTextKeyTakeawaysQuery,
      TError = unknown
    >(
      variables: EnhancedTextKeyTakeawaysQueryVariables,
      options?: UseQueryOptions<EnhancedTextKeyTakeawaysQuery, TError, TData>
    ) =>
    useQuery<EnhancedTextKeyTakeawaysQuery, TError, TData>(
      ['EnhancedTextKeyTakeaways', variables],
      fetcher<EnhancedTextKeyTakeawaysQuery, EnhancedTextKeyTakeawaysQueryVariables>(EnhancedTextKeyTakeawaysDocument, variables),
      options
    );

useEnhancedTextKeyTakeawaysQuery.getKey = (variables: EnhancedTextKeyTakeawaysQueryVariables) => ['EnhancedTextKeyTakeaways', variables];
;

export const EnhancedTextPromptedDocument = `
    query EnhancedTextPrompted($text: String!) {
  enhancedText(text: $text) {
    prompted
  }
}
    `;
export const useEnhancedTextPromptedQuery = <
      TData = EnhancedTextPromptedQuery,
      TError = unknown
    >(
      variables: EnhancedTextPromptedQueryVariables,
      options?: UseQueryOptions<EnhancedTextPromptedQuery, TError, TData>
    ) =>
    useQuery<EnhancedTextPromptedQuery, TError, TData>(
      ['EnhancedTextPrompted', variables],
      fetcher<EnhancedTextPromptedQuery, EnhancedTextPromptedQueryVariables>(EnhancedTextPromptedDocument, variables),
      options
    );

useEnhancedTextPromptedQuery.getKey = (variables: EnhancedTextPromptedQueryVariables) => ['EnhancedTextPrompted', variables];
;

export const GuidelinePageSummaryDocument = `
    query GuidelinePageSummary($pageId: ID!) {
  guidelinePage(id: $pageId) {
    summary
  }
}
    `;
export const useGuidelinePageSummaryQuery = <
      TData = GuidelinePageSummaryQuery,
      TError = unknown
    >(
      variables: GuidelinePageSummaryQueryVariables,
      options?: UseQueryOptions<GuidelinePageSummaryQuery, TError, TData>
    ) =>
    useQuery<GuidelinePageSummaryQuery, TError, TData>(
      ['GuidelinePageSummary', variables],
      fetcher<GuidelinePageSummaryQuery, GuidelinePageSummaryQueryVariables>(GuidelinePageSummaryDocument, variables),
      options
    );

useGuidelinePageSummaryQuery.getKey = (variables: GuidelinePageSummaryQueryVariables) => ['GuidelinePageSummary', variables];
;

export const GetSavedLibraryAssetsDocument = `
    query GetSavedLibraryAssets($projectId: ID!, $externalId: ID!, $externalIdString: String!, $fileExtension: String!, $inFolder: AssetQueryInFolderInput) {
  library(id: $projectId) {
    assets(
      query: {inFolder: $inFolder, externalId: $externalId, filter: {andConditions: [{type: FILE_EXTENSION, value: $fileExtension}]}}
    ) {
      items {
        id
        title
      }
    }
    browse {
      assets(
        query: {filter: {andConditions: [{type: FILE_EXTENSION, value: $fileExtension}, {type: EXTERNAL_ID, value: $externalIdString}]}}
      ) {
        items {
          id
          title
        }
      }
    }
  }
}
    `;
export const useGetSavedLibraryAssetsQuery = <
      TData = GetSavedLibraryAssetsQuery,
      TError = unknown
    >(
      variables: GetSavedLibraryAssetsQueryVariables,
      options?: UseQueryOptions<GetSavedLibraryAssetsQuery, TError, TData>
    ) =>
    useQuery<GetSavedLibraryAssetsQuery, TError, TData>(
      ['GetSavedLibraryAssets', variables],
      fetcher<GetSavedLibraryAssetsQuery, GetSavedLibraryAssetsQueryVariables>(GetSavedLibraryAssetsDocument, variables),
      options
    );

useGetSavedLibraryAssetsQuery.getKey = (variables: GetSavedLibraryAssetsQueryVariables) => ['GetSavedLibraryAssets', variables];
;

export const GetSavedWorkspaceProjectAssetsDocument = `
    query GetSavedWorkspaceProjectAssets($projectId: ID!, $externalId: ID!, $externalIdString: String!, $fileExtension: String!, $inFolder: AssetQueryInFolderInput) {
  workspaceProject(id: $projectId) {
    assets(
      query: {inFolder: $inFolder, externalId: $externalId, filter: {andConditions: [{type: FILE_EXTENSION, value: $fileExtension}]}}
    ) {
      items {
        id
        title
      }
    }
    browse {
      assets(
        query: {filter: {andConditions: [{type: FILE_EXTENSION, value: $fileExtension}, {type: EXTERNAL_ID, value: $externalIdString}]}}
      ) {
        items {
          id
          title
        }
      }
    }
  }
}
    `;
export const useGetSavedWorkspaceProjectAssetsQuery = <
      TData = GetSavedWorkspaceProjectAssetsQuery,
      TError = unknown
    >(
      variables: GetSavedWorkspaceProjectAssetsQueryVariables,
      options?: UseQueryOptions<GetSavedWorkspaceProjectAssetsQuery, TError, TData>
    ) =>
    useQuery<GetSavedWorkspaceProjectAssetsQuery, TError, TData>(
      ['GetSavedWorkspaceProjectAssets', variables],
      fetcher<GetSavedWorkspaceProjectAssetsQuery, GetSavedWorkspaceProjectAssetsQueryVariables>(GetSavedWorkspaceProjectAssetsDocument, variables),
      options
    );

useGetSavedWorkspaceProjectAssetsQuery.getKey = (variables: GetSavedWorkspaceProjectAssetsQueryVariables) => ['GetSavedWorkspaceProjectAssets', variables];
;

export const LibrariesAndProjectsDocument = `
    query LibrariesAndProjects($id: ID!, $limit: Int, $libraryTypes: [LibraryType]) {
  brand(id: $id) {
    id
    libraries(limit: $limit, query: {filter: {types: $libraryTypes}}) {
      total
      items {
        __typename
        id
        name
        browse {
          folders(limit: $limit) {
            ...foldersFields
          }
        }
        currentUserPermissions {
          canCreateAssets
        }
      }
    }
    workspaceProjects(limit: $limit) {
      total
      items {
        __typename
        id
        name
        browse {
          folders(limit: $limit) {
            ...foldersFields
          }
        }
        currentUserPermissions {
          canCreateAssets
        }
      }
    }
  }
}
    ${FoldersFieldsFragmentDoc}`;
export const useLibrariesAndProjectsQuery = <
      TData = LibrariesAndProjectsQuery,
      TError = unknown
    >(
      variables: LibrariesAndProjectsQueryVariables,
      options?: UseQueryOptions<LibrariesAndProjectsQuery, TError, TData>
    ) =>
    useQuery<LibrariesAndProjectsQuery, TError, TData>(
      ['LibrariesAndProjects', variables],
      fetcher<LibrariesAndProjectsQuery, LibrariesAndProjectsQueryVariables>(LibrariesAndProjectsDocument, variables),
      options
    );

useLibrariesAndProjectsQuery.getKey = (variables: LibrariesAndProjectsQueryVariables) => ['LibrariesAndProjects', variables];
;

export const LibraryPageCollectionsDocument = `
    query LibraryPageCollections($id: ID!) {
  node(id: $id) {
    id
    __typename
    ... on LibraryPage {
      title
      collections(query: {filter: {isPrivate: true}}) {
        items {
          id
          name
          assets {
            items {
              id
              title
              __typename
              ... on Image {
                previewUrl
                extension
              }
              ... on Audio {
                previewUrl
                extension
              }
              ... on Video {
                previewUrl
                extension
              }
              ... on Document {
                previewUrl
                extension
              }
              ... on File {
                previewUrl
                extension
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const useLibraryPageCollectionsQuery = <
      TData = LibraryPageCollectionsQuery,
      TError = unknown
    >(
      variables: LibraryPageCollectionsQueryVariables,
      options?: UseQueryOptions<LibraryPageCollectionsQuery, TError, TData>
    ) =>
    useQuery<LibraryPageCollectionsQuery, TError, TData>(
      ['LibraryPageCollections', variables],
      fetcher<LibraryPageCollectionsQuery, LibraryPageCollectionsQueryVariables>(LibraryPageCollectionsDocument, variables),
      options
    );

useLibraryPageCollectionsQuery.getKey = (variables: LibraryPageCollectionsQueryVariables) => ['LibraryPageCollections', variables];
;

export const AddCollectionAssetsDocument = `
    mutation addCollectionAssets($input: AddCollectionAssetsInput!) {
  addCollectionAssets(input: $input) {
    collection {
      id
      name
      assets {
        items {
          id
        }
      }
      isPrivate
    }
  }
}
    `;
export const useAddCollectionAssetsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddCollectionAssetsMutation, TError, AddCollectionAssetsMutationVariables, TContext>) =>
    useMutation<AddCollectionAssetsMutation, TError, AddCollectionAssetsMutationVariables, TContext>(
      ['addCollectionAssets'],
      (variables?: AddCollectionAssetsMutationVariables) => fetcher<AddCollectionAssetsMutation, AddCollectionAssetsMutationVariables>(AddCollectionAssetsDocument, variables)(),
      options
    );
export const RemoveCollectionAssetsDocument = `
    mutation removeCollectionAssets($input: RemoveCollectionAssetsInput!) {
  removeCollectionAssets(input: $input) {
    collection {
      id
      name
      assets {
        items {
          id
        }
      }
      isPrivate
    }
  }
}
    `;
export const useRemoveCollectionAssetsMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RemoveCollectionAssetsMutation, TError, RemoveCollectionAssetsMutationVariables, TContext>) =>
    useMutation<RemoveCollectionAssetsMutation, TError, RemoveCollectionAssetsMutationVariables, TContext>(
      ['removeCollectionAssets'],
      (variables?: RemoveCollectionAssetsMutationVariables) => fetcher<RemoveCollectionAssetsMutation, RemoveCollectionAssetsMutationVariables>(RemoveCollectionAssetsDocument, variables)(),
      options
    );
export const CreateCollectionDocument = `
    mutation createCollection($input: CreateCollectionInput!) {
  createCollection(input: $input) {
    collection {
      id
      name
    }
  }
}
    `;
export const useCreateCollectionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateCollectionMutation, TError, CreateCollectionMutationVariables, TContext>) =>
    useMutation<CreateCollectionMutation, TError, CreateCollectionMutationVariables, TContext>(
      ['createCollection'],
      (variables?: CreateCollectionMutationVariables) => fetcher<CreateCollectionMutation, CreateCollectionMutationVariables>(CreateCollectionDocument, variables)(),
      options
    );
export const ProjectBasicInfoDocument = `
    query ProjectBasicInfo($projectId: ID!) {
  workspaceProject(id: $projectId) {
    name
    creator {
      name
    }
    description
    beginsAt
    endsAt
    createdAt
    assets {
      total
    }
    collaborators {
      users {
        total
      }
    }
  }
}
    `;
export const useProjectBasicInfoQuery = <
      TData = ProjectBasicInfoQuery,
      TError = unknown
    >(
      variables: ProjectBasicInfoQueryVariables,
      options?: UseQueryOptions<ProjectBasicInfoQuery, TError, TData>
    ) =>
    useQuery<ProjectBasicInfoQuery, TError, TData>(
      ['ProjectBasicInfo', variables],
      fetcher<ProjectBasicInfoQuery, ProjectBasicInfoQueryVariables>(ProjectBasicInfoDocument, variables),
      options
    );

useProjectBasicInfoQuery.getKey = (variables: ProjectBasicInfoQueryVariables) => ['ProjectBasicInfo', variables];
;

export const WorkspaceProjectNameDocument = `
    query WorkspaceProjectName($projectId: ID!) {
  workspaceProject(id: $projectId) {
    name
  }
}
    `;
export const useWorkspaceProjectNameQuery = <
      TData = WorkspaceProjectNameQuery,
      TError = unknown
    >(
      variables: WorkspaceProjectNameQueryVariables,
      options?: UseQueryOptions<WorkspaceProjectNameQuery, TError, TData>
    ) =>
    useQuery<WorkspaceProjectNameQuery, TError, TData>(
      ['WorkspaceProjectName', variables],
      fetcher<WorkspaceProjectNameQuery, WorkspaceProjectNameQueryVariables>(WorkspaceProjectNameDocument, variables),
      options
    );

useWorkspaceProjectNameQuery.getKey = (variables: WorkspaceProjectNameQueryVariables) => ['WorkspaceProjectName', variables];
;

export const WorkspaceProjectDescriptionDocument = `
    query WorkspaceProjectDescription($projectId: ID!) {
  workspaceProject(id: $projectId) {
    description
  }
}
    `;
export const useWorkspaceProjectDescriptionQuery = <
      TData = WorkspaceProjectDescriptionQuery,
      TError = unknown
    >(
      variables: WorkspaceProjectDescriptionQueryVariables,
      options?: UseQueryOptions<WorkspaceProjectDescriptionQuery, TError, TData>
    ) =>
    useQuery<WorkspaceProjectDescriptionQuery, TError, TData>(
      ['WorkspaceProjectDescription', variables],
      fetcher<WorkspaceProjectDescriptionQuery, WorkspaceProjectDescriptionQueryVariables>(WorkspaceProjectDescriptionDocument, variables),
      options
    );

useWorkspaceProjectDescriptionQuery.getKey = (variables: WorkspaceProjectDescriptionQueryVariables) => ['WorkspaceProjectDescription', variables];
;

export const WorkspaceProjectBeginsAtDocument = `
    query WorkspaceProjectBeginsAt($projectId: ID!) {
  workspaceProject(id: $projectId) {
    beginsAt
  }
}
    `;
export const useWorkspaceProjectBeginsAtQuery = <
      TData = WorkspaceProjectBeginsAtQuery,
      TError = unknown
    >(
      variables: WorkspaceProjectBeginsAtQueryVariables,
      options?: UseQueryOptions<WorkspaceProjectBeginsAtQuery, TError, TData>
    ) =>
    useQuery<WorkspaceProjectBeginsAtQuery, TError, TData>(
      ['WorkspaceProjectBeginsAt', variables],
      fetcher<WorkspaceProjectBeginsAtQuery, WorkspaceProjectBeginsAtQueryVariables>(WorkspaceProjectBeginsAtDocument, variables),
      options
    );

useWorkspaceProjectBeginsAtQuery.getKey = (variables: WorkspaceProjectBeginsAtQueryVariables) => ['WorkspaceProjectBeginsAt', variables];
;

export const WorkspaceProjectEndsAtDocument = `
    query WorkspaceProjectEndsAt($projectId: ID!) {
  workspaceProject(id: $projectId) {
    endsAt
  }
}
    `;
export const useWorkspaceProjectEndsAtQuery = <
      TData = WorkspaceProjectEndsAtQuery,
      TError = unknown
    >(
      variables: WorkspaceProjectEndsAtQueryVariables,
      options?: UseQueryOptions<WorkspaceProjectEndsAtQuery, TError, TData>
    ) =>
    useQuery<WorkspaceProjectEndsAtQuery, TError, TData>(
      ['WorkspaceProjectEndsAt', variables],
      fetcher<WorkspaceProjectEndsAtQuery, WorkspaceProjectEndsAtQueryVariables>(WorkspaceProjectEndsAtDocument, variables),
      options
    );

useWorkspaceProjectEndsAtQuery.getKey = (variables: WorkspaceProjectEndsAtQueryVariables) => ['WorkspaceProjectEndsAt', variables];
;

export const WorkspaceProjectCreatedAtDocument = `
    query WorkspaceProjectCreatedAt($projectId: ID!) {
  workspaceProject(id: $projectId) {
    createdAt
  }
}
    `;
export const useWorkspaceProjectCreatedAtQuery = <
      TData = WorkspaceProjectCreatedAtQuery,
      TError = unknown
    >(
      variables: WorkspaceProjectCreatedAtQueryVariables,
      options?: UseQueryOptions<WorkspaceProjectCreatedAtQuery, TError, TData>
    ) =>
    useQuery<WorkspaceProjectCreatedAtQuery, TError, TData>(
      ['WorkspaceProjectCreatedAt', variables],
      fetcher<WorkspaceProjectCreatedAtQuery, WorkspaceProjectCreatedAtQueryVariables>(WorkspaceProjectCreatedAtDocument, variables),
      options
    );

useWorkspaceProjectCreatedAtQuery.getKey = (variables: WorkspaceProjectCreatedAtQueryVariables) => ['WorkspaceProjectCreatedAt', variables];
;

export const WorkspaceProjectAssetsTotalDocument = `
    query WorkspaceProjectAssetsTotal($projectId: ID!) {
  workspaceProject(id: $projectId) {
    assets {
      total
    }
  }
}
    `;
export const useWorkspaceProjectAssetsTotalQuery = <
      TData = WorkspaceProjectAssetsTotalQuery,
      TError = unknown
    >(
      variables: WorkspaceProjectAssetsTotalQueryVariables,
      options?: UseQueryOptions<WorkspaceProjectAssetsTotalQuery, TError, TData>
    ) =>
    useQuery<WorkspaceProjectAssetsTotalQuery, TError, TData>(
      ['WorkspaceProjectAssetsTotal', variables],
      fetcher<WorkspaceProjectAssetsTotalQuery, WorkspaceProjectAssetsTotalQueryVariables>(WorkspaceProjectAssetsTotalDocument, variables),
      options
    );

useWorkspaceProjectAssetsTotalQuery.getKey = (variables: WorkspaceProjectAssetsTotalQueryVariables) => ['WorkspaceProjectAssetsTotal', variables];
;

export const WorkspaceProjectCollaboratorsUsersTotalDocument = `
    query WorkspaceProjectCollaboratorsUsersTotal($projectId: ID!) {
  workspaceProject(id: $projectId) {
    collaborators {
      users {
        total
      }
    }
  }
}
    `;
export const useWorkspaceProjectCollaboratorsUsersTotalQuery = <
      TData = WorkspaceProjectCollaboratorsUsersTotalQuery,
      TError = unknown
    >(
      variables: WorkspaceProjectCollaboratorsUsersTotalQueryVariables,
      options?: UseQueryOptions<WorkspaceProjectCollaboratorsUsersTotalQuery, TError, TData>
    ) =>
    useQuery<WorkspaceProjectCollaboratorsUsersTotalQuery, TError, TData>(
      ['WorkspaceProjectCollaboratorsUsersTotal', variables],
      fetcher<WorkspaceProjectCollaboratorsUsersTotalQuery, WorkspaceProjectCollaboratorsUsersTotalQueryVariables>(WorkspaceProjectCollaboratorsUsersTotalDocument, variables),
      options
    );

useWorkspaceProjectCollaboratorsUsersTotalQuery.getKey = (variables: WorkspaceProjectCollaboratorsUsersTotalQueryVariables) => ['WorkspaceProjectCollaboratorsUsersTotal', variables];
;

export const WorkspaceProjectCreatorNameDocument = `
    query WorkspaceProjectCreatorName($projectId: ID!) {
  workspaceProject(id: $projectId) {
    creator {
      name
    }
  }
}
    `;
export const useWorkspaceProjectCreatorNameQuery = <
      TData = WorkspaceProjectCreatorNameQuery,
      TError = unknown
    >(
      variables: WorkspaceProjectCreatorNameQueryVariables,
      options?: UseQueryOptions<WorkspaceProjectCreatorNameQuery, TError, TData>
    ) =>
    useQuery<WorkspaceProjectCreatorNameQuery, TError, TData>(
      ['WorkspaceProjectCreatorName', variables],
      fetcher<WorkspaceProjectCreatorNameQuery, WorkspaceProjectCreatorNameQueryVariables>(WorkspaceProjectCreatorNameDocument, variables),
      options
    );

useWorkspaceProjectCreatorNameQuery.getKey = (variables: WorkspaceProjectCreatorNameQueryVariables) => ['WorkspaceProjectCreatorName', variables];
;

export const BrandCustomMetadataPropertiesDocument = `
    query BrandCustomMetadataProperties($id: ID!) {
  brand(id: $id) {
    customMetadataProperties {
      id
      createdAt
      modifiedAt
      defaultValue
      name
      helpText
      isRequired
      valueType {
        propertyType
        ... on CustomMetadataPropertyTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyLongTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyDateValueType {
          propertyType
        }
        ... on CustomMetadataPropertyNumberValueType {
          propertyType
        }
        ... on CustomMetadataPropertySelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
        ... on CustomMetadataPropertyMultiSelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
      }
    }
  }
}
    `;
export const useBrandCustomMetadataPropertiesQuery = <
      TData = BrandCustomMetadataPropertiesQuery,
      TError = unknown
    >(
      variables: BrandCustomMetadataPropertiesQueryVariables,
      options?: UseQueryOptions<BrandCustomMetadataPropertiesQuery, TError, TData>
    ) =>
    useQuery<BrandCustomMetadataPropertiesQuery, TError, TData>(
      ['BrandCustomMetadataProperties', variables],
      fetcher<BrandCustomMetadataPropertiesQuery, BrandCustomMetadataPropertiesQueryVariables>(BrandCustomMetadataPropertiesDocument, variables),
      options
    );

useBrandCustomMetadataPropertiesQuery.getKey = (variables: BrandCustomMetadataPropertiesQueryVariables) => ['BrandCustomMetadataProperties', variables];
;

export const ProjectCustomMetadataPropertiesDocument = `
    query ProjectCustomMetadataProperties($id: ID!) {
  library(id: $id) {
    customMetadataProperties {
      id
      createdAt
      dependency {
        ...projectDependencyFields
      }
      forbiddenDependeePropertyIds
      modifiedAt
      defaultValue
      name
      helpText
      isRequired
      isEditable
      isSearchable
      isViewable
      valueType {
        propertyType
        ... on CustomMetadataPropertyTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyLongTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyDateValueType {
          propertyType
        }
        ... on CustomMetadataPropertyNumberValueType {
          propertyType
        }
        ... on CustomMetadataPropertyUrlValueType {
          propertyType
          shouldBeOpenedInANewTab
        }
        ... on CustomMetadataPropertySelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
        ... on CustomMetadataPropertyMultiSelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
      }
    }
  }
}
    ${ProjectDependencyFieldsFragmentDoc}`;
export const useProjectCustomMetadataPropertiesQuery = <
      TData = ProjectCustomMetadataPropertiesQuery,
      TError = unknown
    >(
      variables: ProjectCustomMetadataPropertiesQueryVariables,
      options?: UseQueryOptions<ProjectCustomMetadataPropertiesQuery, TError, TData>
    ) =>
    useQuery<ProjectCustomMetadataPropertiesQuery, TError, TData>(
      ['ProjectCustomMetadataProperties', variables],
      fetcher<ProjectCustomMetadataPropertiesQuery, ProjectCustomMetadataPropertiesQueryVariables>(ProjectCustomMetadataPropertiesDocument, variables),
      options
    );

useProjectCustomMetadataPropertiesQuery.getKey = (variables: ProjectCustomMetadataPropertiesQueryVariables) => ['ProjectCustomMetadataProperties', variables];
;

export const CreateCustomMetadataPropertyDocument = `
    mutation createCustomMetadataProperty($input: CreateCustomMetadataPropertyInput!) {
  createCustomMetadataProperty(input: $input) {
    customMetadataProperty {
      id
      createdAt
      dependency {
        ...projectDependencyFields
      }
      forbiddenDependeePropertyIds
      modifiedAt
      defaultValue
      name
      helpText
      isRequired
      isEditable
      isSearchable
      isViewable
      valueType {
        propertyType
        ... on CustomMetadataPropertyTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyLongTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyDateValueType {
          propertyType
        }
        ... on CustomMetadataPropertyNumberValueType {
          propertyType
        }
        ... on CustomMetadataPropertyUrlValueType {
          propertyType
          shouldBeOpenedInANewTab
        }
        ... on CustomMetadataPropertySelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
        ... on CustomMetadataPropertyMultiSelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
      }
    }
  }
}
    ${ProjectDependencyFieldsFragmentDoc}`;
export const useCreateCustomMetadataPropertyMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateCustomMetadataPropertyMutation, TError, CreateCustomMetadataPropertyMutationVariables, TContext>) =>
    useMutation<CreateCustomMetadataPropertyMutation, TError, CreateCustomMetadataPropertyMutationVariables, TContext>(
      ['createCustomMetadataProperty'],
      (variables?: CreateCustomMetadataPropertyMutationVariables) => fetcher<CreateCustomMetadataPropertyMutation, CreateCustomMetadataPropertyMutationVariables>(CreateCustomMetadataPropertyDocument, variables)(),
      options
    );
export const UpdateCustomMetadataPropertyDocument = `
    mutation updateCustomMetadataProperty($input: UpdateCustomMetadataPropertyInput!) {
  updateCustomMetadataProperty(input: $input) {
    customMetadataProperty {
      id
      createdAt
      modifiedAt
      defaultValue
      dependency {
        ...projectDependencyFields
      }
      forbiddenDependeePropertyIds
      name
      helpText
      isRequired
      isEditable
      isSearchable
      isViewable
      valueType {
        propertyType
        ... on CustomMetadataPropertyTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyLongTextValueType {
          propertyType
        }
        ... on CustomMetadataPropertyDateValueType {
          propertyType
        }
        ... on CustomMetadataPropertyNumberValueType {
          propertyType
        }
        ... on CustomMetadataPropertyUrlValueType {
          propertyType
          shouldBeOpenedInANewTab
        }
        ... on CustomMetadataPropertySelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
        ... on CustomMetadataPropertyMultiSelectValueType {
          propertyType
          options {
            id
            value
            isDefault
          }
        }
      }
    }
  }
}
    ${ProjectDependencyFieldsFragmentDoc}`;
export const useUpdateCustomMetadataPropertyMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateCustomMetadataPropertyMutation, TError, UpdateCustomMetadataPropertyMutationVariables, TContext>) =>
    useMutation<UpdateCustomMetadataPropertyMutation, TError, UpdateCustomMetadataPropertyMutationVariables, TContext>(
      ['updateCustomMetadataProperty'],
      (variables?: UpdateCustomMetadataPropertyMutationVariables) => fetcher<UpdateCustomMetadataPropertyMutation, UpdateCustomMetadataPropertyMutationVariables>(UpdateCustomMetadataPropertyDocument, variables)(),
      options
    );
export const DeleteCustomMetadataPropertyDocument = `
    mutation deleteCustomMetadataProperty($id: ID!) {
  deleteCustomMetadataProperty(input: {id: $id}) {
    id
  }
}
    `;
export const useDeleteCustomMetadataPropertyMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteCustomMetadataPropertyMutation, TError, DeleteCustomMetadataPropertyMutationVariables, TContext>) =>
    useMutation<DeleteCustomMetadataPropertyMutation, TError, DeleteCustomMetadataPropertyMutationVariables, TContext>(
      ['deleteCustomMetadataProperty'],
      (variables?: DeleteCustomMetadataPropertyMutationVariables) => fetcher<DeleteCustomMetadataPropertyMutation, DeleteCustomMetadataPropertyMutationVariables>(DeleteCustomMetadataPropertyDocument, variables)(),
      options
    );
export const MoveCustomMetadataPropertyDocument = `
    mutation moveCustomMetadataProperty($input: MoveCustomMetadataPropertyInput!) {
  moveCustomMetadataProperty(input: $input) {
    customMetadataProperty {
      globalObjectId: id
      createdAt
      modifiedAt
      defaultValue
      name
      helpText
      isRequired
    }
  }
}
    `;
export const useMoveCustomMetadataPropertyMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<MoveCustomMetadataPropertyMutation, TError, MoveCustomMetadataPropertyMutationVariables, TContext>) =>
    useMutation<MoveCustomMetadataPropertyMutation, TError, MoveCustomMetadataPropertyMutationVariables, TContext>(
      ['moveCustomMetadataProperty'],
      (variables?: MoveCustomMetadataPropertyMutationVariables) => fetcher<MoveCustomMetadataPropertyMutation, MoveCustomMetadataPropertyMutationVariables>(MoveCustomMetadataPropertyDocument, variables)(),
      options
    );
export const RemoveMetadataValueDocument = `
    mutation removeMetadataValue($input: RemoveCustomMetadataInput!) {
  removeCustomMetadata(input: $input) {
    parentIds
  }
}
    `;
export const useRemoveMetadataValueMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RemoveMetadataValueMutation, TError, RemoveMetadataValueMutationVariables, TContext>) =>
    useMutation<RemoveMetadataValueMutation, TError, RemoveMetadataValueMutationVariables, TContext>(
      ['removeMetadataValue'],
      (variables?: RemoveMetadataValueMutationVariables) => fetcher<RemoveMetadataValueMutation, RemoveMetadataValueMutationVariables>(RemoveMetadataValueDocument, variables)(),
      options
    );
export const ProjectMetadataValuesDocument = `
    query ProjectMetadataValues($projectId: ID!) {
  workspaceProject(id: $projectId) {
    id
    description
    creator {
      id
      name
      email
      avatar
    }
    createdAt
    customMetadata {
      property {
        id
        name
        defaultValue
        valueType {
          propertyType
          ... on CustomMetadataPropertyTextValueType {
            propertyType
          }
          ... on CustomMetadataPropertyLongTextValueType {
            propertyType
          }
          ... on CustomMetadataPropertyDateValueType {
            propertyType
          }
          ... on CustomMetadataPropertyNumberValueType {
            propertyType
          }
          ... on CustomMetadataPropertyUrlValueType {
            propertyType
            shouldBeOpenedInANewTab
          }
          ... on CustomMetadataPropertySelectValueType {
            propertyType
            options {
              id
              value
              isDefault
            }
          }
          ... on CustomMetadataPropertyMultiSelectValueType {
            propertyType
            options {
              id
              value
              isDefault
            }
          }
        }
      }
      ... on CustomMetadataValue {
        value
      }
      ... on CustomMetadataValues {
        values
      }
    }
  }
}
    `;
export const useProjectMetadataValuesQuery = <
      TData = ProjectMetadataValuesQuery,
      TError = unknown
    >(
      variables: ProjectMetadataValuesQueryVariables,
      options?: UseQueryOptions<ProjectMetadataValuesQuery, TError, TData>
    ) =>
    useQuery<ProjectMetadataValuesQuery, TError, TData>(
      ['ProjectMetadataValues', variables],
      fetcher<ProjectMetadataValuesQuery, ProjectMetadataValuesQueryVariables>(ProjectMetadataValuesDocument, variables),
      options
    );

useProjectMetadataValuesQuery.getKey = (variables: ProjectMetadataValuesQueryVariables) => ['ProjectMetadataValues', variables];
;

export const ShareLinksDocument = `
    query ShareLinks($usageKeys: [String!]!) {
  shareLinks(usageKeys: $usageKeys) {
    id
    url
    isEnabled
    isPasswordProtected
    hasExpirationDate
    expiresAt
  }
}
    `;
export const useShareLinksQuery = <
      TData = ShareLinksQuery,
      TError = unknown
    >(
      variables: ShareLinksQueryVariables,
      options?: UseQueryOptions<ShareLinksQuery, TError, TData>
    ) =>
    useQuery<ShareLinksQuery, TError, TData>(
      ['ShareLinks', variables],
      fetcher<ShareLinksQuery, ShareLinksQueryVariables>(ShareLinksDocument, variables),
      options
    );

useShareLinksQuery.getKey = (variables: ShareLinksQueryVariables) => ['ShareLinks', variables];
;

export const SharedAssetsDocument = `
    query SharedAssets($permissionToken: String!) {
  sharedAssets(permissionToken: $permissionToken) {
    id
    title
    description
    copyright {
      status
      notice
      isDownloadConsentRequired
    }
    licenses {
      id
      title
      license
      requireConsensus
    }
    ... on Image {
      downloadUrl
      extension
      filename
      height
      size
      previewUrl
      width
    }
    ... on Audio {
      downloadUrl
      extension
      filename
      size
      previewUrl
    }
    ... on Video {
      downloadUrl
      extension
      filename
      size
      previewUrl
      width
      height
    }
    ... on Document {
      downloadUrl
      extension
      filename
      height
      size
      previewUrl
      width
      pageCount
    }
    ... on File {
      downloadUrl
      extension
      filename
      size
      previewUrl
    }
    ... on EmbeddedContent {
      sourceUrl
      html
    }
  }
}
    `;
export const useSharedAssetsQuery = <
      TData = SharedAssetsQuery,
      TError = unknown
    >(
      variables: SharedAssetsQueryVariables,
      options?: UseQueryOptions<SharedAssetsQuery, TError, TData>
    ) =>
    useQuery<SharedAssetsQuery, TError, TData>(
      ['SharedAssets', variables],
      fetcher<SharedAssetsQuery, SharedAssetsQueryVariables>(SharedAssetsDocument, variables),
      options
    );

useSharedAssetsQuery.getKey = (variables: SharedAssetsQueryVariables) => ['SharedAssets', variables];
;

export const UpdateShareLinkDocument = `
    mutation updateShareLink($input: UpdateShareLinkInput!) {
  updateShareLink(input: $input) {
    shareLink {
      id
      isEnabled
      isPasswordProtected
      expiresAt
    }
  }
}
    `;
export const useUpdateShareLinkMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateShareLinkMutation, TError, UpdateShareLinkMutationVariables, TContext>) =>
    useMutation<UpdateShareLinkMutation, TError, UpdateShareLinkMutationVariables, TContext>(
      ['updateShareLink'],
      (variables?: UpdateShareLinkMutationVariables) => fetcher<UpdateShareLinkMutation, UpdateShareLinkMutationVariables>(UpdateShareLinkDocument, variables)(),
      options
    );
export const CreatePermissionTokenDocument = `
    mutation createPermissionToken($input: CreatePermissionTokenInput!) {
  createPermissionToken(input: $input) {
    permissionToken
  }
}
    `;
export const useCreatePermissionTokenMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreatePermissionTokenMutation, TError, CreatePermissionTokenMutationVariables, TContext>) =>
    useMutation<CreatePermissionTokenMutation, TError, CreatePermissionTokenMutationVariables, TContext>(
      ['createPermissionToken'],
      (variables?: CreatePermissionTokenMutationVariables) => fetcher<CreatePermissionTokenMutation, CreatePermissionTokenMutationVariables>(CreatePermissionTokenDocument, variables)(),
      options
    );
export const CreateShareLinkDocument = `
    mutation createShareLink($input: CreateShareLinkInput!) {
  createShareLink(input: $input) {
    shareLink {
      id
      url
      isEnabled
      isPasswordProtected
      hasExpirationDate
      expiresAt
    }
  }
}
    `;
export const useCreateShareLinkMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateShareLinkMutation, TError, CreateShareLinkMutationVariables, TContext>) =>
    useMutation<CreateShareLinkMutation, TError, CreateShareLinkMutationVariables, TContext>(
      ['createShareLink'],
      (variables?: CreateShareLinkMutationVariables) => fetcher<CreateShareLinkMutation, CreateShareLinkMutationVariables>(CreateShareLinkDocument, variables)(),
      options
    );
export const DeleteShareLinkDocument = `
    mutation deleteShareLink($input: DeleteShareLinkInput!) {
  deleteShareLink(input: $input) {
    shareLinkId
  }
}
    `;
export const useDeleteShareLinkMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteShareLinkMutation, TError, DeleteShareLinkMutationVariables, TContext>) =>
    useMutation<DeleteShareLinkMutation, TError, DeleteShareLinkMutationVariables, TContext>(
      ['deleteShareLink'],
      (variables?: DeleteShareLinkMutationVariables) => fetcher<DeleteShareLinkMutation, DeleteShareLinkMutationVariables>(DeleteShareLinkDocument, variables)(),
      options
    );
export const PermissionTokenDocument = `
    mutation permissionToken($input: CreateShareLinkPermissionTokenInput!) {
  createShareLinkPermissionToken(input: $input) {
    permissionToken
  }
}
    `;
export const usePermissionTokenMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<PermissionTokenMutation, TError, PermissionTokenMutationVariables, TContext>) =>
    useMutation<PermissionTokenMutation, TError, PermissionTokenMutationVariables, TContext>(
      ['permissionToken'],
      (variables?: PermissionTokenMutationVariables) => fetcher<PermissionTokenMutation, PermissionTokenMutationVariables>(PermissionTokenDocument, variables)(),
      options
    );
export const CustomMetadataPropertySelectionDocument = `
    query CustomMetadataPropertySelection($id: ID!, $assetIds: [ID!]!) {
  library(id: $id) {
    aggregatedAssetsCustomMetadata(assetIds: $assetIds) {
      property {
        ...propertyFields
      }
      values {
        ...valuesSelectionFields
      }
    }
  }
}
    ${PropertyFieldsFragmentDoc}
${ValuesSelectionFieldsFragmentDoc}`;
export const useCustomMetadataPropertySelectionQuery = <
      TData = CustomMetadataPropertySelectionQuery,
      TError = unknown
    >(
      variables: CustomMetadataPropertySelectionQueryVariables,
      options?: UseQueryOptions<CustomMetadataPropertySelectionQuery, TError, TData>
    ) =>
    useQuery<CustomMetadataPropertySelectionQuery, TError, TData>(
      ['CustomMetadataPropertySelection', variables],
      fetcher<CustomMetadataPropertySelectionQuery, CustomMetadataPropertySelectionQueryVariables>(CustomMetadataPropertySelectionDocument, variables),
      options
    );

useCustomMetadataPropertySelectionQuery.getKey = (variables: CustomMetadataPropertySelectionQueryVariables) => ['CustomMetadataPropertySelection', variables];
;

export const SetCustomMetadataPropertySelectionDocument = `
    mutation SetCustomMetadataPropertySelection($input: SetAssetsCustomMetadataInput!) {
  setAssetsCustomMetadata(input: $input) {
    assetIds
  }
}
    `;
export const useSetCustomMetadataPropertySelectionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SetCustomMetadataPropertySelectionMutation, TError, SetCustomMetadataPropertySelectionMutationVariables, TContext>) =>
    useMutation<SetCustomMetadataPropertySelectionMutation, TError, SetCustomMetadataPropertySelectionMutationVariables, TContext>(
      ['SetCustomMetadataPropertySelection'],
      (variables?: SetCustomMetadataPropertySelectionMutationVariables) => fetcher<SetCustomMetadataPropertySelectionMutation, SetCustomMetadataPropertySelectionMutationVariables>(SetCustomMetadataPropertySelectionDocument, variables)(),
      options
    );
export const AddCustomMetadataPropertySelectionDocument = `
    mutation AddCustomMetadataPropertySelection($input: AddAssetsCustomMetadataInput!) {
  addAssetsCustomMetadata(input: $input) {
    assetIds
  }
}
    `;
export const useAddCustomMetadataPropertySelectionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddCustomMetadataPropertySelectionMutation, TError, AddCustomMetadataPropertySelectionMutationVariables, TContext>) =>
    useMutation<AddCustomMetadataPropertySelectionMutation, TError, AddCustomMetadataPropertySelectionMutationVariables, TContext>(
      ['AddCustomMetadataPropertySelection'],
      (variables?: AddCustomMetadataPropertySelectionMutationVariables) => fetcher<AddCustomMetadataPropertySelectionMutation, AddCustomMetadataPropertySelectionMutationVariables>(AddCustomMetadataPropertySelectionDocument, variables)(),
      options
    );
export const RemoveCustomMetadataPropertySelectionDocument = `
    mutation RemoveCustomMetadataPropertySelection($input: RemoveAssetsCustomMetadataInput!) {
  removeAssetsCustomMetadata(input: $input) {
    assetIds
  }
}
    `;
export const useRemoveCustomMetadataPropertySelectionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<RemoveCustomMetadataPropertySelectionMutation, TError, RemoveCustomMetadataPropertySelectionMutationVariables, TContext>) =>
    useMutation<RemoveCustomMetadataPropertySelectionMutation, TError, RemoveCustomMetadataPropertySelectionMutationVariables, TContext>(
      ['RemoveCustomMetadataPropertySelection'],
      (variables?: RemoveCustomMetadataPropertySelectionMutationVariables) => fetcher<RemoveCustomMetadataPropertySelectionMutation, RemoveCustomMetadataPropertySelectionMutationVariables>(RemoveCustomMetadataPropertySelectionDocument, variables)(),
      options
    );
export const SetCustomMetadataDocument = `
    mutation SetCustomMetadata($input: SetCustomMetadataInput!) {
  setCustomMetadata(input: $input) {
    parentIds
  }
}
    `;
export const useSetCustomMetadataMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SetCustomMetadataMutation, TError, SetCustomMetadataMutationVariables, TContext>) =>
    useMutation<SetCustomMetadataMutation, TError, SetCustomMetadataMutationVariables, TContext>(
      ['SetCustomMetadata'],
      (variables?: SetCustomMetadataMutationVariables) => fetcher<SetCustomMetadataMutation, SetCustomMetadataMutationVariables>(SetCustomMetadataDocument, variables)(),
      options
    );
export const UpdateWorkspaceProjectDocument = `
    mutation UpdateWorkspaceProject($input: UpdateWorkspaceProjectInput!) {
  updateWorkspaceProject(input: $input) {
    project {
      id
      name
      description
      beginsAt
      endsAt
    }
  }
}
    `;
export const useUpdateWorkspaceProjectMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateWorkspaceProjectMutation, TError, UpdateWorkspaceProjectMutationVariables, TContext>) =>
    useMutation<UpdateWorkspaceProjectMutation, TError, UpdateWorkspaceProjectMutationVariables, TContext>(
      ['UpdateWorkspaceProject'],
      (variables?: UpdateWorkspaceProjectMutationVariables) => fetcher<UpdateWorkspaceProjectMutation, UpdateWorkspaceProjectMutationVariables>(UpdateWorkspaceProjectDocument, variables)(),
      options
    );
export const UpdateWorkspaceProjectNameDocument = `
    mutation UpdateWorkspaceProjectName($input: UpdateWorkspaceProjectInput!) {
  updateWorkspaceProject(input: $input) {
    project {
      name
    }
  }
}
    `;
export const useUpdateWorkspaceProjectNameMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateWorkspaceProjectNameMutation, TError, UpdateWorkspaceProjectNameMutationVariables, TContext>) =>
    useMutation<UpdateWorkspaceProjectNameMutation, TError, UpdateWorkspaceProjectNameMutationVariables, TContext>(
      ['UpdateWorkspaceProjectName'],
      (variables?: UpdateWorkspaceProjectNameMutationVariables) => fetcher<UpdateWorkspaceProjectNameMutation, UpdateWorkspaceProjectNameMutationVariables>(UpdateWorkspaceProjectNameDocument, variables)(),
      options
    );
export const UpdateWorkspaceProjectDescriptionDocument = `
    mutation UpdateWorkspaceProjectDescription($input: UpdateWorkspaceProjectInput!) {
  updateWorkspaceProject(input: $input) {
    project {
      description
    }
  }
}
    `;
export const useUpdateWorkspaceProjectDescriptionMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateWorkspaceProjectDescriptionMutation, TError, UpdateWorkspaceProjectDescriptionMutationVariables, TContext>) =>
    useMutation<UpdateWorkspaceProjectDescriptionMutation, TError, UpdateWorkspaceProjectDescriptionMutationVariables, TContext>(
      ['UpdateWorkspaceProjectDescription'],
      (variables?: UpdateWorkspaceProjectDescriptionMutationVariables) => fetcher<UpdateWorkspaceProjectDescriptionMutation, UpdateWorkspaceProjectDescriptionMutationVariables>(UpdateWorkspaceProjectDescriptionDocument, variables)(),
      options
    );
export const UpdateWorkspaceProjectBeginsAtDocument = `
    mutation UpdateWorkspaceProjectBeginsAt($input: UpdateWorkspaceProjectInput!) {
  updateWorkspaceProject(input: $input) {
    project {
      beginsAt
    }
  }
}
    `;
export const useUpdateWorkspaceProjectBeginsAtMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateWorkspaceProjectBeginsAtMutation, TError, UpdateWorkspaceProjectBeginsAtMutationVariables, TContext>) =>
    useMutation<UpdateWorkspaceProjectBeginsAtMutation, TError, UpdateWorkspaceProjectBeginsAtMutationVariables, TContext>(
      ['UpdateWorkspaceProjectBeginsAt'],
      (variables?: UpdateWorkspaceProjectBeginsAtMutationVariables) => fetcher<UpdateWorkspaceProjectBeginsAtMutation, UpdateWorkspaceProjectBeginsAtMutationVariables>(UpdateWorkspaceProjectBeginsAtDocument, variables)(),
      options
    );
export const UpdateWorkspaceProjectEndsAtDocument = `
    mutation UpdateWorkspaceProjectEndsAt($input: UpdateWorkspaceProjectInput!) {
  updateWorkspaceProject(input: $input) {
    project {
      endsAt
    }
  }
}
    `;
export const useUpdateWorkspaceProjectEndsAtMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateWorkspaceProjectEndsAtMutation, TError, UpdateWorkspaceProjectEndsAtMutationVariables, TContext>) =>
    useMutation<UpdateWorkspaceProjectEndsAtMutation, TError, UpdateWorkspaceProjectEndsAtMutationVariables, TContext>(
      ['UpdateWorkspaceProjectEndsAt'],
      (variables?: UpdateWorkspaceProjectEndsAtMutationVariables) => fetcher<UpdateWorkspaceProjectEndsAtMutation, UpdateWorkspaceProjectEndsAtMutationVariables>(UpdateWorkspaceProjectEndsAtDocument, variables)(),
      options
    );