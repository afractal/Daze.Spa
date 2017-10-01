import IPost = Daze.Interfaces.IPost;
import ITag = Daze.Interfaces.ITag;

export class Post implements IPost {
    id: string;
    title: string;
    slug: string;
    heroContent: string;
    content: string;
    coverImage: string;
    createdAt: Date;
    modifiedAt: Date;
    tags: Array<ITag>;
}
