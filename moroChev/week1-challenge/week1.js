const possibleShiftDirections = {
    RIGHT : "RIGHT",
    LEFT  : "LEFT"
}

const logicalOperators = {
    AND : 'AND',
    OR  : 'OR',
    NOT : 'NOT'
}

// conversion from Fahrenheit to Celsius
function FahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1, 8
}


// replication of the Left & Right shift operators
function left_Or_Right_Shift(value, shiftDirection, amountOfBits) {

    // for the left shift operator, we multiply our value by 2 'amoutOfBits' times
    // for the right shift operator, we divide our value by 2 'amoutOfBits' times

    switch (shiftDirection) {
        case possibleShiftDirections.LEFT: return value * 2 ** amountOfBits
        case possibleShiftDirections.RIGHT: return value * 2 ** -amountOfBits
    }
}

// replication of AND, OR, NOT operators
function logical_operators(value1, operator, value2) {

    switch (operator) {
        case logicalOperators.AND: return andOperator(value1, value2)
        case logicalOperators.OR: return orOperator(value1, value2)
        case logicalOperators.NOT: return - value1 - 1
    }
}

let andOperator = (value1, value2) => {
    let finalResult = 0
    let bitPower = 1
    while (value1 > 0 && value2 > 0) {
        // to make sure both of the bits are active I used multiplication ( active bit means 1 )
        finalResult += (value1 % 2) * (value2 % 2) * bitPower
        value1 = Math.trunc(value1 / 2)
        value2 = Math.trunc(value2 / 2)
        bitPower *= 2
    }
    return finalResult
}

let orOperator = (value1, value2) => {
    let finalResult = 0
    let bitPower = 1
    while(value1 > 0 || value2 > 0 ){
        // to keep the active bit i used max method
        finalResult += Math.max((value1 % 2) , (value2 % 2)) * bitPower
        value1 = Math.trunc(value1 / 2)
        value2 = Math.trunc(value2 / 2)
        bitPower *= 2
    }
    return finalResult
}
