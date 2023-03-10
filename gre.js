// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];



function lookUpProfile(name, prop) {
    
    for (let i = 0; i < contacts.length; i++) {
        
        if(contacts[i].firstName == name){

            if(Object.hasOwn(contacts[i], prop)){

                return contacts[i][prop];
            }else{
                return "No such property";
            }
        }
    
    }

    const resultado = contacts.findIndex( elemento => elemento.firstName === name );

    if(resultado === -1){
        return "No such contact";
    }


}




lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "number");
lookUpProfile("Bob", "potato");
lookUpProfile("Akira", "address");

//console.log(lookUpProfile("Akira", "likes")); //array
//console.log(lookUpProfile("Kristian", "lastName")); //VOS
//console.log(lookUpProfile("Harry", "likes")); //array
//lookUpProfile("Bob", "number") //should return the string No such contact
//lookUpProfile("Bob", "potato") //should return the string No such contact
//console.log(lookUpProfile("Akira", "address")); //should return the string No such property