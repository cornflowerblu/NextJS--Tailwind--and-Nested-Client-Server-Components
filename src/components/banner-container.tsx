"use client";

import { useState } from "react";
import Banner from "@/components/banner";

const BannerContainer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return <>{isVisible && <Banner onClose={handleClose} />}</>;
};

export default BannerContainer;
