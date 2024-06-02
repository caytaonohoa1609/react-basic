import React from "react";

// class ChildCoponent extends React.Component {
// // Định nghĩa function trong class Component không cần khai báo function, react sẽ tự hiểu.


// /**
//  * State trong React là một đối tượng JavaScript đặc biệt được sử dụng để lưu trữ dữ liệu
//  * riêng cho một component. Dữ liệu này có thể thay đổi theo thời gian, và khi state thay
//  * đổi, React sẽ tự động cập nhật giao diện người dùng (UI) của component đó. 
//  * 
//  */
//     state = {
//         firstName: '',
//         lastName: ''
//     }




// /**
//  * Hàm render sử dụng một cú pháp JSX.
//  * JSX khác gì so với các ngôn ngữ lập trình khác, so với Anguler, View.
//  * Là cho phép các bạn sử dụng một hàm JavaScript có thể trả ra một đống HTML
//  * Và chúng ta đang viết HTML trong một file JavaScript chứ không phải code HTML
//  * 
//  * Thì như vậy vẫn chưa đủ với React.
//  * React muốn mạnh được thì phải làm cách nào đó có thể render được một biến bên
//  * trong đống template
//  * 
//  */

//     hendleChangeFirstName = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }

//     hendleChangeLastName = (event) => {
//         this.setState({
//             lastName: event.target.value
//         })
//     }

//     hendleSubmit = (event) => {
//         event.preventDefault()
//         console.log('>>> check data input: ', this.state)
//     }

//     // re-render
//     render() {
//         console.log('>>> check props: ', this.props)

//         // Ví dụ tạo một BIẾN bên trong HÀM render()
//         // let name = 'Quang Huy'
//         // Muốn dùng JavaScript bên trong HTML ta phải sử dụng dấu {}

//         // let name = this.props.name;
//         // let age = this.props.age;

//         let { name, age, address, arrJobs } = this.props;

//         /** Vòng lặp map
//          * arrJobs.map((item, index) => {
//          *  
//          * })
//          * 
//          * item chính là từng phần tử trong mảng
//          * idex chính chỉ chỉ số trong mảng
//          */
//         return(
//             // Chúng ta phải return() về một khối bằng dấu shortcut <>    </>
//             <>
//                 <div className="job-lists">
//                     {
//                         arrJobs.map((item, idenx) => {
//                             return(
//                                 <div key={item.id}>
//                                     {item.id} - {item.title} - {item.salary}    
//                                 </div>
//                             )
//                         })
//                     }
                    

//                 </div>
//             </>
//             // Props: viết tắt của từ Property giải quyết vấn đề truyền data của React

//             // Khi chúng ta muốn trả về chỉ thẻ <div> bên trong mà không muốn sử dụng thẻ <div> bọc ngoài
//             // Chúng ta sử dụng <React.Fragment> </React.Fragment>, và dấu shortcut cũng có thể được <>    </>
//         )
//     }

// }

const ChildCoponent = (props) => {
    let { arrJobs } = props;

    return(
        <>
            <div className="job-lists">
                {
                    arrJobs.map((item, index) => {
                        return(
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default ChildCoponent;

// Để sử dụng file ChildCoponent trong file App ta sử dụng keyword export default ChildCoponent