class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
          let triple = []; 
     for(let i=0; i<=nums.length; i++){
        for(let j=i+1; j<=nums.length; j++){
            for(let k=j+1; k<=nums.length; k++){
                if(nums[i] + nums[j] + nums[k] == 0){
                 triple.push([nums[i] , nums[j] ,nums[k]]);    
                }
            }
        }
     }
     let obj = {}; 
     let t1 = []; 
     triple.forEach((el , i) => {
        if(!obj[el.sort()]){   
            obj[el] = 1;  
        }else{ 
            obj[el] = obj[el] + 1; 
        }
     }); 
     for(let key in obj){
        t1.push(key.split(",").map(Number)); 
     }   
     return t1; 
    }
}
