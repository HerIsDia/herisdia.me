import { readdir, writeFileSync, readFileSync } from 'fs';

// Get number of images in the logos folder.
readdir('./public/logos', (err, files) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(`🖼️ ${files.length} images found.`);
    const results = { nbrOfImages: files.length, files: files };
    console.log(`📝 Writing results to file.`);
    writeFileSync('./src/data/logo.json', JSON.stringify(results));
    console.log(`📝 Results written to file.`);
  }
});

// Get number of images in the backgrounds folder.
readdir('./public/backgrounds', (err, files) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(`🖼️ ${files.length} images found.`);
    const results = { nbrOfImages: files.length, files: files };
    writeFileSync('./src/data/background.json', JSON.stringify(results));
  }
});

const filefr = readFileSync('./src/data/quotes/fr.txt');
const fileen = readFileSync('./src/data/quotes/en.txt');
const fileglobal = readFileSync('./src/data/quotes/global.txt');

let quotesfr = filefr.toString().split('\n');
let quotesen = fileen.toString().split('\n');
let quotesglobal = fileglobal.toString().split('\n');
quotesfr = quotesfr.map((quote) => {
  return { quote: quote.replace('🔞', ''), isNsfw: quote.startsWith('🔞') };
});
quotesen = quotesen.map((quote) => {
  return { quote: quote.replace('🔞', ''), isNsfw: quote.startsWith('🔞') };
});
quotesglobal = quotesglobal.map((quote) => {
  return { quote: quote.replace('🔞', ''), isNsfw: quote.startsWith('🔞') };
});
quotesfr = [...quotesfr, ...quotesglobal];
quotesen = [...quotesen, ...quotesglobal];
const newQuotes = { fr: quotesfr, en: quotesen };
writeFileSync('./src/data/quotes.json', JSON.stringify(newQuotes));
