function capitalizeFirstLetter(string) {
  const [firstLetter, ...rest] = [...string];
  const capitalized = firstLetter.toUpperCase() + rest.join('').toLowerCase();
  return capitalized;
}

export default capitalizeFirstLetter;
