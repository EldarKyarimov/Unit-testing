const reverseText = (txt) => {
    let total = '';
    for (let i = txt.length - 1; i >= 0; i--) {
        total += txt[i];
    }
    return total;
}


module.exports = { reverseText }