'use strict';

var jsxRuntime = require('react/jsx-runtime');

// src/Button.tsx
function Button({ variant = "primary", style, children, ...rest }) {
  const base = {
    borderRadius: 6,
    padding: "8px 12px",
    fontSize: 14,
    cursor: "pointer",
    border: "1px solid transparent"
  };
  const theme = {
    primary: { background: "#111827", color: "white" },
    secondary: { background: "#F3F4F6", color: "#111827", borderColor: "#D1D5DB" }
  };
  return /* @__PURE__ */ jsxRuntime.jsx("button", { style: { ...base, ...theme[variant], ...style }, ...rest, children });
}

exports.Button = Button;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map