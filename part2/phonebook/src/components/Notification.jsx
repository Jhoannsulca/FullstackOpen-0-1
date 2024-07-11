const Notification = ({ messageError, messageSuccess }) => {
    if (messageError === null || messageSuccess === null) {
      return null
    }
    
    return (
        <>
            <div className={messageError ? 'error' : ''}>
            {messageError}
            </div>
            <div className={messageSuccess? 'success' : ''}>
            {messageSuccess}
            </div>
        </>

    )
  }

export default Notification