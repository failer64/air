import { Col, Typography, Input } from 'antd';
import { memo, useState } from 'react';

const { Text } = Typography;


const PriceFilter = memo(({ setFilter }) => {

	const [text1, setText1] = useState(0);
	const [text2, setText2] = useState(150000);

	const onChangeHandler1 = (e) => {
		setText1(e.target.value)
	}
	const onChangeHandler2 = (e) => {
		setText2(e.target.value)
	}
	const onBlurHandler = () => {
		setFilter([text1, text2]);
	}

	return (
		<Col style={{ width: '170px' }}		>
			<Typography.Title level={4}>
				Цена
			</Typography.Title>
			<Text>от</Text>
			<Input type="number" value={text1} onChange={onChangeHandler1} onBlur={onBlurHandler} />
			<Text>до</Text>
			<Input type="number" value={text2} onChange={onChangeHandler2} onBlur={onBlurHandler} />
		</Col>
	)
})

export default PriceFilter