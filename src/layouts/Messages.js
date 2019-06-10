import React from "react";
import { connect } from "react-redux";
import { add as addMessage } from "../actions/messages";
import MessageLayout from "./MessagesLayout";
import MessageList from '../components/MessageList'
import InputMessage from '../components/InputMessage'

const mapStateToProps = ({ messages }, ownProps) => ({
  messages,
  ...ownProps
});

class Messages extends React.Component {
  constructor (props) {
    super(props)

    this.handleSubmitMessage = this.handleSubmitMessage.bind(this)
  }

  handleSubmitMessage(message) {
    this.props.dispatch(addMessage(message));
  }

  render() {
    return (
      <MessageLayout
        renderContent={() => <MessageList messages={this.props.messages}/>}
        renderFooterContent={() => <InputMessage onSubmit={this.handleSubmitMessage}/>}
      />
    );
  }
}

export default connect(mapStateToProps)(Messages);
