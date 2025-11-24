import { format } from "date-fns";
import Link from "next/link";
// data
import experience, { type IExperience } from "@/_store/experience";
import { cn } from "@/utils/tw-merge";

// ----------------------------------------------------------------------

type GroupedArrayType = {
  year: string;
  items: IExperience[];
};

// ----------------------------------------------------------------------

export default function ExperienceView() {
  const categorizeArray = (array: IExperience[]): GroupedArrayType[] => {
    const map: { [key: string]: IExperience[] } = array.reduce(
      (acc: { [key: string]: IExperience[] }, value: IExperience) => {
        const year: string = value.startDate.getFullYear().toString();

        acc[year] = acc[year] || [];

        acc[year].push(value);

        return acc;
      },
      {} as { [key: string]: IExperience[] },
    );

    const result = Object.keys(map)
      .map((element) => ({
        year: element,
        items: map[element].sort(
          (a, b) => Number(b.startDate) - Number(a.startDate),
        ),
      }))
      .sort((a, b) => Number(b.year) - Number(a.year));

    return result;
  };

  return (
    <section id="experience" className="px-4 pt-24">
      <div className="flex mb-4 ">
        <h1 className="text-7xl font-sans uppercase">
          Experience
          <br />
          since ‘22
        </h1>

        <h5 className="text-xl uppercase">
          [{String(experience.length).padStart(2, "0")}]
        </h5>
      </div>

      <div className="w-full border-t border-foreground/70 flex justify-end">
        <div className="flex flex-col divide-y divide-foreground/70 w-3/4">
          {categorizeArray(experience).map((group, gIndex, gArray) => {
            const isLastGroup = gIndex === gArray.length - 1;

            return (
              <div key={group.year + gIndex} className="flex">
                <p className="py-3 w-1/2 text-sm uppercase font-light h-auto">
                  {group.year}
                </p>

                <div className="flex flex-col divide-y divide-foreground/70 w-full">
                  {group.items.map((exp, eIndex) => {
                    const startDate = format(exp.startDate, "MMM.yyyy");

                    const endDate =
                      !exp.isCurrent && exp.endDate
                        ? format(exp.endDate, "MMM.yyyy")
                        : "Present";

                    const duration = `[${startDate} - ${endDate}]`;

                    const isLastItem = eIndex === group.items.length - 1;

                    return (
                      <div
                        key={exp.title + eIndex}
                        className={cn(
                          "py-2 flex flex-col min-h-20",
                          isLastGroup &&
                            isLastItem &&
                            "border-b border-foreground/70",
                        )}
                      >
                        <div className="flex items-baseline gap-2">
                          <h3 className="text-2xl font-light uppercase">
                            {exp.title}
                          </h3>

                          <p className="text-xs uppercase font-light opacity-50">
                            {duration}
                          </p>
                        </div>

                        <span className="text-xs uppercase font-light">
                          {exp.employerLink ? (
                            <Link
                              href={exp.employerLink ?? ""}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="w-fit hover:opacity-70 transition-opacity"
                            >
                              {exp.employer}
                            </Link>
                          ) : (
                            <p>{exp.employer}</p>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
