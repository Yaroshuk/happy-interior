import { h, Component } from 'preact';
import cn from 'classnames';
import s from './dropdownStyle.less';
import { Link } from 'preact-router';

class DropDown extends Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
	}

	toggleDropDown = () => {
		this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
	};

	toggleOff = () => {
		setTimeout(() => this.setState({ isOpen: false }), 100);
	}

	render({ className, children, items }) {
		const { isOpen } = this.state;
		return (
			<div className={cn(s.dropDownContainer, className)}
					 tabIndex="0"
					 onBlur={this.toggleOff}
					 onClick={this.toggleDropDown}>
				{children}
				{
					isOpen
					&& <div className={s.commonDropDown}>
						{items.map(({ text, link }, i) => <Link href={`${link || '/'}`} onClick={this.toggleDropDown} key={i}>{text}</Link>)}
					</div>
				}
			</div>
		);
	}
}

export default DropDown;
