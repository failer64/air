import { Space, Button, Spin } from 'antd';
import { useItems } from '../../store';
import { memo } from 'react';

const LoadingButton = memo(() => {

	const { loading, error, addNewItems } = useItems((state) => ({
		loading: state.loading,
		error: state.error,
		addNewItems: state.addItems,
	}));

	return (
		<Space direction="vertical" size="middle"
			style={{ display: 'flex', textAlign: 'center', marginTop: 20 }}
		>
			<Button
				disabled={loading} type='primary'
				onClick={addNewItems}
			>
				{!error ? 'Показать еще' : error}
			</Button>
			{
				loading && <Spin size='large' style={{ paddingTop: 20 }}>Loading</Spin>
			}
		</Space>
	)
})

export default LoadingButton