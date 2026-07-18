import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronRight, ArrowLeft, FileText, X, ExternalLink, Download, Maximize2 } from 'lucide-react';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;

  // THÊM MỚI: State quản lý việc hiển thị Pop-up xem trước file
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });

  // THÊM MỚI: Hàm mở và đóng Pop-up Modal
  const openPreview = (e, url, type) => {
    e.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const closePreview = () => {
    setPreviewData({ isOpen: false, url: '', type: '' });
  };

  if (selectedProject) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in pb-10 relative">
        
        {/* KHỐI POP-UP (MODAL) HIỂN THỊ TRỰC TIẾP TRÊN WEB */}
        {previewData.isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 md:p-10 animate-fade-in print:hidden">
            <div className="bg-white w-full max-w-5xl h-full max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-slate-200">
              {/* Header Pop-up */}
              <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-slate-50">
                <h3 className="font-bold text-slate-800">
                  {previewData.type === 'pdf' ? 'Trình xem PDF (Báo cáo)' : 'Trình xem Hình ảnh (Screenshot)'}
                </h3>
                <div className="flex items-center gap-4">
                  <a href={previewData.url} target="_blank" rel="noreferrer" className="text-sm text-academic-blue hover:underline font-medium">
                    Mở thẻ mới
                  </a>
                  <button onClick={closePreview} className="p-1.5 bg-slate-200 hover:bg-academic-hero-blue hover:text-white text-slate-700 rounded-lg transition-colors">
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              {/* Nội dung nhúng file */}
              <div className="flex-1 bg-slate-200 flex justify-center items-center overflow-auto p-4">
                {previewData.type === 'pdf' ? (
                  <iframe 
                    src={previewData.url} 
                    title="PDF Preview" 
                    className="w-full h-full rounded shadow-sm border-none bg-white"
                  />
                ) : (
                  <img 
                    src={previewData.url} 
                    alt="Minh chứng" 
                    className="max-w-full max-h-full object-contain rounded shadow-sm bg-white"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Nút quay lại */}
        <button 
          onClick={() => setSelectedProject(null)}
          className="flex items-center gap-2 text-academic-muted hover:text-academic-hero-blue mb-6 font-medium bg-academic-card px-4 py-2 rounded-lg shadow-sm border border-academic-border w-fit transition-colors"
        >
          <ArrowLeft size={18} /> Quay lại danh sách
        </button>

        <div className="bg-academic-card rounded-2xl shadow-sm border border-academic-border overflow-hidden">
          {/* Detail Header - academic language and culture theme */}
          <div className="bg-gradient-to-br from-academic-navy via-academic-sidebar to-academic-card p-8 text-academic-ink relative overflow-hidden border-b border-academic-border">
            
            {/* Restrained open-book and page-line watermark */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-10 scale-125 translate-x-1/4 -translate-y-1/4 z-0 pointer-events-none text-academic-cyan">
              <svg viewBox="0 0 500 500" className="w-full h-full" fill="none" stroke="currentColor">
                <path d="M250 150 C210 115 150 112 105 135 V330 C155 305 210 312 250 350 Z" strokeWidth="4" />
                <path d="M250 150 C290 115 350 112 395 135 V330 C345 305 290 312 250 350 Z" strokeWidth="4" />
                <path d="M250 150 V350" strokeWidth="3" />
                <path d="M135 180 C175 165 210 170 230 185 M135 220 C175 205 210 210 230 225 M135 260 C175 245 210 250 230 265" strokeWidth="2" />
                <path d="M365 180 C325 165 290 170 270 185 M365 220 C325 205 290 210 270 225 M365 260 C325 245 290 250 270 265" strokeWidth="2" />
              </svg>
            </div>

            {/* Lớp z-10: Nội dung hiển thị nổi lên trên */}
            <div className="relative z-10">
              <span className="px-3 py-1 bg-academic-sidebar text-academic-blue text-xs font-bold rounded uppercase tracking-wider mb-4 inline-block backdrop-blur-sm border border-academic-border">
                {selectedProject.chapter}
              </span>
              <h2 className="text-3xl font-bold mb-3 leading-tight drop-shadow-md">{selectedProject.title}</h2>
              <p className="text-academic-muted text-lg max-w-3xl">{selectedProject.shortDesc}</p>
            </div>
          </div>

          {/* Detail Body */}
          <div className="p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-6 bg-academic-blue rounded-full"></div>
                  Mục tiêu nhiệm vụ
                </h3>
                <p className="text-academic-muted leading-relaxed bg-academic-sidebar p-4 rounded-xl border border-academic-border">
                  {selectedProject.target}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-6 bg-green-500 rounded-full"></div>
                  Kỹ năng áp dụng
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills?.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-academic-sidebar text-academic-muted text-sm font-medium rounded-lg border border-academic-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 border-b pb-2">Quá trình thực hiện</h3>
              <p className="text-slate-700 leading-relaxed text-justify">
                {selectedProject.process}
              </p>
            </div>

            {/* Evidence Section - Render trực tiếp Báo cáo PDF */}
            <div className="bg-academic-sidebar p-6 rounded-2xl border border-academic-border space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-academic-border">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-red-100/80 text-red-600 rounded-xl border border-red-200 shadow-sm">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      Sản phẩm & Minh chứng
                      <span className="text-xs font-semibold px-2.5 py-0.5 bg-red-50 text-red-600 border border-red-200 rounded-full">
                        PDF Report
                      </span>
                    </h3>
                    <p className="text-xs text-academic-muted mt-0.5">Tài liệu báo cáo chi tiết được nhúng trực tiếp bên dưới</p>
                  </div>
                </div>

                {/* Actions Bar */}
                {selectedProject.report && selectedProject.report !== "Sẽ cập nhật sau" && selectedProject.report !== "Không yêu cầu" && (
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <a 
                      href={selectedProject.report} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-700 hover:text-academic-blue text-xs font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
                      title="Mở trong thẻ mới"
                    >
                      <ExternalLink size={14} /> <span className="hidden sm:inline">Mở thẻ mới</span>
                    </a>
                    <a 
                      href={selectedProject.report} 
                      download 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-academic-blue text-white text-xs font-semibold rounded-lg hover:bg-academic-hero-blue transition-colors shadow-sm"
                      title="Tải tệp PDF"
                    >
                      <Download size={14} /> <span>Tải PDF</span>
                    </a>
                    <button 
                      onClick={(e) => openPreview(e, selectedProject.report, 'pdf')}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-white text-xs font-semibold rounded-lg hover:bg-slate-700 transition-colors shadow-sm"
                      title="Xem toàn màn hình"
                    >
                      <Maximize2 size={14} /> <span className="hidden sm:inline">Toàn màn hình</span>
                    </button>
                  </div>
                )}
              </div>

              {/* PDF Container / Inline Viewer */}
              {selectedProject.report === "Sẽ cập nhật sau" || !selectedProject.report ? (
                <div className="bg-academic-card p-10 rounded-xl border-2 border-dashed border-academic-border flex flex-col items-center justify-center text-center gap-3">
                  <FileText className="text-amber-400" size={48} />
                  <div>
                    <h4 className="font-bold text-slate-700 text-base">Báo cáo PDF đang được cập nhật</h4>
                    <p className="text-sm text-slate-500 mt-1">Tài liệu minh chứng cho bài học này sẽ sớm được tải lên.</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 rounded-full mt-2">Đang hoàn thiện</span>
                </div>
              ) : selectedProject.report === "Không yêu cầu" ? (
                <div className="bg-academic-card p-10 rounded-xl border-2 border-dashed border-academic-border flex flex-col items-center justify-center text-center gap-3">
                  <FileText className="text-slate-400" size={48} />
                  <div>
                    <h4 className="font-bold text-slate-700 text-base">Không yêu cầu Báo cáo PDF</h4>
                    <p className="text-sm text-slate-500 mt-1">Bài học này không yêu cầu nộp file báo cáo PDF.</p>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-[550px] md:h-[700px] rounded-xl overflow-hidden border border-slate-200 bg-slate-900/5 shadow-inner">
                  <iframe 
                    src={`${selectedProject.report}#toolbar=1&navpanes=0`} 
                    title={`Báo cáo PDF - ${selectedProject.title}`} 
                    className="w-full h-full border-0 rounded-xl bg-white"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="max-w-6xl mx-auto pb-10 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Các bài tập thành phần</h2>
        <p className="text-slate-600 text-lg">Danh sách các bài học trọng tâm từ Chương 1 đến Chương 6.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-academic-card rounded-2xl shadow-sm border border-academic-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-4">
                <span className="px-2.5 py-1 bg-academic-sidebar text-academic-blue text-xs font-bold rounded uppercase tracking-wide border border-academic-border">
                  {project.chapter}
                </span>
                <span className="px-2 py-1 bg-amber-50 text-green-600 text-xs font-semibold rounded border border-amber-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Hoàn Thiện
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2">{project.title}</h3>
              <p className="text-slate-500 text-sm mb-4 line-clamp-3">{project.shortDesc}</p>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.skills?.slice(0, 2).map((skill, idx) => (
                  <span key={idx} className="text-[11px] font-medium px-2 py-1 bg-academic-sidebar text-academic-muted rounded">
                    {skill}
                  </span>
                ))}
                {project.skills?.length > 2 && <span className="text-[11px] font-medium px-2 py-1 bg-academic-sidebar text-academic-muted rounded">+{project.skills.length - 2}</span>}
              </div>
            </div>
            
            <button 
              onClick={() => setSelectedProject(project)}
              className="w-full py-4 bg-academic-sidebar text-academic-hero-blue font-semibold border-t border-academic-border hover:bg-academic-blue-light hover:text-academic-ink transition-colors flex justify-center items-center gap-2 group"
            >
              Xem chi tiết báo cáo <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
