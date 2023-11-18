const compose = (f, g) => (a) => f(g(a));

const sum = (a) => a + 1;
console.log(compose(sum, sum)(5));