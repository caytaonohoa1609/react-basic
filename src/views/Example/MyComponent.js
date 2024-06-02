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
        name: 'Quang Huy',
        hyvong: 'in a little heart'
    }


    handleOnChangName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        console.log('hit the button')
        alert('click me')
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
    render() {

        // Ví dụ tạo một BIẾN bên trong HÀM render()
        // let name = 'Quang Huy'
        // Muốn dùng JavaScript bên trong HTML ta phải sử dụng dấu {}
        return(
            // Chúng ta phải return() về một khối bằng dấu shortcut <>    </>
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangName(event)}
                    />
                    My name is: { this.state.name }
                </div>
                <div className="second">
                    Anh Huy Cố lên dù chỉ một hơi thở cuối cùng, cũng đừng ngưng thôi nuôi hy vọng: { this.state.channel }
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>
                        Click me
                    </button>
                </div>
            </>

            // Khi chúng ta muốn trả về chỉ thẻ <div> bên trong mà không muốn sử dụng thẻ <div> bọc ngoài
            // Chúng ta sử dụng <React.Fragment> </React.Fragment>, và dấu shortcut cũng có thể được <>    </>
        )
    }

}

export default MyComponent;

// Để sử dụng file Mycomponent trong file App ta sử dụng keyword export default Mycomponent