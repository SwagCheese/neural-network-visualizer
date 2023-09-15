import type {LearningRate} from "./learning_rate.ts";

export class Fixed implements LearningRate {
    constructor(private readonly learningRate: number) {}

    get(): number {
        return this.learningRate
    }

    update(): void {

    }
}
