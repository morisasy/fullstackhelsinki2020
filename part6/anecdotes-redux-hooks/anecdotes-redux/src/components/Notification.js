import React from 'react'
import { connect } from 'react-redux';

const Notification = ({ notification }) => {
  //const notification = useSelector(state => state)
  console.log( 'notification set', notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
          <div>
              {notification.isDisplay && <div style={style}>{notification.content}</div> }        
          </div>
  )
}

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

export default connect(mapStateToProps)(Notification);