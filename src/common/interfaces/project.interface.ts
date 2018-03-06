namespace Daze.Interfaces {

    export interface Project {
        id: string;
        projectName: string;
        description: string;
        url: string;
        publishedYear?: number;
    }
}
