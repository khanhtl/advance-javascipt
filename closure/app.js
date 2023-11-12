function counter(initialCount = 1) {
    let count = initialCount;
    return {
        increment() {
            count++;
            console.log(count);
            return count;
        }
    }
}

let accessCounter = counter(1);
accessCounter.increment();
accessCounter.increment();
accessCounter.increment();
accessCounter.increment();