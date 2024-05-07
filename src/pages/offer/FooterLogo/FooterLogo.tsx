import Logo from "../../../assets/img/dewwwelopment-low-resolution-logo-black-on-transparent-background-3.png"

export const FooterLogo = () => {
    return(
        <div className="footer-logo">
			<a href="../../index.html"
				><img
					src={Logo}
					alt=""
			/></a>
		</div>
    )
}