/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let freqMap={}
  for(let obj of transactions){
    let cat=obj.category
    let am=obj.price
    if(freqMap.hasOwnProperty(cat)){
      freqMap[cat].totalSpent+=am
    }
    else freqMap[cat]={
      category:cat,
      totalSpent:am
    }
  }
  return Object.values(freqMap)
}

module.exports = calculateTotalSpentByCategory;
