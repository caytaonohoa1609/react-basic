import React from "react";
import ChildCoponent from "./ChildCoponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
// Định nghĩa function trong class Component không cần khai báo function, react sẽ tự hiểu.


/**
 * State trong React là một đối tượng JavaScript đặc biệt được sử dụng để lưu trữ dữ liệu
 * riêng cho một component. Dữ liệu này có thể thay đổi theo thời gian, và khi state thay
 * đổi, React sẽ tự động cập nhật giao diện người dùng (UI) của component đó. 
 * 
 */
    state = {
        
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500'}, 
            { id: 'abcJob2', title: 'Testers', salary: '400'},
            { id: 'abcJob3', title: 'Project managers', salary: '1000'}
        ]
    }

    addNewJob = (job) => {
        console.log('>>> check job from parent: ', job)
        // let currenJob = this.state.arrJobs;
        // currenJob.push(job)

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currenJob
        })
    }


    deleteAJob = (job) => {
        let currenJob = this.state.arrJobs;
        currenJob = currenJob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJob
        })
    }

    componentDidUpdate(prevPorps, prevState) {
        console.log('>>> run did update: ', 'prev state: ', prevState, 'current state: ', this.state)
    }

    componentDidMount() {
        console.log('>>> run component did mount')
    }

/**
 * Hàm render sử dụng một cú pháp JSX.
 * JSX khác gì so với các ngôn ngữ lập trình khác, so với Anguler, View.
 * Là cho phép các bạn sử dụng một hàm JavaScript có thể trả ra một đống HTML
 * Và chúng ta đang viết HTML trong một file JavaScript chứ không phải code HTML
 * 
 * Thì như vậy vẫn chưa đủ với React.
 * React muốn mạnh được thì phải làm cách nào đó có thể render được một biến bên
 * trong đống template
 * 
 */

    

   

    // re-render
    render() {
        console.log('>>> call render: ', this.state)

        // Ví dụ tạo một BIẾN bên trong HÀM render()
        // let name = 'Quang Huy'
        // Muốn dùng JavaScript bên trong HTML ta phải sử dụng dấu {}
        return(
            // Chúng ta phải return() về một khối bằng dấu shortcut <>    </>
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                
                <ChildCoponent 
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
            // Truyền biến props vào component con
            // Truyền 2 biến props vào Childcoponent và phải thêm dấu {}


            // Khi chúng ta muốn trả về chỉ thẻ <div> bên trong mà không muốn sử dụng thẻ <div> bọc ngoài
            // Chúng ta sử dụng <React.Fragment> </React.Fragment>, và dấu shortcut cũng có thể được <>    </>
        )
    }

}

export default MyComponent;

// Để sử dụng file Mycomponent trong file App ta sử dụng keyword export default Mycomponent