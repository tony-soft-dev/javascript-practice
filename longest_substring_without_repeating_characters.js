var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    
    let max = 1;
    let mp = [];
    mp.push(s[0]);
    
    let a = 1;
    for (let i = 1; i < s.length; i++) {
        if (mp.includes(s[i])) {
            // let max = 1;

            let np = mp.slice(mp.indexOf(s[i])+1);
            np.push(s[i])
            mp = [...np]

            a = np.length;
            if (a > max) max = a;
        } else {
            mp.push(s[i]);
            a = mp.length;
            if (a > max) {
                max = a;
            }
        }
    }
    
    return max;
};


console.log(lengthOfLongestSubstring("aabaab!bb"))