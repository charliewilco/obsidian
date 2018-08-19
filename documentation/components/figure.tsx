import * as React from 'react'

interface IFigure {
  imgURL: string,
  caption?: string,
  altText: string
}

export const Figure: React.SFC<IFigure> = ({ imgURL, altText, caption }) => (
  <figure className='Figure u-mt2 u-mb4'>
    <object>
      <img src={imgURL} alt={altText}/>
    </object>
    {caption && (
        <figcaption>{caption}</figcaption>
     )
    }
  </figure>
)