for(let i = 1 ; i <= 5 ; i++){
    let row = ""

    for(let j = 0 ; j <= 5 - i ; j++){
        row = row + "*"
    }

    console.log(row)
}

/*
Complete explanation:


The outer loop is responsible for controlling the rows. We start i from 1 because we consider i to represent the current
row number. Since we want 5 rows, the condition is i <= 5. After completing each row, i++ increases the row number by 1.


For every iteration of the outer loop, we create an empty string called row. This is used to build the stars for the
current row before printing them.


Then the inner loop is executed. We start j from 0 because loop counters commonly start from zero. The condition
j <= 5 - i determines how many times the inner loop runs.


In this pattern, the number of stars needs to decrease as the row number increases.


The expression 5 - i is responsible for decreasing the number of stars.


For example:


When i = 1:

5 - i = 5 - 1 = 4

The inner loop runs for j = 0, 1, 2, 3, 4, which means it runs 5 times.
Therefore, 5 stars are added to row.


When i = 2:

5 - i = 5 - 2 = 3

The inner loop runs for j = 0, 1, 2, 3, which means it runs 4 times.
Therefore, 4 stars are added to row.


When i = 3:

5 - i = 5 - 3 = 2

The inner loop runs for j = 0, 1, 2, which means it runs 3 times.
Therefore, 3 stars are added to row.


When i = 4:

5 - i = 5 - 4 = 1

The inner loop runs for j = 0, 1, which means it runs 2 times.
Therefore, 2 stars are added to row.


When i = 5:

5 - i = 5 - 5 = 0

The inner loop runs only for j = 0, which means it runs 1 time.
Therefore, 1 star is added to row.


Inside the inner loop, we use:

row = row + "*";

This means we add one star to the existing row string during every iteration.


After the inner loop finishes, we use:

console.log(row);

This prints the complete row on one line.


So the execution looks like:


i = 1 → inner loop runs 5 times → *****
i = 2 → inner loop runs 4 times → ****
i = 3 → inner loop runs 3 times → ***
i = 4 → inner loop runs 2 times → **
i = 5 → inner loop runs 1 time  → *


The main difference between the first and second pattern is that in the first pattern, the number of stars increases with
the row number, while in this pattern the number of stars decreases with the row number.


In the first pattern, we used:

j < i

because the number of iterations needed to be equal to i.


In this pattern, we use:

j <= 5 - i

because the number of iterations needs to decrease as i increases.


Finally, when i becomes 6, the outer-loop condition:

6 <= 5

becomes false, so the outer loop stops.


Final output:


*****
****
***
**
*
*/