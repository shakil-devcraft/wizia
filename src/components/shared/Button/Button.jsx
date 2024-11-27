// src/components/Button.js
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import PropTypes from 'prop-types'; // ES6


const Button = ({ label = "Button", onClick = () => {}, variant = 'primary', className, disabled = false, leftIcon, rightIcon}) => {
  const baseStyle = 'px-4 py-2 rounded font-semibold focus:outline-none';
  const iconStyle = "text-lg flex justify-center items-center text-center";
  const variantStyle = variant === 'primary' ? 'flex justify-center items-center gap-2 px-8 py-2.5 md:py-3 bg-blue-500 text-white' : 'flex justify-center items-center gap-2 px-8 py-2.5 md:py-3 bg-gray-500 text-white';
  const disabledStyle = disabled ? 'flex justify-center items-center gap-2 px-8 py-2.5 md:py-3 opacity-50 cursor-not-allowed' : 'flex justify-center items-center gap-2 px-8 py-2.5 md:py-3 hover:bg-opacity-90';

  // Combine classes using twMerge and clsx

  const buttonClassNames = twMerge(
    clsx(baseStyle, variantStyle, disabledStyle, className)
  );

  return (
    <button onClick={onClick} className={buttonClassNames} disabled={disabled}>
      {/* Render left icon if provided */}
      {leftIcon && <span className={iconStyle}>{leftIcon}</span>}
      {label}
      {/* Render right icon if provided */}
      {rightIcon && <span className={iconStyle}>{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    leftIcon: PropTypes.node, // Allow any React node for icons
    rightIcon: PropTypes.node, // Allow any React node for icons
    disabled: PropTypes.string,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary', 'disabled']),
};

export default Button;