import Image from "next/image";
import closeIcon from "@/images/close.svg";
import { BannerProps } from "./banner";

type CloseBannerButtonProps = Pick<BannerProps, "onClose">;

const CloseBannerButton: React.FC<CloseBannerButtonProps> = ({ onClose }) => {
  return (
    <button className="close-banner" onClick={onClose}>
      <Image src={closeIcon} alt="Close banner" />
    </button>
  );
};

export default CloseBannerButton;
