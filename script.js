function dates (newDate1, newDate2) {
newDate1 = new Date('August 18, 1976');
const date1 = newDate1.getFullYear();
newDate1.getDate();

newDate2 = new Date('August 19, 1975');
const date2 = newDate2.getFullYear()
newDate2.getDate();

return date1 - date2
}

console.log(dates());// i didn't want to use this method :/



function dates (date1, date2) {
    let numOfDates = [];
    numOfDates.push(date1[1], date2[1]);
    numOfDates.push(date1[2], date2[2]);
    console.log(numOfDates)
    return date1[1] - date2[1]
}
dates(['December', 12, 2018], ['December', 11, 2019]);

