import { h, Component } from 'preact';
import cn from 'classnames';
import s from './style.less';
import bg from './images/bg.jpg';

class MainScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={cn(s.mainScreen)} style={{ background: `url(${bg})`}}>
				<div className={cn(s.mainScreenTextBlock)}>
					<div className={cn(s.mainScreenTitle)}>Unique Armchair From The Early 50's</div>
					<div className={cn(s.mainScreenDescription)}>
						talk live with the seller find the right price and view more items in the shop
					</div>
					<div>
						<button className={cn(s.basicButton)}>
							<div className={cn(s.rightTriangle)}/>
							<div>Go Live</div>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default MainScreen;
