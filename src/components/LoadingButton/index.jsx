import { Row, Button } from 'antd';


const LoadingButton = ({ addItems, isLoading, setIsLoading }) => {

	const onAddItems = () => {
		setIsLoading(true);
		addItems();
	};

	return (
		<Row justify={'center'}>
			<Button disabled={isLoading} type='primary' onClick={onAddItems} style={{ marginTop: '20px' }}>
				Показать еще
			</Button>
		</Row>
	);
};

export default LoadingButton