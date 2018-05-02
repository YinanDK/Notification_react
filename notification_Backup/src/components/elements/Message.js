import React,{PropTypes}from 'react';
import { Message, Icon} from 'semantic-ui-react';

class MessageImport extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      visible: true,
      header: 'Welcome back!'
    };
    this.handleDismiss = this.handleDismiss.bind(this);
  }

  handleDismiss(){
    this.setState({ visible: false });

    setTimeout(() => {
      this.setState({ visible: true });
    }, 2000);
  }

  render() {
      return (
        <Message 
          warning       
          size='huge'
          onDismiss={this.handleDismiss}
          header={this.state.header}
          content='This is a special notification which you can dismiss.'
        />
      );
  }
}

MessageImport.propTypes = {

  type: PropTypes.string
  
};

export default MessageImport;
