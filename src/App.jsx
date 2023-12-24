import { useEffect, useState } from 'react'
import './App.css'
import { Col, Row, Layout } from 'antd';
import MainContent from './components/MainContent';
import FilterItems from './components/Filters/FilterItems';
import FilterСompanies from './components/Filters/FilterСompanies';
import SortItems from './components/Filters/SortItems';
import PriceFilter from './components/Filters/PriceFilter';

import db from './../db/flights.json'

const { Sider } = Layout;

function App() {

	const [items, setItems] = useState([]);
	const [sort, setSort] = useState(0);
	const [filterCompanies, setFilterCompanies] = useState([]);
	const [filterStops, setFilterStops] = useState([]);
	const [filterPrice, setFilterPrice] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setItems([db.result.flights[0], db.result.flights[1]])
	}, [])

	const addItems = () => {
		setTimeout(() => {
			setItems(prev =>
				[
					...prev,
					db.result.flights[items.length],
					db.result.flights[items.length + 1]
				]
			)
			setIsLoading(false);
		}, 0)
	}

	return (
		<Layout style={{ flexDirection: 'column' }}>
			<Row>
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
						<SortItems sort={sort} setSort={setSort} />
						<FilterItems setFilter={setFilterStops} />
						<PriceFilter setFilter={setFilterPrice} />
						<FilterСompanies items={items} setFilter={setFilterCompanies} />
					</Sider>
				</Col>
				<Col sm={24} md={18}>
					<MainContent items={items} addItems={addItems} sort={sort} filterStops={filterStops}
						filterCompanies={filterCompanies} filterPrice={filterPrice}
						setIsLoading={setIsLoading} isLoading={isLoading} />
				</Col>
			</Row>
		</Layout>
	)
}

export default App