import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 border-b border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl font-semibold text-navy-900 ${className}`}>
      {children}
    </h3>
  );
};

const CardDescription: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <p className={`mt-2 text-sm text-gray-600 ${className}`}>
      {children}
    </p>
  );
};

const CardContent: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

const CardFooter: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`p-6 bg-gray-50 border-t border-gray-100 ${className}`}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription };