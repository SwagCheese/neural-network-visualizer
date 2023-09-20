import type {Activation} from "./activation.ts"
import type {Gradient} from "./derivatives/gradient.ts"

/**
The logistic function is often called the sigmoid function,
however this is incorrect as sigmoid is not one specific function.
Actually, a sigmoid function is a bounded function with an "S"-shaped curve.
 */
export class Logistic implements Activation, Gradient {
    apply(array: number[]): number[] {
        const result: number[] = []

        for (const i in array) {
            result[i] = 1 / (1 + Math.exp(-array[i]))
        }

        return result
    }

    derive(array: number[]): number[] {
        const result: number[] = []
        const applied: number[] = this.apply(array)

        for (const i in array) {
            result[i] = applied[i] * (1 - applied[i])
        }

        return result
    }
}
