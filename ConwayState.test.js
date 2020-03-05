const ConwayState = require('./ConwayState');
const { compareStates, create, isEmpty, printState } = require('./test-utils');

describe('verify step 1', () => {
  const WIDTH = 7;
  const HEIGHT = 5;
  let state;
  beforeEach(() => {
    state = new ConwayState(WIDTH, HEIGHT);
  });
  describe('constructor and get', () => {
    test('should initialize and return false for all valid cells', () => {
      for (let x = 0; x < WIDTH; x++) {
        for (let y = 0; y < HEIGHT; y++) {
          expect(state.getCell(x, y)).toBe(false);
        }
      }
    });
  });
  describe('get and set', () => {
    test('should work on basic coordinates', () => {
      expect(state.getCell(2, 2)).toBe(false);
      state.setCell(2, 2, true);
      expect(state.getCell(2, 2)).toBe(true);
    });
    test('should work on edge coordinates', () => {
      const xValues = [0, WIDTH - 1];
      const yValues = [0, HEIGHT - 1];
      xValues.forEach((x) => {
        yValues.forEach((y) => {
          expect(state.getCell(x, y)).toBe(false);
          state.setCell(x, y, true);
          expect(state.getCell(x, y)).toBe(true);
        })
      })
    });
  });
});

describe('verify step 2', () => {
  describe('computeLiveNeighborCount', () => {
    let state;
    let get;
    beforeEach(() => {
      state = create(ConwayState, `
        0 . . . 0 . 0 . . . .
        . . . . . 0 . . . 0 .
        0 0 . . 0 . 0 . . . .
        . . . . . . . . . . .
        0 0 0 . . . 0 0 0 . .
        0 0 . . . . 0 0 0 . 0
        0 0 . . . . 0 0 0 . 0
        0 0 . . 0 . . . . . 0
      `);
      get = state.computeLiveNeighborCount.bind(state);
    });
    test('`computeLiveNeighborCount` should work for inner cells', () => {
      expect(get(9, 1)).toBe(0);
      expect(get(1, 4)).toBe(4);
      expect(get(5, 1)).toBe(4);
      expect(get(7, 5)).toBe(8);
    });
    test('`computeLiveNeighborCount` should work for edge cells', () => {
      expect(get(0, 0)).toBe(3);
      expect(get(0, 2)).toBe(1);
      expect(get(0, 4)).toBe(4);
      expect(get(0, 6)).toBe(8);
      expect(get(10, 0)).toBe(4);
      expect(get(10, 7)).toBe(4);
      expect(get(4, 7)).toBe(1);
    });
  });
});

describe('verify step 3', () => {
  const templates = [
  ` . . . . .
    . . 0 . .
    0 . 0 . .
    . 0 0 . .
    . . . . . `,

  ` . . . . .
    . 0 . . .
    . . 0 0 .
    . 0 0 . .
    . . . . . `,

  ` . . . . .
    . . 0 . .
    . . . 0 .
    . 0 0 0 .
    . . . . . `,

  ` . . . . .
    . . . . .
    . 0 . 0 .
    . . 0 0 .
    . . 0 . . `,

  ` . . . . .
    . . . . .
    . . . 0 .
    . 0 . 0 .
    . . 0 0 . `,

  ` . . . . .
    . . . . .
    . . 0 . .
    . . . 0 0
    . . 0 0 . `,

  ` . . . . .
    . . . . .
    . . . 0 .
    . . . . 0
    . . 0 0 0 `,

  ` . . . 0 .
    . . . . .
    . . . . .
    . . 0 . 0
    . . . 0 0 `,
  ];
  
  const sequence = templates.map(t => create(ConwayState, t));
  
  describe('computeNextState', () => {
    
    for (let i = 0; i < sequence.length - 1; i++) {
      const state = sequence[i];
      const next = state.computeNextState();
      const expected = sequence[i + 1];
      const description = 'should transition correctly from test state ' +
        `${i} to ${i + 1} (${i + 1} of ${sequence.length - 1})`;
      test(description, () => {
        
        // Expect all states to be non-empty. This prevents transition tests from
        // erroneously passing before step 1 is implemented.
        expect(isEmpty(state)).toBe(false);
        expect(isEmpty(next)).toBe(false);
        expect(isEmpty(expected)).toBe(false);
        
        expect(compareStates(next, expected)).toBe(true);
      });
    }
  })
  
});
