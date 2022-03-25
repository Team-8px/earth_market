import "./font.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        cursor: pointer;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:'SpoqaHanSansNeo-R';
        font-size: 10px;
    }
    img{
        width: 100%;
        height: auto;
    }
    button {
        border: none;
        cursor: pointer;
        padding: 0;
        background-color: inherit;
    }
    input {
        &:focus {
        outline:none;
      }
    }
    textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; 
}
    .main{
        background-color:${props => props.theme.palette["bg"]}
    }

    .ir {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
    
    .a11y-hidden{
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        clip-path: polygon(0 0, 0 0, 0, 0);
    }
`;
export default GlobalStyles;

// html, body, div, span, applet, object, iframe,
// h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// a, abbr, acronym, address, big, cite, code,
// del, dfn, em, img, ins, kbd, q, s, samp,
// small, strike, strong, sub, sup, tt, var,
// b, u, i, center,
// dl, dt, dd, ol, ul, li,
// fieldset, form, label, legend,
// table, caption, tbody, tfoot, thead, tr, th, td,
// article, aside, canvas, details, embed,
// figure, figcaption, footer, header, hgroup,
// menu, nav, output, ruby, section, summary,
// time, mark, audio, video {
// 	margin: 0;
// 	padding: 0;
// 	border: 0;
// 	font-size: 100%;
// 	font: inherit;
// 	vertical-align: baseline;
// }
// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure,
// footer, header, hgroup, menu, nav, section {
// 	display: block;
// }
// body {
// 	line-height: 1;
// }
// ol, ul {
// 	list-style: none;
// }
// blockquote, q {
// 	quotes: none;
// }
// blockquote:before, blockquote:after,
// q:before, q:after {
// 	content: '';
// 	content: none;
// }
// table {
// 	border-collapse: collapse;
// 	border-spacing: 0;
// }
