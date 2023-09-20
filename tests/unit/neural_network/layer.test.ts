import {test, expect, describe} from 'vitest';
import {Neuron} from "../../../src/components/neural_network/neuron";
import {Linear} from "../../../src/components/neural_network/functions/activation/linear";
import {Layer} from "../../../src/components/neural_network/layer";

describe('Layer Class', (): void => {
    const neurons: Neuron[] = [
        new Neuron([0.5, -0.2, 0.1], 0.3),
        new Neuron([-0.1, 0.4, -0.3], 0.2)
    ];
    const activationFunction: Linear = new Linear();
    const layer: Layer = new Layer(neurons, activationFunction);

    test('Constructor', () => {
        expect(layer.neurons).toEqual(neurons);
        expect(layer.activationFunction).toEqual(activationFunction);
    });

    test('PreActivation', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];
        const expectedPreActivation: number[] = [
            neurons[0].activate(inputs),
            neurons[1].activate(inputs)
        ];
        expect(layer.preActivation(inputs)).toEqual(expectedPreActivation);
    });

    test('Activation', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];
        const expectedActivation: number[] = activationFunction.apply(layer.preActivation(inputs));
        expect(layer.activate(inputs)).toEqual(expectedActivation);
    });

    test('Invalid Neurons', (): void => {
        const invalidNeurons: Neuron[] = [];
        expect(() => new Layer(invalidNeurons, activationFunction)).toThrowError('The neurons array must not be empty.');
    });
});
