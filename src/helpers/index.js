export function findSum(arr) {
    return arr.reduce((count, obj) => count + obj.price, 0)
};