import "../style/PersonItem.css";

const PersonItem = ({ person }) => {
	return (
		<>
			<div className='person-item'>
				{/* <div>{person.id}.</div>
				<div>{person.generation}</div> */}
				<img src = {person.foto}/>
				y<p className = 'name'>{person.imie.toUpperCase()}</p>
				<p className = 'name'>{person.nazwisko.toUpperCase()}</p>
				{person.z_domu ? <p className = 'name'>z domu {person.z_domu.toUpperCase()}</p>: null}

			</div>
		</>
	);
};
export default PersonItem;
