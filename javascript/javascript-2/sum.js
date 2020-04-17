function sum(num = 0){
	let sumN = (numN = 0) => sum(num + numN);
	sumN.toString = () => num;
	return sumN;
}

function sum2(num = 0){
	let curSum = num;
	let sumN = (numN = 0) => {curSum += numN; return sumN};
	sumN.toString = () => curSum;
	return sumN;
}

module.exports = sum;