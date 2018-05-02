import { Post, Project } from 'src/domain';

export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_SUCCEEDED = 'POSTS_SUCCEEDED';
export const POSTS_FAILED = 'POSTS_FAILED';

export const MORE_POSTS_REQUESTED = 'MORE_POSTS_REQUESTED';
export const MORE_POSTS_SUCCEEDED = 'MORE_POSTS_SUCCEEDED';
export const MORE_POSTS_FAILED = 'MORE_POSTS_FAILED';

export const POST_REQUESTED = 'POST_REQUESTED';
export const POST_SUCCEEDED = 'POST_SUCCEEDED';
export const POST_FAILED = 'POST_FAILED';

export const PROJECTS_REQUESTED = 'PROJECTS_REQUESTED';
export const PROJECTS_SUCCEEDED = 'PROJECTS_SUCCEEDED';
export const PROJECTS_FAILED = 'PROJECTS_FAILED';

export type PostsRequestedType = 'POSTS_REQUESTED';
export type PostsSucceededType = 'POSTS_SUCCEEDED';
export type PostsFailedType = 'POSTS_FAILED';

export type MorePostsRequestedType = 'MORE_POSTS_REQUESTED';
export type MorePostsSucceededType = 'MORE_POSTS_SUCCEEDED';
export type MorePostsFailedType = 'MORE_POSTS_FAILED';

export type PostRequestedType = 'POST_REQUESTED';
export type PostSucceededType = 'POST_SUCCEEDED';
export type PostFailedType = 'POST_FAILED';

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

export type MorePostsRequestedPayload = {
};
export type MorePostsSucceededPayload = {
    readonly posts: Post[]
};
export type MorePostsFailedPayload = {
};

export type PostRequestedPayload = {
    readonly slug: string
};
export type PostSucceededPayload = {
    readonly post: Post
};
export type PostFailedPayload = {
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

export type MorePostsPayloads =
    MorePostsRequestedPayload |
    MorePostsSucceededPayload |
    MorePostsFailedPayload
    ;

export type PostPayloads =
    PostRequestedPayload |
    PostSucceededPayload |
    PostFailedPayload
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

type MorePostsActionTypes =
    MorePostsRequestedType |
    MorePostsSucceededType |
    MorePostsFailedType
    ;

type PostActionTypes =
    PostRequestedType |
    PostSucceededType |
    PostFailedType
    ;

type ProjectsActionTypes =
    ProjectsRequestedType |
    ProjectsSucceededType |
    ProjectsFailedType
    ;

export type ActionPayloads =
    PostsPayloads |
    MorePostsActionTypes |
    PostActionTypes |
    ProjectsPayloads
    ;

export type ActionTypes =
    PostsActionTypes |
    MorePostsActionTypes |
    PostActionTypes |
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

export type MorePostsActions =
    Action<MorePostsRequestedType, MorePostsRequestedPayload> |
    Action<MorePostsSucceededType, MorePostsSucceededPayload> |
    Action<MorePostsFailedType, MorePostsFailedPayload>
    ;

export type PostActions =
    Action<PostRequestedType, PostRequestedPayload> |
    Action<PostSucceededType, PostSucceededPayload> |
    Action<PostFailedType, PostFailedPayload>
    ;

export type ProjectsActions =
    Action<ProjectsRequestedType, ProjectsRequestedPayload> |
    Action<ProjectsSucceededType, ProjectsSucceededPayload> |
    Action<ProjectsFailedType, ProjectsFailedPayload>
    ;
