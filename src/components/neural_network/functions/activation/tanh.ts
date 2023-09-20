import type {Activation} from "./activation.ts";
import type {Gradient} from "./derivatives/gradient.ts";

export class Tanh implements Activation, Gradient {
    apply(array: number[]): number[] {
    const result: number[] = []

        for (const i in array) {
            result[i] = Math.tanh(array[i])
        }

        return result
    }

    derive(array: number[]): number[] {
    const result: number[] = []

        for (const i in array) {
            result[i] = 1 - Math.pow(Math.tanh(array[i]), 2)
        }

        return result
    }
}
