function solution(nums) {
const arr = new Set(nums)
  return arr.size < nums.length / 2 ? arr.size : nums.length / 2

}