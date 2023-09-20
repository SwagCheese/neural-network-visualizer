import type {Activation} from "./activation.ts"
import type {Gradient} from "./derivatives/gradient.ts"

export class Relu implements Activation, Gradient {
    apply(array: number[]): number[] {
        const result: number[] = []

        for (const i in array) {
            result[i] = (array[i] > 0) ? array[i] : 0
        }

        return result
    }

    derive(array: number[]): number[] {
        const result: number[] = []

        for (const i in array) {
            // note that here the derivative for array[i] === 0 is arbitrarily chosen to be 0
            result[i] = (array[i] > 0) ? 1 : 0
        }

        return result
    }
}
