import { useNavigate } from 'react-router-dom';
import SmoothScrollLink from './SmoothScrollLink';
import { SelectedAuthForm, SelectedPage } from '../shared/types';
import ActionButton from '../shared/ActionButton';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

type NoUserNavProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setSelectedAuthForm: (value: SelectedAuthForm) => void;
  isAboveMediumScreens: boolean;
  setIsMenuToggled: (value: boolean) => void;
  isMenuToggled: boolean;
};

const NoUserNav = ({
  selectedPage,
  setSelectedPage,
  setSelectedAuthForm,
  isAboveMediumScreens,
  setIsMenuToggled,
  isMenuToggled,
}: NoUserNavProps) => {
  const flexBetween = "flex items-center justify-between";
  const navigate = useNavigate();

  const navigateToLoginForm = () => {
    setSelectedAuthForm(SelectedAuthForm.Login);
    navigate("/auth");
  };

  return (
    <>
      {isAboveMediumScreens ? (
        <div className={`${flexBetween} w-full`}>
          {/* MIDDLE LINKS */}
          <div className={`${flexBetween} gap-8 text-sm`}>
            <SmoothScrollLink page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <SmoothScrollLink page="Discover" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <SmoothScrollLink page="Volunteer" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <SmoothScrollLink page="Donate" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>

          {/* RIGHT HAND BUTTONS */}
          <div className={`${flexBetween} gap-8`}>
            <button className="text-md hover:underline" onClick={navigateToLoginForm}>
              Sign In
            </button>
            <ActionButton setSelectedAuthForm={setSelectedAuthForm}/>
          </div>
        </div>
      ) : (
        <button className="rounded-full bg-primary-green p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
      )}

      {/*Mobile Menu Modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-third-green">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <SmoothScrollLink page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <SmoothScrollLink page="Discover" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <SmoothScrollLink page="Volunteer" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <SmoothScrollLink page="Donate" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </>
  );
};

export default NoUserNav;
