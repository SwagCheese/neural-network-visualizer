import {Trainer} from "../trainer";
import {PolicyNetwork} from "../reinforcement/policy_network";
import {Reinforcement} from "../reinforcement/reinforcement";
import {Mutation} from "../genetic/mutation";
import {ActionSelector} from "../reinforcement/action_selector";
import {TrainingScheduler} from "../training_manager/training_scheduler";
import {DataValidator} from "../data_preparation/data_validator";
import {DataLoader} from "../data_preparation/data_loader";
import {Metric} from "../evaluation/metric";
import {ResultAnalysis} from "../evaluation/result_analysis";
import {Evaluation} from "../evaluation/evaluation";
import {DataTransformer} from "../data_preparation/data_transformer";
import {Crossover} from "../genetic/crossover";
import {Logging} from "../training_manager/logging";
import {ModelCheckpoint} from "../training_manager/model_checkpoint";
import {Reward} from "../reinforcement/reward";
import {TrainingManager} from "../training_manager/training_manager";
import {DataPreparation} from "../data_preparation/data_preparation";
import {Genetic} from "./genetic";

export class Selection extends Trainer {
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
    private dataTransformer: DataTransformer;
    private crossover: Crossover;
    private logging: Logging;
    private modelCheckpoint: ModelCheckpoint;
    private reward: Reward;
    private trainingManager: TrainingManager;
    private dataPreparation: DataPreparation;
    private genetic: Genetic;

    constructor() {
        super();
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
        this.dataTransformer = new DataTransformer();
        this.crossover = new Crossover();
        this.logging = new Logging();
        this.modelCheckpoint = new ModelCheckpoint();
        this.reward = new Reward();
        this.trainingManager = new TrainingManager();
        this.dataPreparation = new DataPreparation();
        this.genetic = new Genetic();
    }

    // ...rest of the code...
}