namespace Daze.Interfaces {

    export interface IProject {
        id: string;
        projectName: string;
        description: string;
        url: string;
        publishedYear?: number;
    }
}
