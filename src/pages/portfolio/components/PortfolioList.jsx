export function PortfolioList({ children }) {
  return (
    <ul className="mb-6 mt-[43px] flex flex-col gap-6 tablet:col-span-2 tablet:mb-0 tablet:mt-[85px] desktop:mt-16 desktop:grid desktop:grid-cols-3">
      {children}
    </ul>
  );
}
