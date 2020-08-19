const { createWorker } = require('tesseract.js');

const worker = createWorker();

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize('https://i.etsystatic.com/18059081/r/il/6a8847/1555416942/il_1140xN.1555416942_k0nu.jpg');
  console.log(text);
  await worker.terminate();
})();