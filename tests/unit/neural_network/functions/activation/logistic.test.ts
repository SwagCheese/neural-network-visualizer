import { test, expect } from 'vitest';
import {Logistic} from "../../../../../src/components/neural_network/functions/activation/logistic";

test('Logistic apply function - positive input', () => {
    const logistic = new Logistic();
    const input = [1, 2, 3];
    const expected = [0.7310585786300049, 0.8807970779778823, 0.9525741268224334];
    expect(logistic.apply(input)).toEqual(expected);
});

test('Logistic apply function - negative input', () => {
    const logistic = new Logistic();
    const input = [-1, -2, -3];
    const expected = [0.2689414213699951, 0.11920292202211755, 0.04742587317756678];
    expect(logistic.apply(input)).toEqual(expected);
});

test('Logistic apply function - mixed input', () => {
    const logistic = new Logistic();
    const input = [1, -2, 3];
    const expected = [0.7310585786300049, 0.11920292202211755, 0.9525741268224334];
    expect(logistic.apply(input)).toEqual(expected);
});

test('Logistic derive function - positive input', () => {
    const logistic = new Logistic();
    const input = [1, 2, 3];
    const expected = [0.19661193324148185, 0.10499358540350662, 0.045176659730912];
    expect(logistic.derive(input)).toEqual(expected);
});

test('Logistic derive function - negative input', () => {
    const logistic = new Logistic();
    const input = [-1, -2, -3];
    const expected = [0.19661193324148185, 0.10499358540350662, 0.045176659730912];
    expect(logistic.derive(input)).toEqual(expected);
});

test('Logistic derive function - mixed input', () => {
    const logistic = new Logistic();
    const input = [1, -2, 3];
    const expected = [0.19661193324148185, 0.10499358540350662, 0.045176659730912];
    expect(logistic.derive(input)).toEqual(expected);
});

