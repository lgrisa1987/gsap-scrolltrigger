export const getLetters = (heading: HTMLElement) => {
  try {
    if (heading)
      return heading.textContent
        .split('')
        .map(
          (letter) =>
            `<span class='inline-block translate-y-full rotate-45'>${letter}</span>`
        )
        .join('');
  } catch (error) {
    console.log('El elemento html no existe');
  }
};
