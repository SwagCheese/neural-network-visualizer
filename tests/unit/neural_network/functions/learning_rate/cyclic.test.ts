import {describe, beforeEach, test, expect} from "vitest";
import {LearningRate} from "../../../../../src/components/neural_network/functions/learning_rate/learning_rate";
import {Cyclic} from "../../../../../src/components/neural_network/functions/learning_rate/cyclic";

describe('Cyclic Learning Rate', () => {
    let learningRate: LearningRate;

    beforeEach(() => {
        learningRate = new Cyclic(0.1, 0.5, 10, 2, 0.9, 100);
    });

    test('Initial learning rate is set correctly', () => {
        expect(learningRate.get()).toBeCloseTo(0.5);
    });

    test('Learning rate changes correctly after update', () => {
        learningRate.update();
        expect(learningRate.get()).toEqual(0.5);
    });
});
