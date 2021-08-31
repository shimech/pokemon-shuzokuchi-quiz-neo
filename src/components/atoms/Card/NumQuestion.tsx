import { css } from '@emotion/react';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NUM_QUIZ } from '@/constants/numQuiz';
import { RootState } from '@/store';

export const NumQuestion: React.VFC = () => {
  const { numQuestion } = useSelector((state: RootState) => state.result);
  const router = useRouter();

  useEffect(() => {
    if (numQuestion < 1 || numQuestion > 10) {
      router.push('/error');
    }
  }, []);

  return (
    <div
      css={(theme) => css`
        background-color: ${theme.colors.blue};
        border-radius: 12px;
        box-shadow: 4px 4px 8px ${theme.colors.black};
        color: ${theme.colors.white};
        display: inline-block;
        font-size: 24px;
        height: 72px;
        left: 24px;
        line-height: 72px;
        position: relative;
        text-align: center;
        top: 24px;
        transition: all 0.5s;
        width: 144px;
        &:hover {
          box-shadow: 8px 8px 8px ${theme.colors.black};
        }
      `}
    >
      <span
        css={(theme) => css`
          color: ${theme.colors.white};
          font-size: 48px;
        `}
      >
        {numQuestion}
      </span>
      / {NUM_QUIZ}
    </div>
  );
};
