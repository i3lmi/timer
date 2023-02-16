const args = process.argv.slice(2);

const validNumbers = args.filter(arg => !isNaN(arg) && arg > 0);

validNumbers.forEach((arg) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000);
});
