
export const chsubContentContactsUs = (value) => {
  if (value.includes("@")) {
    return (`mailto:${value}`)
  } else return (`tel:${value}`)
}