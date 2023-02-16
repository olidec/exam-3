let myObject = {
    firstName: "Peter",
    lastName: "Pan",
    age: 132,
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    attackHook: function(){
        console.log("tick tock");
    },
    lostBoys: 6,
    summary: function(){
        return `${this.getFullName()} is ${this.age} years old and has lost ${this.lostBoys} boys`;
    }
}
myObject.attackHook();


let text = myObject.summary();
document.getElementById("testLine").innerHTML = text;