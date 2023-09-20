import {LearningRate} from "../../../../../src/components/neural_network/functions/learning_rate/learning_rate";
import {Linear} from "../../../../../src/components/neural_network/functions/learning_rate/linear";
import { describe, beforeEach, test, expect } from "vitest";

describe('Linear Learning Rate', () => {
    let learningRate: LearningRate;

    beforeEach(() => {
        learningRate = new Linear(0.1, 0.01);
    });

    test('Initial learning rate is set correctly', () => {
        expect(learningRate.get()).toEqual(0.1);
    });

    test('Learning rate increments correctly after update', () => {
        learningRate.update();
        expect(learningRate.get()).toEqual(0.11);
    });

    test('Learning rate increments correctly after multiple updates', () => {
        learningRate.update();
        learningRate.update();
        learningRate.update();
        expect(learningRate.get()).toEqual(0.13);
    });

    test('Learning rate remains constant after getting', () => {
        learningRate.get();
        expect(learningRate.get()).toEqual(0.1);
    });

    test('Learning rate increments correctly after getting and updating', () => {
        learningRate.update();
        learningRate.get();
        learningRate.update();
        expect(learningRate.get()).toEqual(0.12);
    });

    test('Learning rate increments correctly after many updates and gets', () => {
        for (let i = 0; i < 100000; ++i) {
            learningRate.get();
            learningRate.update();
        }

        expect(learningRate.get()).toBeCloseTo(1000.1);
    });
});
