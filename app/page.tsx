import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-700">
      {/* Full-width Header with centered content */}
      <header className="w-full bg-gray-800">
        <div className="container mx-auto px-8">
          <Header />
        </div>
      </header>

      {/* Main Section with 'Hire Me' Content */}
      <main className="flex-grow bg-gray-200 p-4">
        <div className="container mx-auto">
          <div className="relative">
            <div className="border-8 rounded border-red-700 outline-offset-4 border-spacing-36 p-8 bg-orange-100">
              <div className="container mx-auto px-8 py-16 bg-orange-100 text-center border-8 rounded border-sky-700">
                <div className="flex justify-center">
                  <Image
                    src="/IndyYou.png"
                    alt="Hire Me"
                    className="animate-fadeIn"
                    width={500}
                    height={1080}
                  />
                </div>
                <h1 className="flex outlined-text-red flex justify-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                  I WANT
                  <p className="whitespace-pre text-red-800 outlined-text-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"> YOU</p>
                </h1>
                <h2 className="outlined-text-red text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">TO HIRE ME!</h2>


                {/* Snippets Section */}
                <section className="container mx-auto px-8 py-16">
                  <div className="flex flex-col space-y-16">
                    {/* Snippet 1 */}
                    <div className="flex flex-col md:flex-row items-center">
                      <Image
                        src="/snippet-image-1.png"
                        alt="Snippet 1 Image"
                        width={400}
                        height={300}
                        className="md:mr-8 mb-8 md:mb-0"
                      />
                      <p className="text-xl md:text-2xl text-white">
                        I am a passionate software engineer with a strong interest in coding, particularly in algorithms and web development. I am constantly striving to improve my skills and learn new technologies.
                      </p>
                    </div>
                    {/* Snippet 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center">
                      <Image
                        src="/snippet-image-2.png"
                        alt="Snippet 2 Image"
                        width={400}
                        height={300}
                        className="md:ml-8 mb-8 md:mb-0"
                      />
                      <p className="text-xl md:text-2xl text-white">
                        In addition to my love for coding, I enjoy various hobbies such as biking, video games, and creating animations. These activities fuel my creativity and inspire my work in technology.
                      </p>
                    </div>
                    {/* Snippet 3 */}
                    <div className="flex flex-col md:flex-row items-center">
                      <Image
                        src="/snippet-image-3.png"
                        alt="Snippet 3 Image"
                        width={400}
                        height={300}
                        className="md:mr-8 mb-8 md:mb-0"
                      />
                      <p className="text-xl md:text-2xl text-white">
                        My goal is to leverage my skills and interests to develop innovative solutions and contribute to exciting projects. I'm eager to collaborate and make a positive impact in the tech industry.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Projects Section */}
            <section className="bg-gray-800 py-16">
              <div className="container mx-auto px-8">
                <h2 className="text-4xl text-white text-center mb-12">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Project 1 */}
                  <div className="bg-slate-600 p-8 rounded-lg text-center">
                    <h3 className="text-2xl text-white mb-4">Project One</h3>
                    <p className="text-white mb-6">
                      A description of your first project. What it does, the technologies used, and your role in it.
                    </p>
                    <a
                      href="https://github.com/yourusername/project-one"
                      className="text-red-600 underline"
                    >
                      View on GitHub
                    </a>
                  </div>
                  {/* Project 2 */}
                  <div className="bg-slate-600 p-8 rounded-lg text-center">
                    <h3 className="text-2xl text-white mb-4">Project Two</h3>
                    <p className="text-white mb-6">
                      A description of your second project. Highlight the key features, the stack used, and any challenges you overcame.
                    </p>
                    <a
                      href="https://github.com/yourusername/project-two"
                      className="text-red-600 underline"
                    >
                      View on GitHub
                    </a>
                  </div>
                  {/* Project 3 */}
                  <div className="bg-slate-600 p-8 rounded-lg text-center">
                    <h3 className="text-2xl text-white mb-4">Project Three</h3>
                    <p className="text-white mb-6">
                      A description of your third project. Focus on what makes it unique and your contributions.
                    </p>
                    <a
                      href="https://github.com/yourusername/project-three"
                      className="text-red-600 underline"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}



{/*<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing Lunge for the officers gun&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
      */}