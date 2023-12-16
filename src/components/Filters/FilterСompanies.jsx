import { Col, Typography, Checkbox } from 'antd';

const { Text } = Typography;

const FilterСompanies = ({ items, setFilter }) => {

	const onChangeFilter = (e, label) => {
		if (e.target.checked) {
			setFilter(prev => [...prev, label]);
		} else {
			setFilter(prev => {
				return (prev.filter(item => item !== label))
			});
		}

	}

	const uniqeItems = items?.sort((a, b) => {
		return (
			a.flight.price.total.amount - b.flight.price.total.amount
		);
	})
		.reduce((res, cur) => res.find((find) => {

			return (
				find.flight.carrier.caption === cur.flight.carrier.caption
			);
		}
		)
			? res
			: [...res, cur],
			[]);

	return (
		<Col>
			<Typography.Title level={4}>
				Авиакомпании
			</Typography.Title>
			{uniqeItems &&
				uniqeItems.map((un, i) => {

					return (
						<Checkbox key={i} onChange={(e) => onChangeFilter(e, un.flight.carrier.caption)}>
							<Text
								ellipsis
								style={{ width: 180 }}
							>
								{un.flight.carrier.caption}
							</Text>

							<Text> от {un.flight.price.total.amount}</Text>
						</Checkbox>
					);
				}
				)}
		</Col>
	);
};

export default FilterСompanies