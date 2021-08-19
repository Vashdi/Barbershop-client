import './Notification.css'

const Notification = ({errorMsg}) =>
{

    return(<div className =  "errors">
            {errorMsg}
    </div>)
}

export default Notification;