import type {Activation} from "../activation/activation.ts"

export interface Cost {
    apply(actual: number[], predicted: number[]): number
    derive(activationFunction: Activation, actual: number[], predicted: number[]): number[]
}
