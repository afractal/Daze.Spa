import { Post, Project, Resource, Skill } from '../domain';

export const POSTS_REQUESTED = 'POSTS_REQUESTED';
export const POSTS_SUCCEEDED = 'POSTS_SUCCEEDED';
export const POSTS_FAILED = 'POSTS_FAILED';

export const POST_REQUESTED = 'POST_REQUESTED';
export const POST_SUCCEEDED = 'POST_SUCCEEDED';
export const POST_FAILED = 'POST_FAILED';

export const PROJECTS_REQUESTED = 'PROJECTS_REQUESTED';
export const PROJECTS_SUCCEEDED = 'PROJECTS_SUCCEEDED';
export const PROJECTS_FAILED = 'PROJECTS_FAILED';

export const RESOURCES_REQUESTED = 'RESOURCES_REQUESTED';
export const RESOURCES_SUCCEEDED = 'RESOURCES_SUCCEEDED';
export const RESOURCES_FAILED = 'RESOURCES_FAILED';

export const SKILLS_REQUESTED = 'SKILLS_REQUESTED';
export const SKILLS_SUCCEEDED = 'SKILLS_SUCCEEDED';
export const SKILLS_FAILED = 'SKILLS_FAILED';

export type PostsRequestedType = 'POSTS_REQUESTED';
export type PostsSucceededType = 'POSTS_SUCCEEDED';
export type PostsFailedType = 'POSTS_FAILED';

export type PostRequestedType = 'POST_REQUESTED';
export type PostSucceededType = 'POST_SUCCEEDED';
export type PostFailedType = 'POST_FAILED';

export type ProjectsRequestedType = 'PROJECTS_REQUESTED';
export type ProjectsSucceededType = 'PROJECTS_SUCCEEDED';
export type ProjectsFailedType = 'PROJECTS_FAILED';

export type ResourcesRequestedType = 'RESOURCES_REQUESTED';
export type ResourcesSucceededType = 'RESOURCES_SUCCEEDED';
export type ResourcesFailedType = 'RESOURCES_FAILED';

export type SkillsRequestedType = 'SKILLS_REQUESTED';
export type SkillsSucceededType = 'SKILLS_SUCCEEDED';
export type SkillsFailedType = 'SKILLS_FAILED';

export type PostsRequestedPayload = {
    readonly offset: number
    readonly limit: number
};
export type PostsSucceededPayload = {
    readonly posts: Post[]
    readonly offset: number
    readonly limit: number
};
export type PostsFailedPayload = {
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

export type ResourcesRequestedPayload = {
};
export type ResourcesSucceededPayload = {
    readonly resources: Resource[]
};
export type ResourcesFailedPayload = {
};

export type SkillsRequestedPayload = {
};
export type SkillsSucceededPayload = {
    readonly skills: Skill[]
};
export type SkillsFailedPayload = {
};

export type PostsPayloads =
    PostsRequestedPayload |
    PostsSucceededPayload |
    PostsFailedPayload
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

export type ResourcesPayloads =
    ResourcesRequestedPayload |
    ResourcesSucceededPayload |
    ResourcesFailedPayload
    ;

export type SkillsPayloads =
    SkillsRequestedPayload |
    SkillsSucceededPayload |
    SkillsFailedPayload
    ;

type PostsActionTypes =
    PostsRequestedType |
    PostsSucceededType |
    PostsFailedType
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

type ResourcesActionTypes =
    ResourcesRequestedType |
    ResourcesSucceededType |
    ResourcesFailedType
    ;

type SkillsActionTypes =
    SkillsRequestedType |
    SkillsSucceededType |
    SkillsFailedType
    ;

export type ActionPayloads =
    PostsPayloads |
    PostActionTypes |
    ProjectsPayloads |
    ResourcesPayloads |
    SkillsPayloads
    ;

export type ActionTypes =
    PostsActionTypes |
    PostActionTypes |
    ProjectsActionTypes |
    ResourcesActionTypes |
    SkillsActionTypes
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

export type ResourcesActions =
    Action<ResourcesRequestedType, ResourcesRequestedPayload> |
    Action<ResourcesSucceededType, ResourcesSucceededPayload> |
    Action<ResourcesFailedType, ResourcesFailedPayload>
    ;

export type SkillsActions =
    Action<SkillsRequestedType, SkillsRequestedPayload> |
    Action<SkillsSucceededType, SkillsSucceededPayload> |
    Action<SkillsFailedType, SkillsFailedPayload>
    ;
