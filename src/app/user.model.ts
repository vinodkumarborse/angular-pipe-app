export class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public age: number;
    public role: string;

    constructor(id: number, firstName: string, lastName: string, age: number, role: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.role = role;
    }
}