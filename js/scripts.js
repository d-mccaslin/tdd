
/*
Describe: isLeapYear()
Test: "It returns false for years that are not a leap year" (Test 1)
Expect(isLeapYear(1993)).toEqual(false);

Test: "It returns true for years that are divisible by 4" (Test 2)
Expect(isLeapYear(2004)).toEqual(true);

Test: "It returns false for years that are divisible by 100" (Test 3)
Expect(isLeapYear(2100)).toEqual(false);

Test: "It returns true for years are divisible by 400" (Test 4)
Expect(isLeapYear(200)).toEqual(true);

*/

function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}
