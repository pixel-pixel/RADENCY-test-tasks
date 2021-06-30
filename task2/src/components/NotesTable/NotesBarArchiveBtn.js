import React from 'react'
import store from "../../redux/store";
import {openArchive} from "../../redux/actionCreators";

function NotesBarArchiveBtn() {
  const onClick = () => store.dispatch(openArchive(!store.getState().isArchive))

  return (
    <button className="btn btn-secondary mgx-1"
            onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
           className="bi bi-archive-fill" viewBox="0 0 16 16">
        <path
          d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
      </svg>
    </button>
  )
}

export default NotesBarArchiveBtn