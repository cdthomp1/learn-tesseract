const { createWorker } = require('tesseract.js');

const worker = createWorker();

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize('https://www.thirtyhandmadedays.com/wp-content/uploads/2014/07/recipes-in-recipe-book.jpg');
  console.log(text);
  await worker.terminate();
})();