const randHex = len => {
    const maxlen = 6;
    const min = Math.pow(16, Math.min(len, maxlen) - 1);
    const max = Math.pow(16, Math.min(len, maxlen)) - 1;
    const n = Math.floor( Math.random() * (max - min + 1) ) + min;
    let r = n.toString(16);
    while (r.length < len) {
        r = r + randHex(len - maxlen);
    }

    return r;
};

const words = ['Hello', 'from', 'there'];
const next = i => setTimeout(async () => {

  main.innerText = words[i];
  main.style.color = randHex(6);
  main.style.fontFamily = [
    'Sedgwick Ave,cursive',
    'Gochi Hand,cursive',
    'Leckerli One,cursive',
  ][parseInt(Math.random() * (3 - 0) + 0, 10)];

  i++;
  i = i == 3 ? 0 : i;

  next(i);
}, 400);
next(0);
