import React, { useState, useContext } from 'react';
import axios from 'axios';

const QuizesContext = React.createContext([]);

const QuizesProvider = (props) => {
  const [quizes, setQuizes] = useState([
    // {
    //   title: 'Your quiz title',
    //   description: 'Your quiz description',
    //   id: 'quizOneId',
    //   questions: [
    //     {
    //       type: 'multiple',
    //       question: 'Is this a multi question?',
    //       answers: [
    //         {
    //           value: 'multi answer 1',
    //           correct: false,
    //           id: 'ansOne',
    //         },
    //         {
    //           value: 'multi answer 2',
    //           correct: true,
    //           id: 'ansTwo',
    //         },
    //         {
    //           value: 'multi answer 3',
    //           correct: true,
    //           id: 'ansThree',
    //         },
    //         {
    //           value: 'multi answer 4',
    //           correct: false,
    //           id: 'ansFour',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'single',
    //       question: 'Do you like single questions?',
    //       answers: [
    //         {
    //           value: 'single answer 1',
    //           correct: false,
    //           id: 'ansOne',
    //         },
    //         {
    //           value: 'single answer 2',
    //           correct: true,
    //           id: 'ansTwo',
    //         },
    //         {
    //           value: 'single answer 3',
    //           correct: false,
    //           id: 'ansThree',
    //         },
    //         {
    //           value: 'single answer 4',
    //           correct: false,
    //           id: 'ansFour',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'number',
    //       question: 'How old are you?',
    //       answers: [{ correct: undefined, value: '26' }],
    //     },
    //     {
    //       type: 'boolean',
    //       question: 'Is it true or not?',
    //       answers: [{ correct: undefined, value: 'false' }],
    //     },
    //   ],
    // },
    // {
    //   title: 'Second quiz title',
    //   description:
    //     'Quite longer description than previous one to check how lines gonna break',
    //   id: 'quizTwoId',
    //   questions: [
    //     {
    //       type: 'mutliple',
    //       question: 'Is this a multi question?',
    //       answers: [
    //         { value: 'multi answer 1', correct: false },
    //         { value: 'multi answer 2', correct: true },
    //         { value: 'multi answer 3', correct: true },
    //         { value: 'multi answer 4', correct: false },
    //       ],
    //     },
    //     {
    //       type: 'single',
    //       question: 'Do you like single questions?',
    //       answers: [
    //         {
    //           value: 'single answer 1',
    //           correct: false,
    //         },
    //         { value: 'single answer 2', correct: true },
    //         {
    //           value: 'single answer 3',
    //           correct: false,
    //         },
    //         {
    //           value: 'single answer 4',
    //           correct: false,
    //         },
    //       ],
    //     },
    //     {
    //       type: 'number',
    //       question: 'How old are you?',
    //       answers: [{ correct: undefined, value: '26' }],
    //     },
    //     {
    //       type: 'boolean',
    //       question: 'Is it true or not?',
    //       answers: [{ correct: undefined, value: 'false' }],
    //     },
    //   ],
    // },
    // {
    //   title: 'General knowledge quiz',
    //   description: 'Some fancy, kinda descriptive text here',
    //   questions: [
    //     {
    //       type: 'single',
    //       question: 'What Colour are British squirrels?',
    //       answers: [
    //         {
    //           value: 'Black',
    //           correct: false,
    //           id: '-lj2apj5q',
    //         },
    //         {
    //           value: 'Red',
    //           correct: false,
    //           id: 'fTH9rUDiYL',
    //         },
    //         {
    //           value: 'Transparent',
    //           correct: false,
    //           id: 'IQIZjd0zjM',
    //         },
    //         {
    //           value: 'Grey',
    //           correct: true,
    //           id: 'Mq848-sFeI',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'multiple',
    //       question: 'Jaki język potrzebny jest frontendowcowi?',
    //       answers: [
    //         {
    //           value: 'HTML/CSS',
    //           correct: true,
    //           id: 'RIb4La8OB',
    //         },
    //         {
    //           value: 'JavaScript',
    //           correct: true,
    //           id: 'DQbAVhklqt',
    //         },
    //         {
    //           value: 'Python',
    //           correct: false,
    //           id: 'RNvTt-bFvi',
    //         },
    //         {
    //           value: 'Java',
    //           correct: false,
    //           id: '0ghFwc6A9O',
    //         },
    //         {
    //           value: 'C++',
    //           correct: false,
    //           id: 'htUcFSI7NK',
    //         },
    //         {
    //           value: 'Angielski',
    //           correct: true,
    //           id: 'kAkCRaC_6j',
    //         },
    //       ],
    //     },
    //     {
    //       type: 'number',
    //       question: 'Ile województw jest w Polsce?',
    //       answers: [{ value: '16', id: 'hp2e4W6oo' }],
    //     },
    //     {
    //       type: 'boolean',
    //       question: 'Czy stolicą Anglii jest Londyn?',
    //       answers: [
    //         {
    //           id: 'C8Zkm8byi',
    //           value: 'true',
    //           correct: undefined,
    //         },
    //       ],
    //     },
    //     {
    //       type: 'boolean',
    //       question: 'Czy stolicą Polski jest Kraków?',
    //       answers: [
    //         {
    //           value: 'false',
    //           correct: false,
    //           id: 'UxT_X5E9A',
    //         },
    //       ],
    //     },
    //   ],
    //   id: 'A6lvLd1QKw',
    // },
  ]);

  const API_URL = 'https://quickquizmaker.firebaseio.com/';

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const fetchQuizes = (onlyUser) => {
    let fetchString = `${API_URL}quizes.json`;
    if (onlyUser) {
      fetchString += `?&orderBy="userId"&equalTo="${userId}"`;
    }
    axios
      .get(fetchString)
      .then((response) => {
        console.log(Object.entries(response.data));
        const responseData = [];
        Object.entries(response.data).map((el) => {
          responseData.push({ ...el[1], serverId: el[0] });
        });
        setQuizes(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchSingleQuiz = (id) => {
    console.log(id);
    axios
      .get(`${API_URL}quizes.json?&orderBy="id"&equalTo="${id}"`)
      .then((res) => {
        setQuizes(Object.values(res.data));
      })
      .catch((err) => console.log(err));
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
        console.log(err);
      });
  };

  const removeQuiz = (serverId) => {
    axios
      .delete(`${API_URL}quizes/${serverId}.json?auth=${token}`)
      .then(() => fetchQuizes(true))
      .catch((err) => console.log(err));
  };

  return (
    <QuizesContext.Provider
      value={{ quizes, postQuiz, fetchQuizes, fetchSingleQuiz, removeQuiz }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

export default QuizesProvider;

export const useQuizes = () => useContext(QuizesContext);
