namespace Daze.Interfaces {

    export interface ITag {
        id: string;
        tagName: string;
        posts: Array<IPost>;
    }
}
