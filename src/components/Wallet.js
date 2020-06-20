import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, widthdraw } from '../actions/balance';

export class Wallet extends Component {
    state = {
        balance: undefined
    }

    updateBalance = event => {
        this.setState({balance: parseInt(event.target.value, 10)});
    }

    deposit = () => {
        this.props.deposit(this.state.balance);
    }

    widthdraw = () => this.props.widthdraw(this.state.balance);

    render() {
        return (
            <div>
                <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
                <input className='input-wallet' onChange={this.updateBalance}/>
                <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
                <button className='btn-widthdraw' onClick={this.widthdraw}>Widthdraw</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        balance: state.balance
    }
}

const mapDispatcherToProps = { deposit, widthdraw }

export default connect(mapStateToProps, mapDispatcherToProps)(Wallet);