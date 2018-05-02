import { Post, Project } from 'src/domain';

export type PostsState = {
    readonly items: Post[]
    readonly loading: boolean
    readonly offset: number
    readonly limit: number
};

export type PostState = {
    readonly item: Post
    readonly loading: boolean
};

export type ProjectsState = {
    readonly items: Project[]
    readonly loading: boolean
};

export type RootState = {
    posts: PostsState
    post: PostState
    projects: ProjectsState
};
