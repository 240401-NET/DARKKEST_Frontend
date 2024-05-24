import React from 'react';
import communityPic from '../assets/communityPic.jpeg'; // Adjust the path if necessary
import ActionButton from '../shared/ActionButton';
import { SelectedAuthForm } from '../shared/types';
import { useNavigate } from 'react-router-dom';

type Props = {
  setSelectedAuthForm: (value: SelectedAuthForm) => void;
};

const Hero = ({ setSelectedAuthForm }: Props) => {
  const navigate = useNavigate();

  const handleSelectLogin = () => {
    setSelectedAuthForm(SelectedAuthForm.Login);
    navigate('/auth');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col gap-0 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* Top half with an image */}
      <div
        className="h-2/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${communityPic})` }}
      >
        {/* You can add additional content here if needed */}
      </div>

      {/* Bottom half split into two vertical halves */}
      <div className="h-3/5 flex">
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          {/* Left content */}
          <div
            className="text-left text-6xl font-bold leading-tight"
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
          >
            <p>Connecting</p>
            <p>Communities Through</p>
            <p>Volunteering</p>
            <p>Opportunities</p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center bg-gray-200">
          {/* Right content */}
          <div className="text-center px-8">
            <p
              className="text-3xl"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 100 }}
            >
              Discover meaningful ways to give back and make a difference in
              your community.
            </p>
            <div className="mt-8 flex space-x-4 justify-center">
              <button
                onClick={handleSelectLogin}
                className="rounded-md bg-white border border-secondary-green px-10 py-2 text-secondary-green hover:bg-secondary-green hover:text-white transition duration-500"
              >
                Sign In
              </button>
              <ActionButton setSelectedAuthForm={setSelectedAuthForm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
