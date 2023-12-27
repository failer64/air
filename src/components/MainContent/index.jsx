import { Empty, Layout } from 'antd';
import Item from '../Item';
import LoadingButton from '../LoadingButton'
import { useFilters, useItems } from '../../store';


const { Content } = Layout;

const MainContent = () => {

	const items = useItems((state) => state.items);

	const { filterStops, filterPrice, filterCompanies, sort } = useFilters(state => ({
		filterStops: state.filterStops,
		filterPrice: state.filterPrice,
		filterCompanies: state.filterCompanies,
		sort: state.sort,
	}));

	let sortedItems = items;

	if (filterStops.length) {
		sortedItems = sortedItems.filter(item => filterStops.includes(0) && item)
	}

	if (filterPrice.length) {
		sortedItems = sortedItems.filter(item => {

			return (
				+item.flight.price.total.amount > +filterPrice[0] &&
				+item.flight.price.total.amount < +filterPrice[1]
			)
		});
	}

	if (filterCompanies.length) {

		sortedItems = sortedItems.filter(item =>
			filterCompanies.includes(item.flight.carrier.caption)
		);
	}

	if (sort === 0) {
		sortedItems = sortedItems.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
	}
	if (sort === 1) {
		sortedItems = sortedItems.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
	}
	if (sort === 2) {
		sortedItems = sortedItems.sort((a, b) => a.flight.legs.reduce((acc, cur) => acc += cur.duration, 0) - b.flight.legs.reduce((acc, cur) => acc += cur.duration, 0))
	}

	return (
		<Content style={{ padding: '24px 24px 50px', backgroundColor: '#f3f3f3' }}>
			{
				!!sortedItems.length
					? sortedItems.map((fl, i) => <Item key={i} item={fl} />)
					: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
			}
			<LoadingButton />
		</Content>
	);
}


export default MainContent