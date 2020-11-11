//le but étant de ne pas se faire chier, j'ai essayé direct de faire le mode difficile...

const list2 = [3, 7, 8, 3, 6, 1];

//reste a voir si c'est la bonne solution...
const singlePass = (data) => {
  let reversed = data.reverse();
  let key = 0;
  let max = 0;
  for (var i = 0; i < reversed.length; i++) {
    if (reversed[i] > max) {
      key++;
      max = reversed[i];
    }
  }
  return key;
}

console.log(singlePass(list2));
