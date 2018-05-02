import React from 'react';
import ImportForm from '../elements/Form';
import ImportMessage from '../elements/Message';

class HomePage extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state={

        };

      }

      render(){
        return(
          <div>


              <ImportForm

              />
              <ImportMessage/>

          </div>

        );
      }
    }
    export default HomePage;
