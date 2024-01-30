//your code here
function findMajorityElement(nums) {
    let candidate = 0;
    let count = 0;

    // Step 1: Find a candidate for the majority element
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    // Step 2: Verify if the candidate is the majority element
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return candidate;
    } else {
        // This should not happen based on the problem statement
        return -1;
    }
}
