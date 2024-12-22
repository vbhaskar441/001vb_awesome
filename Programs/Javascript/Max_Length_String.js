//Write a function to find the length of the longest substring without repeating characters.

const str ='hi abc abbcc abcdd';
const longest_str =(str)=>{
    let max_len =0;
    const arr = str.split(' ');
    arr.forEach((val)=>{
        let val_len =0
        let char_arr = []
        for(let char of val){
            if(!char_arr.includes(char)){
                val_len++;
                char_arr.push(char);
            }
        }
        max_len = Math.max(val_len,max_len)
   })
   return max_len;
}
const len = longest_str(str)
console.log(len)
