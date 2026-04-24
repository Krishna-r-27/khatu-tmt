import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ThemeButton = ({ text, link = "/", className = "", onClick, type, disabled }) => {

    if (type === "submit" || onClick) {
        return (
            <button
                type={type || "button"}
                onClick={onClick}
                disabled={disabled}
                className={`btn-primary inline-flex items-center gap-2 ${className} disabled:opacity-60`}
            >
                {text}
                <FiArrowUpRight className="text-base" />
            </button>
        );
    }

    return (
        <Link
            to={link}
            className={`btn-primary inline-flex items-center gap-2 ${className}`}
        >
            {text}
            <FiArrowUpRight className="text-base" />
        </Link>
    );
};

export default ThemeButton;