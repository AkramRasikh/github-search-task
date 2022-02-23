const daysAgoFromX = (dateNow: Date, daysBefore: number) => {
  const weekAgo = dateNow.getDate() + daysBefore;
  dateNow.setDate(weekAgo);
  const year = dateNow.getFullYear();
  const month = dateNow.getMonth() + 1;
  const updatedMonth = month < 10 ? "0" + month : month;
  const date = dateNow.getDate();
  const updatedDate = date < 10 ? "0" + date : date;
  return `${year}-${updatedMonth}-${updatedDate}`;
};

export default daysAgoFromX;
