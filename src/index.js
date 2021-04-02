function statsWithUppercaseLetter(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }

  if (str.length === 0) {
    return false;
  }

  const firstLetterCode = String(str).charCodeAt(0);
  return firstLetterCode >= 65 && firstLetterCode <= 90;
}

module.exports = {
  StringUtils: {
    statsWithUppercaseLetter,
  }
}
