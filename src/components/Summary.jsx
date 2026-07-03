import { Quote } from 'lucide-react';

export default function Summary() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-academic-ink mb-2">Tổng kết & Suy ngẫm</h2>
        <p className="text-academic-muted text-lg">Nhìn lại hành trình học tập và cam kết phát triển.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-academic-border relative overflow-hidden">
          <Quote className="absolute top-4 right-4 text-academic-sidebar rotate-180" size={80} />
          <h3 className="text-xl font-bold text-academic-hero-blue mb-4 relative z-10">Kiến thức & Kỹ năng đã đạt được</h3>
          <p className="text-academic-muted leading-relaxed relative z-10 text-justify">
            "Thông qua việc hoàn thành 6 bài tập của học phần, em đã tiếp thu được nhiều kiến thức và kỹ năng quan trọng liên quan đến công nghệ số. Em hiểu rõ hơn về các thành phần của máy tính và thiết bị ngoại vi, cách khai thác thông tin trên Internet một cách hiệu quả, cũng như các nguyên tắc đánh giá độ tin cậy của nguồn thông tin. Bên cạnh đó, em còn được tiếp cận với trí tuệ nhân tạo (AI), hiểu được những lợi ích, hạn chế và cách sử dụng AI một cách phù hợp trong học tập.
<br />
Về kỹ năng, em đã nâng cao khả năng tìm kiếm, chọn lọc và xử lý thông tin từ nhiều nguồn khác nhau. Em biết cách xây dựng Prompt để tương tác hiệu quả với các công cụ AI, sử dụng các nền tảng số để giao tiếp và hợp tác trực tuyến, đồng thời phát triển kỹ năng sáng tạo nội dung số thông qua việc thiết kế và trình bày sản phẩm học tập. Ngoài ra, em cũng hiểu rõ hơn về an toàn thông tin, bảo vệ dữ liệu cá nhân và các nguyên tắc liêm chính học thuật trong môi trường số.
<br />
Những kiến thức và kỹ năng này không chỉ giúp em hoàn thành tốt các yêu cầu của học phần mà còn tạo nền tảng quan trọng cho quá trình học tập và phát triển nghề nghiệp trong tương lai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-academic-cyan border-x border-b border-x-academic-border border-b-academic-border">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Khó khăn gặp phải</h3>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
Trong quá trình thực hiện Portfolio và hoàn thành 6 bài tập của học phần, em đã gặp không ít khó khăn. Khó khăn đầu tiên là việc làm quen với nhiều công cụ và nền tảng số mới. Trước đây em chưa có nhiều kinh nghiệm sử dụng các công cụ xây dựng website, quản lý tài liệu trực tuyến hay các ứng dụng hỗ trợ học tập, vì vậy em phải dành nhiều thời gian để tìm hiểu cách sử dụng và khắc phục các lỗi phát sinh trong quá trình thực hiện.Bên cạnh đó, việc tìm kiếm và đánh giá nguồn thông tin đáng tin cậy cũng là một thách thức đối với em. Trên Internet có rất nhiều nguồn thông tin khác nhau, đôi khi có những nội dung không chính xác hoặc thiếu tính học thuật. Em phải học cách sử dụng các phương pháp tìm kiếm nâng cao, đối chiếu nhiều nguồn tài liệu và kiểm tra độ tin cậy trước khi sử dụng vào bài làm. Một khó khăn khác là việc sử dụng trí tuệ nhân tạo (AI) một cách hiệu quả. Ban đầu, em thường đưa ra những yêu cầu chưa rõ ràng nên kết quả nhận được chưa đáp ứng đúng mong muốn. Sau nhiều lần thử nghiệm và điều chỉnh Prompt, em mới dần hiểu cách đặt câu hỏi cụ thể và chi tiết hơn để khai thác tốt khả năng của AI. Đồng thời, em cũng phải học cách kiểm chứng lại thông tin do AI cung cấp để tránh những sai sót có thể xảy ra.Ngoài ra, việc quản lý thời gian để hoàn thành nhiều bài tập cùng lúc cũng là một thử thách lớn. Em phải cân bằng giữa các môn học khác, hoạt động cá nhân và tiến độ thực hiện Portfolio. Có những thời điểm em gặp áp lực vì phải chỉnh sửa nội dung nhiều lần để đảm bảo sản phẩm cuối cùng đạt chất lượng tốt nhất.Mặc dù gặp nhiều khó khăn, nhưng chính những thử thách đó đã giúp em học được cách tự nghiên cứu, kiên trì giải quyết vấn đề và chủ động hơn trong học tập.<br />
Nhờ vậy, em không chỉ hoàn thành các yêu cầu của học phần mà còn phát triển thêm nhiều kỹ năng cần thiết cho quá trình học tập và công việc trong tương lai.            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-academic-blue-light border-x border-b border-x-academic-border border-b-academic-border">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Kế hoạch hoàn thiện</h3>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
Sau khi hoàn thành Portfolio và các bài tập của học phần, em nhận thấy mình vẫn còn nhiều kỹ năng cần tiếp tục phát triển. Trong thời gian tới, em đặt mục tiêu nâng cao khả năng sử dụng các công cụ công nghệ số phục vụ học tập và công việc. Em sẽ chủ động tìm hiểu thêm về các phần mềm hỗ trợ học tập, quản lý công việc và thiết kế nội dung để nâng cao hiệu quả làm việc trong môi trường số.<br />
Đối với kỹ năng tìm kiếm và đánh giá thông tin, em sẽ duy trì thói quen sử dụng các nguồn tài liệu học thuật uy tín, đồng thời rèn luyện khả năng phân tích và kiểm chứng thông tin trước khi sử dụng. Điều này sẽ giúp em nâng cao chất lượng học tập và tránh tiếp nhận những thông tin thiếu chính xác.
Về việc sử dụng trí tuệ nhân tạo, em dự định tiếp tục học cách xây dựng Prompt hiệu quả hơn để khai thác tối đa lợi ích của AI trong học tập và nghiên cứu. Tuy nhiên, em sẽ luôn tuân thủ các nguyên tắc về liêm chính học thuật, sử dụng AI như một công cụ hỗ trợ thay vì thay thế hoàn toàn tư duy và sự sáng tạo của bản thân.
Là sinh viên ngành Biên phiên dịch tiếng Anh, em cũng sẽ ứng dụng những kỹ năng đã học vào việc tra cứu tài liệu song ngữ, sử dụng các công cụ hỗ trợ dịch thuật và nâng cao khả năng làm việc trực tuyến. Đồng thời, em sẽ tích cực rèn luyện kỹ năng giao tiếp, hợp tác và quản lý thời gian để chuẩn bị tốt hơn cho môi trường làm việc chuyên nghiệp trong tương lai.
Thông qua kế hoạch này, em mong muốn không ngừng hoàn thiện năng lực số, nâng cao khả năng tự học và thích nghi với những thay đổi của công nghệ, từ đó tạo nền tảng vững chắc cho quá trình học tập cũng như định hướng nghề nghiệp sau này.            </p>
          </div>
        </div>

        <div className="bg-academic-sidebar text-academic-ink p-8 rounded-2xl shadow-lg shadow-pink-100 mt-8 text-center border border-academic-border">
          <h3 className="text-xl font-bold text-academic-blue mb-3">Cam kết Liêm chính Học thuật</h3>
          <p className="text-academic-muted text-sm leading-relaxed max-w-2xl mx-auto italic">
             Em cam kết các nội dung và báo cáo trong portfolio này phản ánh đúng năng lực và quá trình thực hành của cá nhân.
                     
            Việc sử dụng AI được giới hạn ở vai trò công cụ hỗ trợ (gợi ý trình bày, sửa code, kiểm tra thông tin) và không thay thế cho tư duy tự học. 
                        Toàn bộ dữ liệu, sản phẩm và tiến trình làm bài tại đây đều là thật, không có hành vi làm giả minh chứng hay gian lận thông tin.
Trân trọng cảm ơn thầy cô đã dành thời gian đánh giá!

          </p>
        </div>
      </div>
    </div>
  );
}
