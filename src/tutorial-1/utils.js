export const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

export const getFormattedDate = (dateToFormat) => {
  const copiedDate = new Date(dateToFormat);
  return copiedDate
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, -2);
};
