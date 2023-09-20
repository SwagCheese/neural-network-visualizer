import {test, expect, describe} from 'vitest';
import {Relu} from "../../../../../src/components/neural_network/functions/activation/relu";

describe('Relu Activation', () => {
    test('Relu apply function - positive input', () => {
        const relu = new Relu();
        const input = [1, 2, 3];
        const expected = [1, 2, 3];
        expect(relu.apply(input)).toEqual(expected);
    });

    test('Relu apply function - negative input', () => {
        const relu = new Relu();
        const input = [-1, -2, -3];
        const expected = [0, 0, 0];
        expect(relu.apply(input)).toEqual(expected);
    });

    test('Relu apply function - mixed input', () => {
        const relu = new Relu();
        const input = [1, -2, 3];
        const expected = [1, 0, 3];
        expect(relu.apply(input)).toEqual(expected);
    });

    test('Relu derive function - positive input', () => {
        const relu = new Relu();
        const input = [1, 2, 3];
        const expected = [1, 1, 1];
        expect(relu.derive(input)).toEqual(expected);
    });

    test('Relu derive function - negative input', () => {
        const relu = new Relu();
        const input = [-1, -2, -3];
        const expected = [0, 0, 0];
        expect(relu.derive(input)).toEqual(expected);
    });

    test('Relu derive function - mixed input', () => {
        const relu = new Relu();
        const input = [1, -2, 3];
        const expected = [1, 0, 1];
        expect(relu.derive(input)).toEqual(expected);
    });
});
