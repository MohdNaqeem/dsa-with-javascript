for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 0; j < i; j++) {
    row = row + "*";
  }

  console.log(row);
}

/* 
Complete explanation:

The outer loop is responsible for controlling the rows. We start i from 1 because we consider i to represent the current 
row number. Since we want 5 rows, the condition is i <= 5. After completing each row, i++ increases the row number by 1.

For every iteration of the outer loop, we create an empty string called row. This is used to build the stars for the 
current row before printing them.

Then the inner loop is executed. We start j from 0 because loop counters commonly start from zero. The condition j < i 
determines how many times the inner loop runs.

Because i represents the current row, the number of inner-loop iterations becomes equal to the row number.

For example, when i = 1, the inner loop runs once, so one star is added to row.

When i = 2, the inner loop runs twice, so two stars are added.

When i = 3, it runs three times, so three stars are added.

This continues until i = 5.

Inside the inner loop, we use : row = row + "*";
This means we add one star to the existing row string during every iteration.

After the inner loop finishes, we use : console.log(row);
This prints the complete row on one line.

So the execution looks like:

i = 1 → inner loop runs 1 time  → *
i = 2 → inner loop runs 2 times → **
i = 3 → inner loop runs 3 times → ***
i = 4 → inner loop runs 4 times → ****
i = 5 → inner loop runs 5 times → *****

Finally, when i becomes 6, the condition:

6 <= 5

becomes false, so the outer loop stops.
*/