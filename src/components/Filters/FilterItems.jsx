import { memo } from 'react';
import { Col, Typography, Checkbox } from 'antd';
import { useFilters } from '../../store';


const FilterItems = memo(() => {

	const setFilter = useFilters(state => state.setFilterStops);

	const onChangeFilter = (e, value) => {
		setFilter(e.target.checked, value);
	}

	return (
		<Col>
			<Typography.Title level={4}>
				Фильровать
			</Typography.Title>
			<Checkbox onChange={(e) => onChangeFilter(e, 1)} style={{ display: 'flex' }}>
				- 1 пересадка
			</Checkbox>
			<Checkbox onChange={(e) => onChangeFilter(e, 0)} style={{ display: 'flex' }}>
				- без пересадок
			</Checkbox>
		</Col>
	);
})

export default FilterItems