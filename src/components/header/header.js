import React from "react";
import { Link } from "gatsby";
import css from "./header.module.css";
import {COLOR, SIZE, FONT} from "../../styles/constants"

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

function sizeClass(size) {
    if (size === SIZE.XS) {
        return css.xs;
    }
    else if (size === SIZE.S) {
        return css.s;
    }
    else if (size === SIZE.M) {
        return css.m;
    }
    else if (size === SIZE.L) {
        return css.l;
    }
    else if (size === SIZE.XL) {
        return css.xl;
    }
}

function fontClass(font) {
    if (font === FONT.CAL_MED) {
        return css.calmed;
    }
    else if (font === FONT.CAL_SEMIBOLD_I) {
        console.log('final Step')
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


export default function Header({title, color, size, font, link}) {
    if (link === undefined) {
        return(
            <div>
                <a className={`${css.header} ${colorClass(color)} ${sizeClass(size)} ${fontClass(font)}`}> {title} </a>
            </div>
        );
    }
    else {
        return (
            <div>
                <Link href={link} className={`${css.header} ${colorClass(color)} ${sizeClass(size)} ${fontClass(font)}`}>{title} </Link>
            </div>
        );
    }
}