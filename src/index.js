module.exports = function toReadable (number) {
    const result = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    }

    let strNum = number.toString().split('')

    if (number.toString().length === 1) {
        return result[number]
    }

    if (number.toString().length === 2) {
       return result[number]
        ? result[number]
        : result[strNum[0] + 0] + ' ' + result[strNum[1]]
    }

    if (number.toString().length === 3) {
        return  (strNum[1] == 0 && strNum[2] == 0)
        ? result[strNum[0]] + ' ' + result[100]
       : (strNum[1] == 0)
        ? result[strNum[0]] + ' ' + result[100] + ' ' + result[strNum[2]]
        : (result[strNum[0]] + ' ' + result[100] + ' '  + (result[strNum[1] + strNum[2]] || result[strNum[1] + 0] + ' ' + result[strNum[2]]))
    }
}