'use strict';

var jsxRuntime = require('react/jsx-runtime');

// src/ClientButton.tsx
function ClientButton({ children, style, ...rest }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      style: {
        borderRadius: 6,
        padding: "8px 12px",
        fontSize: 14,
        cursor: "pointer",
        background: "#2563EB",
        color: "white",
        ...style
      },
      ...rest,
      children
    }
  );
}

exports.ClientButton = ClientButton;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map