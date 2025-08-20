"use client";
import Video from "@/public/Forest.mp4";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function WelcomeHome() {
  const container = document.querySelector("#nav_links");
  function ActiveLink() {
    const [activeLink, setActiveLink] = useState();

    useEffect(() => {});
  }

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
        <div
          className="fixed top-28 left-20 flex flex-col w-56 text-white z-30 gap-2"
          id="nav_links"
        >
          <Link href="#Introduction">
            <button>Introduction</button>
          </Link>
          <Link href="#WhatWentRight">
            <button>What went right</button>
          </Link>
          <Link href="#WhatWentWrong">
            <button>What went wrong</button>
          </Link>
          <Link href="#SummaryTakeaways">
            <button>Summary & Takeaways</button>
          </Link>
          <Link href="#WhatILearned">
            <button>What I learned</button>
          </Link>
        </div>
        <div
          className="text-white  flex flex-col *:self-start absolute top-28 left-0 w-full h-full px-[600px] gap-3 
                [&_h1]:text-7xl [&_h1]:font-bold [&_h2]:text-4xl [&_h2]:font-semibold [&_h3]:text-2xl [&_h3]:font-normal [&_p]:font-extralight [&_h4]:text-xl [&_h4]:font-lights
  [&_h3]:mt-[-60px] [&_h3]:pt-[60px]"
        >
          <h1>Welcome Home</h1>
          <h2 id="Introduction">Tech Lead's Postmortem</h2>
          <h3>Introduction</h3>
          <hr className="w-full" />
          <p>
            As Tech Lead for this project, my primary responsibility was
            overseeing the technical development and ensuring coordination
            between the programming team and design team. This report aims to
            provide a structured postmortem analysis of my contributions and
            experiences during the period of this project regarding my role. The
            game we developed was a PS1-styled horror game inspired by the movie
            Midsommar, whereas in our game a close friend invites the
            protagonist to a community in the woods. The people there treat them
            well, whereas the reality of the situation becomes more dire the
            longer the player stays. They learn the truth about this peculiar
            community by collecting clues and interacting with members of this
            village which progresses the story, and finally unearthing their
            true intentions and secrets. Our team aimed to create an immersive
            environment with a focus on the narrative, which is driven around
            giving the player clues hidden throughout the game and designing the
            experience to reward the player for their curiosity and taking the
            less obvious options.
            <br />
            <br />
            My role consisted primarily of technical decision-making and
            maintaining tools and processes that enabled the team’s
            productivity, allowing the programmers to focus on implementing
            features by having a streamlined workflow cycle. I have encountered
            numerous moments where the frameworks and technical aspects that I
            have tried to contribute to our project made a positive impact, but
            of course with that come times where the consequences were either
            instantaneous or only became apparent further down the development
            road.
          </p>
          <h3 id="WhatWentRight">What went right</h3>
          <hr className="w-full" />
          <p>
            One of the key successes I experienced was implementing a reliable
            production pipeline. This included setting up version control using
            Git and GitHub, using GitHub actions for automating builds, and
            using Kanban boards in GitHub projects to keep an overview of
            features and bugs that needed to be dealt with.
          </p>
          <Image
            className="my-4"
            src="/WelcomeHome_1.png"
            alt=""
            width={2000}
            height={0}
          />
          <p>
            These tools minimized conflicts by having concise issues that
            specified requirements for a task, minimizing the risk of
            misinterpreting each other and creating excess work. This also
            improved workflow efficiency by automation in how the repository is
            structured, all of which ensured a smooth iteration cycle.
          </p>
          <h4>Unity Workflow</h4>
          <p>
            When working with Unity, my initial goal was to guide the team in
            using prefabs, which proved to be essential in preventing conflicts
            and maintaining project consistency. This began by defining naming
            conventions and a folder structure for the project in general but
            also for prefabs, ensuring they are organized logically. In our
            game, we had a lot of NPCs that all shared general characteristics
            and some had specific behaviors. This was circumvented by using
            prefab variants to handle differences between similar objects,
            avoiding duplication of code and wasted hours of work.
          </p>
          <h4>GitHub Guideline</h4>
          <p>
            To ensure consistency in GitHub, I established clear guidelines for
            branch naming, commit messages, and pull request practices. For
            example, I adopted a naming convention for branches that reflected
            the specific issue that was being worked on, which GitHub could
            leverage by creating a branch directly out from an issue. I also
            enforced descriptive, atomic commit messages that follow a
            consistent format (e.g., Add new animation system). Use code review
            requirements before allowing a pull request to go through, thus
            enforcing standards, and catching inconsistencies before merging.
            Additionally, I included a README.md file that outlines the coding
            conventions, repository structure, and workflow expectations,
            creating a unified framework for collaboration that all team members
            could access and adhere to.
          </p>
          <h4>Issue Templates</h4>
          <p>
            GitHub issue templates have been a powerful tool for streamlining
            communication and task management in our game development process.
            They ensured clarity by providing structured fields to describe
            tasks, such as an overview, user story, and acceptance criteria.
            This reduces ambiguity, enabling all team members, both designers
            and developers to understand the task requirements clearly.
            <br />
            Using templates has fostered a smoother collaboration in our team,
            especially in teams such as ours with diverse roles and different
            levels of experience in games. Standardized formats such as these
            help integrate technical and non-technical workflows, as seen
            supported by the GitHub guidelines and task management practices
            detailed in our GitHub Repository.
            <br />
            <br />
            An example scenario could, for instance, be if the development team
            is tasked with implementing a double-jump feature for the game, the
            issue template used correctly would look like this:
          </p>
          <ol className="list-disc [&_li]:font-extralight ml-5 *:my-1">
            <li>Title: Add Double-Jump Mechanic</li>
            <li>
              Overview: Enable the player to jump a second time while in the
              air.
            </li>
            <li>
              User Story: As a player, I want to jump twice so I can navigate
              complex levels.
            </li>
            <li>Acceptance Criteria:</li>
            <ol className="list-['-_'] *:ml-8">
              <li>Player leaves the ground upon pressing the jump button.</li>
              <li>
                A second jump is triggered if the jump button is pressed
                mid-air.
              </li>
              <li>The player can only double-jump once before landing.</li>
            </ol>
            <li>
              Full task description: Pictures, relevant material, or more text.
            </li>
          </ol>
          <h4>Game Build and Distribution</h4>
          <p>
            Game Builds were created when a pull request was merged with the
            state of the game, enabling the UX lead to easily acquire the newest
            version of our game for testing and feedback purposes.
          </p>
          <Image
            className="my-4"
            src="/WelcomeHome_2.png"
            alt=""
            width={2000}
            height={0}
          />
          <p>
            Packaging and distributing the game for the target platform (e.g.,
            PC) was a smooth process thanks to a robust CI/CD setup which was
            also supported by having an automatic semantic versioning tagger
            that affected how releases were named and made, giving the
            possibility to revert if irreversible events were to happen to the
            game.
          </p>
          <h3 id="WhatWentWrong">What went wrong</h3>
          <hr className="w-full" />
          <h4>Guidelines Misaligned with Project Workflow</h4>
          <p>
            While establishing guidelines is crucial for maintaining project
            coherence, the ones implemented were not fully aligned with our
            team’s actual workflow. For instance, our workflow for versioning
            the game did not align with the guidelines that I found online. This
            misalignment arose because the guidelines I found were generally for
            software management and did not match with a small-scale game
            development life cycle as ours, this should also have been discussed
            and considered using input from all team members, highlighting a
            lack of early collaboration during the planning phase.
          </p>
          <h4>Lack of Enforcement on Conventions</h4>
          <p>
            Even when guidelines were in place, there was insufficient
            enforcement of these conventions. Team members occasionally ignored
            branch naming rules or made undocumented changes to shared assets,
            such as scripts and scene layouts in Unity.
          </p>
          <Image
            className="my-4"
            src="/WelcomeHome_3.png"
            alt=""
            width={2000}
            height={0}
          />
          <p>
            This escalated slowly throughout the project, causing these
            deviations to accumulate, leading to merge conflicts and a lack of
            cohesion in the project’s structure. This inconsistency created
            bottlenecks during integration phases, costing valuable time in the
            later part of the project. When reflecting on the experience, I
            realize that I should voice my concerns more clearly and be brave to
            take action when I notice the moments these things occur, to ensure
            that everybody stays on the same page.
          </p>
          <h4>Delayed Integration of Design Team</h4>
          <p>
            The design team’s involvement in the GitHub workflow was initiated
            later in the project, which caused significant disruptions in
            development. Early stages lacked coordination between the design and
            technical teams, resulting in implications in how to use Git when
            pushing changes to the project, GitHub when managing branches and
            avoiding bad branching, and Unity when using the editor and
            resources that the programmers have created. This could be easily
            avoided by getting the designers properly integrated into the
            workflow, perhaps in the way of doing a workshop on how to use these
            tools.
          </p>
          <h3 id="SummaryTakeaways">Summary & Takeaways</h3>
          <hr className="w-full" />
          <p>
            As the Tech Lead, my role centered on managing the project’s
            technical direction, ensuring streamlined workflows, and enabling
            collaboration between programming and design teams. Key
            accomplishments included setting up an effective production
            pipeline, establishing structured Unity workflows, enforcing GitHub
            practices, and implementing an automated build process for easy
            distribution and packaging for the game. These efforts facilitated
            consistent progress and efficient task management. However,
            challenges such as misaligned 5 guidelines, inconsistent adherence
            to conventions, and delayed onboarding of the design team members
            highlighted areas for improvement in team coordination and process
            enforcement.
            <br />
            <br />
            This project underscored the critical need for aligning technical
            practices with the team’s workflows and project scope. The
            importance of early collaboration and training, particularly for
            integrating team members who were not familiar with Unity and
            GitHub, became evident. Effective enforcement of standards and
            proactive communication were essential for maintaining cohesion
            throughout our development, even when it became hard to balance
            between room for fun and staying focused on the tasks at hand. I
            strived to become a good Tech Lead who balances adaptability and
            structure, attempting to ensure that the technical solutions I came
            up with would support both the team’s needs and the project’s goals.
          </p>
          <h3 id="WhatILearned">What I learned</h3>
          <hr className="w-full" />
          <p>
            Serving as Tech Lead for this project provided invaluable insights
            into the dynamics of technical leadership within a collaborative
            game development environment. My role started out being unfamiliar
            to me and some of the resources given to me from the course didn’t
            give me all the answers I sought. Still, throughout the project I
            learned that it required balancing technical execution with team
            coordination, ensuring that workflows supported efficient progress
            while fostering collaboration between members of the team. Through
            trying to implement a production pipeline, defining some Unity
            standards, and trying to enforce GitHub practices, I was able to
            create a decent development process and maintain a certain level of
            consistency across the project, not to mention all the valuable
            insights I’ve gained along the way.
            <br />
            <br />
            This experience also illuminated areas for future growth. I entered
            this project without much prior knowledge of how to collaborate in a
            cross-functional team, this also includes the different processes
            that usually occur in game development which we have been taught but
            never worked with in practice before. When looking back I realize
            that having an understanding of your role is necessary, but knowing
            the inner workings of the other roles that consist in the game
            development team can lead to a clearer insight into the strengths
            and weaknesses of each specific team, making it easier to steer a
            team to success and avoiding unnecessary bumps along the way.
          </p>
        </div>
      </div>
    </>
  );
}
