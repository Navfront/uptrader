import { all, fork } from 'redux-saga/effects'
import {
  watchGetAllProjectsAsync,
  watchAddProjectAsync,
  watchDeleteProjectAsync,
  watchMoveProject,
  watchUpdateProjectAsync
} from './projects-saga'
import {
  watchGetAllTasksAsync,
  watchAddTaskAsync,
  watchUpdateTaskAsync,
  watchDeleteTaskAsync
} from './tasks-saga'

export function* rootWatcher(): any {
  yield all([
    fork(watchGetAllProjectsAsync),
    fork(watchAddProjectAsync),
    fork(watchDeleteProjectAsync),
    fork(watchMoveProject),
    fork(watchUpdateProjectAsync),
    fork(watchGetAllTasksAsync),
    fork(watchAddTaskAsync),
    fork(watchUpdateTaskAsync),
    fork(watchDeleteTaskAsync)
  ])
}
