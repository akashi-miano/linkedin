import { FaCircleInfo } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";
const Widgets = () => {
  return (
    <section className="shadow-md rounded-lg p-4  mx-auto widgets min-w-[215px] max-h-[450px]">
      <div className="flow-content--m w-full">
        <header className="flex  items-center gap-2 mb-4">
          <h2 className="capitalize text-lg text-zinc-800 font-bold">
            linkedin news
          </h2>
          <FaCircleInfo size={20} />
        </header>
        <div className="widget">
          <header className="flex items-center gap-2">
            <FaCircle size={20} />
            <h3>Akashi is back</h3>
          </header>
          <p className="text-sm text-gray-400">Top news- 9099 readers</p>
        </div>
        <div className="widget">
          <header className="flex items-center gap-2">
            <FaCircle size={20} />
            <h3>Akashi is back</h3>
          </header>
          <p className="text-sm text-gray-400">Top news- 9099 readers</p>
        </div>
        <div className="widget">
          <header className="flex items-center gap-2">
            <FaCircle size={20} />
            <h3>Akashi is back</h3>
          </header>
          <p className="text-sm text-gray-400">Top news- 9099 readers</p>
        </div>
        <div className="widget">
          <header className="flex items-center gap-2">
            <FaCircle size={20} />
            <h3>Akashi is back</h3>
          </header>
          <p className="text-sm text-gray-400">Top news- 9099 readers</p>
        </div>
        <div className="widget">
          <header className="flex items-center gap-2">
            <FaCircle size={20} />
            <h3>Akashi is back</h3>
          </header>
          <p className="text-sm text-gray-400">Top news- 9099 readers</p>
        </div>
        <div className="widget">
          <header className="flex items-center gap-2">
            <FaCircle size={20} />
            <h3>Akashi is back</h3>
          </header>
          <p className="text-sm text-gray-400">Top news- 9099 readers</p>
        </div>
      </div>
    </section>
  );
};

export default Widgets;
