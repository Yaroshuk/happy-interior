import { h, Component } from 'preact';
import s from './style.less';
import map from 'lodash/map';
import Item from '../Item';

class SecondaryItems extends Component {
	render() {
		const { title = 'Don\'t forget to fill a title', items } = this.props;
		return (
			<div className={s.fullRow}>
				<h2 style={{ fontWeight: 'bold' }}>{title}</h2>
				<div className={s.itemList}>
					{map(items, (el, k) =>
						<Item key={k} {...el}/>
					)}
				</div>
			</div>
		);
	}
}

export default SecondaryItems;
