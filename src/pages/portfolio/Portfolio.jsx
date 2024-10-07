import { PortfolioList } from "./components/PortfolioList";
import { PortfolioListItem } from "./components/PortfolioListItem";

export function Portfolio() {
  return (
    <main>
      <section className="mt-[88px] px-8 tablet:mr-[98px] tablet:mt-14 tablet:px-0">
        <PortfolioList>
          <PortfolioListItem
            title="Seraph Station"
            date="September 2019"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-seraph.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-seraph.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-seraph.jpg')]"
          />
          <PortfolioListItem
            title="Eebox Building"
            date="August 2017"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-eebox.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-eebox.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-eebox.jpg')]"
          />
          <PortfolioListItem
            title="Federal II Tower"
            date="March 2017"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-federal.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-federal.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-federal.jpg')]"
          />

          <PortfolioListItem
            title="Project Del Sol"
            date="January 2016"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-del-sol.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-del-sol.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-del-sol.jpg')]"
          />
          <PortfolioListItem
            title="Le Prototype"
            date="October 2015"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-prototype.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-prototype.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-prototype.jpg')]"
          />
          <PortfolioListItem
            title="228B Tower"
            date="April 2015"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-228b.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-228b.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-228b.jpg')]"
          />
          <PortfolioListItem
            title="Grand Edelweiss Hotel"
            date="December 2013"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-edelweiss.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-edelweiss.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-edelweiss.jpg')]"
          />
          <PortfolioListItem
            title="Netcry Tower"
            date="August 2012"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-netcry.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-netcry.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-netcry.jpg')]"
          />
          <PortfolioListItem
            title="Hypers"
            date="January 2012"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-hypers.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-hypers.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-hypers.jpg')]"
          />
          <PortfolioListItem
            title="SXIV Tower"
            date="March 2011"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-sxiv.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-sxiv.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-sxiv.jpg')]"
          />
          <PortfolioListItem
            title="Trinity Bank Tower"
            date="September 2010"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-trinity.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-trinity.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-trinity.jpg')]"
          />
          <PortfolioListItem
            title="Project Paramour"
            date="February 2008"
            backgroundImage="bg-[url('/assets/portfolio/mobile/image-paramour.jpg')] tablet:bg-[url('/assets/portfolio/tablet/image-paramour.jpg')] desktop:bg-[url('/assets/portfolio/desktop/image-paramour.jpg')]"
          />
        </PortfolioList>
      </section>
    </main>
  );
}
