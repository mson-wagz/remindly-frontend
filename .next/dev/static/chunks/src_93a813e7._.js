(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDateTime",
    ()=>formatDateTime,
    "getStatusColor",
    ()=>getStatusColor,
    "getTimeUntil",
    ()=>getTimeUntil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatDateTime(date, time) {
    try {
        const [day, month, year] = date.split('/').map(Number);
        const [hours, minutes] = time.split(':').map(Number);
        const dateObj = new Date(year, month - 1, day, hours, minutes);
        return dateObj.toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (error) {
        return `${date} ${time}`;
    }
}
function getTimeUntil(date, time) {
    try {
        const [day, month, year] = date.split('/').map(Number);
        const [hours, minutes] = time.split(':').map(Number);
        const targetDate = new Date(year, month - 1, day, hours, minutes);
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();
        if (diff < 0) return 'Overdue';
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours_remaining = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes_remaining = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
        if (days > 0) return `${days}d ${hours_remaining}h`;
        if (hours_remaining > 0) return `${hours_remaining}h ${minutes_remaining}m`;
        return `${minutes_remaining}m`;
    } catch (error) {
        return 'Invalid date';
    }
}
function getStatusColor(status) {
    switch(status?.toLowerCase()){
        case 'active':
        case 'pending':
            return 'bg-blue-100 text-blue-800';
        case 'sent':
            return 'bg-green-100 text-green-800';
        case 'disabled':
        case 'failed':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            success: "border-transparent bg-green-500 text-white hover:bg-green-500/80",
            warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-500/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c89d5244fa26e25122decfef0e220f8d8bf6741eb8c423c06bc3fd4a75f9440f") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c89d5244fa26e25122decfef0e220f8d8bf6741eb8c423c06bc3fd4a75f9440f";
    }
    let className;
    let props;
    let variant;
    if ($[1] !== t0) {
        ({ className, variant, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = variant;
    } else {
        className = $[2];
        props = $[3];
        variant = $[4];
    }
    let t1;
    if ($[5] !== className || $[6] !== variant) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className);
        $[5] = className;
        $[6] = variant;
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== props || $[9] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/badge.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[8] = props;
        $[9] = t1;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 44,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
class RemindlyAPI {
    baseURL;
    constructor(){
        this.baseURL = ("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000';
    }
    async request(endpoint, options) {
        const url = `${this.baseURL}${endpoint}`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers
            },
            ...options
        });
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
    }
    // System Status
    async getSystemStatus() {
        return this.request('/status');
    }
    // Reminders
    async getReminders() {
        return this.request('/reminders');
    }
    async testReminders() {
        return this.request('/reminders/test');
    }
    async sendReminderNow(data) {
        return this.request('/reminder/send', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    // WhatsApp
    async getWhatsAppStatus() {
        return this.request('/whatsapp/status');
    }
    async getWhatsAppGroups() {
        return this.request('/whatsapp/groups');
    }
    async sendToGroup(data) {
        return this.request('/whatsapp/send-to-group', {
            method: 'POST',
            body: JSON.stringify({
                groupName: data.targetGroup,
                message: data.message
            })
        });
    }
    async sendToContact(contactName, message) {
        return this.request('/whatsapp/send-to-contact', {
            method: 'POST',
            body: JSON.stringify({
                contactName,
                message
            })
        });
    }
    async restartWhatsApp() {
        return this.request('/whatsapp/restart', {
            method: 'POST'
        });
    }
    // Debug endpoints
    async testMessage() {
        return this.request('/debug/test-message');
    }
    async getWhatsAppDebugStatus() {
        return this.request('/debug/whatsapp-status');
    }
}
const api = new RemindlyAPI();
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useWhatsApp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRestartWhatsApp",
    ()=>useRestartWhatsApp,
    "useSendToContact",
    ()=>useSendToContact,
    "useSendToGroup",
    ()=>useSendToGroup,
    "useSystemStatus",
    ()=>useSystemStatus,
    "useWhatsAppGroups",
    ()=>useWhatsAppGroups,
    "useWhatsAppStatus",
    ()=>useWhatsAppStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
;
;
;
function useWhatsAppStatus() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "whatsapp-status"
            ],
            queryFn: _temp,
            refetchInterval: 10000
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
}
_s(useWhatsAppStatus, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function _temp() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getWhatsAppStatus();
}
function useWhatsAppGroups() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "whatsapp-groups"
            ],
            queryFn: _temp2,
            refetchInterval: 60000
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
}
_s1(useWhatsAppGroups, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function _temp2() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getWhatsAppGroups();
}
function useSystemStatus() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "system-status"
            ],
            queryFn: _temp3,
            refetchInterval: 15000
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
}
_s2(useSystemStatus, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function _temp3() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getSystemStatus();
}
function useSendToGroup() {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = {
            mutationFn: _temp4,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "reminders"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
}
_s3(useSendToGroup, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function _temp4(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sendToGroup(data);
}
function useSendToContact() {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = {
            mutationFn: _temp5,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "reminders"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
}
_s4(useSendToContact, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function _temp5(t0) {
    const { contactName, message } = t0;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sendToContact(contactName, message);
}
function useRestartWhatsApp() {
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d83bdb3e0523fa2476c1cc5082fefbd2d16ba3d7b3c25f3612e21168ba021424";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = {
            mutationFn: _temp6,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "whatsapp-status"
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        "system-status"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
}
_s5(useRestartWhatsApp, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function _temp6() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].restartWhatsApp();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useReminders.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReminders",
    ()=>useReminders,
    "useSendReminderNow",
    ()=>useSendReminderNow,
    "useTestReminders",
    ()=>useTestReminders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
function useReminders() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df08fe98f457ae1944d0b875dd3329cb2adbe498f9256965a229d7d61b9ed040") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df08fe98f457ae1944d0b875dd3329cb2adbe498f9256965a229d7d61b9ed040";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "reminders"
            ],
            queryFn: _temp,
            refetchInterval: 30000
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
}
_s(useReminders, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function _temp() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getReminders();
}
function useTestReminders() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "df08fe98f457ae1944d0b875dd3329cb2adbe498f9256965a229d7d61b9ed040") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df08fe98f457ae1944d0b875dd3329cb2adbe498f9256965a229d7d61b9ed040";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            queryKey: [
                "test-reminders"
            ],
            queryFn: _temp2
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])(t0);
}
_s1(useTestReminders, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function _temp2() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].testReminders();
}
function useSendReminderNow() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "df08fe98f457ae1944d0b875dd3329cb2adbe498f9256965a229d7d61b9ed040") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "df08fe98f457ae1944d0b875dd3329cb2adbe498f9256965a229d7d61b9ed040";
    }
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    let t0;
    if ($[1] !== queryClient) {
        t0 = {
            mutationFn: _temp3,
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "reminders"
                    ]
                });
            }
        };
        $[1] = queryClient;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(t0);
}
_s2(useSendReminderNow, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function _temp3(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sendReminderNow(data);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/dashboard/SystemStatusCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemStatusCard",
    ()=>SystemStatusCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWhatsApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useWhatsApp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReminders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReminders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function SystemStatusCard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "9f59cb38d7f909607e2e3cb4fb709a10e7aee1dfcb72947494a7d007ac454d2b") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9f59cb38d7f909607e2e3cb4fb709a10e7aee1dfcb72947494a7d007ac454d2b";
    }
    const { data: whatsappStatus, isLoading: whatsappLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWhatsApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWhatsAppStatus"])();
    const { data: systemStatus, isLoading: systemLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWhatsApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSystemStatus"])();
    const { data: reminders, isLoading: remindersLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReminders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReminders"])();
    const { mutate: restartWhatsApp, isPending: isRestarting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWhatsApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRestartWhatsApp"])();
    let t0;
    if ($[1] !== reminders) {
        t0 = reminders?.filter(_SystemStatusCardAnonymous) || [];
        $[1] = reminders;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const activeReminders = t0;
    let t1;
    if ($[3] !== reminders) {
        t1 = reminders?.filter(_SystemStatusCardAnonymous2) || [];
        $[3] = reminders;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const upcomingToday = t1;
    const getStatusBadge = _SystemStatusCardGetStatusBadge;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "flex flex-row items-center justify-between space-y-0 pb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-sm font-medium",
                    children: "WhatsApp Status"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 55,
                    columnNumber: 92
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                    className: "h-4 w-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 55,
                    columnNumber: 162
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== whatsappLoading || $[7] !== whatsappStatus?.error || $[8] !== whatsappStatus?.ready) {
        t3 = whatsappLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 62,
            columnNumber: 28
        }, this) : getStatusBadge(whatsappStatus?.ready || false, !!whatsappStatus?.error);
        $[6] = whatsappLoading;
        $[7] = whatsappStatus?.error;
        $[8] = whatsappStatus?.ready;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== restartWhatsApp) {
        t4 = ({
            "SystemStatusCard[<Button>.onClick]": ()=>restartWhatsApp()
        })["SystemStatusCard[<Button>.onClick]"];
        $[10] = restartWhatsApp;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== isRestarting) {
        t5 = isRestarting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
            className: "h-3 w-3 animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 82,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
            className: "h-3 w-3"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 82,
            columnNumber: 74
        }, this);
        $[12] = isRestarting;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== isRestarting || $[15] !== t4 || $[16] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "sm",
            variant: "outline",
            onClick: t4,
            disabled: isRestarting,
            children: [
                t5,
                "Restart"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[14] = isRestarting;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== whatsappStatus?.hasQR) {
        t7 = whatsappStatus?.hasQR && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "warning",
            children: "QR Required"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 100,
            columnNumber: 35
        }, this);
        $[18] = whatsappStatus?.hasQR;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t6 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-2",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, this);
        $[20] = t6;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== t3 || $[24] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                            t3,
                            t8
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                        lineNumber: 117,
                        columnNumber: 33
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 117,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[23] = t3;
        $[24] = t8;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "flex flex-row items-center justify-between space-y-0 pb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-sm font-medium",
                    children: "Active Reminders"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 126,
                    columnNumber: 93
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                    className: "h-4 w-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 126,
                    columnNumber: 164
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    const t11 = remindersLoading ? "..." : activeReminders.length;
    let t12;
    if ($[27] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[27] = t11;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    const t13 = remindersLoading ? "..." : reminders?.length || 0;
    let t14;
    if ($[29] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-muted-foreground",
            children: [
                "Total in spreadsheet: ",
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t12 || $[32] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: [
                        t12,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 151,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[31] = t12;
        $[32] = t14;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "flex flex-row items-center justify-between space-y-0 pb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-sm font-medium",
                    children: "Today's Schedule"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 160,
                    columnNumber: 93
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "h-4 w-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 160,
                    columnNumber: 164
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    const t17 = remindersLoading ? "..." : upcomingToday.length;
    let t18;
    if ($[35] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-bold",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[35] = t17;
        $[36] = t18;
    } else {
        t18 = $[36];
    }
    let t19;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-muted-foreground",
            children: "Reminders scheduled for today"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: [
                        t18,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 183,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[38] = t18;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "flex flex-row items-center justify-between space-y-0 pb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-sm font-medium",
                    children: "System Health"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 191,
                    columnNumber: 93
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "h-4 w-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 191,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== systemLoading || $[42] !== systemStatus?.whatsappReady) {
        t22 = systemLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "outline",
            children: "Checking..."
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 198,
            columnNumber: 27
        }, this) : getStatusBadge(systemStatus?.whatsappReady || false);
        $[41] = systemLoading;
        $[42] = systemStatus?.whatsappReady;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] !== systemStatus) {
        t23 = systemStatus?.timestamp ? new Date(systemStatus.timestamp).toLocaleTimeString() : "Unknown";
        $[44] = systemStatus;
        $[45] = t23;
    } else {
        t23 = $[45];
    }
    let t24;
    if ($[46] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-muted-foreground",
            children: [
                "Last check: ",
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[46] = t23;
        $[47] = t24;
    } else {
        t24 = $[47];
    }
    let t25;
    if ($[48] !== t22 || $[49] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                            t22,
                            t24
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                        lineNumber: 223,
                        columnNumber: 35
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
                    lineNumber: 223,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[48] = t22;
        $[49] = t24;
        $[50] = t25;
    } else {
        t25 = $[50];
    }
    let t26;
    if ($[51] !== t15 || $[52] !== t20 || $[53] !== t25 || $[54] !== t9) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: [
                t9,
                t15,
                t20,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[51] = t15;
        $[52] = t20;
        $[53] = t25;
        $[54] = t9;
        $[55] = t26;
    } else {
        t26 = $[55];
    }
    return t26;
}
_s(SystemStatusCard, "dTWtE5sdhAbaC2Eo0gYn0wRu2Qc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWhatsApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWhatsAppStatus"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWhatsApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSystemStatus"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReminders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReminders"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWhatsApp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRestartWhatsApp"]
    ];
});
_c = SystemStatusCard;
function _SystemStatusCardGetStatusBadge(ready, hasError) {
    if (hasError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "destructive",
            children: "Error"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 245,
            columnNumber: 12
        }, this);
    }
    if (ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "success",
            children: "Connected"
        }, void 0, false, {
            fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
            lineNumber: 248,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "warning",
        children: "Connecting"
    }, void 0, false, {
        fileName: "[project]/src/components/dashboard/SystemStatusCard.tsx",
        lineNumber: 250,
        columnNumber: 10
    }, this);
}
function _SystemStatusCardAnonymous2(r_0) {
    if (!r_0.date) {
        return false;
    }
    const today = new Date().toDateString();
    try {
        const [day, month, year] = r_0.date.split("/");
        const reminderDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        return reminderDate.toDateString() === today;
    } catch  {
        return false;
    }
}
function _SystemStatusCardAnonymous(r) {
    return r.status?.toLowerCase() === "active" || r.status?.toLowerCase() === "pending";
}
var _c;
__turbopack_context__.k.register(_c, "SystemStatusCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reminders/ReminderCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReminderCard",
    ()=>ReminderCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReminders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReminders.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ReminderCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "85e8aa0bb53aeac33207bf49285eec7c2d4851db49a4a2bb732b13e2314123df") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "85e8aa0bb53aeac33207bf49285eec7c2d4851db49a4a2bb732b13e2314123df";
    }
    const { reminder } = t0;
    const { mutate: sendNow, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReminders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendReminderNow"])();
    let t1;
    if ($[1] !== reminder.message || $[2] !== reminder.targetGroup || $[3] !== sendNow) {
        t1 = ({
            "ReminderCard[handleSendNow]": ()=>{
                if (reminder.targetGroup) {
                    sendNow({
                        message: reminder.message,
                        targetGroup: reminder.targetGroup
                    });
                }
            }
        })["ReminderCard[handleSendNow]"];
        $[1] = reminder.message;
        $[2] = reminder.targetGroup;
        $[3] = sendNow;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleSendNow = t1;
    let t2;
    if ($[5] !== reminder.date || $[6] !== reminder.time) {
        t2 = ({
            "ReminderCard[isOverdue]": ()=>{
                try {
                    const [day, month, year] = reminder.date.split("/").map(Number);
                    const [hours, minutes] = reminder.time.split(":").map(Number);
                    const targetDate = new Date(year, month - 1, day, hours, minutes);
                    return new Date() > targetDate;
                } catch  {
                    return false;
                }
            }
        })["ReminderCard[isOverdue]"];
        $[5] = reminder.date;
        $[6] = reminder.time;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    const isOverdue = t2;
    let t3;
    if ($[8] !== reminder.message) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
            className: "text-base font-medium line-clamp-2",
            children: reminder.message
        }, void 0, false, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[8] = reminder.message;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const t4 = reminder.status?.toLowerCase() === "sent" ? "success" : reminder.status?.toLowerCase() === "disabled" ? "destructive" : "default";
    const t5 = reminder.status || "pending";
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: t4,
            className: "ml-2 shrink-0",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t3 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "pb-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    t3,
                    t6
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reminders/ReminderCard.tsx",
                lineNumber: 91,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
            className: "h-4 w-4 text-muted-foreground"
        }, void 0, false, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== reminder.date || $[18] !== reminder.time) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(reminder.date, reminder.time);
        $[17] = reminder.date;
        $[18] = reminder.time;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-1",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/ReminderCard.tsx",
                    lineNumber: 116,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== isOverdue || $[23] !== reminder.status) {
        t11 = isOverdue() && reminder.status !== "sent" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
            variant: "destructive",
            className: "text-xs",
            children: "Overdue"
        }, void 0, false, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 124,
            columnNumber: 56
        }, this);
        $[22] = isOverdue;
        $[23] = reminder.status;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== t10 || $[26] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4 text-sm",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[25] = t10;
        $[26] = t11;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== reminder.date || $[29] !== reminder.status || $[30] !== reminder.time) {
        t13 = reminder.status?.toLowerCase() === "sent" ? "Already sent" : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimeUntil"])(reminder.date, reminder.time)} remaining`;
        $[28] = reminder.date;
        $[29] = reminder.status;
        $[30] = reminder.time;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm text-muted-foreground",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== reminder.targetGroup) {
        t15 = reminder.targetGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-1 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "h-4 w-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/ReminderCard.tsx",
                    lineNumber: 160,
                    columnNumber: 88
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium",
                    children: reminder.targetGroup
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/ReminderCard.tsx",
                    lineNumber: 160,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 160,
            columnNumber: 35
        }, this);
        $[34] = reminder.targetGroup;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== reminder.repeat) {
        t16 = reminder.repeat && reminder.repeat !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-muted-foreground",
            children: [
                "Repeats: ",
                reminder.repeat
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 168,
            columnNumber: 56
        }, this);
        $[36] = reminder.repeat;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] !== reminder.rowIndex) {
        t17 = reminder.rowIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-muted-foreground",
            children: [
                "Row ",
                reminder.rowIndex
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 176,
            columnNumber: 32
        }, this);
        $[38] = reminder.rowIndex;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-2",
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[40] = t17;
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== handleSendNow || $[43] !== isPending || $[44] !== reminder.status || $[45] !== reminder.targetGroup) {
        t19 = reminder.status?.toLowerCase() !== "sent" && reminder.targetGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "sm",
            variant: "outline",
            onClick: handleSendNow,
            disabled: isPending,
            className: "flex items-center space-x-1",
            children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reminders/ReminderCard.tsx",
                        lineNumber: 192,
                        columnNumber: 216
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Sending..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/reminders/ReminderCard.tsx",
                        lineNumber: 192,
                        columnNumber: 314
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                        className: "h-3 w-3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reminders/ReminderCard.tsx",
                        lineNumber: 192,
                        columnNumber: 345
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Send Now"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reminders/ReminderCard.tsx",
                        lineNumber: 192,
                        columnNumber: 373
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 192,
            columnNumber: 80
        }, this);
        $[42] = handleSendNow;
        $[43] = isPending;
        $[44] = reminder.status;
        $[45] = reminder.targetGroup;
        $[46] = t19;
    } else {
        t19 = $[46];
    }
    let t20;
    if ($[47] !== t18 || $[48] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pt-2",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[47] = t18;
        $[48] = t19;
        $[49] = t20;
    } else {
        t20 = $[49];
    }
    let t21;
    if ($[50] !== t12 || $[51] !== t14 || $[52] !== t15 || $[53] !== t16 || $[54] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    t12,
                    t14,
                    t15,
                    t16,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reminders/ReminderCard.tsx",
                lineNumber: 212,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[50] = t12;
        $[51] = t14;
        $[52] = t15;
        $[53] = t16;
        $[54] = t20;
        $[55] = t21;
    } else {
        t21 = $[55];
    }
    let t22;
    if ($[56] !== t21 || $[57] !== t7) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full",
            children: [
                t7,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/reminders/ReminderCard.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[56] = t21;
        $[57] = t7;
        $[58] = t22;
    } else {
        t22 = $[58];
    }
    return t22;
}
_s(ReminderCard, "3O0gezqmYp7L4Eq2Jtgqucgj44U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReminders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSendReminderNow"]
    ];
});
_c = ReminderCard;
var _c;
__turbopack_context__.k.register(_c, "ReminderCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/reminders/RemindersList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemindersList",
    ()=>RemindersList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reminders$2f$ReminderCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/reminders/ReminderCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReminders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReminders.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function RemindersList() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "a01d2943b5ef3021a1c86dd5849c414f54015000c01537c10c61d5bcbafc9209") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a01d2943b5ef3021a1c86dd5849c414f54015000c01537c10c61d5bcbafc9209";
    }
    const { data: reminders, isLoading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReminders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReminders"])();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] !== filter || $[2] !== searchTerm) {
        t0 = ({
            "RemindersList[filterReminders]": (reminders_0)=>{
                let filtered = reminders_0;
                if (filter === "active") {
                    filtered = filtered.filter(_RemindersListFilterRemindersFilteredFilter);
                } else {
                    if (filter === "sent") {
                        filtered = filtered.filter(_RemindersListFilterRemindersFilteredFilter2);
                    } else {
                        if (filter === "overdue") {
                            filtered = filtered.filter(_RemindersListFilterRemindersFilteredFilter3);
                        }
                    }
                }
                if (searchTerm) {
                    filtered = filtered.filter({
                        "RemindersList[filterReminders > filtered.filter()]": (r_2)=>r_2.message.toLowerCase().includes(searchTerm.toLowerCase()) || r_2.targetGroup?.toLowerCase().includes(searchTerm.toLowerCase())
                    }["RemindersList[filterReminders > filtered.filter()]"]);
                }
                return filtered;
            }
        })["RemindersList[filterReminders]"];
        $[1] = filter;
        $[2] = searchTerm;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const filterReminders = t0;
    let t1;
    let t2;
    if ($[4] !== error || $[5] !== filter || $[6] !== filterReminders || $[7] !== isLoading || $[8] !== refetch || $[9] !== reminders || $[10] !== searchTerm) {
        t2 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const filteredReminders = reminders ? filterReminders(reminders) : [];
            let t3;
            if ($[13] !== filterReminders || $[14] !== reminders) {
                t3 = ({
                    "RemindersList[getFilterCount]": (filterType)=>{
                        if (!reminders) {
                            return 0;
                        }
                        return filterReminders(reminders.filter(_RemindersListGetFilterCountRemindersFilter)).length;
                    }
                })["RemindersList[getFilterCount]"];
                $[13] = filterReminders;
                $[14] = reminders;
                $[15] = t3;
            } else {
                t3 = $[15];
            }
            const getFilterCount = t3;
            if (error) {
                let t4;
                if ($[16] !== error.message) {
                    t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-destructive mb-4",
                        children: [
                            "Error loading reminders: ",
                            error.message
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reminders/RemindersList.tsx",
                        lineNumber: 85,
                        columnNumber: 16
                    }, this);
                    $[16] = error.message;
                    $[17] = t4;
                } else {
                    t4 = $[17];
                }
                let t5;
                if ($[18] !== refetch) {
                    t5 = ({
                        "RemindersList[<Button>.onClick]": ()=>refetch()
                    })["RemindersList[<Button>.onClick]"];
                    $[18] = refetch;
                    $[19] = t5;
                } else {
                    t5 = $[19];
                }
                let t6;
                if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
                    t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                        className: "h-4 w-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/reminders/RemindersList.tsx",
                        lineNumber: 103,
                        columnNumber: 16
                    }, this);
                    $[20] = t6;
                } else {
                    t6 = $[20];
                }
                let t7;
                if ($[21] !== t5) {
                    t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: t5,
                        variant: "outline",
                        children: [
                            t6,
                            "Try Again"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reminders/RemindersList.tsx",
                        lineNumber: 110,
                        columnNumber: 16
                    }, this);
                    $[21] = t5;
                    $[22] = t7;
                } else {
                    t7 = $[22];
                }
                let t8;
                if ($[23] !== t4 || $[24] !== t7) {
                    t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    t4,
                                    t7
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reminders/RemindersList.tsx",
                                lineNumber: 118,
                                columnNumber: 51
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/reminders/RemindersList.tsx",
                            lineNumber: 118,
                            columnNumber: 22
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reminders/RemindersList.tsx",
                        lineNumber: 118,
                        columnNumber: 16
                    }, this);
                    $[23] = t4;
                    $[24] = t7;
                    $[25] = t8;
                } else {
                    t8 = $[25];
                }
                t2 = t8;
                break bb0;
            }
            let t4;
            if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Reminders"
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 130,
                    columnNumber: 14
                }, this);
                $[26] = t4;
            } else {
                t4 = $[26];
            }
            let t5;
            if ($[27] !== refetch) {
                t5 = ({
                    "RemindersList[<Button>.onClick]": ()=>refetch()
                })["RemindersList[<Button>.onClick]"];
                $[27] = refetch;
                $[28] = t5;
            } else {
                t5 = $[28];
            }
            let t6;
            if ($[29] !== isLoading) {
                t6 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                    className: "h-4 w-4 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 147,
                    columnNumber: 26
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 147,
                    columnNumber: 75
                }, this);
                $[29] = isLoading;
                $[30] = t6;
            } else {
                t6 = $[30];
            }
            let t7;
            if ($[31] !== isLoading || $[32] !== t5 || $[33] !== t6) {
                t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            t4,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: t5,
                                variant: "outline",
                                size: "sm",
                                disabled: isLoading,
                                children: [
                                    t6,
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/reminders/RemindersList.tsx",
                                lineNumber: 155,
                                columnNumber: 81
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reminders/RemindersList.tsx",
                        lineNumber: 155,
                        columnNumber: 26
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 155,
                    columnNumber: 14
                }, this);
                $[31] = isLoading;
                $[32] = t5;
                $[33] = t6;
                $[34] = t7;
            } else {
                t7 = $[34];
            }
            let t8;
            if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
                t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 165,
                    columnNumber: 14
                }, this);
                $[35] = t8;
            } else {
                t8 = $[35];
            }
            let t9;
            if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
                t9 = ({
                    "RemindersList[<input>.onChange]": (e)=>setSearchTerm(e.target.value)
                })["RemindersList[<input>.onChange]"];
                $[36] = t9;
            } else {
                t9 = $[36];
            }
            let t10;
            if ($[37] !== searchTerm) {
                t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-2 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            t8,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search reminders...",
                                value: searchTerm,
                                onChange: t9,
                                className: "pl-10 pr-4 py-2 border border-input rounded-md w-full bg-background"
                            }, void 0, false, {
                                fileName: "[project]/src/components/reminders/RemindersList.tsx",
                                lineNumber: 181,
                                columnNumber: 102
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/reminders/RemindersList.tsx",
                        lineNumber: 181,
                        columnNumber: 65
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 181,
                    columnNumber: 15
                }, this);
                $[37] = searchTerm;
                $[38] = t10;
            } else {
                t10 = $[38];
            }
            let t11;
            if ($[39] !== filter || $[40] !== getFilterCount || $[41] !== reminders?.length) {
                t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                        "all",
                        "active",
                        "sent",
                        "overdue"
                    ].map({
                        "RemindersList[(anonymous)()]": (filterType_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: filter === filterType_0 ? "default" : "outline",
                                size: "sm",
                                onClick: {
                                    "RemindersList[(anonymous)() > <Button>.onClick]": ()=>setFilter(filterType_0)
                                }["RemindersList[(anonymous)() > <Button>.onClick]"],
                                className: "capitalize",
                                children: [
                                    filterType_0,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "secondary",
                                        className: "ml-2",
                                        children: filterType_0 === "all" ? reminders?.length || 0 : getFilterCount(filterType_0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/reminders/RemindersList.tsx",
                                        lineNumber: 192,
                                        columnNumber: 104
                                    }, this)
                                ]
                            }, filterType_0, true, {
                                fileName: "[project]/src/components/reminders/RemindersList.tsx",
                                lineNumber: 190,
                                columnNumber: 61
                            }, this)
                    }["RemindersList[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 189,
                    columnNumber: 15
                }, this);
                $[39] = filter;
                $[40] = getFilterCount;
                $[41] = reminders?.length;
                $[42] = t11;
            } else {
                t11 = $[42];
            }
            let t12;
            if ($[43] !== t10 || $[44] !== t11) {
                t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: [
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 203,
                    columnNumber: 15
                }, this);
                $[43] = t10;
                $[44] = t11;
                $[45] = t12;
            } else {
                t12 = $[45];
            }
            let t13;
            if ($[46] !== t12 || $[47] !== t7) {
                t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        t7,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 212,
                    columnNumber: 15
                }, this);
                $[46] = t12;
                $[47] = t7;
                $[48] = t13;
            } else {
                t13 = $[48];
            }
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    t13,
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: [
                            ...Array(6)
                        ].map(_RemindersListAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reminders/RemindersList.tsx",
                        lineNumber: 219,
                        columnNumber: 57
                    }, this) : filteredReminders.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: filteredReminders.map(_RemindersListFilteredRemindersMap)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reminders/RemindersList.tsx",
                        lineNumber: 219,
                        columnNumber: 211
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-muted-foreground",
                                children: searchTerm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        'No reminders found matching "',
                                        searchTerm,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                                    lineNumber: 219,
                                    columnNumber: 449
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "No ",
                                        filter === "all" ? "" : filter,
                                        " reminders found"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                                    lineNumber: 219,
                                    columnNumber: 501
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/reminders/RemindersList.tsx",
                                lineNumber: 219,
                                columnNumber: 384
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/reminders/RemindersList.tsx",
                            lineNumber: 219,
                            columnNumber: 355
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/reminders/RemindersList.tsx",
                        lineNumber: 219,
                        columnNumber: 349
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/reminders/RemindersList.tsx",
                lineNumber: 219,
                columnNumber: 12
            }, this);
        }
        $[4] = error;
        $[5] = filter;
        $[6] = filterReminders;
        $[7] = isLoading;
        $[8] = refetch;
        $[9] = reminders;
        $[10] = searchTerm;
        $[11] = t1;
        $[12] = t2;
    } else {
        t1 = $[11];
        t2 = $[12];
    }
    if (t2 !== Symbol.for("react.early_return_sentinel")) {
        return t2;
    }
    return t1;
}
_s(RemindersList, "CY8Tw5e3eaKDflxd6DLo+4ZPEE0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReminders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReminders"]
    ];
});
_c = RemindersList;
function _RemindersListFilteredRemindersMap(reminder, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$reminders$2f$ReminderCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReminderCard"], {
        reminder: reminder
    }, `${reminder.rowIndex}-${index}`, false, {
        fileName: "[project]/src/components/reminders/RemindersList.tsx",
        lineNumber: 240,
        columnNumber: 10
    }, this);
}
function _RemindersListAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "animate-pulse",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-gray-200 rounded w-3/4"
                }, void 0, false, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 243,
                    columnNumber: 62
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/reminders/RemindersList.tsx",
                lineNumber: 243,
                columnNumber: 50
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 bg-gray-200 rounded w-1/2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reminders/RemindersList.tsx",
                            lineNumber: 243,
                            columnNumber: 164
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 bg-gray-200 rounded w-1/4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/reminders/RemindersList.tsx",
                            lineNumber: 243,
                            columnNumber: 213
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/reminders/RemindersList.tsx",
                    lineNumber: 243,
                    columnNumber: 137
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/reminders/RemindersList.tsx",
                lineNumber: 243,
                columnNumber: 124
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/components/reminders/RemindersList.tsx",
        lineNumber: 243,
        columnNumber: 10
    }, this);
}
function _RemindersListGetFilterCountRemindersFilter() {
    return true;
}
function _RemindersListFilterRemindersFilteredFilter3(r_1) {
    if (r_1.status?.toLowerCase() === "sent") {
        return false;
    }
    try {
        const [day, month, year] = r_1.date.split("/").map(Number);
        const [hours, minutes] = r_1.time.split(":").map(Number);
        const targetDate = new Date(year, month - 1, day, hours, minutes);
        return new Date() > targetDate;
    } catch  {
        return false;
    }
}
function _RemindersListFilterRemindersFilteredFilter2(r_0) {
    return r_0.status?.toLowerCase() === "sent";
}
function _RemindersListFilterRemindersFilteredFilter(r) {
    return r.status?.toLowerCase() === "active" || r.status?.toLowerCase() === "pending";
}
var _c;
__turbopack_context__.k.register(_c, "RemindersList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_93a813e7._.js.map