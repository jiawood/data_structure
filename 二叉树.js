/*二叉树的先序遍历
先序遍历是先遍历根节点，在左，然后右。*/
//递归实现方法：
var preorderTraversal = function (root, array = []) {
  if (root) {
    array.push(root.val);
    preorderTraversal(root.left, array);
    preorderTraversal(root.right, array);
  }
  return array;
};

//递归实现相对来说比较简单，下面使用迭代实现：
var preorderTraversal2 = function (root) {
  const result = [];
  const stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      result.push(current.val);
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return result;
}


/* 先序遍历 根左右
中序遍历 左根右*/
var inorderTraversal = function (root, array = []) {
  if (root) {
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
  }
  return array;
}

var inorderTraversal2 = function (root) {
  const stack = [];
  const result = [];
  let current = root;
  while (current || stack.length >= 0) {
    while (current)
  }
}
