import Markdown from "react-markdown";
import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "../Component/ui/BlurFade";
import { BlurFadeText } from "../Component/ui/BlurFadeText";
import { Avatar, AvatarFallback, AvatarImage } from "../Component/ui/Avatar";
import { WorkSection } from "../Component/sections/WorkSection";
import { ProjectsSection } from "../Component/sections/ProjectsSection";
import { HackathonsSection } from "../Component/sections/HackathonsSection";
import { ContactSection } from "../Component/sections/ContactSection";
import { DATA } from "../data/resume";

const BLUR_FADE_DELAY = 0.04;

const Home = () => {
  return (
    <main className="relative mx-auto flex min-h-dvh max-w-2xl flex-col gap-14 px-6 pt-12 pb-28 sm:pt-24">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
            <div className="order-2 flex flex-col gap-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="ring-muted size-24 rounded-full border shadow-lg ring-4 md:size-32">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose text-muted-foreground max-w-full text-pretty font-sans leading-relaxed">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <WorkSection />
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <a
                  href={education.href || "#"}
                  target={
                    education.href && education.href !== "#"
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-x-3"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-x-3">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="ring-border size-8 flex-none overflow-hidden rounded-full border object-contain p-1 shadow ring-2 md:size-10"
                      />
                    ) : (
                      <div className="ring-border bg-muted size-8 flex-none rounded-full border p-1 shadow ring-2 md:size-10" />
                    )}
                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <div className="flex items-center gap-2 font-semibold leading-none">
                        {education.school}
                        <ArrowUpRight
                          className="text-muted-foreground h-3.5 w-3.5 -translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                          aria-hidden
                        />
                      </div>
                      <div className="text-muted-foreground font-sans text-sm">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground flex flex-none items-center gap-1 text-right text-xs tabular-nums">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <div className="bg-background border-border ring-border/20 flex h-8 w-fit items-center gap-2 rounded-xl border px-4 ring-2">
                  {skill.icon && (
                    <skill.icon
                      className="size-4 overflow-hidden rounded object-contain text-[var(--skill-color)] dark:text-[var(--skill-color-dark)]"
                      style={{
                        "--skill-color": skill.color,
                        "--skill-color-dark": skill.darkColor ?? skill.color,
                      }}
                    />
                  )}
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="hackathons">
        <HackathonsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
};

export default Home;
