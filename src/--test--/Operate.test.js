import operate from '../logic/operate';

test('adds two numbers correctly', () => {
  const result = operate('2', '3', '+');
  expect(result).toBe('5');
});

test('subtracts two numbers correctly', () => {
  const result = operate('5', '3', '-');
  expect(result).toBe('2');
});

test('multiplies two numbers correctly', () => {
  const result = operate('2', '3', '*');
  expect(result).toBe('6');
});

test('divides two numbers correctly', () => {
  const result = operate('6', '3', '/');
  expect(result).toBe('2');
});

test('handles division by zero gracefully', () => {
  const result = operate('5', '0', '/');
  expect(result).toBe("Can't divide by 0.");
});

test('calculates modulo correctly', () => {
  const result = operate('7', '4', '%');
  expect(result).toBe('3');
});

test('handles modulo with divisor as zero gracefully', () => {
  const result = operate('8', '0', '%');
  expect(result).toBe("Can't find modulo as can't divide by 0.");
});

test('throws an error for unknown operation', () => {
  expect(() => {
    operate('2', '3', '^');
  }).toThrow("Unknown operation '^'");
});
