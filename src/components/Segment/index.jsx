import { Col, Row, Divider, Typography } from 'antd';
import {
	DoubleRightOutlined,
	ClockCircleOutlined
} from '@ant-design/icons';
import moment from 'moment/src/moment';
import 'moment/src/locale/ru'


const Segment = ({ item }) => {

	return (
		<>
			<Row style={{ padding: '10px 20px 0' }}>
				<Col>
					<Typography.Title level={5} style={{ margin: 0 }}>
						{item.departureCity.caption},&nbsp;{item.departureAirport.caption}&nbsp;
						<Typography.Text style={{ color: '#4646FA' }}>
							({item.departureAirport.uid})
						</Typography.Text>
					</Typography.Title>
				</Col>
				<Col style={{ margin: '0 10px', color: '#4646FA' }}>
					<DoubleRightOutlined />
				</Col>
				<Col>
					<Typography.Title level={5} style={{ margin: 0 }}>
						{item.arrivalCity.caption},&nbsp;{item.arrivalAirport.caption}
						&nbsp;
						<Typography.Text style={{ color: '#4646FA' }}>
							({item.arrivalAirport.uid})
						</Typography.Text>
					</Typography.Title>
				</Col>
			</Row>
			<Divider style={{ margin: '10px', }}></Divider>
			<Row style={{ padding: '0px 20px' }}>
				<Col span={6}>
					<Row align={'middle'}>
						<Typography.Title level={4} style={{ margin: '0 5px 0 0' }}>
							{moment(item.departureDate).format("H:mm")}
						</Typography.Title>
						<Typography.Title level={5} style={{ margin: 0, color: '#4646FA' }}>
							{moment(item.departureDate).format("D MMM dd")}
						</Typography.Title>
					</Row>
				</Col>
				<Col span={12}>
					<Row justify={'center'} align={'middle'}>
						<Col style={{ marginRight: '5px', }}>
							<ClockCircleOutlined />
						</Col>
						<Col>
							<Typography.Title level={4} style={{ margin: 0 }}>
								{Math.floor(item.travelDuration / 60)} ч&nbsp;
								{Math.floor(item.travelDuration % 60)} мин
							</Typography.Title>
						</Col>
					</Row>
				</Col>
				<Col span={6}>
					<Row align={'middle'}>
						<Typography.Title level={5} style={{ margin: 0, color: '#4646FA' }}>
							{moment(item.arrivalDate).format("D MMM dd")}
						</Typography.Title>
						<Typography.Title level={4} style={{ margin: '0 0px 0 5px' }}>
							{moment(item.arrivalDate).format("H:mm")}
						</Typography.Title>
					</Row>
				</Col>
			</Row>
			<Row align={'middle'} style={{ padding: '0px 50px' }}>
				<Col sm={0} md={6} lg={9} xl={10}>
					<Divider style={{ height: '2px', backgroundColor: 'grey', margin: '0' }}>
					</Divider>
				</Col>
				<Col sm={24} md={12} lg={6} xl={4}>
					<Typography.Title level={5} style={{ padding: '0px 20px', margin: '0', color: 'orange', textAlign: 'center' }}>
						{item.stops} пересадок
					</Typography.Title>
				</Col>
				<Col sm={0} md={6} lg={9} xl={10}>
					<Divider style={{ height: '2px', backgroundColor: 'grey', margin: '0' }}>
					</Divider>
				</Col>
			</Row>
			<Typography.Title level={5} style={{ padding: '0px 20px', margin: '0' }}>
				Рейс выполняет: {item.airline.caption}
			</Typography.Title>
			<Divider style={{ height: '2px', margin: '5px 0', backgroundColor: '#4646FA' }}></Divider>
		</>
	);
};


export default Segment