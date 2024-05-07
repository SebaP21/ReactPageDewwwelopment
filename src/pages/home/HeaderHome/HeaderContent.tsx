import "../../home/style.css"

export const Headerhome = () => {
    return(
        <section id="home">
			<header>
				<div className="header-body">
					<h1>Budowanie stron i <br />sklepów internetowych</h1>
					<p>
						Zakładanie własnej strony internetowej nie musi być trudne.<br />Zbuduj
						z nami swój wizerunek w sieci!
					</p>
					<a href="#aboutus"><button className="btn header-btn">Sprawdź</button></a>
				</div>
				<div className="header-shadow"></div>
			</header>
		</section>

    )
}