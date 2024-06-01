import React from "react";

class MyComponent extends React.Component {
// Định nghĩa function trong class Component không cần khai báo function, react sẽ tư hiểu.
    render() {
        return(
            <div>hello my component Do Quang Huy</div>
        )
    }

}

export default MyComponent;

// Để sử dụng file Mycomponent trong file App ta sử dụng keyword export default Mycomponent