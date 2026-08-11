import { Dock, DockIcon } from "./ui/Dock";
import { Tooltip } from "./ui/Tooltip";
import { ModeToggle } from "./ModeToggle";
import { DATA } from "../data/resume";

export function NavBar() {
  const socials = Object.entries(DATA.contact.social).filter(
    ([, social]) => social.navbar
  );

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom">
      <div className="bg-background fixed inset-x-0 bottom-0 h-16 w-full to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background" />
      <Dock className="bg-background pointer-events-auto relative z-50 mx-auto flex min-h-full h-full transform-gpu items-center px-1 shadow-md dark:border-border">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip content={item.label}>
              <a
                href={item.href}
                aria-label={item.label}
                className="hover:bg-accent flex size-12 items-center justify-center rounded-full transition-colors"
              >
                <item.icon className="size-4" />
              </a>
            </Tooltip>
          </DockIcon>
        ))}

        <div className="bg-border h-full w-px py-2" />

        {socials.map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip content={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:bg-accent flex size-12 items-center justify-center rounded-full transition-colors"
              >
                <social.icon className="size-4" />
              </a>
            </Tooltip>
          </DockIcon>
        ))}

        <div className="bg-border h-full w-px py-2" />

        <DockIcon>
          <Tooltip content="Theme">
            <ModeToggle />
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}

export default NavBar;
