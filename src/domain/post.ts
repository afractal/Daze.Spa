
export type Post = {
    id: string
    slug: string
    title: string
    heroContent: string | undefined
    content: string | undefined
    coverImage: string | undefined
    createdAt: Date
    modifiedAt: Date
    // tags: Array<Tag>;
};

