import React, { useState } from "react";
import { connect } from "react-redux";
import { Drawer } from "antd";
import PanelMenu from "../panal/PanelMenu";
import PanelCartMobile from "../panel/PanelCartMobile";
import PanelSearch from "../panel/PanelSearch";
import PanelCategories from "../panel/PanelCategories";

const NavigationList = (props) => {
  const [menuDrawer, setMenuDrawer] = useState(false);
  const [cartDrawer, setCartDrawer] = useState(false);
  const [searchDrawer, setSearchDrawer] = useState(false);
  const [categoriesDrawer, setCategoriesDrawer] = useState(false);

  const handleDrawerClose = () => {
    setMenuDrawer(false);
    setCartDrawer(false);
    setSearchDrawer(false);
    setCategoriesDrawer(false);
  };

  const handleShowMenuDrawer = () => {
    setMenuDrawer(!menuDrawer);
    setCartDrawer(false);
    setSearchDrawer(false);
    setCategoriesDrawer(false);
  };

  const handleShowCartDrawer = () => {
    setMenuDrawer(false);
    setCartDrawer(!cartDrawer);
    setSearchDrawer(false);
    setCategoriesDrawer(false);
  };

  const handleShowSearchDrawer = () => {
    setMenuDrawer(false);
    setCartDrawer(false);
    setSearchDrawer(!searchDrawer);
    setCategoriesDrawer(false);
  };

  const handleShowCategoriesDrawer = () => {
    setMenuDrawer(false);
    setCartDrawer(false);
    setSearchDrawer(false);
    setCategoriesDrawer(!categoriesDrawer);
  };

  return (
    <div className="navigation--list">
      <Drawer
        className="ps-panel--mobile"
        placement="right"
        closable={false}
        onClose={handleDrawerClose}
        visible={menuDrawer}
      >
        <PanelMenu />
      </Drawer>
      <Drawer
        className="ps-panel--mobile"
        placement="right"
        closable={false}
        onClose={handleDrawerClose}
        visible={cartDrawer}
      >
        <PanelCartMobile />
      </Drawer>
      <Drawer
        className="ps-panel--mobile"
        placement="right"
        closable={false}
        onClose={handleDrawerClose}
        visible={searchDrawer}
      >
        <PanelSearch />
      </Drawer>
      <Drawer
        className="ps-panel--mobile"
        placement="right"
        closable={false}
        onClose={handleDrawerClose}
        visible={categoriesDrawer}
      >
        <PanelCategories />
      </Drawer>
      <div className="navigation__content">
        <a
          className={`navigation__item ${menuDrawer ? "active" : ""}`}
          onClick={handleShowMenuDrawer}
        >
          <i className="icon-menu"></i>
          <span> Menu</span>
        </a>
        <a
          className={`navigation__item ${categoriesDrawer ? "active" : ""}`}
          onClick={handleShowCategoriesDrawer}
        >
          <i className="icon-list4"></i>
          <span> Categories</span>
        </a>
        <a
          className={`navigation__item ${searchDrawer ? "active" : ""}`}
          onClick={handleShowSearchDrawer}
        >
          <i className="icon-magnifier"></i>
          <span> Search</span>
        </a>
        <a
          className={`navigation__item ${cartDrawer ? "active" : ""}`}
          onClick={handleShowCartDrawer}
        >
          <i className="icon-bag2"></i>
          <span> Cart</span>
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.setting;
};

export default connect(mapStateToProps)(NavigationList);
