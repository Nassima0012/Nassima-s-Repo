// Task 1 : Warm up !

let person = {
    _firstname : 'Ayoub',
    _lastname : 'El haraoui',
    _age: 23,
    fullname: function () {
      return `"<${this.firstname}> <${this.lastname}>"`
    },
    set: function(NewFirstName, NewLastName) {
        this._firstname = NewFirstName;
        this._lastname = NewLastName;
      }
  }
  console.log(person.fullname());
  person.set('Mohamed','El haraoui');
  
  // Task 2 : Are you Older Than me ?
  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(otherPerson) {
      if (this.age < otherPerson.age) {
        return `${otherPerson.name} is older than me.`;
      } else if (this.age > otherPerson.age) {
        return `${otherPerson.name} is younger than me.`;
      } else {
        return `${otherPerson.name} is the same age as me.`;
      }
    }
  }
  
  // Example usage
  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);
  
  console.log(p1.compareAge(p2)); // Output: "Joel is older than me."
  console.log(p2.compareAge(p1)); // Output: "Samuel is younger than me."
  console.log(p1.compareAge(p3)); // Output: "Lily is the same age as me."
  
  
  // Task 3 : Most Occurred
  
  function mostOccurred(array){
      let T = [];
      let MaxC = 0 ;
      let Max = 0 ;
      // Set a new Table T for no repetition
      for (let i = 0; i < array.length; i++) {
          let found = false;
        
          for (let j = 0; j < T.length; j++) {
              if (T[j] === array[i]) {
                  found = true;
                  break;
              }
          }
  
          if (!found) {
              T.push(array[i]);
          }
      }
  
      if(T.length<array.length){
        for (let i = 0; i < T.length; i++) {
          let C = 0
          for (let j = 0; j < array.length; j++) {
              if(T[i]==array[j]){
                C ++
              }
              
          }
          if(C>Max){
              MaxC = C
              Max = T[i]
  
          }
          
          }
          return ` ${Max} is the most accurred number , number of repetition is ${MaxC}`
      }
      else{
          return `There is No repetitions in The Table`
      }
  }
  
  
  const array = [3, 2, 2, 7, 2]
  console.log(mostOccurred(array))