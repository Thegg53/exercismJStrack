export const toRna = (sInput) => {

    const mapObj = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };
    const sOutput = [];
    sInput.split('').forEach(el => {
        if (mapObj[el]) {
            sOutput.push(mapObj[el])
        }
        else {
            throw new Error('Invalid input DNA.')
        }
    })
    return sOutput.join('');
}