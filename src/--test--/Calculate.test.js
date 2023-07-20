import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom/extend-expect';
import calculate from '../logic/calculate';

describe('Calculator component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
  test('clears the calculator data when AC button is pressed', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: 0, next: null, operation: null });
  });

  test('clears the calculator data when AC button is pressed', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: 0, next: null, operation: null });
  });

  test('handles decimal point correctly when "." button is pressed', () => {
    const result = calculate({ total: 10, next: '5', operation: null }, '.');
    expect(result).toEqual({ total: 10, next: '5.', operation: null });
  });

  test('performs subtraction correctly when "-" button is pressed', () => {
    const result = calculate({ total: 10, next: '5', operation: null }, '-');
    expect(result).toEqual({ total: '5', next: null, operation: '-' });
  });

  test('handles division by zero gracefully', () => {
    const result = calculate({ total: 10, next: '0', operation: '/' }, '=');
    expect(result).toEqual({
      total: "Can't divide by 0.",
      next: null,
      operation: null,
    });
  });

  test('changes the sign of the number when "+/-" button is pressed', () => {
    const result = calculate({ total: 10, next: '5', operation: null }, '+/-');
    expect(result).toEqual({ total: 10, next: '-5', operation: null });
  });

  test('handles operation chaining correctly', () => {
    const result = calculate({ total: 10, next: '5', operation: '+' }, '-');
    expect(result).toEqual({ total: '15', next: null, operation: '-' });
  });
});
