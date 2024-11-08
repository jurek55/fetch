import { useState } from "react";
import "../style/Form.css";

const Form = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState("");

	const handleOnClick = e => {
		e.preventDefault();
		const newPerson = {
			imie: firstName,
			nazwisko: lastName,
			wiek: age,
		};

		const json = JSON.stringify(newPerson);
		console.log(json, typeof json);
		(async () => {
			const rawResponse = await fetch("https://api.jkunicki.pl/dane_r.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: json,
			});
			const content = await rawResponse.json();

			console.log(content, typeof content);
		})();
		setFirstName("");
		setLastName("");
		setAge("");
	};

	const handleOnChange = e => {
		console.log(e.target.name);
		if (e.target.name == "fname") {
			setFirstName(e.target.value);
		} else if (e.target.name == "lname") {
			setLastName(e.target.value);
		} else setAge(e.target.value);
		console.log(e.target.value);
	};
	return (
		<div className='container'>
			<form action='submit'>
				<label htmlFor='fname'>First name</label>
				&nbsp;
				<input
					type='text'
					name='fname'
					value={firstName}
					placeholder='imię'
					onChange={handleOnChange}
				/>
				<br />
				<label htmlFor='lname'>Last name</label>
				&nbsp;
				<input
					type='text'
					name='lname'
					value={lastName}
					onChange={handleOnChange}
				/>
				<br />
				&nbsp;
				<label htmlFor='age'>Age</label>
				&nbsp;
				<input type='date' name='age' value={age} onChange={handleOnChange} />
				<br />
				<br />
				<button type='submit' onClick={handleOnClick}>
					submit
				</button>
			</form>
		</div>
	);
};
export default Form;
