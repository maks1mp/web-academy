const arr = [1, 4, 5, 6, 7];

// imperative

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let numb = arr[i];

    sum += numb;
}

// declaraive

const result = arr.reduce((result, next) => result + next, 0);

