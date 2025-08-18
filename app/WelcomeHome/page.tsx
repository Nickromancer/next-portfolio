import Video from "@/public/Forest.mp4";
import Image from "next/image";
export default function WelcomeHome() {
    return (

        <>
            <div className="">
                <video
                    className=" mix-blend-exclusion fixed"
                    autoPlay={true}
                    loop
                    muted

                >
                    <source src={Video as string} />
                </video>
                <div className="backdrop-blur-[2px] backdrop-brightness-[40%] backdrop-hue-rotate-15 w-full h-full left-0 top-0 fixed"></div>
                <div className="text-white  flex flex-col *:self-start absolute top-28 left-0 w-full h-full px-[600px] gap-3 
                [&_h1]:text-7xl [&_h1]:font-bold [&_h2]:text-4xl [&_h2]:font-semibold [&_h3]:text-2xl [&_h3]:font-normal [&_p]:font-extralight [&_h4]:text-xl [&_h4]:font-light ">
                    <h1>Welcome Home</h1>
                    <h2>Tech Lead's Postmortem</h2>
                    <h3>Introduction</h3>
                    <hr className="w-full" />
                    <p>As Tech Lead for this project, my primary responsibility was overseeing the technical development
                        and ensuring coordination between the programming team and design team. This
                        report aims to provide a structured postmortem analysis of my contributions and experiences
                        during the period of this project regarding my role. The game we developed was a PS1-styled
                        horror game inspired by the movie Midsommar, whereas in our game a close friend invites
                        the protagonist to a community in the woods. The people there treat them well, whereas
                        the reality of the situation becomes more dire the longer the player stays. They learn the
                        truth about this peculiar community by collecting clues and interacting with members of this
                        village which progresses the story, and finally unearthing their true intentions and secrets.
                        Our team aimed to create an immersive environment with a focus on the narrative, which
                        is driven around giving the player clues hidden throughout the game and designing the
                        experience to reward the player for their curiosity and taking the less obvious options.
                        <br />
                        <br />
                        My role consisted primarily of technical decision-making and maintaining tools and processes
                        that enabled the team’s productivity, allowing the programmers to focus on implementing
                        features by having a streamlined workflow cycle. I have encountered numerous moments
                        where the frameworks and technical aspects that I have tried to contribute to our project
                        made a positive impact, but of course with that come times where the consequences were
                        either instantaneous or only became apparent further down the development road.</p>

                    <h3>What went right</h3>
                    <hr className="w-full" />
                    <p>
                        One of the key successes I experienced was implementing a reliable production pipeline.
                        This included setting up version control using Git and GitHub, using GitHub actions
                        for automating builds, and using Kanban boards in GitHub projects to keep
                        an overview of features and bugs that needed to be dealt with.
                    </p>
                    <Image className="my-4" src="/WelcomeHome_1.jpeg" alt="" width={2000} height={0} />
                    <p>
                        These tools minimized conflicts by having concise issues that specified requirements for a
                        task, minimizing the risk of misinterpreting each other and creating excess work. This also
                        improved workflow efficiency by automation in how the repository is structured, all of which
                        ensured a smooth iteration cycle.
                    </p>
                    <h4>Unity Workflow</h4>
                    <p>
                        When working with Unity, my initial goal was to guide the team in using prefabs, which
                        proved to be essential in preventing conflicts and maintaining project consistency. This began
                        by defining naming conventions and a folder structure for the project in general but also for
                        prefabs, ensuring they are organized logically. In our game,
                        we had a lot of NPCs that all shared general characteristics and some had specific behaviors.
                        This was circumvented by using prefab variants to handle differences between
                        similar objects, avoiding duplication of code and wasted hours of work.
                    </p>
                    <h4>GitHub Guideline</h4>
                    <p>
                        To ensure consistency in GitHub, I established clear guidelines for branch naming, commit
                        messages, and pull request practices. For example, I adopted a naming
                        convention for branches that reflected the specific issue that was being worked on, which
                        GitHub could leverage by creating a branch directly out from an issue. I also enforced
                        descriptive, atomic commit messages that follow a consistent format (e.g., Add new animation
                        system). Use code review requirements before allowing a pull request to go through, thus
                        enforcing standards, and catching inconsistencies before merging. Additionally, I included a
                        README.md file that outlines the coding conventions, repository structure, and workflow
                        expectations, creating a unified framework for collaboration that all team members could
                        access and adhere to.
                    </p>
                    <h4>Issue Templates</h4>
                    <p>
                        GitHub issue templates have been a powerful tool for streamlining communication and task
                        management in our game development process. They ensured clarity by providing structured
                        fields to describe tasks, such as an overview, user story, and acceptance criteria. This reduces
                        ambiguity, enabling all team members, both designers and developers to understand the task
                        requirements clearly.
                        <br />
                        Using templates has fostered a smoother collaboration in our team, especially in teams such
                        as ours with diverse roles and different levels of experience in games. Standardized formats
                        such as these help integrate technical and non-technical workflows, as seen supported by the
                        GitHub guidelines and task management practices detailed in our GitHub Repository.
                        <br /><br />
                        An example scenario could, for instance, be if the development team is tasked with implementing
                        a double-jump feature for the game, the issue template used correctly would look
                        like this:
                    </p>
                    <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
                        <li>Title: Add Double-Jump Mechanic</li>
                        <li>Overview: Enable the player to jump a second time while in the air.</li>
                        <li>User Story: As a player, I want to jump twice so I can navigate complex levels.</li>
                        <li>Acceptance Criteria:</li>
                        <ol className="list-['-_'] *:ml-8">
                            <li>Player leaves the ground upon pressing the jump button.</li>
                            <li>A second jump is triggered if the jump button is pressed mid-air.</li>
                            <li>The player can only double-jump once before landing.</li>
                        </ol>
                        <li>Full task description: Pictures, relevant material, or more text.</li>
                    </ol>
                    <h4>Game Build and Distribution</h4>
                    <p>Game Builds were created when a pull request was merged with the state of the game,
                        enabling the UX lead to easily acquire the newest version of our game for testing and
                        feedback purposes.</p>
                </div>
            </div>
        </>
    )
}