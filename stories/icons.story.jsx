import React from 'react';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import * as Icons from '../src/components/icons';
import { Container, Row } from '../src/components/layout';

const IconWrapper = ({ children, iconName }) => (
  <Row.Column
    width="one-quarter"
    style={{
      border: '1px #777 solid',
      width: 'calc(25% - 5px)',
      paddingTop: 20,
      borderRadius: 5,
      marginRight: 5
    }}
  >
    <Row>
      <Row.Column width="one-quarter">{children}</Row.Column>
      <Row.Column width="three-quarters">
        <p>{iconName}</p>
      </Row.Column>
    </Row>
  </Row.Column>
);

IconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string.isRequired
};

storiesOf('Icons', module).add('Icons', () => (
  <Container style={{ paddingTop: 40 }}>
    <Row style={{ marginBottom: 5 }}>
      <IconWrapper iconName="ArrowLeft">
        <Icons.ArrowLeft />
      </IconWrapper>

      <IconWrapper iconName="ArrowRight">
        <Icons.ArrowRight />
      </IconWrapper>

      <IconWrapper iconName="ArrowRightCircle">
        <Icons.ArrowRightCircle />
      </IconWrapper>

      <IconWrapper iconName="ChevronLeft">
        <Icons.ChevronLeft />
      </IconWrapper>
    </Row>
    <Row style={{ marginBottom: 5 }}>
      <IconWrapper iconName="ChevronRight">
        <Icons.ChevronRight />
      </IconWrapper>

      <IconWrapper iconName="Close">
        <Icons.Close />
      </IconWrapper>

      <IconWrapper iconName="Cross">
        <Icons.Cross />
      </IconWrapper>

      <IconWrapper iconName="SmallEmdash">
        <Icons.SmallEmdash />
      </IconWrapper>
    </Row>
    <Row style={{ marginBottom: 5 }}>
      <IconWrapper iconName="Emdash">
        <Icons.Emdash />
      </IconWrapper>

      <IconWrapper iconName="Minus">
        <Icons.Minus />
      </IconWrapper>

      <IconWrapper iconName="Plus">
        <Icons.Plus />
      </IconWrapper>

      <IconWrapper iconName="Search">
        <Icons.Search />
      </IconWrapper>
    </Row>
    <Row style={{ marginBottom: 5 }}>
      <IconWrapper iconName="Tick">
        <Icons.Tick />
      </IconWrapper>
    </Row>
  </Container>
));
