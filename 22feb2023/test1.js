// Input : 
var arr = [
  [1, 2, 4, 3, "a", "b"],
  [6, "c", 5], [7, "d"],
  ["f", "e", 8]
]

const lenArr = arr.map((e)=>{
  return e.length;
});

arr = arr.flat().sort();
var t = 0;
arr = lenArr.map((e)=>{
  let tempA = arr.slice(t,t+e);
  t = t + e;  
  return tempA;
});
console.log(arr);
// Output : 
// [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, "a"],
//   ["b", "c"], ["d", "e", "f"]
// ]


