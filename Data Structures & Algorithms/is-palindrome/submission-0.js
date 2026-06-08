class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.toLowerCase().replace(/[^a-z0-9]/g , "");     
        if(str == str.split('').reverse().join('')){
            return true; 
        }else{
            return false; 
        }
    }

}
