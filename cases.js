'use strict';

function factorial(n){
    if(n === 0) return 1;

    let result = 1;
    let i = 1;
    while(i <= n){
        result *= i;
        i++;
    }

    return result;
}

function permutation(n, r){
    if(n === r) return 1;
    return factorial(n) / factorial(n - r);
}

function multiPermutaion(n, r){
    return n**r;
}

function combiation(n, r){
    if(n === r) return 1;
    return permutation(n, r) / factorial(r);
}

function multiCombination(n, r){
    return combiation(n+r-1, r);
}

module.exports = {
    permutation, combiation,
    multiCombination, multiPermutaion,
};