import { useContext } from "react";
import logo from "../../assets/img/cropped-dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const DesktopNav = () => {
	const { navBackgroundColor } = useContext(AppContext);

	return (
		<>
			<nav className={`nav-desktop  ${navBackgroundColor}`}>
				<ul>
					<Link to="/"><img
							src={logo}
							alt=''
						/></Link>
					<li>
						<a href='#aboutus'>o nas</a>
					</li>
					<li>
						<Link to='/offer'>Oferta</Link>
					</li>
					<li>
						<a href='/#faq'>faq</a>
					</li>
					<li>
						<a href='#contact'>Kontakt</a>
					</li>
				</ul>
			</nav>
		</>
	);
};
{/* <a href='#home'>
						<img
							src={logo}
							alt=''
						/>
					</a> */}