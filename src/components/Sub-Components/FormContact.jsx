import React from 'react';
import formclasses from './FormContact.module.css';

const Input = props => {
	return (
		<div className={formclasses.controls}>
			<input
				autoComplete='off'
				spellCheck='false'
				className={formclasses.control}
				type={props.type}
				placeholder={props.placeholder}
			/>
			<div id='spinner' className={formclasses.spinner}></div>
		</div>
	);
	5;
};

const FormContact = () => {
	return (
		<form className={formclasses['login-form']}>
			<div className={formclasses.inputdiv}>
				<Input placeholder='Name' type='text' />
				<Input placeholder='Email' type='email' />
				<textarea
					className={`${formclasses.control} ${formclasses['login-form__textarea']}`}
					placeholder='Type your message here.'
				/>
			</div>
			<button className={formclasses.control} type='button'>
				JOIN NOW
			</button>
		</form>
	);
};

export default FormContact;
