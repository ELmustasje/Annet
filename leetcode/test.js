class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = new Map()
  this.tail = null
  this.head = null
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    var node = this.cache.get(key)
    if (this.head === node) {
      return node.value
    }
    if (this.tail === node) {
      node.next.prev = null
      this.tail = node.next
      return node.value
    }
    node.prev.next = node.next
    node.next.prev = node.prev
    this.head.next = node
    node.prev = this.head
    this.head = node
    return node.value
  } else {
    return -1
  }

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  var node = new Node(key, value)
  if (!this.tail && !this.head) {
    this.tail = this.head = node
    this.cache.set(key, node)
    return
  }
  if (this.cache.size >= this.capacity) {
    for (const node of this.cache.values()) {
      console.log(node)
    }
    var removeNode = this.tail
    this.cache.delete(removeNode.key)
    removeNode.next.prev = null
    this.tail = removeNode.next
    return
  }
  node.prev = this.head
  this.head.next = node
  this.head = node
  console.log(this.head)
  this.cache.set(key, node)

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
