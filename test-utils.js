
const printState = (state) => {
    for (let y = 0; y < state.height; y++) {
      const chars = [];
      for (let x = 0; x < state.width; x++) {
        const char = state.getCell(x, y) ? '█' : '.';
        chars.push(char);
      }
      console.log(chars.join(' '));
    }
  };
  
  const compareStates = (a, b) => {
    if (a.width !== b.width || a.height !== b.height) return false;
    for (let x = 0; x < a.width; x++) {
      for (let y = 0; y < a.height; y++) {
        const aAlive = a.getCell(x, y);
        const bAlive = b.getCell(x, y);
        if (Boolean(aAlive) !== Boolean(bAlive)) return false;
      }
    }
    return true;
  };
  
  const create = (ConwayState, template) => {
    const rows = template
      .split(/\n+/)
      .map(row => row.replace(/\s+/g, ''))
      .filter(s => s);
    const height = rows.length;
    const width = Math.max.apply(Math, rows.map(row => row.length));
    const state = new ConwayState(width, height);
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const char = rows[y][x] || '.';
        let value;
        switch (char.toUpperCase()) {
          case 'O':
          case '0':
          case '█':
            value = true;
            break;
          case '.':
            value = false;
            break;
          default:
            throw new Error(`invalid template char: ${char}`);
        }
        state.setCell(x, y, value);
      }
    }
    return state;
  };
  
  const isEmpty = (state) => {
    for (let x = 0; x < state.width; x++) {
      for (let y = 0; y < state.width; y++) {
        if (state.getCell(x, y)) return false;
      }
    }
    return true;
  };
  
  module.exports = {
    compareStates,
    create,
    isEmpty,
    printState,
  };
  