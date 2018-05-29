import { h, Component } from 'preact';
import s from './style.less';
import icon1 from './images/1.png';
import icon2 from './images/2.png';
import icon3 from './images/3.png';
import icon4 from './images/4.png';
import { Link } from 'preact-router';

class Footer extends Component {
	state = {}
	render({}, {backendUrl = false}) {
		return (
			<div className={s.footerContainer}>
				<div className={s.imageRow}>
					<img src={icon1} alt=""/>
					<img src={icon2} alt=""/>
					<img src={icon3} alt=""/>
					<img src={icon4} alt=""/>
				</div>
				<div className={s.linksRow}>
					<div>Audio Description</div>
					<div>Help Center</div>
					<div>Media Center</div>
					<div>Jobs</div>
					<div>Terms of Use</div>
					<div>Privacy</div>
				</div>
				<div className={s.serviceBtn}>
					<button onClick={() => this.setState({backendUrl: !backendUrl})}>Service Code</button>
					{backendUrl && <div>backend url:<input value={localStorage.getItem('backend')} onInput={e => {localStorage.setItem('backend', e.target.value); this.forceUpdate();}}/></div>}
				</div>
				<div className={s.copyRightText}>© 1997-2018 METRO, Inc.</div>
			</div>
		);
	}
}

export default Footer;
