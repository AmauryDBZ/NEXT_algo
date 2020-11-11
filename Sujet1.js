//le but étant de ne pas se faire chier, j'ai essayé direct de faire le mode difficile...


const fs = require('fs');

const list = process.argv[2];

//reste a voir si c'est la bonne solution...
const singlePass = (data) => {

  let i = 0;
  let sum = -key;
  let step = 0;
  if (sum + data[i] === step) {
    return true;
  } else {
    sum += data[i]
  }

};

const key = 19;

try {
    const data = fs.readFileSync(list, 'utf8');
    let dataArray = data.split(' ');
    dataArray = dataArray.map(Number);
    console.log(singlePass(dataArray));
} catch (error) {
    console.error(error.message);
}
