import {NeuralNetwork} from "../../neural_network"

export abstract class Trainer {
    constructor(private readonly neuralNetwork: NeuralNetwork) {}
    abstract train(): void
}
