function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('A song!');
    }, ms)
  });
}

delay(3000).then((song) => console.log('Yay!', song));