
function reverseNumberCard(numberCard) {
	const reverseNumberCard  = numberCard.split('').map(digit => Number.parseInt(digit, 10)).reverse()
	return reverseNumberCard
}


module.exports = {reverseNumberCard};
