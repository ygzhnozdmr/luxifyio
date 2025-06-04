import React, { forwardRef } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            className="block text-sm font-medium leading-6 text-navy-800 mb-2"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {icon}
            </div>
          )}
          <input
            className={`
              block w-full rounded-md border-0 py-2 px-3
              ${icon ? 'pl-10' : ''}
              text-navy-900 shadow-sm ring-1 ring-inset 
              ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-gold-500 
              focus:outline-none text-base
              ${error ? 'ring-red-500' : ''}
              ${className}
            `}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;