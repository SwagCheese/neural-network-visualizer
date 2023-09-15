import type {Neuron} from "./neuron.ts"
import type {Activation} from "./functions/activation/activation.ts";

export class Layer {
    constructor(private readonly _neurons: Neuron[], private readonly _activationFunction: Activation) {}

    preActivation(inputs: number[]): number[] {
        const result: number[] = []

        for (const i in this.neurons) {
            result[i] = this.neurons[i].activate(inputs)
        }

        return result
    }

    activate(inputs: number[]): number[] {
        return this.activationFunction.apply(this.preActivation(inputs))
    }

    get neurons(): Neuron[] {
        return this._neurons
    }

    get activationFunction(): Activation {
        return this._activationFunction;
    }
}
