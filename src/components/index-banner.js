import { heading, logo } from "@/lib/fonts";

export function IndexBanner() {
  return (
    <div className="py-8 flex flex-col items-center gap-8 md:flex-row md:justify-between">
      <span className={`${logo.className} text-5xl md:text-8xl`}>Blog.</span>
    </div>
  );
}
