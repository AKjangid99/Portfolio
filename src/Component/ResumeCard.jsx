import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Badge } from "./ui/Badge";
import { Card, CardHeader } from "./ui/Card";
import { cn } from "../lib/utils";

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e) => {
    if (!description) return;
    e.preventDefault();
    setIsExpanded((prev) => !prev);
  };

  return (
    <a
      href={href || "#"}
      target={href && href !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex flex-row items-center border-none bg-transparent p-0 shadow-none">
        <div className="flex-none">
          <Avatar className="border-border m-auto size-12 border bg-white">
            <AvatarImage src={logoUrl} alt={altText} className="object-contain p-1" />
            <AvatarFallback className="bg-muted">{altText?.[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="group ml-4 flex flex-grow flex-col items-center">
          <CardHeader className="w-full p-0">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm">
                {title}
                {badges?.length > 0 && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, i) => (
                      <Badge variant="secondary" className="ml-2 align-middle text-xs" key={i}>
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                {description && (
                  <ChevronRightIcon
                    className={cn(
                      "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                      isExpanded ? "rotate-90" : "rotate-0"
                    )}
                  />
                )}
              </h3>
              <div className="text-muted-foreground text-right text-xs tabular-nums sm:text-sm">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>

          <AnimatePresence initial={false}>
            {isExpanded && description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 w-full overflow-hidden text-xs sm:text-sm"
              >
                {description}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </a>
  );
}

export default ResumeCard;
