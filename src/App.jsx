import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
	// Get the HTML element
	const html = document.documentElement;

	// Declare a state for geting the current theme
	const [theme, setTheme] = useState("light");

	// Modify HTML class with a function and a event handler
	const changeTheme = () => {
		if (theme === "light") {
			html.classList.remove("light");
			html.classList.add("dark");
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		} else {
			html.classList.remove("dark");
			html.classList.add("light");
			setTheme("light");
			localStorage.setItem("theme", "light");
		}
	};

	//Local storage theke current theme take get kore setake percistent korte hobe
	useEffect(() => {
		const currentTheme = localStorage.getItem("theme");
		html.classList.add(currentTheme);
		setTheme(currentTheme);
	}, [html.classList]);

	console.log(theme);

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
				onClick={changeTheme}
				className=" mt-5 dark:text-gray-100 px-2 py-2 bg-gray-200 text-black dark:bg-slate-700 rounded-md"
			>
				Switch Mode
			</button>
		</div>
	);
}

export default App;
