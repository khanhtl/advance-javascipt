function tagFunction(strings, numExp, fruitExp) {
    console.log(strings);
    const str0 = strings[0];
    const str1 = strings[1];
    const str2 = strings[2];
    const quantity = numExp < 10 ? 'very few' : 'a lot';
    return str0 + quantity + str1 + fruitExp + str2;
}

const fruit = 'apple', num = 8;
const output = tagFunction`We have ${num} of ${fruit}. Exciting`;
console.log(output);