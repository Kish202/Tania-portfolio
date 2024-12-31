import { education, experience } from "@/types/main"
import { useState } from "react"
import { ViewAll } from "../projects/Projects"
import SectionWrapper from "../SectionWrapper"
import ExperienceCard from "./ExperienceCard"

interface Props {
    experienceData: experience[]
    educationData: education[]
}

const Experiences = ({ experienceData, educationData }: Props) => {
    const [show, setShow] = useState<"Experience" | "Education">("Experience")
    const [viewAll, setViewAll] = useState(false)

    const [experiences, setExperiences] = useState(
        Array.isArray(experienceData) ? [...experienceData].reverse() : []
    )
    const [educations, setEducations] = useState(
        Array.isArray(educationData) ? [...educationData].reverse() : []
    )

    const renderEntries = () => {
        if (show === "Experience") {
            const displayData = viewAll ? experiences : experiences.slice(0, 2);
            return displayData.map((entry, i) => {
                if ('company' in entry) {  // Type guard to ensure we have an experience entry
                    return (
                        <ExperienceCard
                            key={i}
                            type="experience"
                            index={i}
                            company={entry.company}
                            position={entry.position}
                            duration={entry.duration}
                            desc={entry.desc}
                        />
                    );
                }
                return null;
            });
        } else {
            const displayData = viewAll ? educations : educations.slice(0, 2);
            return displayData.map((entry, i) => {
                if ('institute' in entry) {  // Type guard to ensure we have an education entry
                    return (
                        <ExperienceCard
                            key={i}
                            type="education"
                            index={i}
                            institute={entry.institute}
                            degree={entry.degree}
                            duration={entry.duration}
                            desc={entry.desc}
                        />
                    );
                }
                return null;
            });
        }
    };

    return (
        <SectionWrapper id="experience" className="min-h-screen">
            <h2 className="text-4xl text-center">Experience</h2>

            <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
                {['Experience', 'Education'].map((e) => (
                    <button 
                        key={e} 
                        onClick={() => setShow(e as "Experience" | "Education")} 
                        className={`py-2 px-4 rounded-md transition-colors ${
                            show === e ? 'bg-violet-600 text-white' : 'hover:bg-gray-100 hover:dark:bg-grey-900 text-black dark:text-white'
                        }`}
                    >
                        {e}
                    </button>
                ))}
            </div>

            <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
                <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
                    <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>
                    {renderEntries()}
                </div>
            </div>

            {(show === "Experience" ? experiences : educations).length > 2 &&
                <ViewAll 
                    scrollTo='experience' 
                    title={viewAll ? 'Okay, I got it' : 'View All'} 
                    handleClick={() => setViewAll(!viewAll)} 
                />
            }
        </SectionWrapper>
    )
}

export default Experiences