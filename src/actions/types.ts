
export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_SUCCEEDED = 'POSTS_SUCCEEDED';
export const POSTS_FAILED = 'POSTS_FAILED';

type PostsRequestedType = 'POSTS_REQUESTED';
type PostsSucceededType = 'POSTS_SUCCEEDED';
type PostsFailedType = 'POSTS_FAILED';

type PostsRequestedPayload = {
};
type PostsSucceededPayload = {
};
type PostsFailedPayload = {
};

export type PostsPayloads =
    PostsRequestedPayload |
    PostsSucceededPayload |
    PostsFailedPayload
    ;

type PostsActionTypes =
    PostsRequestedType |
    PostsSucceededType |
    PostsFailedType
    ;

export type ActionPayloads =
    PostsPayloads
    ;

export type ActionTypes =
    PostsActionTypes
    ;

export type Action = {
    type: ActionTypes
    payload: ActionPayloads
};

type Action2<TAction, TPayload> = {
    type: TAction
    payload: TPayload
};

export type PostsActions =
    Action2<PostsRequestedType, PostsRequestedPayload> |
    Action2<PostsRequestedType, PostsRequestedPayload> |
    Action2<PostsRequestedType, PostsRequestedPayload>
    ;
