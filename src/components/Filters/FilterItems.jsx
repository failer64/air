import { Col, Typography, Checkbox } from 'antd';

const FilterItems = ({ setFilter }) => {

	const onChangeFilter = (e, value) => {
		if (e.target.checked) {
			setFilter(prev => [...prev, value]);
		} else {
			setFilter(prev => {
				return (prev.filter(item => item !== value))
			});
		}
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
};

export default FilterItems