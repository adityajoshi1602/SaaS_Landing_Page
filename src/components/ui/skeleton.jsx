import React from "react";

/* simple className merge utility */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
