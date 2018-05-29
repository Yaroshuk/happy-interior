import { h, Component } from 'preact';
import { observable } from "mobx";
import { Provider } from "mobx-preact";
import ItemZoom from './components/ItemZoom';
import Index from './components/Index';
import LiveChat from './components/LiveChat';
import Header from './components/Header';
import Login, {fetchUserData} from './components/Login';
import Store from './components/Store';
import MyStores from './components/MyStores';
import './App.css';
import {Router} from 'preact-router';
import Footer from './components/Footer';


if (!localStorage.getItem('backend'))
	localStorage.setItem('backend', 'http://165.227.166.168:8081');

let liveChat = observable({store: {live: false}});
export const setLiveChat = (data) => liveChat.store = data;

let userStore = observable({store: {}});
export const setUserStore = (data) => {userStore.store = data;}


class App extends Component {
	constructor(props) {
		super(props);
		if (localStorage.getItem('token'))
			fetchUserData(userStore);
	}
	render () {
		return (
			<Provider liveChat={liveChat} userStore={userStore}>
				<div>
					<Header />
					<Router>
						<Index path={'/'} />
						<Login path={'/login'} />
						<MyStores path={'/myStores'} />
						<ItemZoom path={`/item/:id`} />
						<Store path={`/store/:id`} />
					</Router>
					<LiveChat />
					<Footer />
				</div>
			</Provider>
		);
	}
}

export default App;
