//interface for the function with input and output types

interface RomanNumeralGenerator {
    (input: number): string;
}

interface Validation {
    (input: number): boolean;
}

// storing all possible numbers which will be used as bases to find the quotient to be used
let baseNumbers: number[] = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

// storing corresponding roman numeral bases which will be appended to find roman numeral.
let romanBaseNumbers: string[] = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

// generate function which converts numbers into roman numerals
const generate: RomanNumeralGenerator = (input) => {
    // check if number is between 1 to 3999
    if (inputValidation(input)) {

        // maximum index number of the array containing the bases and in this case it is 12 which is total length of array -1 -> 13 (- 1)
        let maxIndex: number = romanBaseNumbers.length - 1;

        // initializing the roman number in form of an empty string
        let romanNumber: string = '';

        // The algorithm goes as follows: 
        //      * find the minimum quotient for the highest index
        //      * if 0 then find remainder (input) ( which for this case would same as current input number)
        //      * if more than 0 then keep adding corresponding roman numeral base for total number of the quotient
        //      * stop if the remainder (input) becomes 0

        while (input > 0) {
            // finding the lower bound integer quotient with the floor function from Math library
            let quotient = Math.floor(input / baseNumbers[maxIndex]);

            // finding the remainder of the division in line 30
            input %= baseNumbers[maxIndex];

            // loop will run for each quotient decrement until it turns negative as it will be false if negative.
            while (quotient--) {
                // adding romanNumbers for each quotient
                romanNumber += romanBaseNumbers[maxIndex]
            }

            // decrementing the max index by 1 to access the next smaller base in the bases array in line 8
            maxIndex--;
        }
        return romanNumber
    } else {
        return 'Please make sure number entered is between 1 and 3999'
    }
}


// function to check input is between 1 and 3999
const inputValidation: Validation = (input) => {
    return (input >= 1 && input <= 3999) ? true : false
}


// insert number here by changing value of num
const num : number = 1;



console.log(generate(num))



