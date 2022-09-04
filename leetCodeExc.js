
let module = require('./data')
// let nums= module.numbersArray;
// let target= module.target;
let words= module.words;  //[ 'aa', 'bb', 'bb', 'cc', 'bb', 'aa' ]


/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */


// input [1,2,3,4,5] target=7 output [2,3]  
var twoSum = function(nums, target) {
    const obj = {};
for(let i=0; i<nums.length; i++){
    if(obj[nums[i]]>=0){ // If the index is gt or e to 0, and not undefine..
        return [ obj[nums[i] ] , i]
    }
    obj[target-nums[i]] = i
}
};
console.log(twoSum([1,2,3,4,5] , 7))


/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */

// * Definition for singly-linked list.
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

// Input: l1 = [2,4,3], l2 = [5,6,4]  Output: [7,0,8]  Explanation: 342 + 465 = 807.
var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let current = new ListNode(0);
    let result = current;
    while(l1 || l2) {
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        sum = sum > 9 ? 1 : 0;
    }
    
    if(sum) current.next = new ListNode(sum);
    return result.next;
};
// Check this after, why not working...
console.log(addTwoNumbers([2,4,3], [5,6,4]))

/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */

// Input: s = "abcabcbb" output: 3 Explanation: The answer is "abc", with the length of 3.
var lengthOfLongestSubstring = function(str) {
    let maxCount=0; let s=''; 
    for(c of str){
        if(s ==='') s=c;
        else if(s.indexOf(c) === -1) s+=c;
        else{
            if(maxCount< s.length) maxCount=s.length;
            s=s.substring(s.indexOf(c)+1) + c;
        }  
    }
    return (maxCount< s.length) ? s.length : maxCount 
};

console.log(lengthOfLongestSubstring('abcabcbb'))

/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */

// input [1,3] [2,4] output 2.5 ---> 1,2,3,4 ---> 2+3=5/2=2.5
var findMedianSortedArrays = function (nums1, nums2, merged = []) {
    // Exit Condition
    if (nums1.length === 0 || nums2.length === 0) {
      merged.push(...nums1.splice(0), ...nums2.splice(0));
      if (merged.length % 2 === 1) return merged[Math.floor(merged.length / 2)];
      else {
        const first = Math.floor(merged.length / 2) - 1;
        return (merged[first] + merged[first + 1]) / 2;
      }
    }
    // Working
    if (nums1[0] < nums2[0]) {
      merged.push(nums1.shift());
    } else merged.push(nums2.shift());
  
    return findMedianSortedArrays(nums1, nums2, merged);
  };

  console.log(findMedianSortedArrays([1,3], [2,4]))

/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */


// input [ 'aa', 'bb', 'bb', 'cc', 'bb', 'aa' ] output [ [ 'bb', 3 ], [ 'aa', 2 ], [ 'cc', 1 ] ]
var sumAllAccurAndSorting= function(words){
    let valueAndSequance= words.reduce((total, item) => {
        total[item]= (total[item] || 0 ) +1 ;
        return total;
    }, {});

    var sortable = [];
    for (var item in valueAndSequance) {
        sortable.push([item, valueAndSequance[item]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    return sortable
}
console.log(sumAllAccurAndSorting(words))


/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */

// Give the max sum of unique sub arrays.
// input [2,3,2,4,5,2,6,7] output 24  4,5,2,6,7=24 
var maximumUniqueSubarray = function(nums) {
    let maxSum=0;
    let arr=[]; 
    let arraySum=0;
for(c of nums){
     if(!arr.length) {
         arr.push(c)
        }
     else if(!arr.includes(c)) arr.push(c);
     else{
         arraySum= arr.reduce((sum, number) => sum+=number ,0);
         if(maxSum< arraySum) maxSum=arraySum;
         arr= arr.splice(arr.indexOf(c)+1, arr.length)
        arr.push(c);
     }  
 }
arraySum= arr.reduce((sum, number) => sum+=number ,0);
 return (maxSum< arraySum) ? arraySum : maxSum 
};
// Another solution......
// var maximumUniqueSubarray = function(N) {
//     let a = new Int8Array(10001), sum = max = 0, len = N.length
//     for (let l = 0, r = 0; r < len; r++) {
//         a[N[r]]++, sum += N[r]
//         while (a[N[r]] > 1) a[N[l]]--, sum -= N[l++]
//         max = sum > max ? sum : max
//     }
//     return max
// };
console.log(maximumUniqueSubarray([40,2,3,2,4,5,2,6,7])); // will give 4,5,2,6,7= 24 


/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */


// Output aba
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
      let len1 = expandFromMiddle(s, i, i); // For odd sum of numbers
      let len2 = expandFromMiddle(s, i, i + 1); // For even sum of numbers
      let len = Math.max(len1, len2);
      if (len > end - start + 1) {
        start = i - Math.floor((len - 1) / 2);
        end = i + Math.floor(len / 2);
      }
    }
    return s.substring(start, end + 1);
  };
  
  function expandFromMiddle(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  console.log(longestPalindrome('aabab'))

/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */

var zigZagconversation = function(s, numRows) {
   
    if (numRows == 1 || s.length<numRows) return s;

    let result="";
    let n = s.length;
    let cycleLen = 2 * numRows - 2;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += cycleLen) {
            result += s[j + i];
            if (i != 0 && i != numRows - 1 && j + cycleLen - i < n)
                result += s[j + cycleLen - i];
        }
    }
    return result;
};

console.log(zigZagconversation('ABCDEFGHIJKLMNOP', 3))
console.log(zigZagconversation('ABCDE', 3)) // That will return AEBDC 


/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */


const isMatch = (s, p) => new RegExp(`^${p}$`).test(s);
// if starts with pattern and also ends with that. all the thing about 
// the dot and the * : regex does itself.
console.log(isMatch('ab', '.'))  

var s="unicorns and rainbows and cupcakes"
var r= /unicorn/;
r.test(s); // true
s.match(r) // 'unicorn'


/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */
 
const getMin = (value1, value2) => {
    return Math.min(value1, value2);
}

// input [1,4,5,8,3,4,9,7,3] output 28
var maxArea = function(height) {
    let col1 = { value: height[0], index: 0 };
    let col2 = { value: height[height.length - 1], index: height.length - 1 };
    let output = getMin(col1.value, col2.value) * (col2.index - col1.index);
    let cursor1 = 0;
    let cursor2 = height.length - 1;
    
    while (cursor1 !== cursor2) {
        if (col2.value > col1.value) {
            cursor1++;
            
            if (height[cursor1] > col1.value) {
                const newOutput = (col2.index - cursor1) * getMin(height[cursor1], col2.value);
                output = newOutput > output ? newOutput : output;
                col1 = { value: height[cursor1], index: cursor1 };
            }
            
        } else {
            cursor2--;
            if (height[cursor2] > col2.value) {
                const newOutput = (cursor2 - col1.index) * getMin(height[cursor2], col1.value);
                output = newOutput > output ? newOutput : output;
                col2 = { value: height[cursor2], index: cursor2 };
            }
        }
    } 
    
    return output;
};


console.log(maxArea([1,4,5,8,3,4,9,7,3]))


/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */


var romanToInt = function (s) {
    let num = 0;
    let obj = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    };
    for (let i = 0; i < s.length; i++) {
      if (obj[s[i]] < obj[s[i + 1]]) {
        num = num + obj[s[i + 1]] - obj[s[i]];
        i++;
      } else {
        num = num + obj[s[i]];
      }
    }
    return num;
  };

  console.log(romanToInt("DXLII")) 

  

/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */


var intToRoman = function(num) {
    //create the list..
    const M = ["", "M", "MM", "MMM"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    //return solution with this procedure...
    return M[Math.floor(num / 1000)] + C[Math.floor((num % 1000) / 100)] + X[Math.floor((num % 100) / 10)] + I[num % 10];
};

console.log( intToRoman("1223"))



/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */

const longestCommonPrefix = (strs = ['flo', 'flow', 'flight']) => {
    strs.sort();
    const minLength = Math.min(strs[0].length, strs[strs.length - 1].length);
    let i = 0;
    let prefix = '';
    while (i < minLength && strs[0][i] == strs[strs.length - 1][i]) {
      i++;
      prefix = strs[0].substring(0, i);
    }
    return prefix;
  };

  console.log(longestCommonPrefix())

  
/**------------------------------------------------------------------------------------------------------------- */
/**------------------------------------------------------------------------------------------------------------- */
var threeSum = function(nums) {
	var rtn = [];
	if (nums.length < 3) {
		return rtn;
	}
	nums = nums.sort(function(a, b) {
		return a - b;
	});
	for (var i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) {
			return rtn;
		}
		if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
		for (var j = i + 1, k = nums.length - 1; j < k;) {
			if (nums[i] + nums[j] + nums[k] === 0) {
				rtn.push([nums[i], nums[j], nums[k]]);
				j++;
				k--;
				while (j < k && nums[j] == nums[j - 1]) {
					j++;
				}
				while (j < k && nums[k] == nums[k + 1]) {
					k--;
				}
			} else if (nums[i] + nums[j] + nums[k] > 0) {
				k--;
			} else {
				j++;
			}
		}
	}
	return rtn;
};
console.log(threeSum([-1, 1,0,3,-1,4,-4,0,1,-3]))
