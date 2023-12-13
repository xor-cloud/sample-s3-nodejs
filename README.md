# Hướng dẫn sử dụng

### Cài đặt thư viện
```bash
    yarn install 
```

### Chạy trương trình
```bash
    node ten_tinh_nang.js
```
### Yêu cầu
- Truyền tham số đầy đủ cho khai báo client
```bash
    const s3Client = new S3Client({
        region: "null", # Tùy theo region default null
        credentials: {
        accessKeyId: "example_access_key",
        secretAccessKey: "example_secret_access_key",
        },
        endpoint: "https://s3.xorcloud.net",
    });
```

### Tính năng cụ thể 
```bash
    # Khởi tạo bucket mới
    - create_bucket.js 

    # Xem tất cả bucket đang có
    - get_all_bucket.js 

     # Xem các policy của bucket
    - get_policy.js

    # Cập nhật policy cho bucket
    - update_policy.js
    
     # Đưa file lên Bucket
    - upload_file.js
```