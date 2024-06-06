import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import CardBox from "./cardbox";
import ChartBox from "./chartbox";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const waterData = 209;
  return (
    <div className="chat">
      <div className="messages">
      <CardBox title="Water Usage for today:" info={waterData}/>
      <ChartBox title="Analyse your water usage:" info="analyse_chart"/>
      <ChartBox title="Compare with other members:" info="comparison_chart"/>
      </div>     
    </div>
  );
};

export default Chat;