import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import "./Dropdown.css";
import { useState } from "react";
const Dropdown = ({ buttonText, content }) => {
	const [open, setOpen] = useState(false);
	const toggleDropdown = () => {
		setOpen(open => !open);
	};
	return (
		<div className='dropdown'>
			<DropdownButton open={open} toggle={toggleDropdown}>
				{buttonText}
			</DropdownButton>
			<DropdownContent open={open}>{content}</DropdownContent>
		</div>
	);
};

export default Dropdown;
