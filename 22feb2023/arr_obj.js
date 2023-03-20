const array = [
    {
        name: ["apple", "tameta", "banana"],
        type: "fruti",
    },
    {
        name: ["kanda", "tameta", "apple", "tameta"],
        type: "veg",
    },
    {
        name: ["syaam", "ram", "apple","apple"],
        type: "name",
    }
];

let obj ={};
array.forEach((e)=>{
    e.name.forEach((ele)=>{
        if(obj[[ele]] == undefined){
            obj[[ele]] = [e.type];
        }else{
            if(obj[[ele]].includes(e.type)){
                // skip it
            }else{
                obj[[ele]].push(e.type);
            }
        }
    }) ;
});
console.log(obj);

// output={
//   apple: [ 'fruti', 'veg', 'name' ],
//   banana: [ 'fruti' ],
//   kanda: [ 'veg' ],
//   tameta: [ 'veg' ],
//   syaam: [ 'name' ],
//   ram: [ 'name' ]
// }

