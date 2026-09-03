import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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


function Lightbox({ images, title, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const count = images.length;

  const goTo = (i) => setIndex(((i % count) + count) % count);
  const next = (e) => {
    e?.stopPropagation();
    goTo(index + 1);
  };
  const prev = (e) => {
    e?.stopPropagation();
    goTo(index - 1);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
      else if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [count, onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
      >
        ×
      </button>

      <img
        src={images[index]}
        alt={`${title} — image ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[90vw] select-none rounded-lg object-contain shadow-2xl"
      />

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
          >
            ›
          </button>
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1.5 rounded-full bg-white/50 transition-all duration-300",
                  i === index ? "w-4 bg-white" : "w-1.5"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>,
    document.body
  );
}

function ImageCarousel({ images, title, interval = 4000, onImageClick }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStartX = useRef(null);
  const dragDelta = useRef(0);
  const count = images.length;

  const goTo = (i) => setIndex(((i % count) + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (count <= 1 || paused) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [count, paused, interval]);

  const onPointerDown = (e) => {
    dragStartX.current = e.clientX ?? e.touches?.[0]?.clientX ?? null;
    dragDelta.current = 0;
    setPaused(true);
  };
  const onPointerMove = (e) => {
    if (dragStartX.current == null) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    dragDelta.current = x - dragStartX.current;
  };
  const onPointerUp = () => {
    if (dragStartX.current == null) return;
    const delta = dragDelta.current;
    dragStartX.current = null;
    dragDelta.current = 0;
    setPaused(false);
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    } else {
      onImageClick?.(index);
    }
  };

  return (
    <div
      className="group/carousel relative h-40 w-full cursor-zoom-in overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        onPointerUp();
      }}
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
    >
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative h-40 w-full flex-none overflow-hidden"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="absolute inset-0 h-full w-full scale-110 select-none object-cover blur-xl"
            />
            <img
              src={src}
              alt={`${title} — image ${i + 1}`}
              draggable={false}
              className="relative h-40 w-full select-none object-contain"
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 rounded-full bg-white/70 shadow transition-all duration-300",
                i === index ? "w-4 bg-white" : "w-1.5"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  images,
  video,
  links,
  className,
}) {
  const imageList = Array.isArray(images)
    ? images
    : Array.isArray(image)
      ? image
      : image
        ? [image]
        : [];

  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg",
        className
      )}
    >
      {video ? (
        <a
          href={href || link || "#"}
          className={cn("block", !(href || link) && "pointer-events-none")}
        >
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        </a>
      ) : imageList.length > 1 ? (
        <ImageCarousel
          images={imageList}
          title={title}
          onImageClick={(i) => setLightboxIndex(i)}
        />
      ) : imageList.length === 1 ? (
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          aria-label={`Open ${title} image`}
          className="relative block h-40 w-full cursor-zoom-in overflow-hidden"
        >
          <img
            src={imageList[0]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl"
          />
          <img
            src={imageList[0]}
            alt={title}
            className="relative h-40 w-full object-contain"
          />
        </button>
      ) : (
        <div className="from-muted to-background flex h-40 w-full items-center justify-center bg-gradient-to-br">
          <span className="text-muted-foreground text-2xl font-semibold tracking-tight">
            {title}
          </span>
        </div>
      )}

      <CardHeader className="p-3 pb-0">
        <div className="space-y-1">
          <CardTitle className="text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="prose text-muted-foreground max-w-full text-pretty font-sans text-xs">
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col p-3 pb-0">
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                className="px-1.5 py-0.5 text-[10px] leading-none"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-3 pt-3">
        {links?.length > 0 && (
          <div className="flex flex-row flex-wrap items-center gap-1.5">
            {links.map((l, idx) => (
              <a
                href={l.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Badge className="inline-flex items-center gap-1 px-2 py-1 text-[10px] leading-none">
                  {l.icon && <l.icon className="size-3 shrink-0" />}
                  {l.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </CardFooter>

      {lightboxIndex !== null && imageList.length > 0 && (
        <Lightbox
          images={imageList}
          title={title}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </Card>
  );
}

export default ProjectCard;
