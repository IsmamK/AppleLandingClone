import React, { useRef } from 'react';

const withScrollToComponent = (WrappedComponent) => {
  const ScrollToComponent = () => {
    const componentRef = useRef(null);

    const scrollToComponent = () => {
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div ref={componentRef}>
        <WrappedComponent scrollToComponent={scrollToComponent} />
      </div>
    );
  };

  return ScrollToComponent;
};

export default withScrollToComponent;
