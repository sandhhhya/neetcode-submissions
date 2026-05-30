class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let grouped = {};

strs.forEach((item) => {
    let key = item.split('').sort().join('');
    if(!grouped[key]){
        grouped[key] = [];
    }
    grouped[key].push(item); 
});

let result = Object.values(grouped);
return result;
    }
}
