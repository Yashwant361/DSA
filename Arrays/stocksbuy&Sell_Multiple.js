function maxProfit(prices) {
    let n = prices.length;
    let lMin = prices[0];  
    let lMax = prices[0];  
    let res = 0;
  
    let i = 0;
    while (i < n - 1) {
      
        // Find local minima
        while (i < n - 1 && prices[i] >= prices[i + 1]) { i++; }
        lMin = prices[i];
       
        // Local Maxima
        while (i < n - 1 && prices[i] <= prices[i + 1]) { i++; }
        lMax = prices[i];
      
        // Add current profit
        res += (lMax - lMin);
    }
  
    return res;
}

// Driver Code 
const prices = [100, 180, 260, 310, 40, 535, 695];
console.log(maxProfit(prices));