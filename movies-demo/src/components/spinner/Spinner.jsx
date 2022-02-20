import React from 'react';

export const Spinner = () => {
  return (
    <div className="d-flex text-primary spinnerWrapper justify-content-center" data-test='spinner-component'>
      <div className="spinner-border spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
};