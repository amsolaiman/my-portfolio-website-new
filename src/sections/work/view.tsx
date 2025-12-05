"use client";

// data
import projects from "@/_store/project";
// hooks
import { useResponsive } from "@/hooks/use-responsive";

// ----------------------------------------------------------------------

export default function WorkView() {
  const upMd = useResponsive("up", "md");

  return (
    <section id="work" className="px-2 md:px-4 pt-24">
      <div className="flex mb-4 justify-end gap-2">
        <h5 className="text-xl uppercase">
          [{String(projects.length).padStart(2, "0")}]
        </h5>

        <h1 className="text-7xl font-sans uppercase">
          {upMd ? "Selected Works" : "Works"}
        </h1>
      </div>

      <div className="w-full border border-foreground/70 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-foreground/70">
        {projects.map((project, index) => (
          <div
            key={project.name + index}
            className="w-full aspect-square flex flex-col justify-between p-4"
          >
            <div>
              <h5 className="text-xl uppercase font-medium">
                [{String(index + 1).padStart(2, "0")}]
              </h5>

              <h2 className="font-sans font-thin uppercase line-clamp-3 text-7xl">
                {project.name}
              </h2>
            </div>

            <p className="mt-4 text-xs font-light uppercase [&>span]:font-normal">
              <span>[{project.type}]</span>&nbsp;
              {project.techs.map((_) => _).join(" | ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
