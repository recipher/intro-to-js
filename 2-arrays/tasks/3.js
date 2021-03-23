// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// // Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// Hint: use split to split the string into an array, transform it and join back.

const camelize = (array) => {
    return array
    .split('-')
    .map(function(item,index){
        if (index===0) return item;
        return item[0].toUpperCase() + item.slice(1,item.length);
    })
    .join('');
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));
