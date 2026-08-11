import { BlurFade } from "../ui/BlurFade";
import { ResumeCard } from "../ResumeCard";
import { DATA } from "../../data/resume";

const BLUR_FADE_DELAY = 0.04;

export function WorkSection() {
  return (
    <div className="flex flex-col gap-y-6">
      {DATA.work.map((work, id) => (
        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
          <ResumeCard
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
          />
        </BlurFade>
      ))}
    </div>
  );
}

export default WorkSection;
