function A() {

}
A.prototype.n = 1

var b = new A()
const b1 = new A()

A.prototype = {
  n: 2,
  m: 3
}
// A.prototype.m = 3

var c = new A()
const c1 = new A()

console.log(b.n, b.m, c.n, c.m)
console.log(b1.n, b1.m, c1.n, c1.m)
