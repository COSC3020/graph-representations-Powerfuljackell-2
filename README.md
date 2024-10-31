# Graph Representations
"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice." 
Used to start:
https://github.com/COSC3020/graph-representations-Powerfuljackell-1/blob/main/code.js \
Reviewed: \
https://stackoverflow.com/questions/55111120/how-to-convert-adjacency-matrix-to-adjacency-list-in-javascript \
https://www.w3schools.com/jsref/jsref_map.asp \
https://www.w3schools.com/jsref/jsref_filter.asp \
https://www.w3schools.com/js/js_arrow_function.asp \
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator \

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Runtime is $O(n^2\)$ where N is the number of nodes in the graph, as both map() functions iterate over all values in the matrix. The first map iterating over the "rows" or "nodes" of the graph and the second iterating over the node adjecency values contained within.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
