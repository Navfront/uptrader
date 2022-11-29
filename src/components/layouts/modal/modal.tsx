import { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { useDialogHandling } from './hooks/use-dialog-handling'

const portal = document.getElementById('portal')

interface IModalProps extends PropsWithChildren {
  isOpen?: boolean
}

function Modal({ children }: IModalProps): JSX.Element {
  const { modalRef } = useDialogHandling()

  if (portal !== null) {
    return ReactDOM.createPortal(
      <dialog className='modal' ref={modalRef}>
        <div className='modal__layout'>{children}</div>
      </dialog>,
      portal
    )
  }
  return <></>
}

export default Modal
