class Transcriptor {
    toRna(sInput: string) {
        const mapObj: { [s: string]: string } = {
            G: 'C',
            C: 'G',
            T: 'A',
            A: 'U'
        };
        const sOutput: string[] = [];
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
}

export default Transcriptor