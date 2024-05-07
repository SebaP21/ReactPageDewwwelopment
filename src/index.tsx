import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Offer } from "./pages/offer/Offer";
import { CommonLayout } from "./Layout/CommonLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <CommonLayout />,
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: "/offer",
				element: <Offer />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
