import React from "react";
import UserPanel from "./UserPanel";
import Channels from "./Channels";
import { Menu } from "semantic-ui-react";
import DirectMessages from "./DirectMessages";
import Starred from "./Starred";
import {connect} from 'react-redux';


class SidePanel extends React.Component {
  render() {
    const { currentUser,currentChannel } = this.props;
    
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: "#4c3c4c", fontSize: "1.2rem" }}
      >
        <UserPanel currentUser={currentUser} key={currentChannel && currentChannel.id} currentChannel={currentChannel} />
        <Starred currentUser={currentUser}/> 
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser}/>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({

  currentChannel:state.channel.currentChannel,
  
});

export default connect(mapStateToProps)(SidePanel);
