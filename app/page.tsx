import { Header } from "./components/Header";

import { MainBanner } from "./components/MainBanner";
import { EmailSeparator } from "./components/EmailSeparator";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Shape } from "./components/icon/Shape";
import { Star } from "./components/icon/Star";

export const metadata = {
  title: "Yeremia Chris Saragi | Frontend Web Developer",
  description:
    "Frontend Web Developer specializing in building exceptional digital experiences. Explore my portfolio showcasing web development projects and professional experience.",
  keywords: [
    "Yeremia Chris Saragi",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Development",
  ],
  openGraph: {
    title: "Yeremia Chris Saragi | Frontend Web Developer",
    description:
      "Frontend Web Developer specializing in building exceptional digital experiences",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center relative">
        <div className="absolute text-neutral-900 bottom-0 right-0">
          <Shape />
        </div>
        <Star />
        <Header />
        <MainBanner />
      </div>

      <EmailSeparator />

      <About />

      <Experience />

      <Projects />
    </>
  );
}
