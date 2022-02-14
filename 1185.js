/*
Given a date, return the corresponding day of the week for that date.
The input is given as three integers representing the day, month and year respectively.
Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.

The given dates are valid dates between the years 1971 and 2100.
*/
//my solution 1 \\
/* 

const daysOfTheWeek = function(day, month, year) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(days, 'days')
    return days[new Date(`${month}/${day}/${year}`).getDay()];
};
*/

const dayOfTheWeek = function(day, month, year) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date(`${month}/${day}/${year}`).getDay()];
};