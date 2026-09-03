import { BlurFade } from "../ui/BlurFade";
import { ProjectCard } from "../ProjectCard";
import { DATA } from "../../data/resume";

const BLUR_FADE_DELAY = 0.04;

export function ProjectsSection() {
  return (
    <div className="w-full space-y-12 py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="bg-foreground text-background inline-block rounded-lg px-3 py-1 text-sm">
              My Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications and games. Here are a few of my favorites.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              images={project.images}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
