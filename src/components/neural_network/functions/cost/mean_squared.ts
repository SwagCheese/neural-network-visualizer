import type {Activation} from "../activation/activation.ts"
import type {Cost} from "./cost.ts"
import type {Gradient} from "../activation/derivatives/gradient.ts"

export class MeanSquared implements Cost {
    apply(actual: number[], predicted: number[]): number {
        let loss: number = 0

        for (const i in actual) {
            loss += Math.pow(actual[i] - predicted[i], 2)
        }

        return loss/actual.length
    }

    derive(activationFunction: Activation & Gradient, actual: number[], preactivation: number[]): number[] {
        const result: number[] = []

        const activated: number[] = activationFunction.apply(preactivation)
        const derived: number[] = activationFunction.derive(preactivation)

        for (const i in actual) {
            derived[i] = 2 * (activated[i] - actual[i]) * derived[i]
        }

        return result
    }
}
