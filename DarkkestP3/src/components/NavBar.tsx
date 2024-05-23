import { useState } from "react";
import NavBarLogo from "../assets/NavBarLogo.png";
import { SelectedAuthForm, SelectedPage } from "../shared/types";
import useMediaQuery from "../hooks/useMediaQuery";
import NoUserNav from "./NoUserNav";
import { useAuth } from "../context/AuthContext";
import YesUserNav from "./YesUserNav";
type Props = {
  selectedPage: SelectedPage;
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
  setSelectedAuthForm: (value: SelectedAuthForm) => void;
  
};

const NavBar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  setSelectedAuthForm,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const { user } = useAuth();
  const navBarBackground = "bg-third-green";

  return (
    <nav>
      <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 shadow-md`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT HAND LOGO */}
            <img alt="logo" src={NavBarLogo} />

            {/* RIGHT HAND SIDE */}

            {user ? (
              <YesUserNav
                isAboveMediumScreens={isAboveMediumScreens}
                setIsMenuToggled={setIsMenuToggled}
                isMenuToggled={isMenuToggled}
              />
            ) : (
              <NoUserNav
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                setSelectedAuthForm={setSelectedAuthForm}
                isAboveMediumScreens={isAboveMediumScreens}
                setIsMenuToggled={setIsMenuToggled}
                isMenuToggled={isMenuToggled}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
