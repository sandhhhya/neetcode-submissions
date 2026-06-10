class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
          let minPrice = prices[0];
      let maxProfit = 0; 
      prices.forEach(element => {
         if(element < minPrice){
            minPrice = element;
         }   
        let profit =  element - minPrice;
        if(profit > maxProfit){
            maxProfit = profit; 
        }
    });
    return maxProfit; 
    }
}
