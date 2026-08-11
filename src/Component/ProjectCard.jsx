import Markdown from "react-markdown";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Badge } from "./ui/Badge";
import { cn } from "../lib/utils";

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg",
        className
      )}
    >
      <a href={href || link || "#"} className={cn("block", !(href || link) && "pointer-events-none")}>
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {!video && image && (
          <img
            src={image}
            alt={title}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
        {!video && !image && (
          <div className="from-muted to-background flex h-40 w-full items-center justify-center bg-gradient-to-br">
            <span className="text-muted-foreground text-2xl font-semibold tracking-tight">
              {title}
            </span>
          </div>
        )}
      </a>

      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="prose text-muted-foreground max-w-full text-pretty font-sans text-xs">
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-2">
        {tags?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {links?.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((l, idx) => (
              <a
                href={l.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  {l.icon && <l.icon className="size-3" />}
                  {l.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
