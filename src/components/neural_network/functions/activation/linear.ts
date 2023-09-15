import type {Activation} from "./activation.ts";
import type {Gradient} from "./derivatives/gradient.ts";

export class Linear implements Activation, Gradient {
    apply(array: number[]): number[] {
        return [...array]
    }

    derive(array: number[]): number[] {
        return Array(array.length).fill(1)
    }
}
