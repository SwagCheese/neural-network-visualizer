import {Trainer} from "../trainers/trainer.ts";

export class TrainingManager {
    constructor(private readonly trainers: Trainer[]) {
    }

    train(): void {
        for (const trainer of this.trainers) {
            trainer.train();
        }
    }
}
