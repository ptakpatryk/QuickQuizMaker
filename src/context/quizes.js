import React, { useState, useContext, useCallback } from 'react';
import axios from 'axios';

const QuizesContext = React.createContext([]);

const QuizesProvider = (props) => {
  const [quizes, setQuizes] = useState([]);
  const [quizesState, setQuizesState] = useState({
    loading: false,
    error: false,
    errorMsg: '',
  });

  const API_URL = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const fetchQuizes = useCallback(
    (onlyUser) => {
      // Init fetch
      setQuizesState((oldState) => ({
        ...oldState,
        loading: true,
      }));
      let fetchString = `${API_URL}quizes.json`;
      if (onlyUser) {
        fetchString += `?&orderBy="userId"&equalTo="${userId}"`;
      }
      axios
        .get(fetchString)
        .then((response) => {
          const responseData = [];
          Object.entries(response.data).map((el) => {
            responseData.push({ ...el[1], serverId: el[0] });
            return undefined;
          });
          // Finish loading
          setQuizesState((oldState) => ({
            ...oldState,
            loading: false,
          }));
          // Update fetched quizes
          setQuizes(responseData);
          return undefined;
        })
        .catch((err) => {
          // Add error to state
          setQuizesState({
            error: true,
            errorMsg: err.response.data.error,
            loading: false,
          });
        });
    },
    [API_URL, userId, setQuizesState],
  );

  const fetchSingleQuiz = (id) => {
    // Init fetch
    setQuizesState({
      ...quizesState,
      loading: true,
    });
    axios
      .get(`${API_URL}quizes.json?&orderBy="id"&equalTo="${id}"`)
      .then((res) => {
        // Finish loading
        setQuizesState({
          ...quizesState,
          loading: false,
        });
        // Set single quiz in state
        setQuizes(Object.values(res.data));
      })
      .catch((err) => {
        // Add error to state
        setQuizesState({
          error: true,
          errorMsg: err.response.data.error,
          loading: false,
        });
      });
  };

  const postQuiz = (quiz) => {
    const data = {
      ...quiz,
      userId,
    };
    axios
      .post(`${API_URL}/quizes.json?auth=${token}`, data)
      .then(() => {
        fetchQuizes();
      })
      .catch((err) => {
        // Add error to state
        setQuizesState({
          error: true,
          errorMsg: err.response.data.error,
          loading: false,
        });
      });
  };

  const removeQuiz = (serverId, fetchOnlyUser) => {
    axios
      .delete(`${API_URL}quizes/${serverId}.json?auth=${token}`)
      .then(() => fetchQuizes(fetchOnlyUser))
      .catch((err) => {
        // Add error to state
        setQuizesState({
          error: true,
          errorMsg: err.response.data.error,
          loading: false,
        });
      });
  };

  const clearError = () => {
    setQuizesState({
      error: false,
      errorMsg: '',
      loading: false,
    });
  };
  return (
    <QuizesContext.Provider
      value={{
        quizesState,
        quizes,
        postQuiz,
        fetchQuizes,
        fetchSingleQuiz,
        removeQuiz,
        clearError,
      }}
      {...props}
    />
  );
};

export default QuizesProvider;

export const useQuizes = () => useContext(QuizesContext);
