let myObject = {
    firstName: "Peter",
    lastName: "Pan",
    age: 127,
    getFullName: function() {
        return '${this.firstName} ${this.lastName}'
    },
    attackHook: function() {
        console.log('tick tock')
    },
    lostBoys: 4,
    summary: `${myObject.firstName} ${myObject.lastName} is ${myObject.age} years old and has ${myObject.lostBoys} boys`
}
