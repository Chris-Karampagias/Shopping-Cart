export default function Footer() {
  return (
    <footer className="h-[100px] text-3xl w-full bg-black flex flex-col gap-2 items-center text-white absolute bottom-0">
      <h1>Site made by Chris Karampagias</h1>
      <div className="flex gap-20">
        <a
          className="hover:scale-105"
          href="https://github.com/"
          target="__blank"
        >
          <i className="devicon-github-original-wordmark text-5xl cursor-pointer"></i>
        </a>
        <a
          className="hover:scale-105"
          href="https://www.linkedin.com/in/chris-karampagias"
          target="__blank"
        >
          <i className="devicon-linkedin-plain text-5xl cursor-pointer"></i>
        </a>
      </div>
    </footer>
  );
}
