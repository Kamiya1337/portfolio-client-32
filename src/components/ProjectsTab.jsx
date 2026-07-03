import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronRight, ArrowLeft, FileText, Image as ImageIcon, X, ExternalLink } from 'lucide-react';

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
                  <button onClick={closePreview} className="p-1.5 bg-slate-200 hover:bg-rose-500 hover:text-white text-slate-700 rounded-lg transition-colors">
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
          className="flex items-center gap-2 text-academic-muted hover:text-academic-blue mb-6 font-medium bg-white px-4 py-2 rounded-lg shadow-sm border border-academic-border w-fit transition-colors"
        >
          <ArrowLeft size={18} /> Quay lại danh sách
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-academic-border overflow-hidden">
          {/* Detail Header - academic language and culture theme */}
          <div className="bg-gradient-to-br from-academic-navy via-academic-sidebar to-white p-8 text-academic-ink relative overflow-hidden border-b border-academic-border">
            
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

            {/* Evidence Section - ĐÃ ĐỒNG BỘ POP-UP & CÓ LẠI LINK DRIVE */}
            <div className="bg-academic-sidebar p-6 rounded-xl border border-academic-border">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Sản phẩm & Minh chứng</h3>
              
              {/* Sửa md:grid-cols-2 thành grid-cols-1 md:grid-cols-3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* 1. Khối Báo cáo */}
                <div className="bg-white p-4 rounded-lg border-2 border-dashed border-academic-border flex flex-col items-center justify-center text-center gap-2 h-40 hover:border-academic-blue transition-colors">
                  <FileText className="text-slate-400" size={32} />
                  <span className="text-sm font-medium text-slate-600">Báo cáo (PDF/Word)</span>
                  
                  {selectedProject.report === "Sẽ cập nhật sau" || !selectedProject.report ? (
                    <span className="text-xs font-bold px-3 py-1.5 bg-amber-100 text-amber-700 rounded-md mt-1">Sẽ cập nhật sau</span>
                  ) : selectedProject.report === "Không yêu cầu" ? (
                    <span className="text-xs font-bold px-3 py-1.5 bg-gray-200 text-gray-600 rounded-md mt-1">Không yêu cầu</span>
                  ) : (
                    <a 
                      href={selectedProject.report} 
                      onClick={(e) => openPreview(e, selectedProject.report, 'pdf')}
                      className="px-4 py-2 bg-academic-blue text-white text-sm font-bold rounded hover:bg-academic-hero-blue transition-colors mt-1 shadow-md hover:shadow-lg"
                    >
                      Xem Báo cáo
                    </a>
                  )}
                </div>

                {/* 2. Khối Hình ảnh */}
                <div className="bg-white p-4 rounded-lg border-2 border-dashed border-academic-border flex flex-col items-center justify-center text-center gap-2 h-40 hover:border-academic-blue transition-colors">
                  <ImageIcon className="text-slate-400" size={32} />
                  <span className="text-sm font-medium text-slate-600">Ảnh chụp màn hình</span>
                  
                  {selectedProject.evidenceImg === "Sẽ cập nhật sau" || !selectedProject.evidenceImg ? (
                    <span className="text-xs font-bold px-3 py-1.5 bg-amber-100 text-amber-700 rounded-md mt-1">Sẽ cập nhật sau</span>
                  ) : selectedProject.evidenceImg === "Không yêu cầu" ? (
                    <span className="text-xs font-bold px-3 py-1.5 bg-gray-200 text-gray-600 rounded-md mt-1">Không yêu cầu</span>
                  ) : (
                    <a 
                      href={selectedProject.evidenceImg} 
                      onClick={(e) => openPreview(e, selectedProject.evidenceImg, 'img')}
                      className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded hover:bg-green-700 transition-colors mt-1 shadow-md hover:shadow-lg"
                    >
                      Xem Hình ảnh
                    </a>
                  )}
                </div>

                {/* 3. Khối Link Sản phẩm / Google Drive */}
                <div className="bg-white p-4 rounded-lg border-2 border-dashed border-academic-border flex flex-col items-center justify-center text-center gap-2 h-40 hover:border-academic-blue transition-colors">
                  <ExternalLink className="text-slate-400" size={32} />
                  <span className="text-sm font-medium text-slate-600">Tài nguyên Google Drive</span>
                  
                  {selectedProject.driveLink === "Sẽ cập nhật sau" || !selectedProject.driveLink ? (
                    <span className="text-xs font-bold px-3 py-1.5 bg-amber-100 text-amber-700 rounded-md mt-1">Sẽ cập nhật sau</span>
                  ) : (
                    <a 
                      href={selectedProject.driveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-4 py-2 bg-amber-600 text-white text-sm font-bold rounded hover:bg-amber-700 transition-colors mt-1 shadow-md hover:shadow-lg"
                    >
                      Mở Google Drive
                    </a>
                  )}
                </div>

              </div>
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
          <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
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
              className="w-full py-4 bg-academic-sidebar text-academic-blue font-semibold border-t border-academic-border hover:bg-academic-blue hover:text-white transition-colors flex justify-center items-center gap-2 group"
            >
              Xem chi tiết báo cáo <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
