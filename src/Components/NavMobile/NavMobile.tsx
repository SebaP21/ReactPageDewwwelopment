import { useState } from "react";

import Xmark from "../../assets/icons/xmark-solid.svg";
import Logo from "../../assets/img/dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export const MobileNav = () => {
	const [navigationVisible, setNavigationVisible] = useState(false);

	const showNavClick = () => {
		setNavigationVisible((prevState) => !prevState);
	};

	const navBtnOpen = (
		<button
			className='nav-mobile-btn'
			onClick={showNavClick}
		></button>
	);

	const navBtnClose = (
		<button
			className='close-mobile-btn'
			onClick={showNavClick}
		>
			<img
				src={Xmark}
				alt=''
			></img>
		</button>
	);

	return (
		<>
			{!navigationVisible && <>{navBtnOpen}</>}
			{/*TODO: read about 'clsx' or 'classNames' library*/}
			<nav
				className={
					navigationVisible ? `${styles.mobileActive} nav-mobile` : "nav-mobile"
				}
			>
				<ul>
					{navBtnClose}
					<a href='#home'>
						<img
							src={Logo}
							alt=''
						/>
					</a>
					<li>
						<a href='#aboutus'>o nas</a>
					</li>
					<li>
						<Link to="/offer">Oferta</Link>
					</li>
					<li>
						<a href='#faq'>faq</a>
					</li>
					<li>
						<a href='#contact'>Kontakt</a>
					</li>
				</ul>
			</nav>
		</>
	);
};
