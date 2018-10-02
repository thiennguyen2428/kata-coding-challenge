/**
 * @description Given: an array containing hashes of names
 * Return: a string formatted as a list of names separated by commas 
 * except for the last two names, which should be separated by an ampersand.
 */

// Solution 1: Using template 
const listNameSol1 = (names) => {
  const template = [
    '',
    '{first}',
    '{list} & {last}'
  ];
  const index = Math.min(names.length, 2);

  return template[index].replace(/{first}|{list}|{last}/g, (val) => {
    let result = '';

    switch (val) {
      case '{list}':
        result = names.map(ele => ele.name).slice(0, names.length - 1).join(', ');
        break;
      case '{last}':
        result = names[names.length - 1].name;
        break;
      default:
        result = names[0].name;
        break;
    }

    return result;
  });
};

// Solution 2: Using reduce()
const listNameSol2 = (names) => {
  let result = '';

  result = names.reduce((prev, curr, index, arr) => {
    if (index === 0) {
      return curr.name;
    }
    if (index === arr.length - 1) {
      return `${prev} & ${curr.name}`;
    }

    return `${prev}, ${curr.name}`;
  }, '');

  return result;
};

// Solution 3: Using array.pop()
const listNameSol3 = (names) => {
  const lists = names.map(val => val.name);
  const last = lists.pop();

  return lists.length ? `${lists.join(', ')} & ${last}` : last || '';
};

// Solution 4: Using another regular expression
const listNameSol4 = (names) => {
  const lists = names.map(val => val.name);

  return lists.join(', ').replace(/(.*), (.*)$/g, '$1 & $2');
};

module.exports = {
  listNameSol1,
  listNameSol2,
  listNameSol3,
  listNameSol4
};
