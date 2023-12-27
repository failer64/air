import { memo } from 'react';
import { Col, Space, Typography, Radio } from 'antd';
import { useFilters } from '../../store';

const SortItems = memo(() => {

	const sort = useFilters(state => state.sort);
	const setSort = useFilters(state => state.setSort);

	return (
		<Col>
			<Typography.Title level={4}>
				Сортировать
			</Typography.Title>
			<Radio.Group value={sort} onChange={(e) => setSort(e.target.value)}>
				<Space direction="vertical">
					<Radio value={0}>-по возрастанию цены</Radio>
					<Radio value={1}>-по убыванию цены</Radio>
					<Radio value={2}>-по времени в пути</Radio>
				</Space>
			</Radio.Group>
		</Col>
	);
})

export default SortItems