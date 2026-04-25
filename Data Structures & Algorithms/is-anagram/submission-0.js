class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        console.log(s.split('').sort() == t.split('').sort())
        if(s.split('').sort().join() == t.split('').sort().join()){
            return true;
        }else{
            return false;
        }
    }
}
