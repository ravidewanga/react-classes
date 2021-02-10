import React,{Component} from "react";
import Button from '@material-ui/core/Button';

class ParaButton extends Component{
    render(){
        const variant = this.props.variant;
        const btnVariant = '';
        if(variant){
            btnVariant = this.props.variant;
        }

        const color = this.props.color;
        const btnColor = '';
        if(color){
            const btnColor = this.props.color;
        }
        return(
            <Button variant={btnVariant} color={btnColor} onClick={this.props.loader}>{this.props.children}</Button>
        );
    }
}
export default ParaButton;