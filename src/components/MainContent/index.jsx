import { Empty, Layout, Spin, Col } from 'antd';
import Item from '../Item';
import LoadingButton from '../LoadingButton'

const { Content } = Layout;

const MainContent = ({
	items, addItems, sort, filterStops, filterCompanies, filterPrice, isLoading, setIsLoading
}) => {



	let sortedItems = items;

	if (sortedItems && filterStops.length) {
		sortedItems = sortedItems.filter(item => filterStops.includes(0) && item);
	}

	if (sortedItems && filterPrice.length) {
		sortedItems = sortedItems.filter(item => {

			return (
				+item.flight.price.total.amount > +filterPrice[0] &&
				+item.flight.price.total.amount < +filterPrice[1]
			)
		});
	}

	if (sortedItems && filterCompanies.length) {

		sortedItems = sortedItems.filter(item =>
			filterCompanies.includes(item.flight.carrier.caption)
		);
	}

	if (sortedItems && sort === 0) {
		sortedItems = sortedItems.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
	}
	if (sortedItems && sort === 1) {
		sortedItems = sortedItems.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
	}
	if (sortedItems && sort === 2) {
		sortedItems = sortedItems.sort((a, b) => a.flight.legs.reduce((acc, cur) => acc += cur.duration, 0) - b.flight.legs.reduce((acc, cur) => acc += cur.duration, 0))
	}

	return (
		<Layout>
			<Content style={{ padding: '24px 24px 50px' }}>
				{
					sortedItems.length
						? sortedItems.map((fl, i) => <Item key={i} item={fl} />)
						: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
				}
				{
					isLoading && <Col style={{ textAlign: 'center' }}>
						<Spin size='large'>Loading</Spin>
					</Col>
				}
				<LoadingButton addItems={addItems} isLoading={isLoading} setIsLoading={setIsLoading} />
			</Content>
		</Layout>
	);
};

export default MainContent