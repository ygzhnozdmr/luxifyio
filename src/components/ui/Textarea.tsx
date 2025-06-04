import React, { forwardRef } from 'react';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, error, ...props }, ref) => {
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
        <textarea
          className={`
            block w-full rounded-md border-0 py-2 px-3
            text-navy-900 shadow-sm ring-1 ring-inset 
            ring-gray-300 placeholder:text-gray-400 
            focus:ring-2 focus:ring-inset focus:ring-gold-500 
            focus:outline-none text-base min-h-[120px]
            ${error ? 'ring-red-500' : ''}
            ${className}
          `}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;