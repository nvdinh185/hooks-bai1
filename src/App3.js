import PostItem from "./components/PostItem";

export default function App() {

  const listNews = [
    {
      id: 1,
      title: 'Trung Quốc điều thêm 17 tàu đến khu vực giàn khoan',
      content: `Để bảo vệ giàn khoan, Trung Quốc đã điều thêm 17 tàu các loại so với hôm trước, sẵn
    sàng đâm va vào tàu Việt Nam`,
      image: 'h1.jpg'
    },
    {
      id: 2,
      title: 'Trọng tài - Vết đen của kỳ World Cup sôi động',
      content: `World Cup 2014 chưa đi hết lượt đấu vòng bảng nhưng các trọng tài đẳng cấp FIFA đã có
    tới 4 trận bị chỉ trích dữ dội`,
      image: 'h2.jpg'
    },
    {
      id: 3,
      title: 'Những mỹ nhân Việt duyên dáng ở tuổi tứ tuần',
      content: `Việt Trinh, Thu Hà, Hồng Nhung, Thanh Lam... vẫn giữ được nét thanh xuân, tươi trẻ và cuốn hút
    theo thời gian nhờ phong cách làm đẹp tinh tế.`,
      image: 'h3.jpg'
    },
    {
      id: 4,
      title: 'Chuyển nhượng 17/6: Arsenal mua Balotelli, tráo hàng Man Utd',
      content: `Đội bóng thành London đang đẩy mạnh việc tuyển những vị trí còn yếu trong đội hình
    ở cả 3 tuyến`,
      image: 'h4.jpg'
    },
    {
      id: 5,
      title: 'Chuyên gia Anh tin chắc vị trí MH370 rơi',
      content: `Các chuyên gia thuộc công ty viễn thông Anh Inarat cho rằng họ xác định được vị trí
    chiếc máy bay MH370 đã rơi xuống`,
      image: 'h5.jpg'
    }
  ]

  const listCats = [
    {
      id: 1,
      name: 'Thời sự'
    },
    {
      id: 2,
      name: 'Góc nhìn'
    },
    {
      id: 3,
      name: 'Thế giới'
    },
    {
      id: 4,
      name: 'Kinh doanh'
    }
  ]

  return (
    <div>
      <a href="#" title="header.jpg">
        <img src="/images/header.jpg" alt="header.jpg" />
      </a>
      <ul>
        <li>
          <a href="#" title="Trang chủ">
            Trang chủ
          </a>
        </li>
        <li>
          <a href="#" title="Tin tức">
            Tin tức
          </a>
        </li>
      </ul>
      <div>
        <h3>Danh mục tin</h3>
        <ul>
          {listCats.map(cat =>
            <li>
              <a href="#" title={cat.name}>
                {cat.name}
              </a>
            </li>
          )}
        </ul>
      </div>
      <div>
        <h2>Tin tức</h2>
        <ul>
          {listNews.map(news =>
            <PostItem
              key={news.id}
              title={news.title}
              content={news.content}
              image={news.image}
            />
          )}
        </ul>
      </div>
      <a href="#" title="Trang 1">Trang 1</a>|
      <a href="#" title="Trang 2">Trang 2</a>|
      <a href="#" title="Trang 3">Trang 3</a>|
      <a href="#" title="Trang 4">Trang 4</a>
    </div>
  )
}
