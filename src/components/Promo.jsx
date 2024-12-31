import React from "react";
import styled from "styled-components";
import banner1 from "../assets/promotionbanner1.png";
import banner2 from "../assets/promotionbanner2.png";

const BannerWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const Banner = styled.img`
  width: 100vw;
`;

const Promo = () => {
  return (
    <BannerWrapper className="promo">
      <Banner src={banner1} alt="banner1" />
      <Banner src={banner2} alt="banner2" />
    </BannerWrapper>
  );
};

export default Promo;
