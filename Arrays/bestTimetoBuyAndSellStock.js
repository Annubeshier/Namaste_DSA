/*
Problem Statement:
You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Examples:
Example 1:
Input:prices = [7, 1, 5, 3, 6, 4]

Output:5

Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 – 1 = 5.

Example 2:
Input:prices = [7,6,4,3,1]

Output:0

Explanation: Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

//SOLUTION : 

function maxProfit(prices) { 
    let min = prices[0];
    let maxProfitValue = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > maxProfitValue) { 
            maxProfitValue = prices[i] - min;
        }
        if (prices[i] < min) { 
            min = prices[i];
        }
    }
    return maxProfitValue;
}

let prices = [7, 1, 5, 6, 3, 8, 10];
let result = maxProfit(prices);
console.log(result)