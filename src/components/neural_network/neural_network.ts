import type {Layer} from "./layer.ts"

export class NeuralNetwork {
    constructor(private _layers: Layer[]) {
        this.layers = _layers
    }

    forwardPassNoActivation(inputs: number[], lastIndex?: number): number[] {
        if (lastIndex === undefined || lastIndex > this.layers.length) lastIndex = this.layers.length
        if (lastIndex < 0) throw new Error("Last index cannot be negative.")

        for (let i: number = 0; i < lastIndex-1; ++i) {
            inputs = this.layers[i].activate(inputs)
        }

        return this.layers[lastIndex-1].preActivation(inputs)
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
        if (value.length == 0) {
            throw new Error("Layers array must not be empty.")
        }
        this._layers = value
    }
}
