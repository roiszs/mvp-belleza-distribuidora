import React from "react";

export function MobilePillsRow({
children,
className = "",
}: {
children: React.ReactNode;
className?: string;
}) {
return (
<div
className={[
"md:hidden",
"overflow-x-auto",
"[scrollbar-width:none]",
"[-ms-overflow-style:none]",
"[&::-webkit-scrollbar]:hidden",
"px-4",
className,
].join(" ")}
>
<div className="flex w-max gap-2 pr-6">{children}</div>
</div>
);
}