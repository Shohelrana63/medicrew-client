import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import './Login.css';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import OthersLogin from './OthersLogin';
import { Link, useHistory, useLocation} from 'react-router-dom';
import LoginImg from '../../Images/loginImg/loginBg.png';
import { DataContext } from '../../App';

const Login = () => {
	
    const [ newUser, setNewUser ] = useState(false);
	const { loggedInUser, setLoggedInUser,admin, setAdmin, formAdmin, setFormAdmin, userType, setUserType } = useContext(DataContext);
    const [ currentUser, setCurrentUser ] = useState({
		isSignedIn: false,
		name: '',
		email: '',
		password: '',
		error: '',
		success: false
	});
    
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/" } };
    
	const handleFormToggle = () => {
		setNewUser(!newUser);
	};
	
	// Initialize Firebase
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
    
  
    // GOOGLE Sign in
	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				const { displayName, email, photoURL } = result.user;
				const newUser = {
					isSignedIn: true,
					name: displayName,
                    email: email,
					photoURL: photoURL,
				};
				setCurrentUser(newUser);
				setLoggedInUser(newUser);
				history.replace(from);
				console.log(newUser);
			})
			.catch(function(error) {
				const newUser = { ...currentUser };
				newUser.error = error.message;
				newUser.success = false;
				setLoggedInUser(newUser);
				console.log(error);
			});
	};

    // Form validation and give error
	const [ errors, setErrors ] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	let pass1, pass2;
	const handleFormValidation = (e) => {
		let isFieldValid = true;
		const newError = { ...errors };

		if (e.target.name === 'name') {
			isFieldValid = e.target.value.length > 2;
			if (!isFieldValid) {
				newError[e.target.name] = 'Name is not valid';
				setErrors(newError);
			} else {
				newError[e.target.name] = '';
				setErrors(newError);
			}
		}

		if (e.target.name === 'email') {
			formAdmin[e.target.name] = e.target.value;
			isFieldValid = /\S+@\S+/.test(e.target.value);
			if (!isFieldValid) {
				newError[e.target.name] = 'Email is not valid';
				setErrors(newError);
			} else {
				newError[e.target.name] = '';
				setErrors(newError);
			}
		}

		if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
			const isPasswordLengthValid = e.target.value.length > 5;
			const passwordHasNumber = /\d{1}/.test(e.target.value);

			isFieldValid = isPasswordLengthValid && passwordHasNumber;

			if (e.target.name === 'password') {
				formAdmin[e.target.name] = e.target.value;
				pass1 = e.target.value;
				if (!isFieldValid) {
					newError[e.target.name] = 'Password is not valid';
					setErrors(newError);
				} else {
					newError[e.target.name] = '';
					setErrors(newError);
				}
			}
			if (e.target.name === 'confirmPassword') {
				pass2 = e.target.value;
				if (!isFieldValid && pass1 !== pass2) {
					newError[e.target.name] = 'Password is not matched';
					setErrors(newError);
				} else {
					newError[e.target.name] = '';
					setErrors(newError);
				}
			}
		}

		if (isFieldValid) {
			const newUser = { ...currentUser };
			newUser[e.target.name] = e.target.value;
			setCurrentUser(newUser);
		}
	};

	// CREATE NEW USER
	const handleCreateNewUser = (e) => {
		e.preventDefault();
		if (!currentUser.email && !currentUser.password) {
			const newError = { ...errors };
			newError.name = 'Please use valid Name!';
			newError.email = 'Please use valid Email!';
			newError.password = 'Please use valid Password!';
			newError.confirmPassword = 'Please is not matched!';
			setErrors(newError);
		} else {
			firebase
				.auth()
				.createUserWithEmailAndPassword(currentUser.email, currentUser.password)
				.then((result) => {
					const { displayName, email } = result.user;
					const newUser = {
						isSignedIn: true,
						email: email,
						name: currentUser.name || displayName,
						success: true,
						error: ''
					};
					setCurrentUser(newUser);
					setLoggedInUser(newUser);
					history.replace(from);
				})
				.catch((error) => {
					const newUser = { ...currentUser };
					newUser.error = error.message;
					newUser.success = false;
					setLoggedInUser(newUser);
					console.log(error.message);
				});
		}
	};

    // SIGN IN with email and password
	const handleSignIn = (e) => {
		console.log(formAdmin)
		console.log(admin)
		console.log(formAdmin.email  === admin.email && formAdmin.password === admin.password)
		e.preventDefault();
		if(formAdmin.email  === admin.email && formAdmin.password === admin.password){
			setUserType("admin");
			setLoggedInUser(admin);
			history.replace(from);
		}else{
			if (!currentUser.email && !currentUser.password) {
				const newError = { ...errors };
				newError.email = 'Please use valid email!';
				newError.password = 'Please use valid password!';
				setErrors(newError);
			} else {
				firebase
					.auth()
					.signInWithEmailAndPassword(currentUser.email, currentUser.password)
					.then((result) => {
						const { displayName, email } = result.user;
						const newUser = {
							isSignedIn: true,
							email: email,
							name: displayName,
							success: true,
							error: ''
						};
						setCurrentUser(newUser);
						console.log(result.user);
						setLoggedInUser(newUser);
						history.replace(from);
					})
					.catch((error) => {
						const newUser = { ...currentUser };
						newUser.error = error.message;
						newUser.success = false;
						setLoggedInUser(newUser);
					});
			}
		}
		
	};

    const resetPassword = (email) => {
		var auth = firebase.auth();
		auth.sendPasswordResetEmail(email)
			.then(function() {
				// Email sent.
			}).catch(function(error) {
				// An error happened.
			});
	};

    return (
        <section className="sign-up tg-signup-login">
			<div className="login-page container ">
				<div className="row">
					<div className="col-md-6 shadow py-3">
						<div className="text-center">
							<Link to="/" className="nav-link">
								<h1 className="heading-text mb-2">Medicrew</h1>
							</Link>
							{currentUser.success && (
								<div className="alert alert-success" role="alert">
									User {!newUser ? 'logged in' : 'registered'} successfully
								</div>
							)}
							{loggedInUser.error && (
								<div className="alert alert-danger" role="alert">
									{loggedInUser.error}
								</div>
							)}
						</div>

						{newUser ? (
							<SignUpForm
								toggleUser={handleFormToggle}
								validation={handleFormValidation}
								submit={handleCreateNewUser}
								errors={errors}
							/>
						) : (
							<LoginForm
								toggleUser={handleFormToggle}
								validation={handleFormValidation}
								submit={handleSignIn}
								resetPassword={resetPassword}
								errors={errors}
							/>
						)}

						<OthersLogin google={handleGoogleSignIn}/>
					</div>

					<div className="col-md-6 d-md-block">
						<img className="img-fluid ml-4" src={LoginImg} alt="login-img" />
					</div>
				</div>
			</div>
		</section>
    );
};

export default Login;