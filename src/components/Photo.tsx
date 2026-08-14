import { withBase } from "@/config";
import manifest from "@/data/photos-manifest.json";

// Fotky generuje scripts/prepare-photos.mjs (z photos-src/ do public/photos/).
// Manifest nese rozměry po narovnání EXIF orientace → správný poměr stran bez CLS.

const WIDTHS = [480, 960, 1600] as const;

export type PhotoName = keyof typeof manifest;

type Props = {
  name: PhotoName;
  alt: string;
  /** Atribut sizes pro responzivní výběr velikosti (default: celá šířka). */
  sizes?: string;
  className?: string;
  /** true pro LCP obrázek nad ohybem (eager + fetchpriority high). */
  priority?: boolean;
};

export default function Photo({
  name,
  alt,
  sizes = "100vw",
  className,
  priority = false,
}: Props) {
  const { width, height } = manifest[name];
  const url = (w: number) => withBase(`/photos/${name}-${w}.webp`);
  return (
    // eslint-disable-next-line @next/next/no-img-element -- vlastní pipeline místo next/image (static export)
    <img
      src={url(960)}
      srcSet={WIDTHS.map((w) => `${url(w)} ${w}w`).join(", ")}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
    />
  );
}
