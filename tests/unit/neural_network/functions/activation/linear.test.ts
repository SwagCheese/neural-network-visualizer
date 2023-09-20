import {test, expect, describe} from 'vitest';
import {Linear} from "../../../../../src/components/neural_network/functions/activation/linear";

describe('Linear Activation', () => {
    test('Linear apply function - positive input', () => {
        const linear = new Linear();
        const input = [1, 2, 3];
        const expected = [1, 2, 3];
        expect(linear.apply(input)).toEqual(expected);
    });

    test('Linear apply function - negative input', () => {
        const linear = new Linear();
        const input = [-1, -2, -3];
        const expected = [-1, -2, -3];
        expect(linear.apply(input)).toEqual(expected);
    });

    test('Linear apply function - mixed input', () => {
        const linear = new Linear();
        const input = [1, -2, 3];
        const expected = [1, -2, 3];
        expect(linear.apply(input)).toEqual(expected);
    });

    test('Linear derive function - positive input', () => {
        const linear = new Linear();
        const input = [1, 2, 3];
        const expected = [1, 1, 1];
        expect(linear.derive(input)).toEqual(expected);
    });

    test('Linear derive function - negative input', () => {
        const linear = new Linear();
        const input = [-1, -2, -3];
        const expected = [1, 1, 1];
        expect(linear.derive(input)).toEqual(expected);
    });

    test('Linear derive function - mixed input', () => {
        const linear = new Linear();
        const input = [1, -2, 3];
        const expected = [1, 1, 1];
        expect(linear.derive(input)).toEqual(expected);
    });
});
