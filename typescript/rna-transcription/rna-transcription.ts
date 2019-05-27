class Transcriptor {
    toRna(sInput: string) {
        const mapObj: { [s: string]: string } = {
            G: 'C',
            C: 'G',
            T: 'A',
            A: 'U'
        };
        const sOutput: string[] = [];
        sInput.split('').forEach(el => sOutput.push(mapObj[el]));
        return sOutput.join('');
    }
}

export default Transcriptor