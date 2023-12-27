import { Col, Typography, Checkbox } from 'antd';
import { memo } from 'react';
import { useFilters, useItems } from '../../store';

const { Text } = Typography;

const FilterСompanies = memo(() => {

	return (
		<Col>
			<Typography.Title level={4}>
				Авиакомпании
			</Typography.Title>
			<FilterItems />
		</Col>
	);
})

export default FilterСompanies

const FilterItems = memo(() => {

	const filter = useFilters(state => state.filterCompanies);
	const setFilter = useFilters(state => state.setFilterCompanies);

	const items = useItems((state) => state.uniqItems);

	const onChangeFilter = (isChecked, label) => {
		setFilter(isChecked, label);
	}

	return (
		<>
			{
				!!items.length &&
				items.map((un, i) =>
					<Checkbox
						checked={filter.includes(un.flight.carrier.caption) ? true : false}
						key={i}
						onChange={
							(e) => onChangeFilter(e.target.checked, un.flight.carrier.caption)
						}
					>
						<Text
							ellipsis
							style={{ width: 180 }}
						>
							{un.flight.carrier.caption}
						</Text>
						<Text> от {un.flight.price.total.amount}</Text>
					</Checkbox >
				)
			}
		</>
	)
})