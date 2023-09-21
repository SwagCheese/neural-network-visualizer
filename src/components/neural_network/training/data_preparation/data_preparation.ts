import { PolicyNetwork } from "../trainers/reinforcement/policy_network";
import { Reinforcement } from "../trainers/reinforcement/reinforcement";
import { Mutation } from "../trainers/genetic/mutation";
import { ActionSelector } from "../trainers/reinforcement/action_selector";
import { TrainingScheduler } from "../training_manager/training_scheduler";
import { DataValidator } from "./data_validator";
import { DataLoader } from "./data_loader";
import { Metric } from "../evaluation/metric";
import { ResultAnalysis } from "../evaluation/result_analysis";
import { Evaluation } from "../evaluation/evaluation";
import { Selection } from "../trainers/genetic/selection";
import { DataTransformer } from "./data_transformer";
import { Crossover } from "../trainers/genetic/crossover";
import { Logging } from "../training_manager/logging";
import { ModelCheckpoint } from "../training_manager/model_checkpoint";
import { Reward } from "../trainers/reinforcement/reward";
import { TrainingManager } from "../training_manager/training_manager";

export class DataPreparation {
    // This class is responsible for preparing the data before training.

    private policyNetwork: PolicyNetwork;
    private reinforcement: Reinforcement;
    private mutation: Mutation;
    private actionSelector: ActionSelector;
    private trainingScheduler: TrainingScheduler;
    private dataValidator: DataValidator;
    private dataLoader: DataLoader;
    private metric: Metric;
    private resultAnalysis: ResultAnalysis;
    private evaluation: Evaluation;
    private selection: Selection;
    private dataTransformer: DataTransformer;
    private crossover: Crossover;
    private logging: Logging;
    private modelCheckpoint: ModelCheckpoint;
    private reward: Reward;
    private trainingManager: TrainingManager;

    constructor() {
        this.policyNetwork = new PolicyNetwork();
        this.reinforcement = new Reinforcement();
        this.mutation = new Mutation();
        this.actionSelector = new ActionSelector();
        this.trainingScheduler = new TrainingScheduler();
        this.dataValidator = new DataValidator();
        this.dataLoader = new DataLoader();
        this.metric = new Metric();
        this.resultAnalysis = new ResultAnalysis();
        this.evaluation = new Evaluation();
        this.selection = new Selection();
        this.dataTransformer = new DataTransformer();
        this.crossover = new Crossover();
        this.logging = new Logging();
        this.modelCheckpoint = new ModelCheckpoint();
        this.reward = new Reward();
        this.trainingManager = new TrainingManager();
    }

    prepareData(): void {
        // This method is responsible for preparing the data for training.
        this.dataValidator.validateData();
        this.dataLoader.loadData();
        this.dataTransformer.transformData();
    }

    trainModel(): void {
        // This method is responsible for training the model.
        this.trainingScheduler.scheduleTraining();
        this.trainingManager.train();
        this.policyNetwork.train();
        this.reinforcement.train();
        this.mutation.train();
        this.actionSelector.train();
        this.metric.calculateMetric();
        this.resultAnalysis.analyzeResults();
        this.evaluation.evaluatePerformance();
        this.selection.train();
        this.crossover.train();
        this.logging.logInformation();
        this.modelCheckpoint.saveModelCheckpoint();
        this.reward.calculateReward();
    }
}