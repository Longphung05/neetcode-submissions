# RECURSIVE SOLUTION

class Solution:
    def isPalindrome(self, s: str) -> bool:
        bel = "".join(char for char in s if char.isalnum()).lower()
        start = 0
        end = len(bel) - 1

        def bigB(a,b, bel):
            if a == b or a>b:
                return True

            if bel[a] != bel[b]:
                return False

            return bigB(a+1,b-1, bel)
    
        return bigB(start, end, bel)
