import { memo } from 'react'
import { Layout, Col } from 'antd';
import FilterItems from './../Filters/FilterItems';
import FilterСompanies from './../Filters/FilterСompanies';
import SortItems from './../Filters/SortItems';
import PriceFilter from './../Filters/PriceFilter';

const { Sider } = Layout;

const Sidebar = memo(({ items }) => {
	return (
		<Col sm={0} md={6} className='column'>
			<Sider
				theme='light'
				breakpoint="sm"
				collapsedWidth="0"
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					top: 0,
					left: 0,
					paddingLeft: '15px'
				}}
				className='sider'
			>
				<SortItems />
				<FilterItems />
				<PriceFilter />
				<FilterСompanies items={items} />
			</Sider>
		</Col>
	)
})

export default Sidebar