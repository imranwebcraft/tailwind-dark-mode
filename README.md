##Anotehr way

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
    		// Set current mode to the local storage Make percistent
    		localStorage.setItem("mode", "dark");
    	} else {
    		html.classList.remove("dark");
    		html.classList.add("light");
    		setMode("light");
    		// Make mode percistent
    		localStorage.setItem("mode", "light");
    	}
    };

    // Local storage related task always goes with side effecr so we use useEffect
    useEffect(() => {
    	const currentMode = localStorage.getItem("mode") || "light";
    	html.classList.add(currentMode);
    	setMode(currentMode);
    }, [html.classList]);
