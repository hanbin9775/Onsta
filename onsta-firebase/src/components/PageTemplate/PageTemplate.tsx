import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateWrapper>
      <PageTemplateInnerWrapper>
        <PageTemplateChildren>{children}</PageTemplateChildren>
      </PageTemplateInnerWrapper>
    </PageTemplateWrapper>
  );
};

const PageTemplateWrapper = styled.div`
  width: 100%;
`;

const PageTemplateInnerWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const PageTemplateChildren = styled.div`
  width: 100%;
  max-width: 940px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export default PageTemplate;