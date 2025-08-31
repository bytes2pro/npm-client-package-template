import { jsx } from 'react/jsx-runtime';

// src/ClientButton.tsx
function ClientButton({ children, style, ...rest }) {
  return /* @__PURE__ */ jsx(
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

export { ClientButton };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map