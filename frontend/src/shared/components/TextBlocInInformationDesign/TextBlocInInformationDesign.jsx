import React from 'react';
import './TextBlocInInformationDesign.scss';

export function TextBlocInInformationDesign(props){
  return (
    <div className={`textBlocInInformationDesign__block ${props.styleTextBlocInInformationDesign}`}>
      <h1 className={`textBlocInInformationDesign__block__title`} >{props.titleStyleTextBlocInInformationDesign}</h1>
      <p className={`textBlocInInformationDesign__block__designer`}>Designer: {props.designerStyleTextBlocInInformationDesign}</p>
      <p className={`textBlocInInformationDesign__block__style`}>Style: {props.styleStyleTextBlocInInformationDesign}</p>
      <p className={`textBlocInInformationDesign__block__year`}>Year: {props.yearStyleTextBlocInInformationDesign}</p>
      <p className={`textBlocInInformationDesign__block__price`}>Price: {props.priceStyleTextBlocInInformationDesign}</p>
    </div>
  );
}

