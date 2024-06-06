import React from "react";
// import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Color from "../HOC/Color";
import logo from '../../assets/images/Songcho.jpg';

class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }
    
    // HOC: higher order component
    render() {
        console.log('>>> check props: ', this.props)
        return(
            <>
                <div>
                    Hello world from Homepage with Con Tho Con Hy Vong
                </div>
                <div>
                    <img src={logo} style={{ width: '800px', height: '400px', marginTop: '20px' }}/>
                </div>
            </>
        )
    }
}


// export default withRouter(Home);
export default Color(Home);