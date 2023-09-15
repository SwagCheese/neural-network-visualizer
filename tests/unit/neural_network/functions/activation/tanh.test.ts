import { test, expect } from 'vitest';
import {Tanh} from "../../../../../src/components/neural_network/functions/activation/tanh";

test('Tanh apply function - zero input', () => {
    const tanh = new Tanh();
    const input = [0, 0, 0];
    const expected = [0, 0, 0];
    expect(tanh.apply(input)).toEqual(expected);
});

test('Tanh apply function - positive input', () => {
    const tanh = new Tanh();
    const input = [1, 2, 3];
    const expected = [0.7615941559557649, 0.9640275800758169, 0.9950547536867305];
    expect(tanh.apply(input)).toEqual(expected);
});

test('Tanh apply function - negative input', () => {
    const tanh = new Tanh();
    const input = [-1, -2, -3];
    const expected = [-0.7615941559557649, -0.9640275800758169, -0.9950547536867305];
    expect(tanh.apply(input)).toEqual(expected);
});

test('Tanh derive function - zero input', () => {
    const tanh = new Tanh();
    const input = [0, 0, 0];
    const expected = [1, 1, 1];
    expect(tanh.derive(input)).toEqual(expected);
});

test('Tanh derive function - positive input', () => {
    const tanh = new Tanh();
    const input = [1, 2, 3];
    const expected = [0.41997434161402614, 0.07065082485316443, 0.009866037165440211];
    expect(tanh.derive(input)).toEqual(expected);
});

test('Tanh derive function - negative input', () => {
    const tanh = new Tanh();
    const input = [-1, -2, -3];
    const expected = [0.41997434161402614, 0.07065082485316443, 0.009866037165440211];
    expect(tanh.derive(input)).toEqual(expected);
});
