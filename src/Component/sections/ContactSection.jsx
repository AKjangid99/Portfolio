import { FlickeringGrid } from "../ui/FlickeringGrid";
import { DATA } from "../../data/resume";

const FADE_MASK = "linear-gradient(to bottom, black, transparent)";

export function ContactSection() {
  return (
    <div className="relative rounded-xl border p-10">
      <div className="bg-primary absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border px-4 py-1">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>

      <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-xl">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mx-auto max-w-lg text-balance">
          Want to chat? Just shoot me{" "}
          <a
            href={`mailto:${DATA.contact.email}`}
            className="focus-visible:ring-ring rounded-sm text-blue-500 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            an email with a direct question
          </a>{" "}
          and I&apos;ll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </div>
  );
}

export default ContactSection;
