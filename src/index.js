import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>1431. Kids With the Greatest Number of Candies
</h1>
<div>
LeetCode Problems</div>
`;
var kidsWithCandies = function (candies, extraCandies) {
  let candyValues = [];

  candies.forEach((kid) => {
    const hasMostCandy =
      kid + extraCandies >= Math.max(...candies) ? true : false;
    candyValues.push(hasMostCandy);
  });
  return candyValues;
};

kidsWithCandies([2, 8, 7], 1);
