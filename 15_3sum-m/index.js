// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// https://leetcode-cn.com/problems/3sum/

var threeSum = function(nums) { 
    // 对数组排序
    // 总共有3个指针 固定最左边的指针i ， 设置low = i+1， high = len-1， low和high 向里面收缩
    // 注意数据的去重复


    // 注意对三个指针的处理
    nums.sort((a,b)=>a-b)
    var len = nums.length;
    var ansArr = []
    for(var i=0;i<len-2;i++){
        if(nums[i]>0) break; 
        if(i>0 && (nums[i] === nums[i-1])) continue; // 去重复
        var low = i+1, high = len-1;
        while (low<high) {
            var sum = nums[i] + nums[low] + nums[high]
            if(sum ===0) {
                ansArr.push([nums[i] , nums[low] , nums[high]])
                while (nums[low] ===nums[low+1]) low++; // 去重复
                while (nums[high] ===nums[high-1]) high--; // 去重复
                low++
                high--
            }else if(sum<0) {
                low++
            }else high--
            
        } 
    }
    return ansArr
}
var test = [-1,0,1,2,-1,-4]

console.log('threeSum(test)::',threeSum(test));