const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function getDateString(dateStr) {
    const date  = new Date(dateStr);
    const weekDay = dayOfWeek[date.getDay()];
    const month = monthOfYear[date.getMonth()];
    const year = date.getFullYear();
    const day = date.getDate();

    return `${weekDay}, ${day} ${month} ${year} 00:00:00 GMT`;
}

function getTime(dateStr) {
    const date  = new Date(dateStr);
    return date.getTime();
};

module.exports = {
    getDateString,
    getTime
}