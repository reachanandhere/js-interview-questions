// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     },
//   };

// const me = Object.create(person)
// me.name = "Anand"
// me.printIntroduction()

// const object1 = {
//     value: 45
// };

// Object.defineProperty(object1, 'value', {
//   value: 42,
//   writable: true,
// });

// console.log(object1.value);

function f(){
    let x = 10;
    {
        
        console.log(x)
        let x=0;
    }   
}

f()