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
    case '/dob-react-hackernews':
      return 'top'
    case '/dob-react-hackernews/new':
      return 'new'
    case '/dob-react-hackernews/show':
      return 'show'
    case '/dob-react-hackernews/ask':
      return 'ask'
    case '/dob-react-hackernews/jobs':
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
            <Link to="/dob-react-hackernews">
              <S.Logo src="https://avatars1.githubusercontent.com/u/32093464?s=200&v=4" />
            </Link>
            <Link to="/dob-react-hackernews" className={classnames({ active: this.props.location.pathname === '/dob-react-hackernews' })}>top</Link>
            <Link to="/dob-react-hackernews/new" className={classnames({ active: this.props.location.pathname === '/dob-react-hackernews/new' })}>new</Link>
            <Link to="/dob-react-hackernews/show" className={classnames({ active: this.props.location.pathname === '/dob-react-hackernews/show' })}>show</Link>
            <Link to="/dob-react-hackernews/ask" className={classnames({ active: this.props.location.pathname === '/dob-react-hackernews/ask' })}>ask</Link>
            <Link to="/dob-react-hackernews/jobs" className={classnames({ active: this.props.location.pathname === '/dob-react-hackernews/jobs' })}>jobs</Link>
          </S.NavLeft>

          <S.NavRight>

          </S.NavRight>
        </S.Nav>

        <Switch>
          <Route exact path="/dob-react-hackernews" render={props => <Lists type="top" />} />
          <Route exact path="/dob-react-hackernews/new" render={props => <Lists type="new" />} />
          <Route exact path="/dob-react-hackernews/show" render={props => <Lists type="show" />} />
          <Route exact path="/dob-react-hackernews/ask" render={props => <Lists type="ask" />} />
          <Route exact path="/dob-react-hackernews/jobs" render={props => <Lists type="jobs" />} />
        </Switch>
      </S.Container>
    );
  }
}
