/**
 * @jest-environment jsdom
 */

const formatTimerNumbers = require('./script.js');
const countdownSettings = require('./script.js');
const changeButtonValue = require('./script.js');

test('formatTimerNumbers should return 3,7 to 03:07', () => {
  expect(formatTimerNumbers(3, 7)).toEqual("03:07");
});

test('formatTimerNumbers should return 11,42 to 11:42', () => {
  expect(formatTimerNumbers(11, 42)).toEqual("11:42");
});

test('formatTimerNumbers should return 0,0 to 00:00', () => {
  expect(formatTimerNumbers(0, 0)).toEqual("00:00");
});

test('countdowndSettings should change button disable to false', () => {
  const minutesInput = document.createElement('input');
  const secondsInput = document.createElement('input');
  countdownSettings()
  expect(minutesInput.disabled).toBe(false);
  expect(secondsInput.disabled).toBe(false);
});

test('countdowndSettings should change button disable to true', () => {
  const minutesInput = document.createElement('input');
  const secondsInput = document.createElement('input');
  countdownSettings()
  expect(minutesInput.disabled == false).toBe(true);
  expect(secondsInput.disabled == false).toBe(true);
});

test('changeButtonValue should change disable inputs from false to true', ()=> {
  const minutesInput = document.createElement('input');
  const secondsInput = document.createElement('input');
  changeButtonValue()
  expect(minutesInput.disabled==false).toBe(true)
  expect(secondsInput.disabled==false).toBe(true)
});

test('changeButtonValue should change to STOP and isRunning to false', ()=> {
  const button = document.createElement('button');
  button.textContent = "START"
  let isRunning = true;
  changeButtonValue()
  expect(button.textContent).toBe(false);
})