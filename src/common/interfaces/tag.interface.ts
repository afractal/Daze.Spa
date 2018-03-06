namespace Daze.Interfaces {

    export interface Tag {
        id: string;
        tagName: string;
        posts: Array<Post>;
    }
}
