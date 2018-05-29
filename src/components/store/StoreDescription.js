import {h, Component} from "preact";
import s from './style.less';
import {post} from "../../functions/fetch";

class StoreDescription extends Component {
	state = {newDescription: this.props.name}

	save = async () => {
		const {props, state} = this;

		const data = {
			description: state.newDescription
		};

		const result = await post(`/store/${props.storeId}/editStoreDescription`, data);
		if (!result.error) {
			this.setState({editing: false});
			props.onEditConfirmed(); // Callback to refresh the store's data
		} else {
			this.setState({message: result.error});
		}
	}

	updateDescription = (e) => this.setState({newDescription: e.target.value, message: false })
	open = () => this.setState({editing: true});
	close = () => this.setState({editing: false})

	render({description, storeManager}, {editing, newDescription = '', message = false}) {

		if (editing)
			return (
				<div>
					<textarea type={`text`} value={newDescription || description} onInput={this.updateDescription}/>
					{message && <p>{message}</p>}
					<div className={`${s.buttonsRow}`} style={{margin: '0 -5px'}}>
						<div className={`${s.btn}`} onClick={this.save}>Save</div>
						<div className={`${s.btn}`} onClick={this.close} key={'close'} >Cancel</div>
					</div>
				</div>
			);

		return (
			<p>{description || 'No store description added'}
				{
					storeManager &&
					<span key={'edit'} onClick={this.open}><small style={{color: 'gray', margin: '0 10px'}}>(edit)</small></span>
				}
			</p>
		);
	}
}

export default StoreDescription;
