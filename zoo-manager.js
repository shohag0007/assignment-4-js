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
    if (typeof array === "array") {
        const filterArray = array.filter(item => typeof item === 'number' && !isNaN(item));
        return filterArray;
    }
    else {
        return "Invalid Array";
    }
}


function password(obj) {
    if (!obj.name || !obj.siteName || obj.birthYear.toString().length < 4) {
        return "invalid"
    }
    else {
        const generatePassword = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1, obj.siteName.length) + '#' + obj.name + '@' + obj.birthYear;
        return generatePassword;
    }
}


function monthlySavings(arr, livingCost) {
    if (typeof arr !== "object" || typeof livingCost !== 'number') {
        return 'invalid input';
    }
    else {
        let savings = 0;
        let totalEarn = 0;
        for (i = 0; i < arr.length; i++) {
            if (3000 <= arr[i]) {
                totalEarn = totalEarn + (arr[i] - (arr[i] * 20) / 100);
            }
            else {
                totalEarn = totalEarn + arr[i];
            }
        }
        savings = totalEarn - livingCost;
        if (0 <= savings) {
            return savings;
        }
        else {
            return "earn  more";
        }

    }
}
