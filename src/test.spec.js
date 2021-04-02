const assert = require("assert");
const statsWithUppercaseLetter = require(".");

describe('StringUtils tests', () => {
 it('should throw an exception when argument is not a string', () => {
   assert.throws(() => statsWithUppercaseLetter(34), Error);
   assert.throws(() => statsWithUppercaseLetter(true), Error);
   assert.throws(() => statsWithUppercaseLetter(() => 0), Error);
   assert.throws(() => statsWithUppercaseLetter(), Error);
   assert.throws(() => statsWithUppercaseLetter(null), Error);
 });

 it('should return false when string does not start with an uppercase letter', () => {
  assert.ok(() => statsWithUppercaseLetter('tell me something about this test'));
 });

 it('should return false when string starts with a symbol', () => {
  assert.ok(() => statsWithUppercaseLetter('*tell me something about this test'));
 });

 it('should return true when string starts with an uppercase letter', () => {
  assert.ok(() => statsWithUppercaseLetter('Tell me something about this test'));
 });

 it('should return true when string is one char long and contains an uppercase letter', () => {
  assert.ok(() => statsWithUppercaseLetter('A'));
  assert.ok(() => statsWithUppercaseLetter('Z'));
 });

 it('should return false when empty string is passed', () => {
  assert.ok(() => !statsWithUppercaseLetter(''));
 });
});
