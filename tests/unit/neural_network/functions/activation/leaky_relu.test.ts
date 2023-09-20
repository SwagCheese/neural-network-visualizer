import {test, expect, describe} from 'vitest';
import {LeakyRelu} from "../../../../../src/components/neural_network/functions/activation/leaky_relu";

describe('Leaky Relu Activation', () => {
    test('LeakyRelu apply function - positive input', () => {
        const relu = new LeakyRelu(0.01);
        const input = [1, 2, 3];
        const expected = [1, 2, 3];
        expect(relu.apply(input)).toEqual(expected);
    });

    test('LeakyRelu apply function - negative input', () => {
        const relu = new LeakyRelu(0.01);
        const input = [-1, -2, -3];
        const expected = [-0.01, -0.02, -0.03];
        expect(relu.apply(input)).toEqual(expected);
    });

    test('LeakyRelu apply function - mixed input', () => {
        const relu = new LeakyRelu(0.01);
        const input = [1, -2, 3];
        const expected = [1, -0.02, 3];
        expect(relu.apply(input)).toEqual(expected);
    });

    test('LeakyRelu derive function - positive input', () => {
        const relu = new LeakyRelu(0.01);
        const input = [1, 2, 3];
        const expected = [1, 1, 1];
        expect(relu.derive(input)).toEqual(expected);
    });

    test('LeakyRelu derive function - negative input', () => {
        const relu = new LeakyRelu(0.01);
        const input = [-1, -2, -3];
        const expected = [0.01, 0.01, 0.01];
        expect(relu.derive(input)).toEqual(expected);
    });

    test('LeakyRelu derive function - mixed input', () => {
        const relu = new LeakyRelu(0.01);
        const input = [1, -2, 3];
        const expected = [1, 0.01, 1];
        expect(relu.derive(input)).toEqual(expected);
    });
});
