import { describe, expect, test} from "vitest";
import {MeanAbsolute} from "../../../../../src/components/neural_network/functions/cost/mean_absolute";
import {Linear} from "../../../../../src/components/neural_network/functions/activation/linear";

describe('Mean Absolute Loss', () => {
    const meanAbsolute = new MeanAbsolute();
    const activationFunction = new Linear();

    test('apply - computes mean absolute loss', () => {
        const actual = [0.2, 0.3, 0.5];
        const predicted = [0.1, 0.4, 0.5];

        const answer = 1/15;

        expect(meanAbsolute.apply(actual, predicted)).toBeCloseTo(answer);
    });

    test('apply - handles edge case with zero actual values', () => {
        const actual = [0, 0, 0];
        const predicted = [0.1, 0.4, 0.5];

        const answer = 1/3;

        expect(meanAbsolute.apply(actual, predicted)).toEqual(answer);
    });

    test('apply - handles edge case with zero predicted values', () => {
        const actual = [0.2, 0.3, 0.5];
        const predicted = [0, 0, 0];

        const answer = 1/3;

        expect(meanAbsolute.apply(actual, predicted)).toEqual(answer);
    });

    test('apply - handles edge case with all zero values', () => {
        const actual = [0, 0, 0];
        const predicted = [0, 0, 0];

        const answer = 0;

        expect(meanAbsolute.apply(actual, predicted)).toEqual(answer);
    });

    test('derive - computes derivative of mean absolute loss', () => {
        const actual = [0.2, 0.3, 0.5];
        const preactivation = [0.1, 0.4, 0.5];

        const answer = [1/3, -1/3, 0];

        expect(meanAbsolute.derive(activationFunction, actual, preactivation)).toEqual(answer);
    });

    test('derive - handles edge case with zero actual values', () => {
        const actual = [0, 0, 0];
        const preactivation = [0.1, 0.4, 0.5];

        const answer = [-1/3, -1/3, -1/3];

        expect(meanAbsolute.derive(activationFunction, actual, preactivation)).toEqual(answer);
    });

    test('derive - handles edge case with zero predicted values', () => {
        const actual = [0.2, 0.3, 0.5];
        const preactivation = [0, 0, 0];

        const answer = [1/3, 1/3, 1/3];

        expect(meanAbsolute.derive(activationFunction, actual, preactivation)).toEqual(answer);
    });

    test('derive - handles edge case with all zero values', () => {
        const actual = [0, 0, 0];
        const preactivation = [0, 0, 0];

        const answer = [0, 0, 0];

        expect(meanAbsolute.derive(activationFunction, actual, preactivation)).toEqual(answer);
    })
});
