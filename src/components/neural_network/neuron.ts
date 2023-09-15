export class Neuron {
    constructor(private _weights: number[], private _bias: number) { }


    activate(inputs: number[]): number {
        if (inputs.length !== this.weights.length) {
            throw new Error("The inputs array must have the same length as the weights array.")
        }

        let result: number = this.bias

        for (const i in this.weights) {
            result += inputs[i] * this.weights[i]
        }

        return result
    }


    get weights(): number[] {
        return this._weights
    }

    set weights(value: number[]) {
        if (value.length === this._weights.length) {
            this._weights = value
        } else {
            throw new Error("The new weights array must have the same length as the original weights array.")
        }
    }

    get bias(): number {
        return this._bias
    }

    set bias(value: number) {
        this._bias = value
    }
}
