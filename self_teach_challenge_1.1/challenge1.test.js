const formatTimerNumbers = require('./script.js').default;

test('formatTimerNumbers should return 3,7 to 03:07', () => {
  expect(formatTimerNumbers(3,7)).toEqual("03:07");
});

test('formatTimerNumbers should return 11,42 to 11:42', () => {
  expect(formatTimerNumbers(11,42)).toEqual("11:42");
});

test('formatTimerNumbers should return 0,0 to 00:00', () => {
    expect(formatTimerNumbers(0,0)).toEqual("00:00");
});

