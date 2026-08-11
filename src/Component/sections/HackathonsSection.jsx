import { BlurFade } from "../ui/BlurFade";
import { HackathonCard } from "../HackathonCard";
import { DATA } from "../../data/resume";

const BLUR_FADE_DELAY = 0.04;

export function HackathonsSection() {
  if (!DATA.hackathons?.length) return null;

  return (
    <div className="w-full space-y-12 py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="bg-foreground text-background inline-block rounded-lg px-3 py-1 text-sm">
              Hackathons
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              I like building things
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              During my time in university, I attended hackathons where I built
              projects with people from all over the world in a couple of days.
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <ul className="divide-border mb-4 ml-4 divide-y border-l">
          {DATA.hackathons.map((project, id) => (
            <BlurFade
              key={project.title + project.dates}
              delay={BLUR_FADE_DELAY * 15 + id * 0.05}
            >
              <HackathonCard
                title={project.title}
                description={project.description}
                location={project.location}
                dates={project.dates}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </ul>
      </BlurFade>
    </div>
  );
}

export default HackathonsSection;
