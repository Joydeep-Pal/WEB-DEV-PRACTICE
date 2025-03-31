
function Guest(Name,Age){
    this.Name = Name;
    this.Age = Age;
}

var guest1 = new Guest("ABC",19);
var guest2 = new Guest("DEF",22);

console.log(guest1.Name); // ABC
console.log(guest1.Age);  // 19