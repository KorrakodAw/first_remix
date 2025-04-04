import "/build/_shared/chunk-AUYLHJJM.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-WG3T7QK4.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-ORTGETGB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/contacts.$contactId_.edit.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/contacts.$contactId_.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/contacts.$contactId_.edit.tsx"
  );
  import.meta.hot.lastModified = "1743504958887.034";
}
function EditContact() {
  _s();
  const {
    contact
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "contact-form", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Name" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "First name", defaultValue: contact.first, name: "first", placeholder: "First", type: "text" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Last name", defaultValue: contact.last, name: "last", placeholder: "Last", type: "text" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Twitter" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { defaultValue: contact.twitter, name: "twitter", placeholder: "@jack", type: "text" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Avatar URL" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { "aria-label": "Avatar URL", defaultValue: contact.avatar, name: "avatar", placeholder: "https://example.com/avatar.jpg", type: "text" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Notes" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { defaultValue: contact.notes, name: "notes", rows: 6 }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "Save" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => navigate(-1), type: "button", children: "Cancle" }, void 0, false, {
        fileName: "app/routes/contacts.$contactId_.edit.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/contacts.$contactId_.edit.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, contact.id, true, {
    fileName: "app/routes/contacts.$contactId_.edit.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(EditContact, "hNBbUOQ8Y0dVUNq/e/mHDN0KVVU=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = EditContact;
var _c;
$RefreshReg$(_c, "EditContact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditContact as default
};
//# sourceMappingURL=/build/routes/contacts.$contactId_.edit-3VSS4WQV.js.map
