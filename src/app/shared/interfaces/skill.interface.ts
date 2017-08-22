namespace Daze.Interfaces {

    export interface ISkill {
        id: string;
        name: string | null;
        level: number | null;
        focusArea: string;
        courses: Array<ICourse>;
    }
}
