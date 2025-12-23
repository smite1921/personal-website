import React, { ReactNode } from "react";
import { Link } from "gatsby";
import * as css from "./header.module.css";
import { COLOR, FONT, ColorType, FontType } from "../../styles/constants";

interface HeaderProps {
  title: ReactNode;
  color?: ColorType;
  font?: FontType;
  link?: string;
}

function colorClass(color?: ColorType): string | undefined {
  if (color === COLOR.BLUE) return css.blue;
  if (color === COLOR.YELLOW) return css.yellow;
  if (color === COLOR.PURPLE) return css.purple;
  if (color === COLOR.PEACH) return css.peach;
  if (color === COLOR.PINK) return css.pink;
  if (color === COLOR.GREEN) return css.green;
  if (color === COLOR.ORANGE) return css.orange;
  if (color === COLOR.WHITE) return css.white;
  if (color === COLOR.BACKGROUND) return css.background;
  return undefined;
}

function fontClass(font?: FontType): string | undefined {
  if (font === FONT.CAL_MED) return css.calmed;
  if (font === FONT.CAL_SEMIBOLD_I) return css.calsemiboldi;
  if (font === FONT.AVENIR_BOOK) return css.avenirbook;
  if (font === FONT.AVENIR_MED) return css.avenirmed;
  if (font === FONT.MONO) return css.mono;
  return undefined;
}

export default function Header({ title, color, font, link }: HeaderProps) {
  const className = `${css.header} ${colorClass(color) || ""} ${fontClass(font) || ""}`;

  if (link === undefined) {
    return (
      <div>
        <span className={className}> {title} </span>
      </div>
    );
  } else if (!link.startsWith("/")) {
    return (
      <div>
        <a href={link} className={className}>
          {" "}
          {title}{" "}
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <Link to={link} className={className}>
          {" "}
          {title}{" "}
        </Link>
      </div>
    );
  }
}
