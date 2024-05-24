# DOM

Document Object Model - DOM ("Mô hình Đối tượng Tài liệu"), là một giao diện lập trình ứng dụng (API). DOM được dùng để truy xuất các tài liệu dạng HTML và XML, có dạng một cây cấu trúc dữ liệu.
![alt text](image.png)

## HTML DOM
![](image-1.png)
In HTML DOM (Document Object Model), every element is a node:

- A document is a document node.
- All HTML elements are element nodes.
- All HTML attributes are attribute nodes.
- Text inserted into HTML elements are text nodes.
- Comments are comment nodes.

## Cách javascript thông thường mutate HTML DOM
![alt text](image-2.png)

- `document.getElementById('id')`
- `document.getElementsByTagName('div')`
-` document.getElementsByName('tên_cần_tìm')`

## Nhược điểm khi mutate DOM
- The changes and updates to the DOM are fast because of its tree-like structure but re-rendering whole documents makes the DOM Slow.
- All UI components need to be re-rendered for every DOM update.

Do đó, cần có cách thay đổi, cập nhật giao diện tối ưu hơn => Đi tới Virtual DOM

# Virtual DOM

- VirtualDOM là cách React (hay Vue) sử dụng để cập nhật giao diện.
- VirtualDOM là cách tạo ra một mô hình DOM ảo, khi có update tới các phần tử trong VirtualDOM, nó sẽ thực hiện so sánh bằng thuật toán `diff` để tìm ra sự thay đổi và chỉ cập nhật các phần tử đó thay vì việc phải rerender cả page.

> Changing Virtual DOM should not be much different than changing the real DOM. The problem is in the aftermath: changes in real DOM trigger relayout and repaint, so the less we touch the real thing, the better.
