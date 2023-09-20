import type {Activation} from "./activation.ts"
import type {Jacobian} from "./derivatives/jacobian.ts"

export class Softmax implements Activation, Jacobian {
    apply(array: number[]): number[] {
        const result: number[] = []
        let eSum: number = 0

        for (const i in array) {
            result[i] = Math.exp(array[i])
            eSum += result[i]
        }

        for (const i in result) {
            result[i] /= eSum
        }

        return result
    }


    derive(array: number[]): number[][] {
        const result: number[][] = []
        const activated: number[] = this.apply(array)

        for (let i = 0; i < array.length; ++i) {
            result.push([])
            for (let j = 0; j < array.length; ++j) {
                if (i == j) {
                    result[i].push(activated[i] * (1 - activated[i]))
                } else {
                    result[i].push(-activated[i] * activated[j])
                }
            }
        }

        return result
    }
}
