import {NeuralNetwork} from "../../neural_network"

export abstract class Trainer {
    constructor(private readonly neuralNetwork: NeuralNetwork) {}
    abstract train(): void
    // This is an abstract class that represents a trainer. All trainers should extend this class.
    // This is an abstract method that should be implemented by all trainers. It is responsible for training the model.
}

export class Reinforcement extends Trainer {
    train(): void {
        // This method is responsible for training the model using reinforcement learning.
    }
}

export class Backpropagation extends Trainer {
    train(): void {
        // This method is responsible for training the model using backpropagation.
    }
}

export class Genetic extends Trainer {
    train(): void {
        // This method is responsible for training the model using a genetic algorithm.
    }
}