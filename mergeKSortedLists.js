class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Merge k Sorted Lists
 * @param {ListNode[]} lists - Array of sorted linked lists
 * @return {ListNode} - Merged sorted linked list
 */
var mergeKLists = function (lists) {
    // Helper function to merge two sorted lists
    const mergeTwoLists = (l1, l2) => {
        const dummy = new ListNode(0);
        let current = dummy;

        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        // If one of the lists is exhausted, link the remaining list
        if (l1 !== null) {
            current.next = l1;
        } else {
            current.next = l2;
        }

        return dummy.next;
    };

    // Merge lists in a divide-and-conquer manner
    const mergeListsRecursively = (lists, start, end) => {
        if (start === end) {
            return lists[start];
        }

        const mid = Math.floor((start + end) / 2);
        const left = mergeListsRecursively(lists, start, mid);
        const right = mergeListsRecursively(lists, mid + 1, end);

        return mergeTwoLists(left, right);
    };

    // Handle edge case of an empty array
    if (lists.length === 0) {
        return null;
    }

    return mergeListsRecursively(lists, 0, lists.length - 1);
};
