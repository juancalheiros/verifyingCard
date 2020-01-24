
function reverseNumberCard(numberCard) {
	const reverseNumberCard  = numberCard.split('').map(digit => Number.parseInt(digit, 10)).reverse() 
	//pegando cada possição do vetor e separando, depois obtendo cada digito e tetando converter para um numero decimal(os parametros são string)
	//após isso e feito a reversão da string
	return reverseNumberCard
}

function DoubleNumberOdd(numberCard){
	const DoubleNumberOdd = reverseNumberCard(numberCard)
	for (let index in DoubleNumberOdd){
		if (index%2 !=0)	
			DoubleNumberOdd[index] = DoubleNumberOdd[index]*2
	}
	return DoubleNumberOdd
}
module.exports = {reverseNumberCard,DoubleNumberOdd};
