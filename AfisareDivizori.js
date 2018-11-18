var AfisareDivizori = /** @class */ (function () {
    function AfisareDivizori(nrs) {
        var _this = this;
        this.showDivisors = function (nrs) {
            if (nrs === void 0) { nrs = _this.nrs; }
            var results = {};
            var isPrime = function (nr) { return _this.isPrime(nr); };
            var getNumberDivisors = function (nr) { return _this.getNumberDivisors(nr); };
            nrs.map(function (nr) {
                if (!isPrime(nr)) {
                    results[nr] = getNumberDivisors(nr);
                }
                else {
                    results[nr] = 'The number is prime';
                }
            });
            return results;
        };
        this.nrs = nrs;
    }
    AfisareDivizori.prototype.getNumberDivisors = function (nr) {
        var divisors = [];
        for (var i = 1; i <= nr; i++) {
            if (nr % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    };
    AfisareDivizori.prototype.isPrime = function (nr) {
        for (var i = 2, s = Math.sqrt(nr); i <= s; i++) {
            if (nr % i === 0)
                return false;
        }
        return nr !== 1 && nr !== 0;
    };
    return AfisareDivizori;
}());
var numbers = new AfisareDivizori([10, 3, 25, 19, 113]);
console.log(numbers.showDivisors());
