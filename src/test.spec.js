const assert = require("assert");
const { StringUtils } = require(".");

describe('StringUtils tests', () => {
 it('should throw an exception when argument is not a string', () => {
   assert.throws(() => StringUtils.statsWithUppercaseLetter(34), Error);
   assert.throws(() => StringUtils.statsWithUppercaseLetter(true), Error);
   assert.throws(() => StringUtils.statsWithUppercaseLetter(() => 0), Error);
   assert.throws(() => StringUtils.statsWithUppercaseLetter(), Error);
   assert.throws(() => StringUtils.statsWithUppercaseLetter(null), Error);
 });

 it('should return false when string does not start with an uppercase letter', () => {
  assert.ok(() => StringUtils.statsWithUppercaseLetter('tell me something about this test'));
 });

 it('should return false when string starts with a symbol', () => {
  assert.ok(() => StringUtils.statsWithUppercaseLetter('*tell me something about this test'));
 });

 it('should return true when string starts with an uppercase letter', () => {
  assert.ok(() => StringUtils.statsWithUppercaseLetter('Tell me something about this test'));
 });

 it('should return true when string is one char long and contains an uppercase letter', () => {
  assert.ok(() => StringUtils.statsWithUppercaseLetter('A'));
  assert.ok(() => StringUtils.statsWithUppercaseLetter('Z'));
 });

 it('should return false when empty string is passed', () => {
  assert.ok(() => !StringUtils.statsWithUppercaseLetter(''));
 });
});
