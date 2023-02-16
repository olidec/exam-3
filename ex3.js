let myObject = {
    firstName: "Peter",
    lastName: "Pan",
    age: 132,
    lostBoy: 6,
    getFullName: function () {
        return '${this.firstName} ${this.lastName}'
    },
    attackHook: function () {
        console.log('tick tock')
    },
    summary: function () {
        return '${this.firstName} ${this.lastName} is ${this.age} years old and has lost ${this.lostBoy} boys'
    }
}