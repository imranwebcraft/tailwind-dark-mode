import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
	// get html element
	const html = document.documentElement;

	// Dark mode state
	const [mode, setMode] = useState("light");

	// Dark mode state change function
	const changeMode = () => {
		if (mode === "light") {
			html.classList.remove("light");
			html.classList.add("dark");
			setMode("dark");
			// Set current mode to the local storage
			localStorage.setItem("mode", "dark");
		} else {
			html.classList.remove("dark");
			html.classList.add("light");
			setMode("light");
			localStorage.setItem("mode", "light");
		}
	};

	useEffect(() => {
		const currentMode = localStorage.getItem("mode") || "light";
		html.classList.add(currentMode);
		setMode(currentMode);
	}, [html.classList]);

	console.log(mode);

	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<div className="max-w-xs p-6 rounded-md shadow-md dark:bg-slate-800">
				<img
					src="https://source.unsplash.com/random/300x300/?1"
					alt=""
					className="object-cover object-center w-full rounded-md h-72 "
				/>
				<div className="mt-6 mb-2">
					<span className="block text-xs font-medium tracki uppercase dark:text-gray-200 ">
						Quisque
					</span>
					<h2 className="text-xl font-semibold tracki dark:text-red-500">
						Nam maximus purus
					</h2>
				</div>
				<p className="dark:text-gray-100">
					Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
					sed feugiat mi. Etiam ut lacinia dui.
				</p>
			</div>
			<button
				onClick={changeMode}
				className=" mt-5 dark:text-gray-100 px-2 py-2 bg-gray-200 text-black dark:bg-slate-700 rounded-md"
			>
				Switch Mode
			</button>
		</div>
	);
}

export default App;
