import {test, expect, describe} from 'vitest';
import {Softmax} from "../../../../../src/components/neural_network/functions/activation/softmax";

describe('Softmax Activation', () => {
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
        const input = [100, 200, 500];
        const expected = [0, 0, 1];
        const output = softmax.apply(input);

        for (let i in output) {
            expect(output[i]).toBeCloseTo(expected[i]);
        }
    });

    test('Softmax derive function', () => {
        const softmax = new Softmax();
        const input = [1, 2, 3];
        const expected = [
            [0.08193, -0.02206, -0.05986],
            [-0.02206, 0.18484, -0.16277],
            [-0.05986, -0.16277, 0.22180]
        ];

        const output = softmax.derive(input);

        for (let i in output) {
            for (let j in output[i]) {
                expect(output[i][j]).toBeCloseTo(expected[i][j]);
            }
        }
    });

    test('Softmax derive function - all zeros', () => {
        const softmax = new Softmax();
        const input = [0, 0, 0];
        const expected = [
            [2 / 9, -1 / 9, -1 / 9],
            [-1 / 9, 2 / 9, -1 / 9],
            [-1 / 9, -1 / 9, 2 / 9]
        ];

        const output = softmax.derive(input);

        for (let i in output) {
            for (let j in output[i]) {
                expect(output[i][j]).toBeCloseTo(expected[i][j]);
            }
        }
    });

    test('Softmax derive function - large values', () => {
        const softmax = new Softmax();
        const input = [100, 200, 500];
        const expected = [
            [-0.0, -0.0, 0.0],
            [-0.0, -0.0, 0.0],
            [-0.0, -0.0, 0.0],
        ];

        const output = softmax.derive(input);

        for (let i in output) {
            for (let j in output[i]) {
                expect(output[i][j]).toBeCloseTo(expected[i][j]);
            }
        }
    });
});
