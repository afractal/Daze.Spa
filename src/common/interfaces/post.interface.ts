namespace Daze.Interfaces {

    export interface Post {
        id: string;
        title: string;
        slug: string;
        heroContent: string;
        content: string;
        coverImage: string;
        createdAt: Date;
        modifiedAt: Date;
        tags: Array<Tag>;
    }
}
