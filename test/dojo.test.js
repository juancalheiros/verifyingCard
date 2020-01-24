var assert = require('assert');
var dojo = require('../src/dojo');


describe("Reverse the digits", function () {// switch test -> conjunto de testes similares
    it(' "49927398716" should return [6, 1, 7, 8, 9, 3, 7, 2, 9, 9, 4]', function () { // caso de teste -> teste unitario
        const numberCard = "49927398716" // mock -> elementos necessarios para rodar o test
        
        const result = dojo.reverseNumberCard(numberCard) // Executa a funcao a ser testada

        assert.deepEqual(result, [6, 1, 7, 8, 9, 3, 7, 2, 9, 9, 4]); //valida o comportamento da funcao com o resultado esperado
    });

    it(' "1" should return [1]', function () { // caso de teste -> teste unitario
        const numberCard = "1" // mock -> elementos necessarios para rodar o test
        
        const result = dojo.reverseNumberCard(numberCard) // Executa a funcao a ser testada

        assert.deepEqual(result, [1]); //valida o comportamento da funcao com o resultado esperado
    });
    
});

describe("Reverse digits and Double number odd ",function(){
    it(' "01234" should return [46220]', function () { // caso de teste -> teste unitario
        const numberCard = "01234" // mock -> elementos necessarios para rodar o test
        
        const result = dojo.DoubleNumberOdd(numberCard) // Executa a funcao a ser testada

        assert.deepEqual(result, [4,6,2,2,0]); //valida o comportamento da funcao com o resultado esperado
    });

    it(' "1" should return [1]', function () { // caso de teste -> teste unitario
        const numberCard = "1" // mock -> elementos necessarios para rodar o test
        
        const result = dojo.DoubleNumberOdd(numberCard) // Executa a funcao a ser testada

        assert.deepEqual(result, [1]); //valida o comportamento da funcao com o resultado esperado
    });

    // it(' "1 2 3 " should return [1]', function () { // caso de teste -> teste unitario
    //     const numberCard = "1 2 3 " // mock -> elementos necessarios para rodar o test
        
    //     const result = dojo.DoubleNumberOdd(numberCard) // Executa a funcao a ser testada

    //     assert.deepEqual(result, [ ,6, ,4, ,2]); //valida o comportamento da funcao com o resultado esperado
    // });
});
 