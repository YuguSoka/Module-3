/*Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'
.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.*/

function camelCase(cssProp) {
    return cssProp
        .split('-')
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}


function camelCaseForLoop(cssProp) {
    const parts = cssProp.split('-');
    let camelCased = parts[0];
    for (let i = 1; i < parts.length; i++) {
        camelCased += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
    }
    return camelCased;
}

function camelCaseForOf(cssProp) {
    const parts = cssProp.split('-');
    let camelCased = parts[0];
    let isFirst = true;
    for (const part of parts) {
        if (!isFirst) {
            camelCased += part.charAt(0).toUpperCase() + part.slice(1);
        }
        isFirst = false;
    }
    return camelCased;
}

function camelCaseConditional(cssProp) {
    return cssProp
        .split('-')
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

function camelCaseNoCondition(cssProp) {
    const parts = cssProp.split('-');
    let camelCased = parts[0];
    for (let i = 1; i < parts.length; i++) {
        camelCased += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
    }
    return camelCased;
}


console.log(camelCase('margin-left')); // marginLeft
console.log(camelCase('background-image')); // backgroundImage
console.log(camelCase('display')); // display

console.log(camelCaseForLoop('margin-left')); // marginLeft
console.log(camelCaseForLoop('background-image')); // backgroundImage
console.log(camelCaseForLoop('display')); // display

console.log(camelCaseForOf('margin-left')); // marginLeft
console.log(camelCaseForOf('background-image')); // backgroundImage
console.log(camelCaseForOf('display')); // display

console.log(camelCaseConditional('margin-left')); // marginLeft
console.log(camelCaseConditional('background-image')); // backgroundImage
console.log(camelCaseConditional('display')); // display

console.log(camelCaseNoCondition('margin-left')); // marginLeft
console.log(camelCaseNoCondition('background-image')); // backgroundImage
console.log(camelCaseNoCondition('display')); // display
