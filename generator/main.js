function* gen() {
  let i = 1;
  while (true) {
    if (i === 4) {
      return 4;
    }
    yield i;

    i = i * 2;
  }
}
const generator = gen();
console.log(generator.next(), generator.next(), generator.next());
