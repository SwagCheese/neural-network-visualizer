import type {Activation} from "../activation/activation.ts";
import type {Cost} from "./cost.ts";
import type {Jacobian} from "../activation/derivatives/jacobian.ts";

export class CrossEntropy implements Cost {
    apply(actual: number[], predicted: number[]): number {
        const epsilon: number = 1e-10
        let loss: number = 0

        for (const i in actual) {
            loss += actual[i] * Math.log(predicted[i] + epsilon)
        }

        return -loss
    }

    derive(activationFunction: Activation & Jacobian, actual: number[], preactivation: number[]): number[] {
        const result: number[] = []

        const activated: number[] = activationFunction.apply(preactivation)

        for (const i in actual) {
            result[i] = activated[i] - actual[i]
        }

        return result
    }
}
