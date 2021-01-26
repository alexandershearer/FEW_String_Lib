function upperFirst(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function toUpperCase(str) {
    return str.toUpperCase()
}

function upperWords(str) {
    const strArray = str.split(' ')
    let charArray = []
    for (let x = 0; x < strArray.length; x++) {
        charArray.push(strArray[x].charAt(0).toUpperCase() + strArray[x].slice(1));
    }
    return charArray.join(" ");
}

function removeSpace(str) {
    newStr = string.trim(str)
    const strArray = newStr.split(' ')
    return strArray.join(" ")
}

function kebabCase(str) {
    const strArray = str.split(' ')
    let newStr = ""
    for (let x = 0; x < strArray.length; x++) {
        if (x === strArray.length - 1) {
            newStr += strArray[x]
        } else {
            newStr += strArray[x] + '-'
        }
    }
    return newStr
}

function snakeCase(str) {
    const strList = str.split(' ')
    let newStr = ""
    for (let x = 0; x < strList.length; x++) {
        if (x === strList.length - 1) {
            newStr += strList[x]
        } else {
            newStr += strList[x] + '_'
        }
    }
    return newStr
}

function camelCase(str) {
    const newString = str.split(' ')
    let newStr = ""
    for (let x = 0; x < newString.length; x++) {
        if (x == 0) {
            newStr += newString[x]
        } else {
            newStr += upperFirst(newString[x])
        }
    }
    return newStr
}

function firstToLast(str) {
    const strArray = str.split('')
    console.log(strArray)
    firstLetter = strArray.shift()
    console.log(firstLetter)
    strArray.push()
}

firstToLast("Hello World")