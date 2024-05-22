import React, { useState } from 'react';
import Registration from '../components/Registration';
import Login from '../components/Login';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('register');

  const handleTabClick = (tab : string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => handleTabClick('register')} className={activeTab === 'register' ? 'active' : ''}>Register</button>
        <button onClick={() => handleTabClick('login')} className={activeTab === 'login' ? 'active' : ''}>Login</button>
      </div>
      <div className="tab-content">
        {activeTab === 'register' && <Registration />}
        {activeTab === 'login' && <Login />}
      </div>
    </div>
  );
};

export default AuthPage;
