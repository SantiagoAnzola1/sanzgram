import { Button } from '@/components/ui/button'

import DinamicEditIcon from '/public/assets/icons/dinamicEditIcon'
const EditButtonProfile = () => {

    return (
        <Button
            className='shad-button_dark_no_h  group'
            aria-label="Boton editar perfil"
            onClick={() => {

            }}
        >   {
                <DinamicEditIcon color='#FFB620' height={16} width={16} />
            }
            {/* <img src='/public/assets/icons/edit.svg' alt="Edit icon" className='fill-slate-300' height={16} width={16} /> */}
            <p className='subtle-semibold'>Edit Profile</p>

        </Button>
    )
}

export default EditButtonProfile