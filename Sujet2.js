//le but étant de ne pas se faire chier, j'ai essayé direct de faire le mode difficile...


const fs = require('fs');

const list = process.argv[2];

//reste a voir si c'est la bonne solution...



try {
    const data = fs.readFileSync(list, 'utf8');
    let dataArray = data.split(' ');
    dataArray = dataArray.map(Number);
    const k = prompt('choose the key to test');
    console.log(singlePass(dataArray, k));
} catch (error) {
    console.error(error.message);
}
