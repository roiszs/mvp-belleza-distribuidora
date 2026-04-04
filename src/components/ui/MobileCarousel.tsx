import React from "react";

type Props = {
children: React.ReactNode;
className?: string;
itemClassName?: string; // se aplica a cada hijo (wrapper)
peek?: boolean; // si true deja ver un poquito la siguiente card
};

export function MobileCarousel({
children,
className = "",
itemClassName = "",
peek = true,
}: Props) {
return (
<div
className={[
"md:hidden",
"relative",
"overflow-x-auto",
"scroll-smooth",
"[scrollbar-width:none]",
"[-ms-overflow-style:none]",
"[&::-webkit-scrollbar]:hidden",
"snap-x snap-mandatory",
"px-4",
className,
].join(" ")}
>
<div
className={[
"flex gap-3",
peek ? "pr-8" : "pr-4", // peek control
].join(" ")}
>
{React.Children.map(children, (child) => (
<div
className={[
"snap-center",
"shrink-0",
// ancho: 88% (peek) o 100% (centrado total)
peek ? "w-[88%]" : "w-full",
itemClassName,
].join(" ")}
>
{child}
</div>
))}
</div>
</div>
);
}

