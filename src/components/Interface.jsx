import { Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { useResponsive } from "../hooks/useResponsive";
const Section = (props) => {
    const { children } = props;

    return (
        <motion.section
            className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center`}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6,
                },
            }}
        >
            {children}
        </motion.section>
    );
};

export const Interface = () => {
    return (
        <div className='flex flex-col items-center w-screen'>
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

const AboutSection = () => {
    return (
        <Section>
            <h1 className='text-6xl font-extrabold leading-snug'>
                Hi, I'm <br />
                <span className='bg-white px-1 italic'>Ersa Mir</span>
            </h1>
            <motion.p
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 1.5,
                }}
                className='text-lg text-gray-600 mt-4'
            >
                I create designs that
                <br /> truly resonate with users.
            </motion.p>
            <motion.button
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    delay: 2,
                }}
                className={`bg-indigo-600 text-white py-3 px-8 rounded-full font-bold text-md mt-16`}
            >
                Contact me
            </motion.button>
        </Section>
    );
};
const skills = [
    { title: "Qualitative Research" },

    { title: "Competitive Analysis" },

    { title: "User Interviews" },

    { title: "Literature Reviews" },

    { title: "Card Sorting" },

    { title: "Evaluative Research" },

    { title: "Creating Surveys" },

    { title: "Rapid Research" },

    { title: "Usability Testing" },

    { title: "Remote User Testing" },

    { title: "Heuristic Evaluations" },

    { title: "Slide Report Building" },

    { title: "Data Synthesis" },

    { title: "A/B Testing" },

    { title: "Wireframing" },

    { title: "Prototyping" },

    { title: "Storyboarding" },

    { title: "Adobe Xd" },
    { title: "Figma" },
    { title: "Google Analytics" },
    { title: "Google Sheets" },
    { title: "Excel" },
    { title: "Powerpoint" },
    { title: "Google Forms" },
];
const SkillSection = () => {
    const isSmall = useResponsive("down", "md");
    return (
        <Section style={{ paddingTop: 30 }}>
            <motion.div whileInView={"visible"}>
                <h2 className='text-5xl font-bold'>Skills</h2>
                <div className=' mt-8  space-y-20'>
                    {/* <Grid item xs={6}> */}
                    <Grid
                        container
                        width={isSmall ? "60%" : "40%"}
                        rowSpacing={isSmall ? 2 : 2}
                        columnSpacing={2}
                    >
                        {skills.map((skill, index) => (
                            <Grid xs={6} md={6} item>
                                <div key={index}>
                                    <motion.h3
                                        initial={{
                                            opacity: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 1 + index * 0.2,
                                                },
                                            },
                                        }}
                                        className='text-xl font-bold text-gray-800'
                                    >
                                        {skill.title}
                                    </motion.h3>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </motion.div>
        </Section>
    );
};

const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject(
            (currentProject - 1 + projects.length) % projects.length
        );
    };

    return (
        <Section>
            <div className='flex w-full h-full gap-8 items-center justify-center'>
                <button
                    className='hover:text-indigo-600 transition-colors'
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className='text-5xl font-bold'>Projects</h2>
                <button
                    className='hover:text-indigo-600 transition-colors'
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    );
};
const ContactSection = () => {
    return (
        <Section>
            <h2 className='text-5xl font-bold'>Contact me</h2>
            <div className='mt-8 p-8 rounded-md bg-white w-96 max-w-full'>
                <form>
                    <label
                        for='name'
                        className='font-medium text-gray-900 block mb-1'
                    >
                        Name
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3'
                    />
                    <label
                        for='email'
                        className='font-medium text-gray-900 block mb-1 mt-8'
                    >
                        Email
                    </label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3'
                    />
                    <label
                        for='email'
                        className='font-medium text-gray-900 block mb-1 mt-8'
                    >
                        Message
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        className='h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3'
                    />
                    <button className='bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 '>
                        Submit
                    </button>
                </form>
            </div>
        </Section>
    );
};
