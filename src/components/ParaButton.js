import React,{Component} from "react";
import Button from '@material-ui/core/Button';

class ParaButton extends Component{
    render(){
        return(
            <Button variant={this.props.variant} color={this.props.color} onClick={this.props.event}>{this.props.children}</Button>
        );
    }
}
export default ParaButton;