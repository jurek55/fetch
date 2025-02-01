import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
import "./FamiliesMenu.css";

const FamiliesMenu = ({ isvisible, changeIsVisible }) => {
    const links = [
        { id: 1, path: "/kunicki", name: "Kunicki" },
        { id: 2, path: "/frackowiak", name: "Frąckowiak" },
        { id: 3, path: "/kocur", name: "Kocur" },
        { id: 4, path: "/felicki", name: "Felicki" },
        { id: 5, path: "/hermann", name: "Hermann" },
        { id: 6, path: "/malik", name: "Malik" },
        { id: 7, path: "/knapik", name: "Knapik" },
        { id: 8, path: "/stroka", name: "Stroka" },
        { id: 9, path: "/spaloniak", name: "Spaloniak" },
    ];

    console.log(isvisible);
    
    const items = links.map(item => {
        return (
            <p key={item.id}>
                <NavLink to={item.path} name = '2'>{item.name}</NavLink>
                <Outlet />
            </p>
        );
    });

    if (isvisible) {
        return (
            <div className='nav-menu-visible-families' onClick={changeIsVisible}>
                {items}
            </div>
        );
    } else {
        return <div className='nav-menu-unvisible-families'>{items}</div>;
    }
};

export default FamiliesMenu;
