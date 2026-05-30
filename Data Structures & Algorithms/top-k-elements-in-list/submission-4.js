class Solution {
    topKFrequent(nums, k) {

        let obj = {};

        nums.forEach((item) => {
            if (!obj[item]) {
                obj[item] = 0;
            }
            obj[item]++;
        });

        let arr = Object.keys(obj);

        arr.sort((a, b) => obj[b] - obj[a]);

        return arr.slice(0, k).map(Number);
    }
}