import { describe, expect, test } from "vitest";
import {MeanSquared} from "../../../../../src/components/neural_network/functions/cost/mean_squared";
import {Linear} from "../../../../../src/components/neural_network/functions/activation/linear";

describe('Mean Squared Loss', () => {
    const meanSquared = new MeanSquared();
    const activationFunction = new Linear();

    test('apply - computes mean squared loss', () => {
        const actual = [0.2, 0.3, 0.5];
        const predicted = [0.1, 0.4, 0.5];

        const answer = 2/300;

        expect(meanSquared.apply(actual, predicted)).toBeCloseTo(answer);
    });

    test('apply - handles edge case with zero actual values', () => {
        const actual = [0, 0, 0];
        const predicted = [0.1, 0.4, 0.5];

        const answer = 0.14;

        expect(meanSquared.apply(actual, predicted)).toEqual(answer);
    });

    test('apply - handles edge case with zero predicted values', () => {
        const actual = [0.2, 0.3, 0.5];
        const predicted = [0, 0, 0];

        const answer = 19/150;

        expect(meanSquared.apply(actual, predicted)).toEqual(answer);
    });

    test('apply - handles edge case with all zero values', () => {
        const actual = [0, 0, 0];
        const predicted = [0, 0, 0];

        const answer = 0;

        expect(meanSquared.apply(actual, predicted)).toEqual(answer);
    });

    test('derive - computes derivative of mean squared loss', () => {
        const actual = [0.2, 0.3, 0.5];
        const preactivation = [0.1, 0.4, 0.5];

        const actualAnswer = [-1/15, 1/15, 0];
        const predictedAnswer = meanSquared.derive(activationFunction, actual, preactivation);

        for (let i in actualAnswer) {
            expect(predictedAnswer[i]).toBeCloseTo(actualAnswer[i]);
        }
    });

    test('derive - handles edge case with zero actual values', () => {
        const actual = [0, 0, 0];
        const preactivation = [0.1, 0.4, 0.5];

        const answer = [1/15, 4/15, 1/3];

        expect(meanSquared.derive(activationFunction, actual, preactivation)).toEqual(answer);
    });

    test('derive - handles edge case with zero predicted values', () => {
        const actual = [0.2, 0.3, 0.5];
        const preactivation = [0, 0, 0];

        const actualAnswer = [-2/15, -0.2, -1/3];
        const predictedAnswer = meanSquared.derive(activationFunction, actual, preactivation);

        for (let i in actualAnswer) {
            expect(predictedAnswer[i]).toBeCloseTo(actualAnswer[i]);
        }
    });

    test('derive - handles edge case with all zero values', () => {
        const actual = [0, 0, 0];
        const preactivation = [0, 0, 0];

        const actualAnswer = [0, 0, 0];
        const predictedAnswer = meanSquared.derive(activationFunction, actual, preactivation);

        for (let i in actualAnswer) {
            expect(predictedAnswer[i]).toBeCloseTo(actualAnswer[i]);
        }
    });
});
