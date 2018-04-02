import { Dispatch as ReduxDispatch } from 'redux';
import { Post, Project } from 'src/domain';

export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_SUCCEEDED = 'POSTS_SUCCEEDED';
export const POSTS_FAILED = 'POSTS_FAILED';

export const PROJECTS_REQUESTED = 'PROJECTS_REQUESTED';
export const PROJECTS_SUCCEEDED = 'PROJECTS_SUCCEEDED';
export const PROJECTS_FAILED = 'PROJECTS_FAILED';

export type PostsRequestedType = 'POSTS_REQUESTED';
export type PostsSucceededType = 'POSTS_SUCCEEDED';
export type PostsFailedType = 'POSTS_FAILED';

export type ProjectsRequestedType = 'PROJECTS_REQUESTED';
export type ProjectsSucceededType = 'PROJECTS_SUCCEEDED';
export type ProjectsFailedType = 'PROJECTS_FAILED';

export type PostsRequestedPayload = {
};
export type PostsSucceededPayload = {
    readonly posts: Post[]
};
export type PostsFailedPayload = {
};

export type ProjectsRequestedPayload = {
};
export type ProjectsSucceededPayload = {
    readonly projects: Project[]
};
export type ProjectsFailedPayload = {
};

export type PostsPayloads =
    PostsRequestedPayload |
    PostsSucceededPayload |
    PostsFailedPayload
    ;

export type ProjectsPayloads =
    ProjectsRequestedPayload |
    ProjectsSucceededPayload |
    ProjectsFailedPayload
    ;

type PostsActionTypes =
    PostsRequestedType |
    PostsSucceededType |
    PostsFailedType
    ;

type ProjectsActionTypes =
    ProjectsRequestedType |
    ProjectsSucceededType |
    ProjectsFailedType
    ;

export type ActionPayloads =
    PostsPayloads |
    ProjectsPayloads
    ;

export type ActionTypes =
    PostsActionTypes |
    ProjectsActionTypes
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

export type ProjectsActions =
    Action<ProjectsRequestedType, ProjectsRequestedPayload> |
    Action<ProjectsSucceededType, ProjectsSucceededPayload> |
    Action<ProjectsFailedType, ProjectsFailedPayload>
    ;

export type ApplicationDispatch<T> = ReduxDispatch<T>;
