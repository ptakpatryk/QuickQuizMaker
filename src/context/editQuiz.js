import React, { useContext, useState } from 'react';

const EditQuiz = React.createContext();

const editQuizProvider = ({ children }) => {
  return <EditQuiz.Provider value={}>{children}</EditQuiz.Provider>;
};

export default editQuizProvider;

export const useEditQuiz = () => useContext(EditQuiz);
