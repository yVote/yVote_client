import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@components/common/header';
import { News } from '@entities/interfaces/news';
import Analyze from '@pages/analyze';
import Initial from '@pages/initial';
import KeyExplanation from '@pages/keyExplanation';
import KeywordsPage from '@pages/keywords';
import NewsPage from '@pages/news';

import './App.css';

type curClicked = undefined | News['order'];

function App() {
  const [curClicked, setCurClicked] = useState<curClicked>(undefined);
  return (
    <Wrapper>
      <Router basename={process.env.PUBLIC_URL}>
        <Header setCurClicked={setCurClicked} />
        <Routes>
          <Route
            path="/news"
            element={<NewsPage curClicked={curClicked} setCurClicked={setCurClicked} />}
          />
          <Route path="/keywords" element={<KeywordsPage />} />
          <Route path="/keywords/:keyname" element={<KeyExplanation />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/" element={<Initial />} />
        </Routes>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: '1080px';
  min-width: '1440px';
  overflow: 'hidden';
`;
