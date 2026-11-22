import { personalData } from "@/utils/data/personal-data";

export default function HeroSection() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center gap-4 bg-[url('/hero.svg')] bg-cover bg-top px-6 py-16 text-center sm:px-12">
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
        {personalData.name}
      </h1>
      <p className="text-lg font-medium text-[#16f2b3] sm:text-xl">
        {personalData.designation}
      </p>
    </section>
  );
}
