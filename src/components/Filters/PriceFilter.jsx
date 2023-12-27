import { Col, Typography, Input } from 'antd';
import { memo, useState } from 'react';
import { useFilters } from '../../store';

const { Text } = Typography;


const PriceFilter = memo(() => {

	const [min, setMin] = useState(0);
	const [max, setMax] = useState(150000);

	const setFilter = useFilters(state => state.setFilterPrice);

	const onChangeHandler1 = (e) => {
		setMin(e.target.value)
	}
	const onChangeHandler2 = (e) => {
		setMax(e.target.value)
	}
	const onBlurHandler = () => {
		setFilter(min, max);
	}

	return (
		<Col style={{ width: '170px' }}		>
			<Typography.Title level={4}>
				Цена
			</Typography.Title>
			<Text>от</Text>
			<Input type="number" value={min} onChange={onChangeHandler1} onBlur={onBlurHandler} />
			<Text>до</Text>
			<Input type="number" value={max} onChange={onChangeHandler2} onBlur={onBlurHandler} />
		</Col>
	)
})

export default PriceFilter