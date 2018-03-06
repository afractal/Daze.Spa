namespace Daze.Interfaces {

    export interface Skill {
        id: string;
        name: string | null;
        level: number | null;
        focusArea: string;
        courses: Array<Course>;
    }
}
