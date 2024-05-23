import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  JobTitle: string;
  Description: string;
  setJobTitleState: (value: string) => void;
  setDescriptionState: (value: string) => void;
}

const OpportunityFormModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  JobTitle,
  Description,
  setJobTitleState,
  setDescriptionState,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-1/2 relative">
        <button className="absolute top-4 right-4 text-black" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={onSubmit}>
          <label
            className="block text-left mb-2"
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }}
          >
            Job Title:
            <input
              type="text"
              value={JobTitle}
              onChange={(e) => setJobTitleState(e.target.value)}
              className="border rounded p-2 w-full mt-1"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300 }}
            />
          </label>
          <label
            className="block text-left mb-2"
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }}
          >
            Description:
            <textarea
              value={Description}
              onChange={(e) => setDescriptionState(e.target.value)}
              className="border rounded p-2 w-full mt-1"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 300 }}
            />
          </label>
          <button
            type="submit"
            className="bg-primary-green text-white font-bold py-2 px-4 rounded mt-4"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpportunityFormModal;
