export function PortfolioList({ children }) {
  return (
    <ul className="flex flex-col gap-6 tablet:col-span-2 desktop:grid desktop:grid-cols-3">
      {children}
    </ul>
  );
}
