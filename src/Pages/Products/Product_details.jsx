import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Product_details = () => {
    return (
        <div>
            <Row>
                <Col xs={12} sm={12} md={8} lg={8} className='product__detail'>
                    <div className='product__detail__title'>
                        <p>Chi tiết sản phẩm</p>
                    </div>
                    <div className='product__detail__explain'>
                        <strong>
                            Áo thun polo coolmax với đặc tính sợi vải mát lạnh giúp bạn có thể thoải mái tham gia các hoạt động thể thao và mặc mát mẻ trong cả ngày. Sản phẩm được cho ra mắt đúng vào thời điểm xuân hè khi thời tiết đang ấm dần hứa hẹn sẽ là sản phẩm vô cùng hấp dẫn và được nhiều người đón chờ.
                        </strong>
                        <h1>1. Đặc điểm áo polo coolmax</h1>
                        <h2>1.1. Sợi vải mát lạnh tạo sự thông thoáng khi mặc</h2>
                        <p>Được biết đến là sợi vải mang tính đột phá trong ngành công nghiệp sợi thế giới. Sợi coolmax với cấu trúc tạo thành các rãnh thoát khi giúp cơ thể bạn luôn thông thoáng, mát lạnh ngay khi cả đang hoạt động mạnh.</p>
                        <h2>1.2. Kiểu dáng suông phối cổ trẻ trung</h2>
                        <p>Áo polo thiết kế tay lỡ kết hợp với kiểu dáng áo suông cơ bản giúp người mặc luôn được thoải mái khi mặc và phù hợp với mọi hoạt động hàng ngày.</p>
                        <p>Không chỉ có vậy, với điểm nhấn là phần nẹp phối màu tạo được nét tinh tế, nhẹ nhàng trên áo. Áo polo được làm bo cả trên cổ áo và tay cùng những đường nét dệt biến tấu chi tiết, tỉ mỉ giúp áo có được độ hoàn chỉnh tối đa và vô cùng chỉn chu khi mặc.</p>
                        <h2>1.3. Màu sắc đa dạng cho bạn lựa chọn</h2>
                        <p>Thiết kế áo phông trơn đơn giản cùng màu sắc đa dạng với tone màu sáng bắt mắt giúp bạn dễ dàng làm mới phong cách thời trang của mình mỗi ngày. Bộ sưu tập màu sắc trên những chiếc áo polo coolmax luôn mang đến cảm giác mát lạnh, thông thoáng cho người mặc.</p>
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Product_details
