
export default function dnaCheck(dna: String) {
    let result = ''
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'C':
                result += 'C'
                break;
            case 'T':
                result += 'T'
                break;
            case 'A':
                result += 'A'
                break;
            case 'G':
                result += 'G'
                break;


        }
    }
    return result
}