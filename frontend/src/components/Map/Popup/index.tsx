import React from 'react';
import styled, { css } from 'styled-components';
import { Popup as LeafletPopup } from 'react-leaflet';
import { FormattedMessage } from 'react-intl';

import { desktopOnly, getSpacing } from 'stylesheet';
import { textEllipsisAfterNLines } from 'services/cssHelpers';
import { Button as RawButton } from 'components/Button';

interface Props {
  place: string;
  title: string;
  imageUrl: string;
}

export const Popup: React.FC<Props> = ({ place, title, imageUrl }) => {
  return (
    <StyledPopup closeButton={false}>
      <CoverImage src={imageUrl} />
      <div className="p-4">
        <span className="text-P2 mb-1 text-greyDarkColored hidden desktop:inline">{place}</span>
        <Title className="text-Mobile-C1 text-primary1 font-bold desktop:text-H4">{title}</Title>
        <Button className="hidden desktop:block">
          <span className="text-center w-full">
            <FormattedMessage id="search.map.seeResult" />
          </span>
        </Button>
      </div>
    </StyledPopup>
  );
};

const desktopWidth = 288;
const desktopImgHeight = 122;
const mobileWidth = 215;
const mobileImgHeight = 133;

const Button = styled(RawButton)`
  margin-top: ${getSpacing(4)};
  width: 100%;
  text-align: center;
`;

const Title = styled.span`
  ${textEllipsisAfterNLines(2)}

  ${desktopOnly(css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `)}
`;

const StyledPopup = styled(LeafletPopup)`
  .leaflet-popup-content {
    margin: 0;

    display: flex;
    flex-direction: column;
  }

  .leaflet-popup-content-wrapper {
    padding: 0;

    border-radius: ${getSpacing(4)};
    overflow: hidden;

    width: ${mobileWidth}px;
    ${desktopOnly(css`
      width: ${desktopWidth}px;
    `)};
  }
`;

const CoverImage = styled.img`
  height: ${mobileImgHeight}px;
  ${desktopOnly(css`
    height: ${desktopImgHeight}px;
  `)}
  object-fit: cover;
`;
