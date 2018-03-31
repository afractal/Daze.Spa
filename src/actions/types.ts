import { Dispatch as ReduxDispatch } from 'redux';
import { Post } from 'src/domain';

export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_SUCCEEDED = 'POSTS_SUCCEEDED';
export const POSTS_FAILED = 'POSTS_FAILED';

export type PostsRequestedType = 'POSTS_REQUESTED';
export type PostsSucceededType = 'POSTS_SUCCEEDED';
export type PostsFailedType = 'POSTS_FAILED';

export type PostsRequestedPayload = {
};
export type PostsSucceededPayload = {
    readonly posts: Post[]
};
export type PostsFailedPayload = {
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

export type AllAction = {
    type: ActionTypes
    payload: ActionPayloads
};

export type Action<TAction, TPayload> = {
    type: TAction
    payload: TPayload
};

export type PostsActions =
    Action<PostsRequestedType, PostsRequestedPayload> |
    Action<PostsSucceededType, PostsSucceededPayload> |
    Action<PostsFailedType, PostsFailedPayload>
    ;

export type ApplicationDispatch<T> = ReduxDispatch<T>;
