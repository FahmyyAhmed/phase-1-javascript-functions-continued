// code your solution here

const saturdayFun = function (activity = "roller-skate") {
	return `This Saturday, I want to ${activity}!`;
};


const mondayWork = function (work = "go to the office") {
	return `This Monday, I will ${work}.`;
};



function wrapAdjective(symbol = "*") {
	const howeverYouWant = function (adjective = "special") {
		return `You are ${symbol}${adjective}${symbol}!`;
	};
	return howeverYouWant;
}

