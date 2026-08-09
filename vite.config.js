import { defineConfig } from "vite"; // a helper provided by Vite.
import react from "@vitejs/plugin-react"; // adds React support to Vite.
import tailwindcss from "@tailwindcss/vite"; // vite project configure with tailwindcss
import path from "path"; //  built-in module and support working with file and directory paths

// https://vite.dev/config/
export default defineConfig({
	// exports your Vite configuration so Vite can read it.(when we run npm run dev Vite reads vite.config.js and uses this configuration.)
	plugins: [react(), tailwindcss()], // register plugins
	resolve: {
		alias: {
			// alias allows you to create a shorter name for a directory
			"@": path.resolve(__dirname, "./src"),
		},
	},
});

/* 
*** Note ***
Without the alias, you might have imports like:
import Button from "../../../components/Button";
With your @ alias, you can write:
import Button from "@/components/Button";
*/
