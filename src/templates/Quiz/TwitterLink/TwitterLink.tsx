import { css } from "@emotion/react";
import React from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { useTwitterLink } from "./useTwitterLink";
import { HASHTAGS } from "@/constants/hashtags";
import { PRODUCTION_URL } from "@/constants/productionUrl";
import type { Status } from "@/types/Status";

type TwitterLinkProps = {
  status: Status;
};

export const TwitterLink: React.VoidFunctionComponent<TwitterLinkProps> = (
  props,
) => {
  const { isDesktop, title } = useTwitterLink(props.status);

  return (
    <TwitterShareButton
      css={(theme) => [
        css`
          align-items: center;
          border-radius: 18px;
          display: flex;
          height: 36px;
          transition: background-color ${theme.duration}ms;
          &:hover,
          &:active {
            background-color: rgba(0, 0, 0, 0.04) !important;
          }
        `,
        !isDesktop &&
          css`
            border-radius: 12px;
            height: 24px;
          `,
      ]}
      hashtags={HASHTAGS}
      title={title}
      url={PRODUCTION_URL}
    >
      <TwitterIcon round size={isDesktop ? 36 : 24} />
      <span
        css={[
          css`
            color: rgb(0, 172, 237);
            font-size: 1.6rem;
            margin: 0 12px 0 6px;
          `,
          !isDesktop &&
            css`
              font-size: 1.2rem;
              margin: 0 8px 0 4px;
            `,
        ]}
      >
        この問題をシェア
      </span>
    </TwitterShareButton>
  );
};