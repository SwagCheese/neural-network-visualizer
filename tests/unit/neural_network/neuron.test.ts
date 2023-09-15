import { test, expect } from 'vitest';
import {Neuron} from "../../../src/components/neural_network/neuron";

test('Neuron Class', (): void => {
    const weights: number[] = [0.5, -0.2, 0.1];
    const bias: number = 0.3;
    const neuron: Neuron = new Neuron(weights, bias);

    expect(neuron.weights).toEqual(weights);
    expect(neuron.bias).toBe(bias);

    test('Activation', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];
        const expectedActivation: number = bias + (inputs[0] * weights[0]) + (inputs[1] * weights[1]) + (inputs[2] * weights[2]);
        expect(neuron.activate(inputs)).toBe(expectedActivation);
    });

    test('Set Weights', (): void => {
        const newWeights: number[] = [0.1, 0.2, 0.3];
        neuron.weights = newWeights;
        expect(neuron.weights).toEqual(newWeights);
    });

    test('Set Weights - Invalid Length', (): void => {
        const newWeights: number[] = [0.1, 0.2];
        expect((): number[] => (neuron.weights = newWeights)).toThrowError('The new weights array must have the same length as the original weights array.');
    });

    test('Set Bias', (): void => {
        const newBias: number = 0.1;
        neuron.bias = newBias;
        expect(neuron.bias).toBe(newBias);
    });

    test('Set Bias - Invalid Type', (): void => {
        const newBias: any = 'invalid';
        expect((): void => (neuron.bias = newBias)).toThrowError('The bias value must be a number.');
    });
});
