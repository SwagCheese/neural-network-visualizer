import {CrossEntropy} from "../../../../../src/components/neural_network/functions/cost/cross_entropy";
import { describe, expect, test } from "vitest";
import {Softmax} from "../../../../../src/components/neural_network/functions/activation/softmax";

describe('Cross Entropy Loss', () => {
    const crossEntropy = new CrossEntropy();
    const activationFunction = new Softmax();

    test('apply - computes cross-entropy loss', () => {
        const actual = [0.2, 0.3, 0.5];
        const predicted = [0.1, 0.4, 0.5];

        const answer = 1.08197782844102831107;

        expect(crossEntropy.apply(actual, predicted)).toBeCloseTo(answer);
    });

    test('apply - handles edge case with zero actual values', () => {
        const actual = [0, 0, 0];
        const predicted = [0.1, 0.4, 0.5];

        const answer = 0;

        expect(crossEntropy.apply(actual, predicted)).toBeCloseTo(answer);
    });

    /*
       Theoretically the answer to this test should be infinity due
       to the fact that ln(ε) approaches -Infinity as ε approaches 0,
       however the true value of Math.Epsilon in javascript/typescript is 2^-52.

       When accounting for this in calculations, the "correct" result
       is found to be `36.0436533891171560897`.

       This result is also better to at preventing future errors,
       as Infinity can be problematic in other functions.
        */
    test('apply - handles edge case with zero predicted values', () => {
        const actual = [0.2, 0.3, 0.5];
        const predicted = [0, 0, 0];


        const answer = 36.0436533891171560897;

        expect(crossEntropy.apply(actual, predicted)).toBeCloseTo(answer);
    });

    test('apply - handles edge case with all zero values', () => {
        const actual = [0, 0, 0];
        const predicted = [0, 0, 0];


        const answer = 0;

        expect(crossEntropy.apply(actual, predicted)).toBeCloseTo(answer);
    });

    test('derive - computes derivative of cross-entropy loss', () => {
        const actual = [0.2, 0.3, 0.5];
        const preactivation = [1, 0.1, 0.4];

        const answer = [0.31140920808141653, -0.0920765322821292, -0.2193326757992874]

        expect(crossEntropy.derive(activationFunction, actual, preactivation)).toEqual(answer);
    });

    test('derive - handles edge case with zero actual values', () => {
        const actual = [0, 0, 0];
        const preactivation = [0.1, 0.4, 0.5];

        const answer = activationFunction.apply(preactivation);

        expect(crossEntropy.derive(activationFunction, actual, preactivation)).toEqual(answer);
    });

    test('derive - handles edge case with zero predicted values', () => {
        const actual = [0.2, 0.3, 0.5];
        const preactivation = [0, 0, 0];

        const actualAnswer = [2/15, 1/30, -1/6];
        const predictedAnswer = crossEntropy.derive(activationFunction, actual, preactivation);

        for (let i in actualAnswer) {
            expect(predictedAnswer[i]).toBeCloseTo(actualAnswer[i]);
        }
    });

    test('derive - handles edge case with all zero values', () => {
        const actual = [0, 0, 0];
        const preactivation = [0, 0, 0];

        const answer = [1/3, 1/3, 1/3]

        expect(crossEntropy.derive(activationFunction, actual, preactivation)).toEqual(answer);
    });
});
