export const standard = {
  elementType: 'input',
  elementConfig: {
    type: 'text',
    placeholder: 'Possible answer',
  },
  value: '',
  correct: false,
  tickable: true,
};

export const number = {
  elementType: 'input',
  elementConfig: {
    type: 'number',
    placeholder: 'Correct number',
  },
  value: '',
};

export const boolean = {
  elementType: 'select',
  value: 'true',
  elementConfig: [
    {
      value: 'true',
      id: 'true',
      text: 'True',
      default: true,
    },
    {
      value: 'false',
      text: 'False',
      id: 'false',
    },
  ],
};
