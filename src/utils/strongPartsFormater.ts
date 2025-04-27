const strongPartsFormater = (text: string, strongParts: string[]) => {
  let formattedText = text;
  strongParts.forEach((part) => {
    const escapedPart = part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedPart, "g");
    formattedText = formattedText.replace(regex, `<strong>${part}</strong>`);
  });
  return formattedText;
};

export default strongPartsFormater;
