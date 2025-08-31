import { defineComponent as p, computed as c, createElementBlock as s, openBlock as d, normalizeStyle as l, renderSlot as u } from "vue";
const b = /* @__PURE__ */ p({
  __name: "Button",
  props: {
    variant: { default: "primary" }
  },
  setup(o) {
    const e = o, r = {
      borderRadius: "6px",
      padding: "8px 12px",
      fontSize: "14px",
      cursor: "pointer",
      border: "1px solid transparent"
    }, t = {
      primary: { background: "#111827", color: "white" },
      secondary: { background: "#F3F4F6", color: "#111827", borderColor: "#D1D5DB" }
    }, n = c(() => ({
      ...r,
      ...t[e.variant]
    }));
    return (a, i) => (d(), s("button", {
      style: l(n.value)
    }, [
      u(a.$slots, "default")
    ], 4));
  }
});
export {
  b as VButton
};
