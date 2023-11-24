function convertor(sum, currency) {
    const dollar = 1.7
    const euro = 1.8
    const rub = 0.019
    if (currency === 'dollar') {
        return Math.floor(sum / dollar);
    } else if (currency === 'euro') {
        return Math.floor(sum / euro);
    } else if (currency === 'rub') {
        return Math.floor(sum / rub);
    } else ('enter correct info');
}

module.exports = { convertor }