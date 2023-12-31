import { Col, Card, Row, Button, Typography } from 'antd';
import Legs from '../Legs';
import { memo } from 'react';


const Item = memo(({ item }) => {
	return (
		<Card bodyStyle={{ 'padding': 0, marginBottom: 20 }}>
			<Row align='middle' style={{ 'backgroundColor': '#4646FA', 'padding': '5px 15px', color: 'white' }}>
				<Col span={16}>
					<Typography.Title level={3} style={{ margin: 0, color: '#fff ' }}>
						{item.flight.carrier.caption}
					</Typography.Title>
				</Col>
				<Col span={8} style={{ 'textAlign': 'right' }}>
					<Typography.Title level={4} style={{ margin: 0, color: '#fff ' }}>
						{item.flight.price.total.amount + ' ' + item.flight.price.total.currencyCode}
					</Typography.Title>
					<div>Стоимость для одного взрослого пассажира</div>
				</Col>
			</Row>
			{
				item.flight.legs.map((l, i) =>
					<Legs key={i} item={l} />
				)
			}
			<Button size='large' type="primary" danger style={{ width: '100%' }}>Выбрать</Button>
		</Card>
	);
})

export default Item