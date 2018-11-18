class AfisareDivizori {
    nrs: Array<number>;
   
    constructor (nrs: Array<number>) {
        this.nrs = nrs;
    }

    showDivisors = (nrs:Array<number> = this.nrs):{} => {
        const results = {};
        const isPrime = (nr) => { return this.isPrime(nr); }
        const getNumberDivisors = (nr) => { return this.getNumberDivisors(nr); }

        nrs.map(function(nr) {
            if (!isPrime(nr)) {
                results[nr] = getNumberDivisors(nr);
            } else {
                results[nr] = 'The number is prime';
            }
        });

        return results;
    }

    getNumberDivisors(nr:number):Array<number> {
        const divisors = [];

        for (let i = 1; i <= nr; i++) {
            if (nr % i === 0) {
                divisors.push(i);
            }
        }

        return divisors;
    }

    isPrime (nr:number):boolean {
        for(let i = 2, s = Math.sqrt(nr); i <= s; i++) {
            if(nr % i === 0) return false; 
        }
        return nr !== 1 && nr !== 0;
    }
}

const numbers = new AfisareDivizori([10, 3, 25, 19, 113]);

console.log(numbers.showDivisors());