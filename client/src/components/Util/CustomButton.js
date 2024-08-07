import React from 'react'
import { Button } from 'react-bootstrap';

function CustomButton({ text, variant = 'primary' }) {
    return (
        <div className='flex-between mt-2 me-1 float-end'>
            <Button variant={variant} size='sm' type="submit" className="w-40">
                {text}
            </Button>
        </div>
    )
}

export default CustomButton
