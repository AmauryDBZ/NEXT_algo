const fs = require('fs');

const list = process.argv[2];

//tri fusion, 22 turns
const fusionSort = (data) => {
  let turns = 0;
  //split the array
  const splitAry = (ary) => {
    if (ary.length > 1) {
      let length = ary.length;
      return aryFusion(
        splitAry(ary.slice(0, length/2)),
        splitAry(ary.slice(length/2, length))
      );
    } else {
      return aryFusion(ary, []);
    }
  }

  const aryFusion = (ary1, ary2) => {
    turns++;
    console.log(turns);
    if (typeof ary1[0] == 'undefined' || ary1[0] === '') {
      return ary2;
    }
    if (typeof ary2[0] == 'undefined' || ary2[0] === '') {
      return ary1;
    }
    if (ary1[0] <= ary2[0]) {
      return [ary1[0]].concat(aryFusion(ary1.slice(1, ary1.length), ary2));
    } else {
      return [ary2[0]].concat(aryFusion(ary1, ary2.slice(1, ary2.length)));
    }
  }

  return splitAry(data);
};


try {
    const data = fs.readFileSync(list, 'utf8');
    let dataArray = data.split(' ');
    dataArray = dataArray.map(Number);
    console.log(fusionSort(dataArray));
} catch (error) {
    console.error(error.message);
}
