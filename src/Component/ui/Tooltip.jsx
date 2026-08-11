import { useState } from "react";
import { cn } from "../../lib/utils";

/**
 * Lightweight CSS-positioned tooltip. No portal / no Radix, so nothing
 * depends on a server render pass.
 */
export function Tooltip({ content, children, className }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      <div
        role="tooltip"
        className={cn(
          "bg-primary text-primary-foreground pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap shadow-md transition-all duration-150",
          open ? "scale-100 opacity-100" : "scale-95 opacity-0",
          className
        )}
      >
        {content}
      </div>
    </div>
  );
}

export default Tooltip;
