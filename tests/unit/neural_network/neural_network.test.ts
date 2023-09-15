import { test, expect } from 'vitest';
import {Layer} from "../../../src/components/neural_network/layer";
import {Neuron} from "../../../src/components/neural_network/neuron";
import {Linear} from "../../../src/components/neural_network/functions/activation/linear";
import {NeuralNetwork} from "../../../src/components/neural_network/neural_network";

test('NeuralNetwork Class', (): void => {
    const layers: Layer[] = [
        new Layer([new Neuron([0.5, -0.2, 0.1], 0.3)], new Linear()),
        new Layer([new Neuron([-0.1, 0.4, -0.3], 0.2)], new Linear())
    ];
    const neuralNetwork: NeuralNetwork = new NeuralNetwork(layers);

    expect(neuralNetwork.layers).toEqual(layers);

    test('Forward Pass Without Activation - Full Network', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];
        const expectedOutput: number[] = neuralNetwork.forwardPassNoActivation(inputs);
        // Add your expectations for the output here
    });

    test('Forward Pass Without Activation - Partial Network', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];
        const lastIndex: number = 1;
        const expectedOutput: number[] = neuralNetwork.forwardPassNoActivation(inputs, lastIndex);
        // Add your expectations for the output here
    });

    test('Forward Pass Without Activation - Invalid Last Index', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];
        const lastIndex: number = 5; // Greater than the number of layers
        expect(() => neuralNetwork.forwardPassNoActivation(inputs, lastIndex)).toThrowError('Invalid last index.');
    });

    test('Predict - Full Network', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];
        const expectedOutput: number[] = neuralNetwork.predict(inputs);
        // Add your expectations for the output here
    });

    test('Predict - Partial Network', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];
        const lastIndex: number = 1;
        const expectedOutput: number[] = neuralNetwork.predict(inputs);
        // Add your expectations for the output here
    });

    test('Invalid Layers', (): void => {
        const invalidLayers: Layer[] = [];
        expect(() => new NeuralNetwork(invalidLayers)).toThrowError('Layers array must have at least one layer.');
    });

    test('Set Layers', (): void => {
        const newLayers: Layer[] = [
            new Layer([new Neuron([0.1, -0.1, 0.1], 0.1)], new Linear()),
            new Layer([new Neuron([0.2, -0.2, 0.2], 0.2)], new Linear())
        ];
        neuralNetwork.layers = newLayers;
        expect(neuralNetwork.layers).toEqual(newLayers);
    });

    test('Set Layers - Invalid', (): void => {
        const newLayers: Layer[] = [];
        expect(() => (neuralNetwork.layers = newLayers)).toThrowError('Layers array must have at least one layer.');
    });
});
