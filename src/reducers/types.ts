import { Post, Project, Resource, Skill, Book } from '../domain';

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

export type SkillsState = Readonly<{
    items: Skill[]
    loading: boolean
}>;

export type BooksState = Readonly<{
    items: Book[]
    loading: boolean
}>;

export type RootState = Readonly<{
    posts: PostsState
    post: PostState
    projects: ProjectsState
    resources: ResourcesState
    skills: SkillsState
    books: BooksState
}>;
