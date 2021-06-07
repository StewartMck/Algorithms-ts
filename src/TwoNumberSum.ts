/*
    2 Numbers in input array sum up to target sum, fn return in array.
    No numbers, return empty array.
*/

const sum = (array: number[], target: number) => {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let sum = array[left] + array[right];
        if(sum === target) {
            return [array[left], array[right]];
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--
        }
    }
    return [];
}