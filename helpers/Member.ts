export const member = (
  name = ``,
  position = ``,
  avatar: string | StaticImageData = ``,
  href = ``
) => ({ name, position, avatar, href });
