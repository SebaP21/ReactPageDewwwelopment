import { Outlet } from "react-router-dom";
import { DesktopNav } from "../Components/NavDesktop/NavDesktop";
import { MobileNav } from "../Components/NavMobile/NavMobile";
import { AppContextProvider } from "../context/AppContext";

export const CommonLayout = () => {

	return (
		<AppContextProvider>  
			<DesktopNav  />
			<MobileNav />
			<Outlet />
		</AppContextProvider>
	);
};
