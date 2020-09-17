
//Fonction lambda 

/*
const foo = () => 'bar'

// Maintient le `this`
var o = {
  foo: function () {
    return this;
  }
};

var p = {
  foo: () => this,
};

console.log(this === o.foo()); // false
console.log(this === p.foo()); // true

console.log(this === o.foo.bind(this)()); // true
*/
// Déstructuration
const arr = ['one!', 'two!', 'three!'];
const [one, two, three] = arr;
console.log(arr)// ['one!', 'two!', 'three!']
console.log(one)//one!
console.log(two)//two!
console.log(three)//three!