### Data Structures

## Array vs Hash Table

Hash tables are great when we want immediate access to certain values. Searching through an array for an item takes O(n) time whereas hash tables take only O(1). That's why Hash tables are used in databases for faster search.

Insert takes only O(1) in case of hash tables regardless of collitions as good hash function can minimize it significantly. Whereas arrays need O(n).

Hash table has the disadvantage of not having order index whereas Arrays got a ordered indices.

![](../images/arrayvshash.png)

## Linked List over Array and Hash

Both static arrays and dynamic arrays can increase their memories by allocating in a new location when it hits the maximum limit in a sequence order which costs it O(n). It also takes linear time to iterating over items to Insert, Delete and Search.

Hash table has all the advantages compared to an Array but it's unordered.

In Linked List, Insertion and Deletion operations are fast. Memory is allocated at runtime, as and when a new node is added. It's also known as Dynamic Memory Allocation.

In case of Arrays, memory is allocated as soon as the array is declared, at compile time. It's also known as Static Memory Allocation.

Array gets memory allocated in the Stack section. Whereas, linked list gets memory allocated in Heap section.
