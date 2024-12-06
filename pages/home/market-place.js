import React from "react";
import "../../scss/market-place-1.scss";

import DefaultLayout from "../../component/layout/DefaultLayout";
import FooterDefault from "../../component/shared/footer/footerDefault";
import HeaderMobile from "../../component/shared/headers/HeaderMobile";
import NavigationList from "../../components/shared/navigation/NavigationList";
import Newsletters from "../../component/partials/commons/Newletters";
// import MarketPlaceProductBox from "../../components/partials/homepage/marketplace/MarketPlaceProductBox";
import MarketPlacePromotion from "../../components/partials/homepage/marketplace/MarketPlacePromotions";
import MarketPlaceDealOfDay from "../../components/partials/homepage/marketplace/MarketPlaceDealOfDay";
import MarketPlaceSiteFeatures from "../../components/partials/homepage/marketplace/MarketPlaceSiteFeatures";
import MarketPlaceHomeBanner from "../../components/partials/homepage/marketplace/MartketPlaceHomeBanner";
import MarketPlacePromotionHeader from "../../components/partials/homepage/marketplace/MarketPlacePromotionHeader";
import HeaderMarketPlace from "../../components/shared/headers/HeaderMarketPlace";
import SubscribePopup from "../../components/shared/SubscribePopup";

const HomeMarketPlacePage = () => {
  return (
    <div className="site-content">
      <MarketPlacePromotionHeader />
      <HeaderMarketPlace />
      <HeaderMobile />
      <NavigationList />
      <SubscribePopup />
      <main id="homepage-3">
        <MarketPlaceHomeBanner />
        <MarketPlaceSiteFeatures />
        <MarketPlacePromotion />
        <MarketPlaceDealOfDay />
        {/* <MarketPlaceProductBox /> */}
        <Newsletters />
      </main>
      <FooterDefault />
    </div>
  );
};

// This will wrap the page with DefaultLayout when it's rendered
HomeMarketPlacePage.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default HomeMarketPlacePage;
