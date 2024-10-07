export function PortfolioListItem({ title, date, backgroundImage }) {
  return (
    <li
      className={`relative z-[1] bg-cover bg-no-repeat pb-[23px] pl-6 pt-[153px] after:absolute after:inset-0 after:bg-black/30 tablet:pb-[39px] tablet:pl-10 tablet:pt-[137px] desktop:pb-[39px] desktop:pl-10 desktop:pt-[457px] cursor-pointer ${backgroundImage}`}
    >
      <h3 className="relative z-[2] text-lg text-white">{title}</h3>
      <p className="relative z-[2] text-base text-white/75">{date}</p>
    </li>
  );
}
