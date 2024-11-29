import React from 'react';

export const Sheet = ({ children, open, onOpenChange }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => onOpenChange(false)}>
      {children}
    </div>
  );
};

export const SheetContent = ({ children, side = 'right' }) => {
  const sideClasses = {
    right: 'right-0',
    left: 'left-0',
    top: 'top-0',
    bottom: 'bottom-0',
  };

  return (
    <div 
      className={`fixed ${sideClasses[side]} h-full w-[240px] bg-white p-6 shadow-lg`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

export const SheetTrigger = ({ children, asChild, ...props }) => {
  return asChild ? React.cloneElement(children, props) : <button {...props}>{children}</button>;
};