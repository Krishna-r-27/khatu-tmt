import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ThemeButton = ({ text, link = "/", className = "" }) => {
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