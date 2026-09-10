import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("React root element #root was not found.");
}

/*
 * The server intentionally renders crawler-visible SEO content inside #root.
 *
 * As soon as JavaScript starts, mark the document as JS-enabled.
 * CSS can then hide ONLY the server SEO fallback for normal browsers.
 *
 * Important:
 * - Non-JS crawlers still receive the SEO HTML.
 * - We do not modify/remove the SEO middleware.
 * - We do not add a loading delay.
 * - React renders immediately.
 */
document.documentElement.classList.add("js-enabled");

/*
 * React will replace the server-rendered SEO fallback with the
 * normal React application.
 */
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);