const resulado = fizzBuzz(6);
fizzBuzz2(6);

function fizzBuzz(num) {

    if (typeof num !== 'number')
        return 'Não é um numero';
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    }
    if (num % 3 === 0) {
        return 'Fizz';
    }
    if (num % 5 === 0) {
        return 'Buzz';
    }
    return num;
}

function fizzBuzz2(num) {
    if (!isNaN(num)) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log('FizzBuzz');
        } else if (num % 3 === 0) {
            console.log('Fizz');
        } else if (num % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(num);
        }
    } else {
        console.log('Its not a number');
        alert('Its not a number')
    }
}

console.log(resulado);