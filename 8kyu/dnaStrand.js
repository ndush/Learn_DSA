function dnaStrand(dna){
    const complement = {
        'A' : 'T',
        'T' : 'A',
        'C' : 'G',
        'G' :'C'
    }
   return dna.split('').map(key => complement[key]).join('') ;


}
console.log(dnaStrand("ATCG"));
