1. Tạo project Express với template/view engine là HBS (Handlebars)
npx express-generator --view=hbs
2. Cài đặt tất cả các thư viện cần thiết để chạy project
npm install
3. Cài đặt thư viện nodemon (node monitor) để tự động reload server khi update code
npm install nodemon -g
4. Cài đặt thư viện mongoose để kết nối và làm việc với MongoDB
npm install mongoose --save
5. Cài đặt thư viện body-parser để lấy dữ liệu từ client-side (form, URL)
npm install body-parser --save
6A. Chạy project (khi đang code)
nodemon
6B. Chay project (khi code xong)
node app