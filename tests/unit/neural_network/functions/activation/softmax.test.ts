import { test, expect } from 'vitest';
import {Softmax} from "../../../../../src/components/neural_network/functions/activation/softmax";

test('Softmax apply function', () => {
    const softmax = new Softmax();
    const input = [1, 2, 3];
    const expected = [0.09003057317038046, 0.24472847105479767, 0.6652409557748219];
    expect(softmax.apply(input)).toEqual(expected);
});

test('Softmax apply function - all zeros', () => {
    const softmax = new Softmax();
    const input = [0, 0, 0];
    const expected = [0.3333333333333333, 0.3333333333333333, 0.3333333333333333];
    expect(softmax.apply(input)).toEqual(expected);
});

test('Softmax apply function - large values', () => {
    const softmax = new Softmax();
    const input = [1000, 2000, 3000];
    const expected = [0, 0, 1];
    expect(softmax.apply(input)).toEqual(expected);
});

test('Softmax derive function', () => {
    const softmax = new Softmax();
    const input = [1, 2, 3];
    const expected = [
        [-0.09003057317038046, 0.036631277777468364, 0.053399295392912095],
        [0.036631277777468364, -0.24472847105479767, 0.2080971932773293],
        [0.053399295392912095, 0.2080971932773293, -0.26149648867024137],
    ];
    expect(softmax.derive(input)).toEqual(expected);
});

test('Softmax derive function - all zeros', () => {
    const softmax = new Softmax();
    const input = [0, 0, 0];
    const expected = [
        [0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0],
    ];
    expect(softmax.derive(input)).toEqual(expected);
});

test('Softmax derive function - large values', () => {
    const softmax = new Softmax();
    const input = [1000, 2000, 3000];
    const expected = [
        [-0.0, -0.0, 0.0],
        [-0.0, -0.0, 0.0],
        [-0.0, -0.0, 0.0],
    ];
    expect(softmax.derive(input)).toEqual(expected);
});
