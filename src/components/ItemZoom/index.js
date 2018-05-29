import {h, Component} from "preact";
import s from './style.less';
import {allItems} from '../Index';
import {setLiveChat} from "../../App";

const videoIcon = <svg version="1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024" style={{padding: '0 10px'}}><path d="M76 161.5c-35.4 7.7-63 33.7-73.2 69.1l-2.3 7.9v547l2.3 7.9c9.7 33.4 34.4 58.1 67.8 67.8l7.9 2.3h643l7.9-2.3c33.2-9.6 57.8-34 67.7-67.3 2-6.6 2.3-10.4 2.8-35.5l.6-28.1 45 44.4c60.6 59.8 56.8 57.5 97.7 58.1 21.1.3 26.8.1 32-1.3 18.6-4.7 34-17 42.7-34.2 6.5-13 6.1 7.7 6.1-285.2 0-294.9.5-271.1-6.5-285.1-6.5-12.9-16.3-22.7-29-28.8-11.3-5.5-15.8-6.2-42.7-6.2-21.5 0-25.2.2-31.8 2.1-16.4 4.5-18 5.8-76.6 64.1L800.5 295l-.6-28.8c-.5-25.7-.8-29.5-2.8-36.1-8.3-27.8-27.2-49.9-52.5-61.6-4-1.9-10.6-4.4-14.7-5.7l-7.4-2.3-320-.2c-270.8-.1-321 .1-326.5 1.2zm637.2 64.3c9.4 3.2 18.2 12.3 21 21.5 1.9 6.2 1.9 523.2 0 529.4-2.8 9.4-12.1 18.7-21.5 21.5-3.4 1-67 1.3-313.7 1.3H89.5l-6.7-3.3c-10.2-5-15.9-12.8-17.7-24.3-1.5-8.9-1.5-510.9-.1-519.8 2.4-14.6 12.6-25.1 26.4-27.1 2.8-.4 143-.7 311.6-.6 244.8.1 307.2.4 310.2 1.4zM960 512v256h-31.5l-80.2-80.2-80.3-80.3v-191l80.2-80.2 80.3-80.3H960v256z"/></svg>;

class ItemZoom extends Component {
	constructor(props) {
		super (props);

		this.goLive = (id) => () => {
			console.log("done")
			setLiveChat({live: true, itemId: id});
		};

	}
	render() {
		const {id = 0} = this.props;
		if (!allItems[id]) {console.log("Wrong id, please check link"); return null;}

		const img = allItems[id].image;

		return (
			<div className={`${s.zoomTop}`}>
				<div style={{backgroundImage: `url(${img})`}} className={`${s.img}`}>
					<div className={`${s.goLiveBtn}`} onClick={this.goLive(id)}>Go Live {videoIcon}</div>
				</div>
				<div className={`${s.content}`}>
					<h3>
						<b>Item's details</b>
					</h3>
					<p>Lorem ipsum dolor sit amet, tamquam minimum explicari nam cu, solet vitae atomorum per ne. Cibo eloquentiam theophrastus ut est, an eam omnesque menandri antiopam, eu tibique vituperatoribus has. Vidit accommodare est et, feugait appetere et eum. Ut ipsum soluta fabulas quo, vocibus appetere an qui.</p>
					<p>Liberavisse suscipiantur per an, pri iusto voluptaria an, et eos viris eripuit reprehendunt. Id sit nostro dicunt, probo mentitum deseruisse est ad, qui doctus prodesset theophrastus ut. Ut eam elaboraret intellegam dissentiunt. Est modo pertinacia ut, ad eros dolor sapientem quo. Primis delectus lobortis mel at, electram adolescens ex vix.</p>
					<p>Ut alterum iudicabit maiestatis cum, has id admodum complectitur, tamquam argumentum te qui. Nisl appareat omittantur ad pro, illum tincidunt nec ea. Ipsum scaevola vis te. Ei usu nobis ubique. Eu eam quot gubergren contentiones. Vel in ferri saepe, his probo semper ex. Eirmod omnium assueverit ex per, mel et wisi eripuit, no duo aperiam integre vivendum.</p>
					<p>Est in tantas epicuri inimicus. No legere sadipscing pri. Zril dolore animal id vis. Detraxit iracundia adversarium his an, cetero nominavi eum an. Vix putant gloriatur dissentiet ei, sea nemore quodsi virtute ea.</p>
					<p>An cum tota nobis, sea quas partiendo hendrerit ei. Nec ea iusto facilisi, convenire consulatu nam te. Ne sed justo vitae ignota, cu verear audire sea. Vis te decore antiopam, ei repudiare abhorreant deseruisse nam. Menandri sensibus vim ut.</p>
				</div>
			</div>
		);
	}
}

export default ItemZoom;
