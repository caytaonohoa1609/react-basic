import React from "react";

class ChildCoponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log('>>> handleOnClickDelete: ', job)
        this.props.deleteAJob(job)
    }

    // re-render
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional: ', check)
        return(
            // Chúng ta phải return() về một khối bằng dấu shortcut <>    </>
            <>
                {showJobs === false 
                    ? 
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    : 
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, idenx) => {
                                    return(
                                        <div key={item.id}>
                                            {item.title} - {item.salary} 
                                            <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
                
            </>
            // Props: viết tắt của từ Property giải quyết vấn đề truyền data của React

            // Khi chúng ta muốn trả về chỉ thẻ <div> bên trong mà không muốn sử dụng thẻ <div> bọc ngoài
            // Chúng ta sử dụng <React.Fragment> </React.Fragment>, và dấu shortcut cũng có thể được <>    </>
        )
    }

}

// const ChildCoponent = (props) => {
//     let { arrJobs } = props;

//     return(
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 500){
//                             return(
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }


export default ChildCoponent;

// Để sử dụng file ChildCoponent trong file App ta sử dụng keyword export default ChildCoponent