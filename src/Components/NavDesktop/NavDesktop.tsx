import logo from "../../assets/img/cropped-dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png";

export const DesktopNav = () => {
	return (
		<>
			<nav className='nav-desktop'>
				<ul>
					<a href='#home'>
						<img
							src={logo}
							alt=''
						/>
					</a>
					<li>
						<a href='#aboutus'>o nas</a>
					</li>
					<li>
						<a href='#all-offer'>oferta</a>
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
