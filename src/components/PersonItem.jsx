import "../style/PersonItem.css";

const PersonItem = ({ person }) => {
	return (
		<>
			<div className='person-item'>
				<p>{person.id}.</p>
				<p className = 'name'>{person.imie.toUpperCase()}</p>
				<p className = 'name'>{person.nazwisko.toUpperCase()}</p>
			</div>
			<hr></hr>
		</>
	);
};
export default PersonItem;
