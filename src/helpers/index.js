import db from './../../db/flights.json'

export function getUniqeItems(items) {
	return items
		.sort((a, b) =>
			a.flight.price.total.amount - b.flight.price.total.amount
		)
		.reduce((res, cur) =>
			res.find((find) => find.flight.carrier.caption === cur.flight.carrier.caption)
				? res
				: [...res, cur],
			[])
}

export async function getData(index) {
	const res = Promise.resolve(
		[db.result.flights[index], db.result.flights[index + 1]]
	);
	return res;
}