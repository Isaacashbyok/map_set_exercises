//1
{ 1,2,3,4}

//2
'ref'

//3
0 : {Array(3) => true}
1 : { Array(3) => false; }

//has duplicate
hasDuplicate([1,3,2,1])    // true
hasDuplicate([1,5,-1,4]);  // false

const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount

vowelCount('awesome')  // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt');     // Map { 'o' => 1 }

function isVowel (char) {
    return 'aeiou'.includes(char);
}

function vowelCount (str) {
    const vowelMap = new Map();
    for (let char of str) {
        let lowerCase = char.toLowerCase();
        if (isVowel(lowerCase)) {
            if (vowelMap.has(lowerCase)) {
                vowelMap.set(lowerCase,vowelMap.get(lowerCase) + 1);
            }
            else {
                vowelMap.set(lowerCase,1);
            }
        }
    }
    return vowelMap;
}