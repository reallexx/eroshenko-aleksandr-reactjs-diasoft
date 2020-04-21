/*function sum(num = 0){
	let sumN = (numN = 0) => sum(num + numN);
	sumN.toString = () => num;
	return sumN;
}

function sum2(num = 0){
	let curSum = num;
	let sumN = (numN = 0) => {curSum += numN; return sumN};
	sumN.toString = () => curSum;
	return sumN;
}*/

function sum3(num){
	if (num !== undefined){
		let curSum = num;
		let sumN = (numN) => {
			if (numN !== undefined){
				curSum += numN; 
				return sumN;
			};
			return curSum;
		};
		sumN.toString = () => curSum;
		return sumN;
	}
}

module.exports = sum3;