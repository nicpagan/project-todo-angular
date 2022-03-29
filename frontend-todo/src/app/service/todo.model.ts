export class Todo {
    constructor(
        public message: string,
        public id?: number,
        public completed: boolean = false,
    ) { }
}