import React from "react";
import { Timeline } from "antd";

const MessageList = ({ messages }) => (
  <Timeline>
    {messages.map((message, index) => <Timeline.Item key={index}>{message.text}</Timeline.Item>)}
  </Timeline>
);

export default MessageList;
