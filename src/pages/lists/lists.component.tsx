import { Connect } from "dob-react";
import * as React from "react";
import { PureComponent } from "../../utils/react-helper";
import { Props, State } from "./lists.type";
import * as S from './lists.style'

@Connect
export default class Lists extends PureComponent<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  private renderLoading = () => {
    return (
      <S.Container>
        <S.Loading>
          Loading..
        </S.Loading>
      </S.Container>
    )
  }

  private renderLists = () => {
    return this.props.HackerNewsStore.currentLists.map((eachList, index) => {
      return (
        <S.ListContainer key={index}>
          <S.ListViewer>
            {eachList.points}
          </S.ListViewer>
          <S.ListRightContainer>
            <S.ListTitleContainer>
              <S.ListTitle target="_blank" href={eachList.url}>
                {eachList.title}
              </S.ListTitle>
              <S.ListDomain>
                {eachList.domain}
              </S.ListDomain>
            </S.ListTitleContainer>

            <S.ListDescription>
              by {eachList.user} {eachList.time_ago} | <S.Link>{eachList.comments_count} comments</S.Link>
            </S.ListDescription>
          </S.ListRightContainer>
        </S.ListContainer>
      )
    })
  }

  public render() {
    if (this.props.HackerNewsStore.isLoading) {
      return this.renderLoading()
    }

    return (
      <S.Container>
        {this.renderLists()}
      </S.Container>
    );
  }
}
