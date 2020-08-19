const { createWorker } = require('tesseract.js');
const fs = require('fs');

const worker = createWorker();

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize('https://raw.githubusercontent.com/cdthomp1/learn-tesseract/master/img/sec-rec-crop.png');
  console.log(text);
  fs.writeFile('test.txt', text, function (err) {
    if (err) return console.log(err);
    console.log('Results are written');
  });

  await worker.terminate();
})();