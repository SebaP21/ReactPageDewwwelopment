import { Outlet } from "react-router-dom";
import { DesktopNav } from "../Components/NavDesktop/NavDesktop";
import { MobileNav } from "../Components/NavMobile/NavMobile";

export const CommonLayout = () => {
	return (
		<>
			<DesktopNav />
			<MobileNav />
			<Outlet />
		</>
	);
};
