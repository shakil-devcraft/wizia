import clsx from "clsx";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Container = ({children, className}) => {

    // defalt classes
    const defaltClasses = 'max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10';

    // custom class can apply
    const containerClasses = twMerge(
        clsx(defaltClasses, className)
    );

    return (
        <div className={containerClasses}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

export default Container;