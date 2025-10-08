// JavaScript Program to solve stock buy and sell
// using one traversal

function maxProfit(prices) {
    let minSoFar = prices[0];
    let res = 0;

    // Update the minimum value seen so far 
    // if we see smaller
    for (let i = 1; i < prices.length; i++) {
        minSoFar = Math.min(minSoFar, prices[i]);

        // Update result if we get more profit                
        res = Math.max(res, prices[i] - minSoFar);
    }
    return res;
}

const prices = [7, 10, 1, 3, 6, 9, 2];
console.log(maxProfit(prices));
