for ( let i = 1 ; i <= 5 ; i++){
    let row = ""

    // loop for spaces
    for ( let j = 0 ; j < 5 - i ; j++){
        row = row + " "
    }

    // loop for star
    for ( let k = 0 ; k < i ; k++){
        row = row + "*"
    }

    console.log(row)
}

/*
Complete explanation:


The outer loop is responsible for controlling the rows. We start i from 1 because we consider i to represent the current
row number. Since we want 5 rows, the condition is i <= 5. After completing each row, i++ increases the row number by 1.


For every iteration of the outer loop, we create an empty string called row. This is used to build the complete row before
printing it.


In this pattern, every row contains two parts:

1. Spaces
2. Stars


First, we use a loop to add the required spaces.


The space loop starts j from 0 because loop counters commonly start from zero. The condition j < 5 - i determines how many
spaces are added to the current row.


The number of spaces decreases as the row number increases.


For example:


When i = 1:

5 - i = 5 - 1 = 4

The space loop runs 4 times, so 4 spaces are added.


When i = 2:

5 - i = 5 - 2 = 3

The space loop runs 3 times, so 3 spaces are added.


When i = 3:

5 - i = 5 - 3 = 2

The space loop runs 2 times, so 2 spaces are added.


When i = 4:

5 - i = 5 - 4 = 1

The space loop runs 1 time, so 1 space is added.


When i = 5:

5 - i = 5 - 5 = 0

The space loop does not run, so no spaces are added.


After adding the spaces, we use another loop to add the stars.


The star loop starts k from 0 and uses the condition k < i. This means the number of stars depends directly on the current
row number.


For example:


When i = 1, the star loop runs 1 time, so 1 star is added.


When i = 2, the star loop runs 2 times, so 2 stars are added.


When i = 3, the star loop runs 3 times, so 3 stars are added.


When i = 4, the star loop runs 4 times, so 4 stars are added.


When i = 5, the star loop runs 5 times, so 5 stars are added.


Inside both loops, we add the required character to row.


For spaces:

row = row + " ";


For stars:

row = row + "*";


This means we continuously build the complete row before printing it.


After both inner loops finish, we use:

console.log(row);


This prints the complete row on one line.


So the execution looks like:


i = 1 → 4 spaces + 1 star →     *
i = 2 → 3 spaces + 2 stars →    **
i = 3 → 2 spaces + 3 stars →   ***
i = 4 → 1 space  + 4 stars →  ****
i = 5 → 0 spaces + 5 stars → *****


The important pattern in this problem is:


Spaces → 4, 3, 2, 1, 0 → decreasing
Stars  → 1, 2, 3, 4, 5 → increasing


Therefore:


Spaces = 5 - i
Stars = i


The main idea is to break the pattern into smaller parts instead of trying to solve the complete pattern at once.


First, identify how many spaces are required for each row.
Then, identify how many stars are required for each row.
Finally, combine both parts into the same row.


Finally, when i becomes 6, the outer-loop condition:


6 <= 5


becomes false, so the outer loop stops.


Final output:


    *
   **
  ***
 ****
*****
*/

