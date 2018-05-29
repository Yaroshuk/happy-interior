import { h, Component } from "preact";
import { setLiveChat } from '../../App';
import s from './style.less';
import {inject, observer} from "mobx-preact";


@inject('liveChat') @observer
class LiveChat extends Component {
	render({liveChat}) {
		const isLive = liveChat.store.live;

		if(!isLive) return null;
		return (
			<div className={`${s.backdrop}`}>
				<div className={`${s.liveBox}`}>
					<b onClick={()=>setLiveChat({live: false})}>Close</b>
				</div>
			</div>
		);
	}
}

export default LiveChat;
