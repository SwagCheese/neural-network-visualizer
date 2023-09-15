import type {Layer} from "./layer.ts"

export class NeuralNetwork {
    constructor(private _layers: Layer[]) {}

    forwardPassNoActivation(inputs: number[], lastIndex?: number): number[] {
        if (lastIndex === undefined || lastIndex > this.layers.length) lastIndex = this.layers.length

        for (let i: number = 0; i < lastIndex; ++i) {
            inputs = this.layers[i].activate(inputs)
        }

        if (lastIndex === this.layers.length) return inputs

        return this.layers[lastIndex].preActivation(inputs)
    }

    predict(inputs: number[]): number[] {
        for (const layer of this.layers) {
            inputs = layer.activate(inputs)
        }

        return inputs
    }

    get layers() {
        return this._layers
    }

    set layers(value: Layer[]) {
        this._layers = value
    }
}
