import Person from '../Person/Person';

class Student extends Person {
    private _schoolYear: number;
    private _averageGrade: number;

    constructor(name: String, age: number, schoolYear: number, averageGrade: number) {
        super(name, age);
        this.schoolYear = schoolYear;
        this.averageGrade = averageGrade;
    }
    
    public get schoolYear(): number {
        return this._schoolYear;
    }

    public set schoolYear(value: number) {
        this._schoolYear = value;
    }

    public get averageGrade(): number {
        return this._averageGrade;
    }

    public set averageGrade(value: number) {
        this._averageGrade = value;
    }

    toString(): String {
        return `${super.toString()} I am in ${this.schoolYear} year of university, and my average grade is ${this.averageGrade}.`;
    }
}

export default Student;