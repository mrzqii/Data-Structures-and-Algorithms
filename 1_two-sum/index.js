// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 暴力法
    // var len = nums.length;
    // for(var i=0;i<len-1;i++){
    //     for(var j=i+1;j<len;j++){
    //         if(nums[i] + nums[j] ===target) {
    //             return [i, j]
    //         }
    //     }
    // }


    // 哈希法
    var len = nums.length;
    var map = {}
    var flag // 差
    for(var i=0;i<len;i++){
        flag = target - nums[i]
        if(map[flag] !==undefined) {
            return [map[flag], i]
        }
        map[nums[i]] = i
    }

}

var nums = [2, 7, 11, 15], target = 26
var ans = twoSum(nums, target)
console.log('ans::',ans);

 




// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
 