/*
'C', 'T', 'A', 'G'
 */

import  dnaCheck  from "./dna"


describe("DNA:", () => {
    it("should return ", () => {
        const result = dnaCheck('');
        expect(result).toBe('');
    });
    it("should return ", () => {
        const result = dnaCheck('CTAGGGTA');
        expect(result).toBe('CTAGGGTA');
    });
    it("should return ", () => {
        const result = dnaCheck('dCmCTACTAGGgTCcAgTCcANA');
        expect(result).toBe('CCTACTAGGTCATCAA');
    });
    it("should return ", () => {
        const result = dnaCheck('CTAGCTaGGgTCcATAGGGTA');
        expect(result).toBe('CTAGCTGGTCATAGGGTA');
    });
    it("should return ", () => {
        const result = dnaCheck('CTAGGgTCcA');
        expect(result).toBe('CTAGGTCA');
    });
});
