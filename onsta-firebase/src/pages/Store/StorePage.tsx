import React from 'react';
import PageTemplate from 'components/PageTemplate';

const StorePage = () => {
  return (
    <PageTemplate>
      <div>스토어페이지</div>
      <div style={{ color: 'red' }}>1</div>
      <iframe src="http://localhost:3000/streaming" title="dd" />
    </PageTemplate>
  );
};

export default StorePage;
