import {Button, Container } from "@material-ui/core";
import React from "react";

class Footer extends React.Component<any, any> {
  render() {
    return (
      <footer>
        <Container>
          footer
          {['left', 'right', 'top', 'bottom'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Container>
      </footer>
    );
  }
}

export default Footer;