import './App.css'
import { Col, Row } from 'antd';
import MainContent from './components/MainContent';
import Sidebar from './components/Sibebar';


function App() {
	return (
		<Row>
			<Sidebar />
			<Col sm={24} md={18}>
				<MainContent />
			</Col>
		</Row>
	)
}

export default App