import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from "react";

type AppContextState = {
	navBackgroundColor: string;
	setNavBackgroundColor: Dispatch<SetStateAction<string>>;
};

export const AppContext = createContext<AppContextState>({} as AppContextState);

export const AppContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [navBackgroundColor, setNavBackgroundColor] = useState("transparent");

	return (
		<AppContext.Provider value={{ navBackgroundColor, setNavBackgroundColor }}>
			{children}
		</AppContext.Provider>
	);
};
//useState useEffect useContext Context API
