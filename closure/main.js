function counter() {
    let count = 0;
    return () => {
        count++;
        console.log(count);
        return count;
    }
}

let accessCounter = counter();
accessCounter();
accessCounter();
accessCounter();
accessCounter();