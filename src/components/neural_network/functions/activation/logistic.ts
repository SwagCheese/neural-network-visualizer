import type {Activation} from "./activation.ts"
import type {Gradient} from "./derivatives/gradient.ts"

/**
The logistic function is often called the sigmoid function,
however this is incorrect as sigmoid is not one specific function.
Actually, a sigmoid function is a bounded function with an "S"-shaped curve.
 */
export class Logistic implements Activation, Gradient {
    apply(array: number[]): number[] {
        const result: number[] = [array.length]

        for (const i in result) {
            result[i] = 1 / (1 + Math.exp(-array[i]))
        }

        return result
    }

    derive(array: number[]): number[] {
        const result: number[] = [array.length]

        for (const i in result) {
            const sigmoid: number = 1 / (1 + Math.exp(-array[i]))
            result[i] = sigmoid * (1 - sigmoid)
        }

        return result
    }
}
