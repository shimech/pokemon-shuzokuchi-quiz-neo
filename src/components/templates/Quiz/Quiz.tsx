import React, { useState } from 'react';
import { css } from '@emotion/react';
import { NumQuestion } from '@/components/atoms/Card';
import { StatusChart } from '@/components/atoms/Chart';
import { ResultModal } from '@/components/atoms/Modal';
import { HintPanel } from '@/components/molecules/HintPanel';
import { AnswerForm } from '@/components/molecules/Form';
import { Pokemon } from '@/domains/pokemon';

type Props = { pokemon: Pokemon };

export const Quiz: React.VFC<Props> = (props) => {
  const { pokemon } = props;
  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <>
      <NumQuestion />
      <div
        css={css`
          display: grid;
          grid-template-columns: 50% 50%;
          margin-top: 20px;
        `}
      >
        <StatusChart pokemon={pokemon} />
        <div
          css={css`
            width: 100%;
          `}
        >
          <HintPanel pokemon={pokemon} />
          <AnswerForm
            pokemon={pokemon}
            setIsDisplayModal={setIsDisplayModal}
            setIsCorrect={setIsCorrect}
          />
        </div>
      </div>
      <ResultModal
        pokemon={pokemon}
        isDisplay={isDisplayModal}
        setIsDisplay={setIsDisplayModal}
        isCorrect={isCorrect}
      />
    </>
  );
};
