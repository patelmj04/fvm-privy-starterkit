"use client";

type cardProps = {
  heading: string;
  cta: string;
  onClick_?: () => void;
  disabled?: boolean;
};

const Card = ({ heading, cta, onClick_, disabled }: cardProps) => {
  if (disabled) {
  }
  return (
    <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-300 w-[500px]">
      <div className="px-2 py-8 sm:p-10 sm:pb-6">
        <div className="items-center w-full justify-center grid grid-cols-1 text-center">
          <div>
            <h2 className="text-black font-bold text-lg lg:text-3xl">
              {heading}
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 cursor-pointer justify-between pb-8 space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2">
            <button onClick={onClick_} disabled={disabled}>
                {cta}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
