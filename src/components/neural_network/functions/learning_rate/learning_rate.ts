export interface LearningRate {
    get(): number
    update(epoch: number): void
}
