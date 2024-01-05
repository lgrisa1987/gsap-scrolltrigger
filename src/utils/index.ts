/* Separa el título en letras separadas en <span/> */
export const getLetters = (heading: HTMLElement) => {
  try {
    if (heading)
      return heading.textContent
        .split("")
        .map(
          (letter) =>
            `<span class='inline-block translate-y-full rotate-45'>${letter === " " ? "&nbsp;" : letter}</span>`
        )
        .join("");
  } catch (error) {
    console.log("El elemento html no existe");
  }
};

export const textAnimation = (delay = 0) => ({
  y: 0,
  rotation: 0,
  ease: "expo",
  duration: 1,
  delay: delay,
  stagger: 0.1,
});
