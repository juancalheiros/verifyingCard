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