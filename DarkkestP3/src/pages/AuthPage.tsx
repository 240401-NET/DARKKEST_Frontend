import React from "react";
import Registration from "../components/Registration";
import Login from "../components/Login";
import { SelectedAuthForm } from "../shared/types";

type AuthPageProps = {
  selectedAuthForm: SelectedAuthForm;
  setSelectedAuthForm: (value: SelectedAuthForm) => void;
}

const AuthPage = ({ selectedAuthForm, setSelectedAuthForm }: AuthPageProps) => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-primary-white">
      {selectedAuthForm === SelectedAuthForm.Login ? (
        <Login setSelectedAuthForm={setSelectedAuthForm} />
      ) : (
        <Registration setSelectedAuthForm={setSelectedAuthForm} />
      )}
    </section>
  );
};

export default AuthPage;
