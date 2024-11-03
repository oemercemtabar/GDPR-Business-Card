import React from 'react';


class SubmitButton extends React.Component {
    render() {
        return (


            <button
                className='btn3 primary'
                disabled={this.props.disabled}
            >
                {this.props.text}
            </button>


        );
    }
}



export default SubmitButton;