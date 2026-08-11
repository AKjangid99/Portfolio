import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Badge } from "./ui/Badge";

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
}) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center rounded-full bg-white">
        <Avatar className="border-border m-auto size-12 border">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title?.[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-muted-foreground text-xs">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <p className="text-muted-foreground text-sm">{location}</p>
        )}
        {description && (
          <span className="prose text-muted-foreground text-sm">
            {description}
          </span>
        )}
      </div>
      {links?.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links.map((link, idx) => (
            <a href={link.href} key={idx} target="_blank" rel="noopener noreferrer">
              <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                {link.icon}
                {link.title}
              </Badge>
            </a>
          ))}
        </div>
      )}
    </li>
  );
}

export default HackathonCard;
