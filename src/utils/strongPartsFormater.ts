const strongPartsFormater = (text: string, strongParts?: string[]) => {
  if (!strongParts || strongParts.length === 0) {
    return text;
  }

  let formattedText = text;
  strongParts.forEach((part) => {
    const escapedPart = part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedPart, "g");
    formattedText = formattedText.replace(
      regex,
      `<strong class="paragraph--strong">${part}</strong>`
    );
  });

  return formattedText;
};

export default strongPartsFormater;
