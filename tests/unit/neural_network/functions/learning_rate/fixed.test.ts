import {LearningRate} from "../../../../../src/components/neural_network/functions/learning_rate/learning_rate";
import {Fixed} from "../../../../../src/components/neural_network/functions/learning_rate/fixed";
import {describe, beforeEach, test, expect} from "vitest";

describe('Fixed Learning Rate', () => {
    let learningRate: LearningRate;

    beforeEach(() => {
        learningRate = new Fixed(0.1)
    });

    test('Initial learning rate is set correctly', () => {
        expect(learningRate.get()).toEqual(0.1);
    });

    test('Learning rate remains constant after update', () => {
        learningRate.update();
        expect(learningRate.get()).toEqual(0.1);
    });

    test('Learning rate remains constant after multiple updates', () => {
        learningRate.update();
        learningRate.update();
        expect(learningRate.get()).toEqual(0.1);
    });

    test('Learning rate remains constant after getting and updating', () => {
        learningRate.update();
        learningRate.get();
        learningRate.update();
        expect(learningRate.get()).toEqual(0.1);
    });

    test('Learning rate remains constant after many updates', () => {
        for (let i = 0; i < 1000000; ++i) {
            learningRate.update();
        }

        expect(learningRate.get()).toEqual(0.1);
    });

    test('Learning rate remains constant after zero updates', () => {
        expect(learningRate.get()).toEqual(0.1);
    });
});
