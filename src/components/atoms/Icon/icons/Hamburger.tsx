import React from 'react';

export const Hamburger = {
  viewBox: '0 0 20 16',
  jsx: (
    <g fill="none" fillRule="evenodd">
      <path d="M0 0L24 0 24 24 0 24z" transform="translate(-2 -4)" />
      <g fill="currentColor">
        <path
          d="M0 0H20V2H0zM0 7H20V9H0zM0 14H20V16H0z"
          transform="translate(-2 -4) translate(2 4)"
        />
      </g>
    </g>
  ),
};
