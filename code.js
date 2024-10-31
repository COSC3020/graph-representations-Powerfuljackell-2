function convertToAdjList(adjMatrix) {
    return adjMatrix.map(a => a.map((v, i) => v ? i : -1).filter(v => v !== -1))
/*                    ^  ^    ^                 ^           ^
                      |  |    |                 |           |
                      |  |    |                 |           ^ once these modifications are made to a.map they are then filtered which only returns v if it is not comparatively equal to -1
                      |  |    |                 ^ using the ternary operator to check if v is 0 (false) or 1 (true) if it is true, then the value is replaced with i (the index in the current row), otherwise it is given -1
                      |  |    ^ each value in a is then mapped to v and the index of the value recorded in i
                      |  ^ a is each "row" in adjMatrix, which is then input too a.map
                      ^ Uses map to apply a function to each element in adjMatrix
*/ 
}