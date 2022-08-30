import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import DropDownMenu from "./DropDownMenu";
import { connect } from "react-redux";
import BrushIcon from '@mui/icons-material/Brush';
import ChatIcon from '@mui/icons-material/Chat';
import FriendListItem from "../FriendSideBar/FriendList/FriendListItem";
import { getActions } from "../../store/actions/chatActions";
const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "48px",
  borderBottom: "1px solid black",
  backgroundColor: "#36393f",
  width: "calc(100% - 326px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
});

const AppBar = ({chosenChatDetails, setIsDraw ,setIsChat, isChat, isDraw}) => {
    // const [name, setName] = useState('');
    // const [id, setId] = useState('');
    // const [isOnline, setIsOnline] = useState(false);

    const draw = ()=>{
      setIsDraw();
      console.log('draw mode');
    }
    const chat = ()=>{
      setIsChat();
      console.log('chat mode');
    }
  // useEffect(() =>{
  //   if(chosenChatDetails ){
  //       setName(chosenChatDetails.name);
  //       setId(chosenChatDetails.id);
  //   }
  // }, [chosenChatDetails]);

  return (
    <MainContainer>
      <DropDownMenu />
      {(isDraw && chosenChatDetails) && (
        <ChatIcon style={{backgroundColor : "#36393f"}} onClick = {chat}/>
        )}
      {(isChat && chosenChatDetails) &&(
        <BrushIcon style={{backgroundColor : "#36393f"}} onClick = {draw}/>
      )}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({chat}) => {
  return {
    ...chat,
  };
};
const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(mapStoreStateToProps,mapActionsToProps)(AppBar);
