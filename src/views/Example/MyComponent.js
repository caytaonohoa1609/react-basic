import React from "react";

class MyComponent extends React.Component {
// Định nghĩa function trong class Component không cần khai báo function, react sẽ tự hiểu.


/**
 * State trong React là một đối tượng JavaScript đặc biệt được sử dụng để lưu trữ dữ liệu
 * riêng cho một component. Dữ liệu này có thể thay đổi theo thời gian, và khi state thay
 * đổi, React sẽ tự động cập nhật giao diện người dùng (UI) của component đó. 
 * 
 */
    state = {
        firstName: '',
        lastName: ''
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

    hendleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    hendleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    hendleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input: ', this.state)
    }

    // re-render
    render() {
        console.log('>>> call render: ', this.state)

        // Ví dụ tạo một BIẾN bên trong HÀM render()
        // let name = 'Quang Huy'
        // Muốn dùng JavaScript bên trong HTML ta phải sử dụng dấu {}
        return(
            // Chúng ta phải return() về một khối bằng dấu shortcut <>    </>
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                        onChange={(event) => this.hendleChangeFirstName(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.lastName}
                        onChange={(event) => this.hendleChangeLastName(event)}
                    />
                    <br/><br/>
                    <input type="submit" 
                        onClick={(event) => this.hendleSubmit(event)}
                    />
                </form> 

            </>

            // Khi chúng ta muốn trả về chỉ thẻ <div> bên trong mà không muốn sử dụng thẻ <div> bọc ngoài
            // Chúng ta sử dụng <React.Fragment> </React.Fragment>, và dấu shortcut cũng có thể được <>    </>
        )
    }

}

export default MyComponent;

// Để sử dụng file Mycomponent trong file App ta sử dụng keyword export default Mycomponent