export function argmax(func: (input: number[]) => number[], array: number[]): number {
    const applied: number[] = func(array)

    let max: number = -Infinity
    let maxIndex: number = 0

    for (let i: number = 0; i < array.length; ++i) {
        if (applied[i] > max) {
            max = applied[i]
            maxIndex = i
        }
    }

    return array[maxIndex]
}
