import { h, Component } from 'preact';
import MainScreen from '../MainScreen';
import Secondary from '../Secondary';
import { get } from '../../functions/fetch';
import './style.less';
import { inject, observer } from 'mobx-preact';
import { hotProducts, chairs, phones } from '../Secondary/data';


export const allItems = { ...chairs, ...phones, ...hotProducts };

@inject('liveChat') @observer
class Index extends Component {
	constructor(props) {
		super(props);
		this.state = { highlighted: false };

		const getMainData = async () => {
			try {
				const mainData = await get('/mainData');
				console.log('mainData: ', mainData);
				return this.setState({ highlighted: mainData });
			} catch (err) {
				console.log('error while getMainData', err);
			}
		};
		getMainData();
		// 	const mainData = console.log(await );
	}

	render({ liveChat }) {
		return (
			<div>
				<MainScreen/>
				<Secondary title="Hot Now" items={hotProducts}/>
				<Secondary title="Vintage's Phone" items={phones}/>
				<Secondary title="Armchair" items={chairs}/>
				{/*<Secondary title={'Phones'} items={phones}/>*/}
			</div>
		);
	}
}

export default Index;
