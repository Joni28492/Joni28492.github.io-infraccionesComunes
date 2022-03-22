import React, { FC, useState } from 'react'
import { ListItem } from './ListItem'

interface Props {
    title: string,
    // items: string[],
    // classNameHeader?: string,
    className?: string,
    // styleHeader?: React.CSSProperties,
    style?: React.CSSProperties,

}

export const CollectionItems: FC<Props> = ({ title, className, style, children }) => {
    const [show, setShow] = useState(false)
    return (
        <div className='container'>
            <h3 onClick={() => setShow(!show)}
                className={`text-light mt-2  ${className}`}
                style={{
                    cursor: 'pointer',
                    margin: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '80vw',
                    height: '65px',
                    ...style,

                }}>
                {title}
            </h3>

            {(show) && children}

        </ div>
    )
}
