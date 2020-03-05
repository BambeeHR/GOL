
// Step 1: Implement constructor, getCell, and setCell
// Step 2: Implement computeLiveNeighborCount
// Step 3: Implement computeNextState

// Feel free to write additional helper methods or utility functions

module.exports = class ConwayState {
    /**
     * Create an empty Conway state with all cells set to dead (= false).
     * @param {number} width - Width of the board in cells.
     * @param {number} height - Height of the board in cells.
     */
    constructor(width, height) {
      this.width = width;
      this.height = height;
      // TODO: Implement
    }
    /**
     * Get the liveness of the cell at the given coordinates.
     * @param {number} x - The x coordinate of the cell.
     * @param {number} y - The y coordinate of the cell.
     * @return {boolean} True if the cell is alive or false if it is dead.
     */
    getCell(x, y) {
      // TODO: Implement
    }
    /**
     * Set the liveness of the cell at the given coordinates.
     * @param {number} x - The x coordinate of the target cell.
     * @param {number} y - The y coordinate of the target cell.
     * @param {boolean} alive - New liveness value for the target cell.
     */
    setCell(x, y, alive) {
      // TODO: Implement
    }
    /**
     * Compute the number of live neighbors that a given cell has.
     * @param {number} x - The x coordinate of the cell.
     * @param {number} y - The y coordinate of the cell.
     * @return {number} Number of live neighbors of the target cell. Range: [0, 8]
     */
    computeLiveNeighborCount(x, y) {
      // TODO: Implement
      // NOTE: Cells are square and have eight neighboring cells: one on each side
      // and one on each corner.
    }
    /**
     * Compute the next iteration of this Conway state.
     * @return {ConwayState} The next state.
     */
    computeNextState() {
      const nextState = new ConwayState(this.width, this.height);
      // TODO: Implement
      // NOTE: Here is a summary of the rules applied to each cell:
      //       - Live, <2 live neighbors => dead (underpopulation)
      //       - Live, >3 live neighbors => dead (overpopulation)
      //       - Live, 2-3 live neighbors => alive (all good in the hood)
      //       - Dead, exactly 3 live neighbors => alive (the miracle of birth)
      //       - Otherwise, no change (stay dead)
      return nextState;
    }
  };
  