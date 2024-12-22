let ip_arr = [ 1, 2, [ 3, 4], 5, 6, [ 7, [ 8, 9], 10]]
const conv_str =(ip_arr)=>{
    let flat_arr= [];
    ip_arr.forEach((val)=>{
       if (Array.isArray(val)) {
          flat_arr = flat_arr.concat(conv_str(val));
        } else {
          flat_arr.push(val)
        }
    })
    return flat_arr;
}

console.log(conv_str(ip_arr));
console.log(ip_arr.flat(Infinity));

function flatten(arr) {
  return [].concat(...arr)
}
function deepFlatten(arr) {
  return flatten(           // return shalowly flattened array
    arr.map(x=>             // with each x in array
      Array.isArray(x)      // is x an array?
        ? deepFlatten(x)    // if yes, return deeply flattened x
        : x                 // if no, return just x
    )
  )
}
console.log(deepFlatten(ip_arr));