// Input : 
var arr = [
  [1, 2, 4, 3, "a", "b"],
  [6, "c", 5], [7, "d"],
  ["f", "e", 8]
]
var t = 0;
const lenArr = arr.map((e)=>{

  let tempA = arr.flat().sort().slice(t,t+e.length);
  t = t + e.length;  
  return tempA;
  // return e.length;
});

console.log(lenArr);
// Output : 
// [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, "a"],
//   ["b", "c"], ["d", "e", "f"]
// ]




// Ques. Validate the opening and closing braces

// TEST CASE 1:
// String a = "{abc}"
// Output - true

// TEST CASE 2:
// String b = "}sdd{"
// Output - false

// TEST CASE 3:
// String c = "{ { af } 2 { sqwe }s}"
// Output - true

// TEST CASE 4:
// String d = "{ s{ { af } s }"
// Output - false



function valBrace(s){
  let count = 0;
  for (var j = 0; j < s.length; j++) {
    let i = s.charAt(j);
    if(i=='}' && count==0){
      return false;
    }else{
      if(i=='{'){
        count++;
      }
      if(i=='}'){
        count--;
      }
    }
  }
  if(count==0){
    return true;
  }else{
    return false;
  }
}

var a = "{abc}" , b = "}sdd{" , c = "{ { af } 2 { sqwe }s}" ,  d = "{ s{ { af } s }" ;
console.log(valBrace(a));
console.log(valBrace(b));
console.log(valBrace(c));
console.log(valBrace(d));