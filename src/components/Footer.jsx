export default function Footer() {
  return (
    <footer className="h-[150px] text-3xl w-full  bg-black flex flex-col gap-4 items-center justify-center text-white relative bottom-0">
      <h1 className="text-center 2xl:text-5xl">
        Site made by Chris Karampagias
      </h1>
      <div className="flex gap-20 ">
        <a
          className="hover:scale-105"
          href="https://github.com/"
          target="__blank"
        >
          <i className="devicon-github-original-wordmark text-5xl 2xl:text-7xl cursor-pointer"></i>
        </a>
        <a
          className="hover:scale-105"
          href="https://www.linkedin.com/in/chris-karampagias"
          target="__blank"
        >
          <i className="devicon-linkedin-plain text-5xl 2xl:text-7xl cursor-pointer"></i>
        </a>
      </div>
    </footer>
  );
}
