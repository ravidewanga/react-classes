import React,{Component} from "react";
import Button from '@material-ui/core/Button';

class ParaButton extends Component{
    
    render(){
        var btnVariant = this.props.variant;
        var btnPropVariant = '';
        if(btnVariant){
            btnPropVariant = btnVariant;
        }

        var btnColor = this.props.color;
        var btnPropColor = '';
        if(btnColor){
            btnPropColor = btnColor;
        }
        var btnDisabled = this.props.disabled;
         var btnPropDisabled = false;
        if(btnDisabled){
            btnPropDisabled = btnDisabled;
        }
        return(
            <Button disabled={btnPropDisabled} variant={btnPropVariant} color={btnPropColor} onClick={this.props.loader}>{this.props.children}</Button>
        );
    }
}
export default ParaButton;