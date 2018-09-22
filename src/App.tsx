import React from "react";
import resetCss from "./resetCss";
import Page from "./Page";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Content from "./Content";

resetCss();

const App = () => (
  <Page>
    <Title>Mikotrana</Title>
    <SubTitle>Build your workout</SubTitle>
    <Content />
  </Page>
);

export default App;
