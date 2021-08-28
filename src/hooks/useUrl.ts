import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useQuizIds } from './useQuizIds';
import { RootState } from '@/store';

export const useUrl = (): string => {
  const quizIds = useQuizIds();
  const { numQuestion } = useSelector((state: RootState) => state.result);

  const [url, setUrl] = useState('');

  useEffect(() => {
    const id: string = quizIds[numQuestion];
    const url = id ? `/quiz/${id}` : '/result';
    setUrl(url);
  }, [quizIds, numQuestion]);

  return url;
};
