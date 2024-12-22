let arr = [{"name":"Vijay"},{"name":"Vijay"},{"name":"Adarsh"}]
const arrUnique = (arr)=>{
    const UniqueArr = []
    const names  =[]
    arr.forEach((val)=>{
        if(!names.includes(val['name'])){
            UniqueArr.push(val);
            names.push(val['name']);
        }
    })
    return UniqueArr;
}

const output = arrUnique(arr);
console.log(output)