import React from 'react';
import ReactDOM from 'react-dom';

/*Components*/
import lang from '../../utils/lang';
import {regex} from '../../utils/constants';

/*Material*/
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

class CreateAccount extends React.Component {
	constructor(props) {
		super(props)

		this.state ={
			username: '',
			password: '',
			email: '',
			usernameError: '',
			emailError: '',
			passwordError: '',
			confirmError: '',
			showPassword: false,
			avatarPreview: ' '
		};
	}

	onUsernameChange(event) {
		this.setState({username: event.target.value});
		if (event.target.value.match(regex.usernameRegex)) {
			this.setState({usernameError: ''});
		} else {
			this.setState({usernameError: lang[this.props.language].createAccount.usernameError});
		}			
	}

	onEmailChange(event) {
		this.setState({email: event.target.value});
		if (event.target.value.match(regex.emailRegex)) {
			this.setState({emailError: ''});
		} else {
			this.setState({emailError: lang[this.props.language].createAccount.emailError});
		}			
	}

	onPasswordChange(event) {
		this.setState({password: event.target.value});
		if (event.target.value.match(regex.strictpasswordRegex)) {
			this.setState({passwordError: ''});
		} else {
			this.setState({passwordError: lang[this.props.language].createAccount.passwordError});
		}			
	}

	handleToggle() {
		this.setState({showPassword:!this.state.showPassword})
		console.log(this.state.avatarPreview);
	}

	openFileDialog() {
  	document.getElementById('avatarUpload').click();
	}

	onAvatarUpload(event) {
		let reader = new FileReader();
		let file = document.getElementById('avatarUpload').files[0] || null;
		let image = null;
		reader.onload = (function(event) {
			document.getElementById("avatarPreview").src = event.target.result;
		});
		reader.readAsDataURL(file);
		this.setState({avatarPreview: document.getElementById("avatarPreview").src});
	}

	render() {
		let {language} = this.props;
		return (
			<div>
			<Dialog
				title={lang[language].createAccount.title}
				autoDetectWindowHeight={false}
				autoScrollBodyContent={true}
				open={this.props.dialog == 'createAccount'}
				modal={true}
				contentStyle={{display: 'block', overflow: 'hidden'}}
				actions={
					<div>
						<FlatButton
							label={lang[language].createAccount.cancel}
							onTouchTap={() => this.props.clearDialog()}
						/>
						<FlatButton
							label={lang[language].createAccount.create}
							disabled={
								!this.state.username || !this.state.password || !this.state.email || this.state.usernameError || this.state.passwordError || this.state.emailError
							}
							onTouchTap={() => this.props.createUser(this.state.username, this.state.password, this.state.email)}
						/>
					</div>
				}
			>

				<div style={{marginTop: '16px', display: 'flex', justifyContent: 'center'}}>
					<Avatar 
						size={100} 
						id="avatarPreview" 
						src={this.state.avatarPreview} 
						onTouchTap={this.openFileDialog} 
					/>
				</div>

				<TextField
					floatingLabelText={lang[language].createAccount.username}
					onChange={this.onUsernameChange.bind(this)}
					errorText= {this.state.usernameError}
					style={{width: '100%'}}
				/>

				<TextField
					floatingLabelText={lang[language].createAccount.email}
					onChange={this.onEmailChange.bind(this)}
					errorText= {this.state.emailError}
					style={{width: '100%'}}
				/>

				<TextField
					floatingLabelText={lang[language].createAccount.password}
					onChange={this.onPasswordChange.bind(this)}
					errorText= {this.state.passwordError}
					type={(this.state.showPassword) ? 'text' : 'password'}
					style={{width: '100%'}}
				/>

				<Toggle
		      label={lang[language].createAccount.showPassword}
		      toggled={this.state.showPassword}
		      onToggle={() => this.handleToggle()}
		      style={{width: '100%'}}
		      labelStyle={{fontSize: '12px'}}
		    />

		    <input 
					style={{"display" : "none"}}
					id="avatarUpload" 
					type="file" accept="image/*"
					onChange={this.onAvatarUpload.bind(this)}
				/>

			</Dialog>

			<Snackbar
				open={this.props.logs.createAccount}
				message={lang[language].logs[this.props.logs.createAccount]}
				autoHideDuration={2000}
			/>
			</div>
		);
	}
}

export default CreateAccount

/*

<div>
				<TextField
					floatingLabelText={lang[language].createAccount.username}
					onChange={this.onUsernameChange.bind(this)}
					errorText= {this.state.usernameError}
					style={{width: '100%'}}
				/>

				<TextField
					floatingLabelText={lang[language].createAccount.email}
					onChange={this.onEmailChange.bind(this)}
					errorText= {this.state.emailError}
					style={{width: '100%'}}
				/>

				<TextField
					floatingLabelText={lang[language].createAccount.password}
					onChange={this.onPasswordChange.bind(this)}
					errorText= {this.state.passwordError}
					type={(this.state.showPassword) ? 'text' : 'password'}
					style={{width: '100%'}}
				/>

				<Toggle
		      label={lang[language].createAccount.showPassword}
		      toggled={this.state.showPassword}
		      onToggle={() => this.handleToggle()}
		      style={{width: '100%'}}
		    />
		    */