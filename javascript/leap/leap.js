export { isLeap };

const isLeap = (iYear) => {
    if (iYear % 4 == 0 && (iYear % 100 != 0 || iYear % 400 === 0)) {
        return true
    } else {
        return false
    }
}