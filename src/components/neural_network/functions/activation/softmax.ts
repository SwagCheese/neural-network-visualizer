import type {Activation} from "./activation.ts"
import type {Jacobian} from "./derivatives/jacobian.ts"

export class Softmax implements Activation, Jacobian {
    apply(array: number[]): number[] {
        const result: number[] = [array.length]
        let eSum: number = 0

        for (const i in result) {
            result[i] = Math.exp(array[i])
            eSum += result[i]
        }

        for (const i in result) {
            result[i] /= eSum
        }

        return result
    }


    derive(array: number[]): number[][] {
        const result: number[][] = [[]]
        const activated: number[] = this.apply(array)

        for (const i in array) {
            for (const j in array) {
                result[i][j] = activated[j] * ((i === j ? 1 : 0) - activated[i])
            }
        }

        return result
    }
}
