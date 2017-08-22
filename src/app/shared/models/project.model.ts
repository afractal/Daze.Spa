import IProject = Daze.Interfaces.IProject;

export class Project implements IProject {
    id: string;
    projectName: string;
    description: string;
    url: string;
}
