import React from "react";
import { Link } from "gatsby";
import css from "./header.module.css";
import {COLOR, FONT} from "../../styles/constants"

function colorClass(color) {
    if (color === COLOR.BLUE) {
        return css.blue;
    }
    else if (color === COLOR.YELLOW) {
        return css.yellow;
    }
    else if (color === COLOR.PURPLE) {
        return css.purple;
    }
    else if (color === COLOR.PEACH) {
        return css.peach;
    }
    else if (color === COLOR.PINK) {
        return css.pink;
    }
    else if (color === COLOR.GREEN) {
        return css.green;
    }
    else if (color === COLOR.ORANGE) {
        return css.orange;
    }
    else if (color === COLOR.WHITE) {
        return css.white;
    }
    else if (color === COLOR.BACKGROUND) {
        return css.background;
    }
}

function fontClass(font) {
    if (font === FONT.CAL_MED) {
        return css.calmed;
    }
    else if (font === FONT.CAL_SEMIBOLD_I) {
        return css.calsemiboldi;
    }
    else if (font === FONT.AVENIR_BOOK) {
        return css.avenirbook;
    }
    else if (font === FONT.AVENIR_MED) {
        return css.avenirmed;
    }
    else if (font === FONT.MONO) {
        return css.mono;
    }
}


export default function Header({ title, color, font, link }) {
    if (link === undefined) {
        return(
            <div>
                <span className={`${css.header} ${colorClass(color)} ${fontClass(font)}`}> {title} </span>
            </div>
        );
    }
    else if (!link.startsWith('/')) {
        return (
            <div>
                <a href={link} className={`${css.header} ${colorClass(color)} ${fontClass(font)}`}> {title} </a>
            </div>
        );
    }
    else {
        return (
            <div>
                <Link to={link} className={`${css.header} ${colorClass(color)} ${fontClass(font)}`}> {title} </Link>
            </div>
        );
    }
}