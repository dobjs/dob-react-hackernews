"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.Container = styled_components_1.default.div `

`;
exports.Nav = styled_components_1.default.nav `
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 100;
  height: 48px;
  padding: 0 100px;
  box-sizing: border-box;
  background-image: linear-gradient(120deg, #155799, #159957);
  a {
    color: white;
    text-decoration: none;
    margin: 0 .4rem;
    height: 100%;
    display: flex;
    align-items: center;

    &::after{
      transform: translateY(0);
      display: block;
      content: "";
      background: #fff;
      height: 2px;
      position: absolute;
      width: 100%;
      bottom: 0;
      transition: transform .3s ease-out;
      transform: translateY(3px);
    }
  }
`;
exports.NavLeft = styled_components_1.default.div `
  display: flex;
  align-items: center;
`;
exports.NavRight = styled_components_1.default.div `
  display: flex;
`;
exports.Logo = styled_components_1.default.img `
  height: 30px;
  margin-right: .4rem;
`;
//# sourceMappingURL=layout.style.js.map