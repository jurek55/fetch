import "../style/Kunicki.css";
import PersonItem from "./PersonItem";

const Kunicki = ({ data }) => {
	const family_id_f = 'kunicka'
	const family_id_m = 'kunicki'
	const kuniccy = data.filter(item => {
		return (
			item.nazwisko == "kunicki" ||
			item.nazwisko == "kunicka" ||
			item.z_domu == "kunicka"
		);
	});
	const generation1 = kuniccy.filter(item => {
		return item.generation == 1;
	});
	const generation2 = kuniccy.filter(item => {
		return item.generation == 2;
	});
	const generation3 = kuniccy.filter(item => {
		return item.generation == 3;
	});
	const generation4 = kuniccy.filter(item => {
		return item.generation == 4;
	});
	const generation5 = kuniccy.filter(item => {
		return item.generation == 5;
	});

	const generation1items = generation1.map(item => (
		<PersonItem key={item.id} person={item} family_id_f = {family_id_f} family_id_m = {family_id_m}/>
	));
	const generation2items = generation2.map(item => (
		<PersonItem key={item.id} person={item} family_id_f = {family_id_f} family_id_m = {family_id_m}/>
	));
	const generation3items = generation3.map(item => (
		<PersonItem key={item.id} person={item} family_id_f = {family_id_f} family_id_m = {family_id_m}/>
	));
	const generation4items = generation4.map(item => (
		<PersonItem key={item.id} person={item} family_id_f = {family_id_f} family_id_m = {family_id_m}/>
	));
	const generation5items = generation5.map(item => (
		<PersonItem key={item.id} person={item} family_id_f = {family_id_f} family_id_m = {family_id_m}/>
	));
	console.log(data);
	console.log(generation4);
	return (
		<div className='kunicki-container'>
			<div className='kunicki-generation1-items generation'>{generation1items}</div>
			<div className='kunicki-generation2-items generation'>{generation2items}</div>
			<div className='kunicki-generation3-items generation'>{generation3items}</div>
			<div className='kunicki-generation4-items generation'>{generation4items}</div>
			<div className='kunicki-generation5-items generation'>{generation5items}</div>
		</div>
	);
};
export default Kunicki;
