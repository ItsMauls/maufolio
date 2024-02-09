'use client'

import { IonIcon } from '@ionic/react';

interface icon {
    i : string
}

export const GenerateIcon = (
{
    i
} : icon) => {
    return (
        <IonIcon 
            className='mx-1'
            icon={i}
        />
    )
}