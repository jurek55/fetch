import "../style/PersonItem.css";
import { Link } from "react-router-dom";

const PersonItem = ({ person, family_id_f, family_id_m }) => {
	return (
		<div className='person-item-wraper'>
			<p className='name'>
				<Link to=''>
					<img src={person.foto} />
				</Link>{" "}
				{person.imie}{" "}
				{person.nazwisko == family_id_f || person.nazwisko == family_id_m ? (
					person.nazwisko
				) : (
					<Link to={person.link_nazw}>{person.nazwisko}</Link>
				)}
			</p>
			{person.z_domu ? (
				person.nazwisko == family_id_f ? (
					<p>
						z domu:{" "}
						<Link to={person.link_root}>{person.z_domu.toUpperCase()}</Link>
					</p>
				) : (
					<p>z domu: {person.z_domu.toUpperCase()}</p>
				)
			) : null}

			{person.ur ? <p>ur. {person.ur}</p> : null}
			{person.zm ? <p>zm. {person.zm}</p> : null}
		</div>
	);
};
export default PersonItem;
