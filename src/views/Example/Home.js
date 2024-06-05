import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }
    
    // HOC: higher order component
    render() {
        console.log('>>> check props: ', this.props)
        return(
            <div>
                Hello world from Homepage with Con Tho Con Hy Vong
            </div>
        )
    }
}


export default withRouter(Home);