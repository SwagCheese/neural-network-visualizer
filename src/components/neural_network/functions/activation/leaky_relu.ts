import type {Activation} from "./activation.ts"
import type {Gradient} from "./derivatives/gradient.ts"

export class LeakyRelu implements Activation, Gradient {
    constructor(private readonly coefficient: number) {}

    apply(array: number[]): number[] {
        const result: number[] = [array.length]

        for (const i in result) {
            result[i] = (array[i] > 0) ? array[i] : array[i] * this.coefficient
        }

        return result
    }

    derive(array: number[]): number[] {
        const result: number[] = [array.length]

        for (const i in result) {
            result[i] = (array[i] > 0) ? 1 : this.coefficient
        }

        return result
    }
}
