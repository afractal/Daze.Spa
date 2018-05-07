import { Post, Project, Resource } from '../domain';

export type PostsState = Readonly<{
    items: Post[]
    loading: boolean
    offset: number
    limit: number
}>;

export type PostState = Readonly<{
    item: Post
    loading: boolean
}>;

export type ProjectsState = Readonly<{
    items: Project[]
    loading: boolean
}>;

export type ResourcesState = Readonly<{
    items: Resource[]
    loading: boolean
}>;

export type RootState = Readonly<{
    posts: PostsState
    post: PostState
    projects: ProjectsState
    resources: ResourcesState
}>;
