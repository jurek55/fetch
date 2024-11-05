import "../style/PersonItem.css";

const PersonItem = ({ person, family_id_f, family_id_m}) => {
	return (
		<div className='person-item-wraper'>
				<p className = 'name'><img src={person.foto}/> {person.imie} {person.nazwisko == family_id_f || person.nazwisko == family_id_m ? person.nazwisko : <a href = '#'>{person.nazwisko}</a>}</p>
				{person.z_domu ? person.nazwisko == family_id_f ? <p>z domu: <a href = {person.link_root}>{person.z_domu.toUpperCase()}</a></p> : <p>z domu: {person.z_domu.toUpperCase()}</p> : null}
				
				{person.ur ? <p>ur. {person.ur}</p> : null}
				{person.zm ? <p>zm. {person.zm}</p> : null}
			
		</div>
	);

};
export default PersonItem;

