// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// https://leetcode-cn.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode("head"),
    var tmp = head;
    var sum = 0
    var n = 0 //  加法大于10的时候需要进一位 保存在这儿

    while(l1 || l2) {
        var v1 = l1.val ? l1.val :0
        var v2 = l2.val ? l2.val :0
        sum = v1 + v2 + n;
        tmp.next = new ListNode(sum % 10)
        n = sum >=10? 1 : 0;

        // 指针继续走
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
        tmp = tmp.next 
    }

    if(n>0) tmp.next = new ListNode(1) // 最后需要判断是否还有进一位的数据没有处理
    return head.next

}

 