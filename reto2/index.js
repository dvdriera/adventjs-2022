function countHours(year, holidays) {
  let hours = 0;
  const extraHours = 2;

  holidays.forEach((day) => {
    const date = new Date(`${day} / ${year}`);
    const weakDay = date.getDay();
    console.log(weakDay);
    if (weakDay < 6 && weakDay > 0) {
      hours += extraHours;
    }
  });

  return hours;
}

export default countHours;
