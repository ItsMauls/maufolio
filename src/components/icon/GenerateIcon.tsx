'use client'

import { IonIcon } from '@ionic/react';
import { NavLink } from '../navlink/NavLink';

interface icon {
    i : string
    url? : string
    className? : string
}


export const GenerateIcon = (
{
    i,
    url,
    ...props
} : icon) => {

    const IconRedirect = () => {
        return (
            <NavLink src={url ?? ''}>
                <IonIcon 
                    {...props}
                    icon={i}
                />
            </NavLink>
        )
    }

    return (
        <>
    {
        url ? < IconRedirect /> : 
            <IonIcon 
                {...props}
                icon={i}
            />
    }
        </>
    )
}