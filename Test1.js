

var lengthOfLastWord = function (s) {
    return s.trim().split(" ").pop().length;
    console.log(last)
};
console.log(lengthOfLastWord("   fly me   to   the moon  "))

var maxProfit = function (prices) {
    let minPrice = Math.min(...prices);
    let minIndex = prices.indexOf(minPrice);
    let maxPrice = Math.max(...prices.splice(minIndex, prices.length))
    console.log("minPrice=" + minPrice)
    console.log("minIndex=" + minIndex)
    console.log("maxPrice=" + maxPrice)

    return maxPrice - minPrice > 0 ? maxPrice - minPrice : 0;
};

console.log(maxProfit([2, 4, 1]))

var isIsomorphic = function (s, t) {
    if (s.length == t.length) {
        let str = t;
        for (let i = 0; i < s.length; i++) {
            console.log(str)
            str = str.replaceAll(str[i], s[i]);
        }

        if (s == str) return true;
    }

    return false;
};

console.log(isIsomorphic("foo", "bar"))