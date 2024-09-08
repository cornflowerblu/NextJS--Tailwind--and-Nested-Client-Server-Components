const Banner = () => {
  return (
    <main>
      <section className="w-fit lg:w-full h-16 px-8 py-4 bg-[#605dec] justify-start items-center gap-2.5 inline-flex">
        <p className="grow shrink basis-0 text-center text-[#f6f5fd] text-lg font-semibold font-['Nunito Sans']">
          Join Tripma today and save up to 20% on your flight using code TRAVEL
          at checkout. Promotion valid for new users only.
        </p>
        <div className="w-8 h-8 relative" />
      </section>
    </main>
  );
};

export default Banner;
