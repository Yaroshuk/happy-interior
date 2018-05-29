import { h, Component } from 'preact';
import s from './style.less';
import { post, get } from '../../functions/fetch';
import {inject, observer} from "mobx-preact";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import plus from "./Plus.png";
import {setUserStore} from "../../App";
import { Link } from 'preact-router';

const getStoreInfo = async (id, cb) => {
	const store = await get(`/store/${id}`);
	return cb(store);
}

@inject('userStore') @observer
class MyStores extends Component {
	state = {
		stores: {} // The stores cache
	}
	constructor(props) {
		super(props);

		this.submit = async (e) => {
			e.preventDefault();

			const data = {
				name: this.state.name,
			};
			const res = await post(`/store/create`, data);

			setUserStore({
				...this.props.userStore.store,
				userStores: res.userStores
			});
		};


		this.storeInfo = (id) => {

			if(this.state.stores[id]) return this.state.stores[id];

			getStoreInfo(id, (store) => { if(store.id) this.setState({stores: {...this.state.stores, [store.id]: store}}); })

			return {name: 'Loading', items: [], id}

		}

	}
	render ({userStore},{name = ''}) {


		if (!userStore.store.id) return (
			<div>
				<p>Log in first</p>
			</div>
		)

		return (
			<div className={`${s.page}`}>
				<div className={`${s.boxBorder} ${s.myStores}`}>
					<h2>My stores</h2>
					{
						isEmpty(userStore.store.userStores) ?
							<div>You don't have stores yet, create one below!</div>
						:
							<div>
								{map(userStore.store.userStores, (v, k) => (
										<span key={k}>
												<img src={`https://placehold.it/50x50`} width={50} height={50}/><Link href={`/store/${k}`}>{this.storeInfo(k).name}</Link>
										</span>
									)
								)}
							</div>
					}
				</div>
				{
					isEmpty(userStore.store.userStores) &&
					<div className={`${s.boxBorder} ${s.createStore}`}>
						<h2>Create a new store</h2>
						<form onSubmit={this.submit}>
							<input type={`submit`} style={{display: 'none'}} />
							<div className={`${s.form}`}>
								<span className={`${s.image}`}><img src={plus} /></span>
								<input type={`text`} value={name} onInput={e => this.setState({name: e.target.value})} placeholder={"Store name"}/>
							</div>

							<div onClick={this.submit} className={s.createButton}><img src={plus} /></div>
						</form>
					</div>
				}
			</div>
		);
	}
}

export default MyStores;
