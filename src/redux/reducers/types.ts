import { AppActionTypes } from './app-reducer/actions'
import { ModalActionTypes } from './modal-reducer/actions'
import { ProjectActionTypes } from './projects-reducer/actions'

export type AllActionTypes = AppActionTypes | ModalActionTypes | ProjectActionTypes
