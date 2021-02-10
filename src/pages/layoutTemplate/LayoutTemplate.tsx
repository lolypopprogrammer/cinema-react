import React, {FunctionComponent} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Route } from 'react-router-dom';
import {Container} from "@material-ui/core";

interface LayoutTemplateProps {
  title: string,
  path: string,
  component: FunctionComponent
}

class LayoutTemplate extends React.Component<LayoutTemplateProps, any> {
  render() {
    return (
      <div className={'LayoutComponent'}>
        <Header text={this.props.title} />
        <Container>
          <Route component={this.props.component} path={this.props.path} />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default LayoutTemplate;