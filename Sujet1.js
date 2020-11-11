//le but étant de ne pas se faire chier, j'ai essayé direct de faire le mode difficile...

const list = [48, -2, 6, 12, 0, -4];
const k = prompt('choisi la clef');

//reste a voir si c'est la bonne solution...
const singlePass = (array, k) => {
  let searchValues = new Set();
  searchValues.add(k - array[0]);
  for (let i = 1; i < array.length; i++) {
    let searchValue = k - array[i];
    if (searchValues.has(array[i])) {
      return true;
    } else {
      searchValues.add(searchValue);
    }
  }
  return false;
};

console.log(singlePass(list, k));
