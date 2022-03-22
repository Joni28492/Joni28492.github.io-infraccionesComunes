import React from 'react'
import { FC } from 'react';

interface Props {

    item: string,
    className?: string,
    style?: React.CSSProperties,

}

export const ListItem: FC<Props> = ({ item, style, className }) => {
    return (
        <>
            <div style={{

                width: '80vw',
                margin: 0,
                overflow: 'hidden',
                ...style
            }} className={`alert ${className}`} >{item}</div>
        </>
    )
}
