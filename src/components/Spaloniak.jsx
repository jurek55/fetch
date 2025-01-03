import "../style/Spaloniak.css";
import PersonItem from "./PersonItem";

const Spaloniak = ({ data }) => {
	const family_id_f = "spaloniak";
	const family_id_m = "spaloniak";
	const tab = data.filter(item => {
		return (
			item.nazwisko == "spaloniak" ||
			item.nazwisko == "spaloniak" ||
			item.z_domu == "spaloniak"
		);
	});
	const generation0 = tab.filter(item => {
		return item.generation == 0;
	});
	const generation1 = tab.filter(item => {
		return item.generation == 1;
	});
	const generation2 = tab.filter(item => {
		return item.generation == 2;
	});
	const generation3 = tab.filter(item => {
		return item.generation == 3;
	});
	const generation4 = tab.filter(item => {
		return item.generation == 4;
	});
	const generation5 = tab.filter(item => {
		return item.generation == 5;
	});
	const generation0items = generation0.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));

	const generation1items = generation1.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));
	const generation2items = generation2.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));
	const generation3items = generation3.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));
	const generation4items = generation4.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));
	const generation5items = generation5.map(item => (
		<PersonItem
			key={item.id}
			person={item}
			family_id_f={family_id_f}
			family_id_m={family_id_m}
		/>
	));

	return (
		<div className='name-container'>
			<div className='spaloniak0 generation'>{generation0items}</div>
			<div className='spaloniak1 generation'>{generation1items}</div>
			<div className='spaloniak2 generation'>{generation2items}</div>
			<div className='spaloniak3 generation'>{generation3items}</div>
			<div className='spaloniak4 generation'>{generation4items}</div>
			<div className='spaloniak5 generation'>{generation5items}</div>
		</div>
	);
};
export default Spaloniak;
