import {h, Component} from "preact";
import s from './style.less';
import {post} from "../../functions/fetch";


class AddItem extends Component {
	state = {}
	save = async () => {
		const { state } = this;
		const data = {
			name: state.name,
			price: state.price,
		};
		const result = await post(`/store/${this.props.storeId}/createListing`, data);
		if (!result.error) {
			this.setState({open: false, message: `Item "${state.name}" posted!`, name: '', price: ''});
			this.props.onAdd();
			setTimeout(() => this.setState({message: null}), 2500);
		}
	}
	render({}, {name = '', price = '', open = false, message = null}) {

		if (open) {
			return (
				<div>
					<div>
						name: <input type={`text`} value={name} onInput={e => this.setState({name: e.target.value})}/>
					</div>
					<div>
						price: <input type={`text`} value={price} onInput={e => this.setState({price: e.target.value})}/>
					</div>
					<div className={`${s.AddItemButton}`} onClick={this.save}>
						Add item
					</div>
					<p>
						<div onClick={() => this.setState({open: false})}>Cancel</div>
					</p>
				</div>
			)
		}

		return (
			<div>
				<div className={`${s.AddItemButton}`} onClick={() => this.setState({open: true})}>
					Add item
				</div>
				{message && <p>{message}</p>}
			</div>
		)
	}
}

export default AddItem;
