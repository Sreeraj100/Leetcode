class Solution(object):
    def findMaxK(self, nums):
        out = 0
        while nums:
            val = max(nums)
            if -val in nums:
                out = val
            else:
                nums.remove(val)
            if out != 0:
                break
        return -1 if out == 0 else out
        