function capitalize(string) {
  const hasNumber = (string) => /\d/.test(string);

  if (hasNumber(string.charAt(0))) {
    throw new TypeError("Please dont enter a number as first character");
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalize };
