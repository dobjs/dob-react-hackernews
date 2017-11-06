import * as React from "react";
import { Connect } from "dob-react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { Props, State } from "./layout.type";
import * as S from './layout.style'
import * as classnames from 'classnames'
import { PureComponent } from "../utils/react-helper";

import Lists from "../pages/lists/lists.component";

function getPageType(pathName: string) {
  switch (pathName) {
    case '/':
      return 'top'
    case '/new':
      return 'new'
    case '/show':
      return 'show'
    case '/ask':
      return 'ask'
    case '/jobs':
      return 'jobs'
    default:
      return null
  }
}

@withRouter
@Connect
export default class Layout extends PureComponent<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  private getHackerNews = (type: string) => {
    if (!type) {
      return
    }

    this.props.HackerNewsAction.getPageList(type)
  }

  public componentDidMount() {
    this.getHackerNews(getPageType(this.props.location.pathname))
  }

  public componentWillReceiveProps(nextProps: Props) {
    this.getHackerNews(getPageType(nextProps.location.pathname))
  }

  public render() {
    return (
      <S.Container>
        <S.Nav>
          <S.NavLeft>
            <Link to="/">
              <S.Logo src="https://avatars1.githubusercontent.com/u/32093464?s=200&v=4" />
            </Link>
            <Link to="/" className={classnames({ active: this.props.location.pathname === '/' })}>top</Link>
            <Link to="/new" className={classnames({ active: this.props.location.pathname === '/new' })}>new</Link>
            <Link to="/show" className={classnames({ active: this.props.location.pathname === '/show' })}>show</Link>
            <Link to="/ask" className={classnames({ active: this.props.location.pathname === '/ask' })}>ask</Link>
            <Link to="/jobs" className={classnames({ active: this.props.location.pathname === '/jobs' })}>jobs</Link>
          </S.NavLeft>

          <S.NavRight>
            <Link to="/about">about</Link>
          </S.NavRight>
        </S.Nav>

        <Switch>
          <Route exact path="/" render={props => <Lists type="top" />} />
          <Route exact path="/new" render={props => <Lists type="new" />} />
          <Route exact path="/show" render={props => <Lists type="show" />} />
          <Route exact path="/ask" render={props => <Lists type="ask" />} />
          <Route exact path="/jobs" render={props => <Lists type="jobs" />} />
        </Switch>
      </S.Container>
    );
  }
}
