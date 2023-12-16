import Segment from '../Segment';

const Legs = ({ item }) => {

	return (
		<>
			{item.segments.map((s, i) => <Segment key={i} item={s} />)}
		</>
	);
};

export default Legs
