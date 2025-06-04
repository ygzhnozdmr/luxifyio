import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', label, error, options, ...props }, ref) => {
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
          <select
            className={`
              block w-full rounded-md border-0 py-2 px-3
              text-navy-900 shadow-sm ring-1 ring-inset 
              ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-gold-500 
              focus:outline-none text-base appearance-none
              ${error ? 'ring-red-500' : ''}
              ${className}
            `}
            ref={ref}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;