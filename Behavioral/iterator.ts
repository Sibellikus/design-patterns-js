const cart = ['apple', 'banana', 'orange']

function range(start: number, end: number, step=1) {
    return {
        [Symbol.iterator](){ // Allows the usage in FOR OF loop
            return this;
        },
        next() {
            if (start < end) {
                start = start + step
                return { value: start, done: false};
            }
            return { done: true, value: end}
        }
    }
}

for (const n of range(0, 100, 5)) {
    console.log(n);
}