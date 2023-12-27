import { useMemo, useState } from 'react'
import './App.css'
import { Col, Row } from 'antd';
import MainContent from './components/MainContent';
import { getUniqeItems } from './helpers';
import { useItems } from './store';
import Sidebar from './components/Sibebar';


function App() {

	const [sort, setSort] = useState(0);
	const [filterCompanies, setFilterCompanies] = useState([]);
	const [filterStops, setFilterStops] = useState([]);
	const [filterPrice, setFilterPrice] = useState([]);


	const items = useItems((state) => state.items);

	const ui = useMemo(() => getUniqeItems(items), [items]);
	const uniqeItems = useMemo(() => getUniqeItems(ui), [ui]);
	//const uniqeItems = useMemo(() => [... new Set(items)], [items]);

	return (
		<Row>
			<Sidebar items={uniqeItems} />
			<Col sm={24} md={18}>
				<MainContent items={items} />
			</Col>
		</Row>
	)
}

export default App