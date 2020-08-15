import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="(" onClick={e => this.props.onClick(e.target.name)} className="button-customize">(</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">)</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)}  className="button-red">C</button><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}  className="button-customize">x</button><br/>


                <button name="." onClick={e => this.props.onClick(e.target.name)}  className="button-sign">.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}  className="button-sign">0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}  className="button-sign">=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}  className="button-sign">÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;
