function calculateMoney(ticketSale) {
    if (0 <= ticketSale) {
        const result = (ticketSale * 120) - (500 + (8 * 50));
        return result;
    }
    else {
        return "Invalid Number";
    }
}


function checkName(name) {

    if (typeof name === 'string') {
        const lastChar = name.substring(name.length - 1);
        if (lastChar === 'a' || lastChar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w' || lastChar === 'A' || lastChar === 'Y' || lastChar === 'I' || lastChar === 'E' || lastChar === 'O' || lastChar === 'U' || lastChar === 'W') {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }
    }
    else {
        return "invalid";
    }
}


function deleteInvalids(array) {
    
    if(typeof array === "array") {
        const filterArray = array.filter(item => typeof item === 'number' && !isNaN(item));
    return filterArray;
    }
    else {
        return "Invalid Array";
    }
}

const test = deleteInvalids({num: [ 1 , 2 , 3 ]}  );

console.log(test);
