import {h, Component} from "preact";
import s from './style.less';
import {get, post} from '../../functions/fetch';
import { inject, observer } from 'mobx-preact';
import isEmpty from 'lodash/isEmpty';
import AddItem from './AddItem';
import StoreName from './StoreName';
import has from 'lodash/has';
import map from "lodash/map";
import StoreDescription from "./StoreDescription";



// Please implement the item component from the main page
const ItemList = (items = []) => {
	if(isEmpty(items)) return (
		<div style={{margin: '50px 0'}}>There are no items in this shop yet.</div>
	)
	return (
		<div style={{marginTop: '50px', width: "100%"}}>
			<h2>Our items</h2>
			<div style={{display: 'flex'}}>
				{
					map(items, (v, k) =>
						<div key={k} style={{border: '1px solid black', margin: '10px', padding: '10px', maxWidth: '200px'}}>
							<p>name: {v.name}</p>
							<p>price: {v.price}</p>
						</div>
					)
				}
			</div>
		</div>
	)
}

@inject('userStore') @observer
class Store extends Component {
	state = {}
	constructor(props) {
		super (props);

		this.loadStore = async(id) => {
			try {
				const result = await get(`/store/${id}`);
				this.setState({store: result});
			}
			catch (error) {
				this.setState({error});
			}
		}

		this.loadStore(this.props.id);
	}
	render({userStore}, {store = {}}) {

		const {id = 0} = this.props;
		if (!id) return "Whoops, this page does not exists"
		if (this.state.error) return this.state.error;

		const storeManager = has(userStore.store.userStores, id);

		if (store) return (
			<div className={`${s.wrapper}`}>
				<div className={`${s.mainImage}`} style={{backgroundImage: `url(http://placehold.it/1200x600)`}}>
					<div className={`${s.limitWidth} ${s.inner}`}>
						<div className={`${s.storeLogo}`} style={{backgroundImage: `url(http://placehold.it/150x150/ffbb00)`}}/>
					</div>
				</div>
				<div className={`${s.limitWidth}`}>
					<StoreName name={store.name} storeManager={storeManager} storeId={id} onEditConfirmed={() => this.loadStore(id)}/>
					<StoreDescription description={store.description} storeManager={storeManager} storeId={id} onEditConfirmed={() => this.loadStore(id)}/>

					{/*<p>{JSON.stringify(store)}</p>*/}
					{ItemList(store.items)}
					{storeManager && <AddItem onAdd={() => this.loadStore(id)} storeId={id} />}
				</div>
			</div>
		)

		return (
			<div>
				Loading
			</div>
		);
	}
}

export default Store;
