import type {Activation} from "../activation/activation.ts"
import type {Cost} from "./cost.ts"
import type {Gradient} from "../activation/derivatives/gradient.ts"

export class MeanAbsolute implements Cost {
    apply(actual: number[], predicted: number[]): number {
        let loss: number = 0

        for (const i in actual) {
            loss += Math.abs(actual[i] - predicted[i])
        }

        return loss/actual.length
    }

    derive(activationFunction: Activation & Gradient, actual: number[], preactivation: number[]): number[] {
        const result: number[] = []
        const activated: number[] = activationFunction.apply(preactivation)

        for (const i in activated) {
            result[i] = Math.sign(actual[i] - activated[i])/actual.length;
        }

        return result
    }
}
