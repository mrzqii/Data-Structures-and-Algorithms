// https://leetcode-cn.com/problems/climbing-stairs/

// 正整数 1，2，3。。。

var climbStairs = function(n) { 
    var dp = []
    dp[1] = 1
    dp[2] = 2
    for(var i=3;i<=n;i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}

var climbStairs = function(n) { 
     if(n<=3) return n;
     var f1 = 1;
     var f2 = 2;
     var f3
     for(var i=3;i<=n;i++){
        f3 = f1+f2
        f1 = f2;
        f2 = f3;
     }
     return f3
}
