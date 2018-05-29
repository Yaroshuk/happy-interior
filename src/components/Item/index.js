import { h, Component } from 'preact';
import { Link } from 'preact-router';
import cn from 'classnames';
import itemS from '../MainScreen/style.less';
import s from './style.less';
import like from './images/like.png';
import dislike from './images/dislike.png';
import star from './images/star.png';

class Item extends Component {
	render() {
		const { image, title, isHotProduct, info, price } = this.props;
		return (
			<Link href={`/`} className={cn(itemS.item, s.secondaryItem)} style={isHotProduct ? { backgroundImage: `url(${image})`, height: '365px' } : undefined}>
				{ !isHotProduct &&
					<div className={cn(itemS.imageContainer, s.layout)} style={{ backgroundImage: `url(${image})` }}>
						<div className={`${s.onlyHover} ${s.itemHoverInfo}`}>
							<div className={s.first}>
								<div className={s.info}>
									<div className={s.text}>{info}</div>
									<div className={`${s.text}`} style={{fontSize: '10px'}}>{price}</div>
								</div>
								<div className={s.mark}>
									<span><img src={like} width={25} height={25} style={{ marginBottom: '5px' }} /></span>
									<span><img src={dislike} width={25} height={25} style={{ marginBottom: '5px' }} /></span>
									<span><img src={star} width={25} height={25} style={{ marginBottom: '5px' }} /></span>
								</div>
							</div>
							<div className={s.second}>
								<div style={{ width: '50%', textAlign: 'right' }}>
									<i className={s.downarrow} />
								</div>
								<div className={`${s.statusLine}`}>
									<span className={`${s.online}`} />
									<div style={{ marginTop: '4px' }}>Online</div>
								</div>
							</div>
						</div>
					</div>
				}
				{title && <div className={itemS.itemTitle}>{title}</div>}
			</Link>
		);
	}
}

export default Item;
