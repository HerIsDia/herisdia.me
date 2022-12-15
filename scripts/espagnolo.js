export const espo = (text) => {
  const translator = text;
  const words = translator.split(/[^A-zÀ-ú]/g);
  const nonWords = translator.replace(/[A-zÀ-ú]/g, '').split('');
  let resText = '';
  words.forEach((word, i) => {
    if (word !== '') {
      if (nonWords[i] != "'") {
        switch (word.charAt(word.length - 1)) {
          case 'o':
            break;

          case 'e':
          case 'é':
          case 'è':
          case 'ê':
            if (word.charAt(word.length - 2).match(/[^aeio]/g)) {
              word = word.slice(0, -1) + 'o';
            } else {
              word += 'o';
            }
            break;

          case 'u':
            if (word.charAt(word.length - 2) == 'q') {
              break;
            } else {
              word += 'o';
              break;
            }
          case 's':
            if (
              word.charAt(word.length - 2) == 'e' &&
              word.charAt(word.length - 3).match(/[^aeiou]/g)
            ) {
              word = word.slice(0, -2) + 'os';
            } else {
              word += 'o';
            }
            break;

          default:
            word += 'o';
            break;
        }
      }
      resText += word + (nonWords[i] !== undefined ? nonWords[i] : ' ');
    } else {
      resText += nonWords[i] !== undefined ? nonWords[i] : ' ';
    }
  });
  return resText.slice(0, -1);
};
