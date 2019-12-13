import React from 'react';
import Display from './Display'



class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            strike: 0,
            ball: 0
        }
    }
    resetStrike = () =>{ return this.state.strike > 2 ? this.setState({strike: 0}) : null}
    foulHandler = () => {
        return (
        this.setState({strike: this.state.strike  === 0  ? + 1 : this.state.strike + 2}),
        this.state.strike === 2 ? this.setState({ strike: 2 }) : null,
        this.state.strike === 1 ? this.setState({strike: 2}) : null
        )
    }
    strikeHandler = () => {return this.setState({ strike: this.state.strike + 1 })}
    
    resetBall = () => {return this.state.ball > 3 ? this.setState({ ball: 0 }) : null}
    BallHandler = () => {return this.setState({ ball: this.state.ball + 1 })}
    hitHandler = () => {
        return this.setState({
            strike: 0,
            ball: 0
        })
    }


    render() {
        return (
            <div>
                
               
                <Display
                strike={this.state.strike}
                ball={this.state.ball}
                foulHandler={this.foulHandler}
                resetStrikes={this.resetStrike}
                BallHandler={this.BallHandler}
                resetBall={this.resetBall}
                hitHandler={this.hitHandler}
                strikeHandler={this.strikeHandler}
                resetStrike={this.resetStrike}/>

            </div>
        )
    }

}

export default Dashboard;