import {h, Component} from "preact";
import s from './style.less';
import {post} from "../../functions/fetch";

class StoreName extends Component {
	state = {newName: this.props.name}

	save = async () => {
		const {props, state} = this;

		const data = {
			name: state.newName
		};

		const result = await post(`/store/${props.storeId}/editStoreName`, data);
		if (!result.error) {
			this.setState({editing: false});
			props.onEditConfirmed(); // Callback to refresh the store's data
		} else {
			this.setState({message: result.error});
		}
	}

	updateName = (e) => this.setState({newName: e.target.value, message: false })
	open = () => this.setState({editing: true});
	close = () => this.setState({editing: false})

	render({name, storeManager}, {editing, newName, message = false}) {

		if (editing)
			return (
				<div>
					<input type={`text`} value={newName || name} onInput={this.updateName}/>
					{message && <p>{message}</p>}
					<div className={`${s.buttonsRow}`} style={{margin: '0 -5px'}}>
						<div className={`${s.btn}`} onClick={this.save}>Save</div>
						<div className={`${s.btn}`} onClick={this.close} key={'close'} >Cancel</div>
					</div>
				</div>
			);

		return (
			<h2>
				{name}
				{
					storeManager &&
					<span key={'edit'} onClick={this.open}><small style={{color: 'gray', margin: '0 10px'}}>(edit)</small></span>
				}
			</h2>
		);
	}
}

export default StoreName;
