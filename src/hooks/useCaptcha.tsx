
import { useState, useEffect } from 'react';

export const useCaptcha = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let result = 0;
    let questionText = '';
    
    switch (operation) {
      case '+':
        result = num1 + num2;
        questionText = `${num1} + ${num2}`;
        break;
      case '-':
        result = Math.max(num1, num2) - Math.min(num1, num2);
        questionText = `${Math.max(num1, num2)} - ${Math.min(num1, num2)}`;
        break;
      case '*':
        const smallNum1 = Math.floor(Math.random() * 5) + 1;
        const smallNum2 = Math.floor(Math.random() * 5) + 1;
        result = smallNum1 * smallNum2;
        questionText = `${smallNum1} × ${smallNum2}`;
        break;
    }
    
    setQuestion(questionText);
    setAnswer(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validateCaptcha = () => {
    return parseInt(userAnswer) === answer;
  };

  const resetCaptcha = () => {
    setUserAnswer('');
    generateCaptcha();
  };

  return {
    question,
    userAnswer,
    setUserAnswer,
    validateCaptcha,
    resetCaptcha
  };
};
