class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(str) 
    {
        const bella = "abcdefghijklmnopqrstuvwxyz0123456789"
        let start = 0;
        let finish = str.length - 1;
        while(start < finish)
        {
            if(!bella.includes(str[start].toLowerCase()))
            {
                start++;
                continue;
            }
            if(!bella.includes(str[finish].toLowerCase()))
            {
                finish --;
                continue;
            }
            
            if(str[start].toLowerCase() != str[finish].toLowerCase()) return false;
            start ++;
            finish --;
        }
        return true;

    }
}
