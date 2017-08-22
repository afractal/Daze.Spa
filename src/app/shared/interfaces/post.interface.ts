namespace Daze.Interfaces {

    export interface IPost {
        id: string;
        title: string;
        slug: string;
        heroContent: string;
        content: string;
        cùoverImage: string;
        createdAt: Date;
        modifiedAt: Date;
        tags: Array<ITag>;
    }
}
