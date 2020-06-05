import React from 'react'
import style from './recipie.module.css'



const Recipie = ({ title, calories, image, ingredients }) => {
      return (
            <div className={style.recipie}>
                  <h1 >{title}</h1>
                  <ol>
                        {ingredients.map(ingredients => (
                              <li>{ingredients.text}</li>
                        ))}
                  </ol>
                  <p>{calories}</p>
                  <img className={style.image} src={image} alt="" />
            </div>
      );
}

export default Recipie;