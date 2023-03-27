// const fs = require('fs');

//-----
//Create file
//-----

// fs.writeFile('index.html', 'Hello World', function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('file created');
//   }
// });
const fs = require('fs/promises');
const createFile = async(fileName, content) => {
  try {
    await fs.writeFile(fileName, content);
    console.log('file created');
  } catch (error) {
    console.log(error);
  }
}

createFile('frz.pdf', 'Hello World');