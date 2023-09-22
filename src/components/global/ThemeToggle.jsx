import React, { useState, useEffect } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme); // Set the data-theme attribute
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div
            className={`rounded-3xl flex items-center py-2 px-2  ${theme === "dark" ? "bg-white" : "bg-[#111]"
                }`}
        >
            <div
                className={`${theme === "light" ? "text-white" : "text-black"
                    }  cursor-pointer `}
            >
                {theme === "dark" ? (
                    <BsSun onClick={() => setTheme("light")} />
                ) : (
                    <BsMoonStars onClick={() => setTheme("dark")} />
                )}
            </div>
        </div>
    );
};

export default ThemeToggle;
