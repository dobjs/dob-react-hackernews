import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import store from "../stores";

export class PureComponent<T, P> extends React.PureComponent<typeof store & T, P> {

}
