let arrayOne = [2, 5, 1, 15];
let targetOne = 11;
let arrayTwo = [2, 5, 1, 4, 6];
let targetTwo = 5;
let arrayThree = [2, 4, 5];
let targetThree = 3;

testExamples();

function testExamples(){
    let outputOne = countMinNumbers(arrayOne, targetOne);
    let outputTwo = countMinNumbers(arrayTwo, targetTwo);
    let outputThree = countMinNumbers(arrayThree, targetThree);

    document.write('Where array = ' + arrayOne + ' and target = ' + targetOne + ' output = ' + outputOne + '</br>' + 
                    'Where array = ' + arrayTwo + ' and target = ' + targetTwo + ' output = ' + outputTwo + '</br>' + 
                    'Where array = ' + arrayThree + ' and target = ' + targetThree + ' output = ' + outputThree + '</br>');
}



function countMinNumbers(numbers, target) {

    numbers = numbers.slice();

    let count = 0;

    let toTarget = 0;

    while (toTarget < target) {

        let biggestNumber = Math.max.apply(Math, numbers);

        if (toTarget + biggestNumber > target) {

            let index = numbers.indexOf(biggestNumber);

            numbers.splice(index, 1);

            if (numbers.length === 0) {
                return -1;
            }

            continue;
        }

        toTarget += biggestNumber;
        count++;
    }

    return count;
}