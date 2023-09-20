import {LearningRate} from "./learning_rate.ts";

export class Cyclic implements LearningRate {
    private batchesSinceRestart: number
    private nextCycleRestart: number
    private epoch: number

    constructor(private readonly minLearningRate: number, private maxLearningRate: number, private cycleLength: number, private readonly cycleLengthMultiplier: number, private readonly learningRateDecay: number, private readonly batchesPerEpoch: number) {
        this.batchesSinceRestart = 0
        this.nextCycleRestart = cycleLength
        this.epoch = 0
    }

    get(): number {
        const fractionToRestart: number = (++this.batchesSinceRestart / (this.batchesPerEpoch * this.cycleLength))
        return this.minLearningRate + 0.5 * (this.maxLearningRate - this.minLearningRate) * (1 + Math.cos(fractionToRestart * Math.PI))
    }

    update(): void {
        if (++this.epoch === this.nextCycleRestart) {
            this.batchesSinceRestart = 0

            this.cycleLength = Math.floor(this.cycleLength * this.cycleLengthMultiplier)
            this.nextCycleRestart += this.cycleLength

            this.maxLearningRate *= this.learningRateDecay
        }
    }
}
