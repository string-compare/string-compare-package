# String Compare Package

This is a package that allows you to find the quickest possible differences between two strings.

We use the levenshtein distance formula to find the least amount of possible changes between two string. With these differences
We then map them into an array of objects that provide you with the error location and content.

DP Table:

ex:
nick -> justin
<br />

<pre>
<br />
     | # | J | U | S | T | I | N |<br />
 | # | 0 | 1 | 2 | 3 | 4 | 5 | 6 |<br />
 | N | 1 | 1 | 2 | 3 | 4 | 5 | 5 |<br />
 | I | 2 | 2 | 2 | 3 | 4 | 4 | 5 |<br />
 | C | 3 | 3 | 3 | 3 | 4 | 5 | 5 |<br />
 | K | 4 | 4 | 4 | 4 | 4 | 5 | 6 |<br />
 </pre>
 <br />

Through this method we determine where the 'divergences' in the paths between the two strings are 
and proceed to start from the end solution.

We start at the bottom right corner and traverse up finding the smallest number of changes until
we get back to the origin.

We transform the results into an array of errors through this process and return an array of the 
following type:

<pre>
<br />
interface ErrorGroup {
  errorString: string;
  startIndex: number;
  endIndex: number;
  operation: Operation;
}
<br />
enum Operation {
  INSERT = 'insert',
  DELETE = 'delete',
  REPLACE = 'replace',
}
<br />
</pre>

where grouped errors (char 1-3 && all are 'delete' operations) are grouped together as one 
object in the array. 

EX: nick -> justin

<pre>
<br />

[   
  { 
    0:
      endIndex: 4
      errorString: "just"
      operation: "replace"
      startIndex: 0
  },
  {
    1:
      endIndex: 6
      errorString: "in"
      operation: "insert"
      startIndex: 4
  },
]
<br />
</pre>


Co-authored-by: Justin <justin@thewordisbird.dev> && Nick <nicholas.m.shankland@gmail.com>
