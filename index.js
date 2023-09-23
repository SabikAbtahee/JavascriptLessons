const currencyAmount = {
	PENNY: 0.01,
	NICKEL: 0.05,
	DIME: 0.1,
	QUARTER: 0.25,
	ONE: 1,
	FIVE: 5,
	TEN: 10,
	TWENTY: 20,
	"ONE HUNDRED": 100,
};
const insufficient = { status: "INSUFFICIENT_FUNDS", change: [] };

function checkCashRegister(price, cash, cid) {
	let a = countTotalMoney(cid);
	console.log(a);
	let change;
	return change;
}

function countTotalMoney(cid) {
	let sum = 0;
	cid.forEach((res) => {
		sum += ((currencyAmount[res[0]] * res[1]));
	});
	return sum;
}

checkCashRegister(19.5, 20, [
	["PENNY", 1.01],
	["NICKEL", 2.05],
	["DIME", 3.1],
	["QUARTER", 4.25],
	["ONE", 90],
	["FIVE", 55],
	["TEN", 20],
	["TWENTY", 60],
	["ONE HUNDRED", 100],
]);
// const currencyAmount = {
// 	PENNY: 0.01,
// 	NICKEL: 0.05,
// 	DIME: 0.1,
// 	QUARTER: 0.25,
// 	ONE: 1,
// 	FIVE: 5,
// 	TEN: 10,
// 	TWENTY: 20,
// 	"ONE HUNDRED": 100,
// };