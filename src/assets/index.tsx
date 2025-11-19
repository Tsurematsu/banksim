import React from 'react';

// Helper para crear componentes SVG en React
export function createSvgComponent(svgString: string) {
  return function SvgComponent(props) {
    return (
      <span
        {...props}
        dangerouslySetInnerHTML={{ __html: svgString }}
      />
    );
  };
}

import images from "./images";
import svg from "./svg";

export default {
  images,
  svg,
};
