function convertToAdjList(adjMatrix) {
    return adjMatrix.map(row => row.map((v, i) => v ? i : -1).filter(v => v !== -1))
/*                    ^  ^    ^                 ^           ^
                      |  |    |                 |           |
                      |  |    |                 |           ^ once these modifications are made to a.map they are then filtered which only returns v if it is not comparatively equal to -1
                      |  |    |                 ^ using the ternary operator to check if v is 0 (false) or 1 (true) if it is true, then the value is replaced with i (the index in the current row), otherwise it is given -1
                      |  |    ^ each value in row is then mapped to v and the index of the value recorded in i
                      |  ^ row is each "row" in adjMatrix, which is then input to row.map
                      ^ Uses map to apply a function to each element in adjMatrix
*/ 
}
//I will attempt the bonus in this format, however, I am having trouble addressing the values that do not exists