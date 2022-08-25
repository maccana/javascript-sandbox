// Closures
// Player Factory 
const player = (name, credits) => {

	function playerStats() {
		return { name, credits }
	}

	function decrementScore() {
		return credits -= 1
	}

	function incrementScore() {
		return credits -= 1
	}

	function getPointsTotal() {
		return credits
	}

	return {
		playerStats,
		decrementScore,
		getPointsTotal
	}
}

// Init Players 
let simon = player('Simon', 4)
let suzy = player('Suzy', 7)

console.log('Simon stats ', simon.playerStats())
console.log('Suzy stats ', suzy.playerStats())

// Suzy loses 2 points 
suzy.decrementScore()
suzy.decrementScore()

// Simon loses 1 point
simon.decrementScore()

// New scores 
console.log('Simon points total ', simon.getPointsTotal())
console.log('Suzy points total ', suzy.getPointsTotal())





