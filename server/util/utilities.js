const isDate = (str) => {
    const date = new Date(str);
    return !isNaN(date) && date.toString() !== 'Invalid Date';
}

const getStartAndEndOfCurrentDay = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000; // Offset in milliseconds
    const startOfDay = new Date(now.getTime() - (now.getTime() % 86400000) - offset);
    const endOfDay = new Date(startOfDay.getTime() + 86400000 - 1);
    return { startOfDay, endOfDay };
}

module.exports = {
    isDate,
    getStartAndEndOfCurrentDay
};
