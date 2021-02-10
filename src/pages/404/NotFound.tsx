import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

class NotFound extends React.Component<any, any> {
  render() {
    return (
      <div className={'NotFound'}>
        <Header text={'NotFound'} />
        <div className="wrapper">
          <div className="white right">
            <Link to={'/'}>
              Main
            </Link>
          </div>
          <div className="white stick"></div>
          <div className="white right" style={{left: '545px', top: '400px'}}>
            <Link to={'/'}>
              404
            </Link>
          </div>
          <div className="white stick" style={{left: '615px', top: '485px', height: 'calc(100% - 485px)'}}></div>
        </div>
      </div>
    );
  }
}

export default NotFound;