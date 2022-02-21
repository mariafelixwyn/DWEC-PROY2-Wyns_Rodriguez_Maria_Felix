import React, {Component} from 'react';

class Result extends Component{

    render(){
        let {resultado} = this.props;

        return(
        <div className="resultado">
            <p>{resultado}</p>
        </div>);
    }

}

export default Result;