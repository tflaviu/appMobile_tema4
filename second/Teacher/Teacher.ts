import Person from '../Person/Person';

class Teacher extends Person {
    private _className: String;
    private _title: String;
   
    constructor (name: String, age: number, className: String, title: String) {
        super(name, age);
        this.className = className;
        this.title = title;
    }

    public get className(): String {
        return this._className;
    }

    public set className(value: String) {
        this._className = value;
    }
    
    public get title(): String {
        return this._title;
    }

    public set title(value: String) {
        this._title = value;
    }

    toString(): String {
        return `${super.toString()} I am a teacher. My class is ${this.className} and my title is ${this.title}.`;
    }
}

export default Teacher;