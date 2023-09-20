import {test, expect, describe} from 'vitest';
import {Layer} from "../../../src/components/neural_network/layer";
import {Neuron} from "../../../src/components/neural_network/neuron";
import {Linear} from "../../../src/components/neural_network/functions/activation/linear";
import {NeuralNetwork} from "../../../src/components/neural_network/neural_network";
import {Tanh} from "../../../src/components/neural_network/functions/activation/tanh";

describe('Neural Network Class', (): void => {
    /*
    Here it would be best to use Linear activation, however that makes it impossible
    to differentiate between the predict method and the forwardPassNoActivation method.
    Tanh seems to be the most robust option, as it only uses functions in the builtin Math object.
     */
    const layers: Layer[] = [
        new Layer([new Neuron([0.5, -0.2, 0.1], 0.3)], new Tanh()),
        new Layer([new Neuron([0.4], 0.2)], new Tanh())
    ];
    const neuralNetwork: NeuralNetwork = new NeuralNetwork(layers);

    test('Constructor - Valid layers', () => {
        expect(neuralNetwork.layers).toEqual(layers);
    });

    test('Constructor - Invalid Layers', (): void => {
        const invalidLayers: Layer[] = [];
        expect(() => new NeuralNetwork(invalidLayers)).toThrowError('Layers array must not be empty.');
    });

    test('Forward Pass Without Activation - Full Network', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];

        const expectedOutputs: number[] = [0.49035896593963227092];
        const recievedOutputs = neuralNetwork.forwardPassNoActivation(inputs);

        for (let i in expectedOutputs) {
            expect(recievedOutputs[i]).toBeCloseTo(expectedOutputs[i]);
        }
    });

    test('Forward Pass Without Activation - Partial Network', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];
        const lastIndex: number = 1;

        const expectedOutputs: number[] = [0.92];

        expect(neuralNetwork.forwardPassNoActivation(inputs, lastIndex)).toEqual(expectedOutputs);
    });

    test('Predict', (): void => {
        const inputs: number[] = [1.0, -0.5, 0.2];

        const expectedOutputs: number[] = [0.45450129297896014959];
        const recievedOutputs = neuralNetwork.predict(inputs);

        for (let i in expectedOutputs) {
            expect(recievedOutputs[i]).toBeCloseTo(expectedOutputs[i]);
        }
    });

    test('Set Layers - Valid', (): void => {
        const newLayers: Layer[] = [
            new Layer([new Neuron([0.1, -0.1, 0.1], 0.1)], new Linear()),
            new Layer([new Neuron([0.2, -0.2, 0.2], 0.2)], new Linear())
        ];
        neuralNetwork.layers = newLayers;
        expect(neuralNetwork.layers).toEqual(newLayers);
    });

    test('Set Layers - Invalid', (): void => {
        const newLayers: Layer[] = [];
        expect(() => (neuralNetwork.layers = newLayers)).toThrowError('Layers array must not be empty.');
    });
});
