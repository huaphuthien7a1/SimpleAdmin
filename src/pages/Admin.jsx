import { useState } from "react";

const listBookDefault = [
  {
    id: 0,
    name: "Muôn Kiếp Nhân Sinh - Many Times, Many Lives (Bìa Cứng)",
    description: `Muôn Kiếp Nhân Sinh - Many Times, Many Lives (Bìa Cứng)
        - Cuốn sách đầu tiên về Nhân quả và Luân hồi do một Giáo sư người Việt viết.`,
    price: 10000,
    image:
      "https://cdn0.fahasa.com/media/catalog/product/m/u/muonkiepnhansinh-biacung1.jpg",
  },
  {
    id: 1,
    name: "Tâm Lý Học Phạm Tội - Phác Họa Chân Dung Kẻ Phạm Tội",
    description: `Tội phạm, nhất là những vụ án mạng, luôn là một chủ đề thu hút sự quan tâm của công chúng, khơi gợi sự hiếu kỳ của bất cứ ai. Một khi đã bắt đầu theo dõi vụ án, hẳn bạn không thể không quan tâm tới kết cục, đặc biệt là cách thức và động cơ của kẻ sát nhân, từ những vụ án phạm vi hẹp cho đến những vụ án làm rúng động cả thế giới.

    Lấy 36 vụ án CÓ THẬT kinh điển nhất trong hồ sơ tội phạm của FBI, “Tâm lý học tội phạm - phác họa chân dung kẻ phạm tội” mang đến cái nhìn toàn cảnh của các chuyên gia về chân dung tâm lý tội phạm. Trả lời cho câu hỏi: Làm thế nào phân tích được tâm lý và hành vi tội phạm, từ đó khôi phục sự thật thông qua các manh mối, từ hiện trường vụ án, thời gian, dấu tích,… để tìm ra kẻ sát nhân thực sự. 
    
    Đằng sau máu và nước mắt là các câu chuyện rợn tóc gáy về tội ác, góc khuất xã hội và những màn đấu trí đầy gay cấn giữa điều tra viên và kẻ phạm tội. Trong số đó có những con quỷ ăn thịt người; những cô gái xinh đẹp nhưng xảo quyệt; và cả cách trả thù đầy man rợ của các nhà khoa học,… Một số đã sa vào lưới pháp luật ngay khi chúng vừa ra tay, nhưng cũng có những kẻ cứ vậy ngủ yên hơn hai mươi năm. 
    
    Bằng giọng văn sắc bén, “Tâm lý học tội phạm - phác họa chân dung kẻ phạm tội” hứa hẹn dẫn dắt người đọc đi qua các cung bậc cảm xúc từ tò mò, ngạc nhiên đến sợ hãi, hoang mang tận cùng. Chúng ta sẽ lần tìm về quá khứ để từng bước gỡ những nút thắt chưa được giải, khiến ta "ngạt thở" đọc tới tận trang cuối cùng. 
    
    Hy vọng cuốn sách sẽ giúp bạn có cái nhìn sâu sắc, rõ ràng hơn về bộ môn tâm lý học tội phạm và có thể rèn luyện thêm sự tư duy, nhạy bén.
    
    Mã hàng	8935325001819
    Tên Nhà Cung Cấp	AZ Việt Nam
    Tác giả	Diệp Hồng Vũ
    Người Dịch	Đỗ Ái Nhi
    NXB	NXB Thanh Niên
    Năm XB	2021
    Ngôn Ngữ	Tiếng Việt
    Trọng lượng (gr)	300
    Kích Thước Bao Bì	24 x 16 cm
    Số trang	280
    Hình thức	Bìa Mềm
    Sản phẩm hiển thị trong	
    AZ Việt Nam
    Đồ Chơi Cho Bé - Giá Cực Tốt
    Tủ Sách Tâm Lý Kỹ Năng
    Sản phẩm bán chạy nhất	Top 100 sản phẩm Tâm lý bán chạy của tháng
    Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...
    TÂM LÝ HỌC TỘI PHẠM - PHÁC HỌA CHÂN DUNG KẺ PHẠM TỘI
    
    Tội phạm, nhất là những vụ án mạng, luôn là một chủ đề thu hút sự quan tâm của công chúng, khơi gợi sự hiếu kỳ của bất cứ ai. Một khi đã bắt đầu theo dõi vụ án, hẳn bạn không thể không quan tâm tới kết cục, đặc biệt là cách thức và động cơ của kẻ sát nhân, từ những vụ án phạm vi hẹp cho đến những vụ án làm rúng động cả thế giới.
    
    Lấy 36 vụ án CÓ THẬT kinh điển nhất trong hồ sơ tội phạm của FBI, “Tâm lý học tội phạm - phác họa chân dung kẻ phạm tội” mang đến cái nhìn toàn cảnh của các chuyên gia về chân dung tâm lý tội phạm. Trả lời cho câu hỏi: Làm thế nào phân tích được tâm lý và hành vi tội phạm, từ đó khôi phục sự thật thông qua các manh mối, từ hiện trường vụ án, thời gian, dấu tích,… để tìm ra kẻ sát nhân thực sự. `,
    price: 12000,
    image:
      "https://cdn0.fahasa.com/media/catalog/product/p/h/ph_c-h_a-ch_n-dung-k_-ph_m-t_i.jpg",
  },
  {
    id: 2,
    name: "Hành Tinh Của Một Kẻ Nghĩ Nhiều",
    description: `Hành Tinh Của Một Kẻ Nghĩ Nhiều

    “Đó là mùa hè năm 2020, mùa hè của COVID-19 và một ngàn vạn khủng hoảng tuổi đôi mươi. Đó là mùa hè mình bắt chuyến bay sớm nhất có thể vào ngày 20 tháng 3 để chạy khỏi nước Anh đang bùng dịch, bị kẹt lại sân bay Bangkok trong 24 giờ đồng hồ vì chuyến bay quá cảnh về Sài Gòn bị huỷ..
    
    Đó là mỗi đêm mùa hè nằm trên giường stress chuyện deadline luận văn, stress chuyện thất nghiệp không kiếm ra tiền, stress chuyện bỏ lỡ cơ hội thực tập giúp ích cho sự nghiệp của mình, stress chuyện học hành dở dang - không biết bao giờ mới có thể quay lại Anh và hoàn thành tấm bằng đại học, stress chuyện tồn tại một cách mơ hồ, không biết mình là ai.”`,

    price: 9000,
    image:
      "https://cdn0.fahasa.com/media/catalog/product/h/_/h_nh-tinh-c_a-m_t-k_-ngh_-nhi_u-tr_c-1-1.jpg",
  },
  {
    id: 3,
    name: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải (Tái Bản 2021)",
    description: `NẾU MỘT NGÀY ANH THẤY TÔI ĐIÊN, THỰC RA CHÍNH LÀ ANH ĐIÊN ĐẤY!

    Hỡi những con người đang oằn mình trong cuộc sống, bạn biết gì về thế giới của mình? Là vô vàn thứ lý thuyết được các bậc vĩ nhân kiểm chứng, là luật lệ, là cả nghìn thứ sự thật bọc trong cái lốt hiển nhiên, hay những triết lý cứng nhắc của cuộc đời?
    
    Lại đây, vượt qua thứ nhận thức tẻ nhạt bị đóng kín bằng con mắt trần gian, khai mở toàn bộ suy nghĩ, để dòng máu trong bạn sục sôi trước những điều kỳ vĩ, phá vỡ mọi quy tắc. Thế giới sẽ gọi bạn là kẻ điên, nhưng vậy thì có sao? Ranh giới duy nhất giữa kẻ điên và thiên tài chẳng qua là một sợi chỉ mỏng manh: Thiên tài chứng minh được thế giới của mình, còn kẻ điên chưa kịp làm điều đó. Chọn trở thành một kẻ điên để vẫy vùng giữa nhân gian loạn thế hay khóa hết chúng lại, sống mãi một cuộc đời bình thường khiến bạn cảm thấy hạnh phúc hơn?
    
    Thiên tài bên trái, kẻ điên bên phải là cuốn sách dành cho những người điên rồ, những kẻ gây rối, những người chống đối, những mảnh ghép hình tròn trong những ô vuông không vừa vặn… những người nhìn mọi thứ khác biệt, không quan tâm đến quy tắc. Bạn có thể đồng ý, có thể phản đối, có thể vinh danh hay lăng mạ họ, nhưng điều duy nhất bạn không thể làm là phủ nhận sự tồn tại của họ. Đó là những người luôn tạo ra sự thay đổi trong khi hầu hết con người chỉ sống rập khuôn như một cái máy. Đa số đều nghĩ họ thật điên rồ nhưng nếu nhìn ở góc khác, ta lại thấy họ thiên tài. Bởi chỉ những người đủ điên nghĩ rằng họ có thể thay đổi thế giới mới là những người làm được điều đó. 
    
    Chào mừng đến với thế giới của những kẻ điên.
    
    Mã hàng	8936186546815
    Tên Nhà Cung Cấp	AZ Việt Nam
    Tác giả	Cao Minh
    Người Dịch	Thu Hương
    NXB	NXB Thế Giới
    Năm XB	2021
    Ngôn Ngữ	Tiếng Việt
    Trọng lượng (gr)	450
    Kích Thước Bao Bì	24 x 16 cm
    Số trang	424
    Hình thức	Bìa Mềm
    Sản phẩm hiển thị trong	
    AZ Việt Nam
    Đồ Chơi Cho Bé - Giá Cực Tốt
    Tủ Sách Tâm Lý Kỹ Năng
    Sản phẩm bán chạy nhất	Top 100 sản phẩm Tâm lý bán chạy của tháng
    Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...
    Thiên Tài Bên Trái, Kẻ Điên Bên Phải
    
    NẾU MỘT NGÀY ANH THẤY TÔI ĐIÊN, THỰC RA CHÍNH LÀ ANH ĐIÊN ĐẤY!
    
    Hỡi những con người đang oằn mình trong cuộc sống, bạn biết gì về thế giới của mình? Là vô vàn thứ lý thuyết được các bậc vĩ nhân kiểm chứng, là luật lệ, là cả nghìn thứ sự thật bọc trong cái lốt hiển nhiên, hay những triết lý cứng nhắc của cuộc đời?`,
    price: 13000,
    image:
      "https://cdn0.fahasa.com/media/catalog/product/b/_/b_a-thi_n-t_i-b_n-tr_i-k_-_i_n-b_n-ph_i_1.jpg",
  },
];

const AdminPage = () => {
  const [listBook, setListBook] = useState(listBookDefault);
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const [currentBook, setCurrentBook] = useState(null);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook === null) {
      setListBook((prevState) => [
        ...prevState,
        { ...values, id: getRandomInt(10000) },
      ]);
      setValues({
        name: "",
        description: "",
        price: 0,
        image: "",
      });
    } else {
      const newListBook = listBook.map((book) => {
        if (book.id === currentBook) {
          return { ...values, id: book.id };
        }
        return book;
      });
      setListBook(newListBook);
      setValues({
        name: "",
        description: "",
        price: 0,
        image: "",
      });
      setCurrentBook(null);
    }
  };
  const deleteBook = (id) => {
    const newListBook = listBook.filter((book) => book.id !== id);
    setListBook(newListBook);
  };
  return (
    <div className="bg-gray-50 px-10 pb-10">
      <h1 className="text-3xl font-bold mt-10">Quản lý sách</h1>
      <div className="h-[1px] bg-black mb-2 mt-4"></div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-y-1 w-full">
          <label htmlFor="name">Tên sách:</label>
          <input
            required
            name="name"
            value={values.name}
            onChange={handleChange}
            type="text"
            id="name"
            className="focus:outline-none rounded-lg px-2 py-2 border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <label htmlFor="description">Mô tả sách:</label>
          <input
            required
            name="description"
            value={values.description}
            onChange={handleChange}
            type="text"
            id="description"
            className="focus:outline-none rounded-lg px-2 py-2 border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <label htmlFor="price">Giá sách:</label>
          <input
            required
            name="price"
            value={values.price}
            onChange={handleChange}
            type="number"
            id="price"
            className="focus:outline-none rounded-lg px-2 py-2 border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-y-1 w-full">
          <label htmlFor="image">Link hình sách:</label>
          <input
            required
            name="image"
            value={values.image}
            onChange={handleChange}
            type="text"
            id="image"
            className="focus:outline-none rounded-lg px-2 py-2 border border-gray-300"
          />
        </div>
        <div className="flex justify-end col-span-2">
          <button
            type="submit"
            className="bg-blue-600 py-2 px-4 rounded-lg text-white mt-6 hover:bg-blue-700 w-fit">
            {currentBook === null ? "Tạo sách" : "Cập nhật"}
          </button>
        </div>
      </form>

      <div className="h-[1px] bg-black mb-2 mt-4"></div>
      <p className="text-lg mb-2">Danh sách sản phẩm</p>
      <div className="grid grid-cols-4 gap-2">
        {listBook.map((book, index) => (
          <div
            key={index}
            className="cursor-pointer flex flex-col rounded-lg overflow-hidden border border-gray-300">
            <div className="overflow-hidden">
              <img
                className="object-cover hover:scale-125 ease-linear duration-200"
                src={book.image}
                alt="book-item"
              />
            </div>
            <div className="py-2 px-4 bg-gray-200">
              <p className="font-semibold text-xl line-clamp-2">{book.name}</p>
              <p className="mt-1 mb-2 line-clamp-3">{book.description}</p>
              <p className="font-semibold text-red-600">{book.price}đ</p>
              <div className="flex gap-x-2 pt-2 pb-1">
                <button
                  onClick={() => {
                    setCurrentBook(book.id);
                    setValues(book);
                  }}
                  className="bg-blue-600 py-2 px-4 rounded-lg text-white hover:bg-blue-700 w-fit">
                  Sửa
                </button>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="bg-red-600 py-2 px-4 rounded-lg text-white hover:bg-red-700 w-fit">
                  Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
