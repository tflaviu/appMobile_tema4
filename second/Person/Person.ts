class Person {
    private _name: String;
    private _age: number;

    constructor(name: String, age: number) {
        this.name = name;
        this.age = age;
    }

    public get name(): String {
        return this._name;
    }

    public set name(value: String) {
        this._name = value;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

    toString(): String {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}

export default Person;