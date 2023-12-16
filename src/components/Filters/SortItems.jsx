import { Col, Space, Typography, Radio } from 'antd';

const SortItems = ({ sort, setSort }) => {

	const onChangeFilter = (e) => {
		setSort(e.target.value);
	};

	return (
		<Col>
			<Typography.Title level={4}>
				Сортировать
			</Typography.Title>
			<Radio.Group value={sort} onChange={onChangeFilter}>
				<Space direction="vertical">
					<Radio value={0}>-по возрастанию цены</Radio>
					<Radio value={1}>-по убыванию цены</Radio>
					<Radio value={2}>-по времени в пути</Radio>
				</Space>
			</Radio.Group>
		</Col>
	);
};

export default SortItems