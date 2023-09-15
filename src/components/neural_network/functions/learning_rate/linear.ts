import type {LearningRate} from "./learning_rate.ts";

export class Linear implements LearningRate {
    private learningRate: number

    constructor(initialLearningRate: number, private readonly increment: number) {
        this.learningRate = initialLearningRate
    }

    get(): number {
        return this.learningRate
    }

    update(): void {
        this.learningRate += this.increment
    }
}
