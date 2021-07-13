import * as React from 'react';
import { css } from '@emotion/css';
import { RegionCondition } from '@/components/atoms/Button';
import { REGION } from '@/constants/region';
import { RegionName } from '@/store/condition';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

const wrapperStyle = css`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

const gridStyle = css`
  display: grid;
  grid-gap: 12px;
  grid-template-rows: 40px 40px;
  grid-template-columns: 120px 120px 120px 120px;
`;

export const RegionConditionPanel: React.VFC<Props> = () => (
  <div className={wrapperStyle}>
    <div className={gridStyle}>
      {Object.keys(REGION).map((region) => (
        <RegionCondition region={region as RegionName} key={region} />
      ))}
    </div>
  </div>
);