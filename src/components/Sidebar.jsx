import { Home, BookOpen, FileCheck, CheckSquare, MessageSquare, Menu, X, BookMarked, Printer } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Giới thiệu & Tổng quan' },
    { id: 'projects', icon: BookOpen, label: 'Bài tập / Dự án' },
    { id: 'evidence', icon: FileCheck, label: 'Bảng Minh chứng' },
    { id: 'rubric', icon: CheckSquare, label: 'Rubric / Đánh giá' },
    { id: 'summary', icon: MessageSquare, label: 'Tổng kết cá nhân' },
    { id: 'print', icon: Printer, label: 'Bản in (PDF)' },
  ];

  return (
    <>
      {/* Mobile Header - Thêm print:hidden để ẩn khi in */}
      <div className="md:hidden flex items-center justify-between bg-academic-sidebar text-academic-ink p-4 shadow-md shadow-pink-100 border-b border-academic-sidebar-border sticky top-0 z-50 print:hidden">
        <div className="flex items-center gap-2 font-bold text-lg">
          <BookMarked className="text-academic-cyan" />
          <span>Learning Portfolio</span>
        </div>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-1 bg-white border border-academic-border rounded">
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 w-72 bg-academic-sidebar text-academic-muted transition-transform duration-300 ease-in-out z-40 flex flex-col shadow-2xl shadow-pink-100 print:hidden`}>
          <div className="p-6 border-b border-academic-sidebar-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 rounded-full bg-academic-blue flex items-center justify-center text-white font-bold text-sm tracking-wide shadow-lg ring-2 ring-pink-200">HT</div>
            <div>
              <h2 className="text-xl font-bold text-academic-ink leading-tight">Nguyễn Thị Khánh Linh</h2>
              <span className="text-xs text-academic-blue font-medium">Ngôn ngữ và Văn hóa Anh</span>
              <span className="block text-[11px] text-academic-muted mt-0.5">ULIS - VNU</span>
            </div>
          </div>
        </div>

        <div className="flex-1 py-6 space-y-2 px-4 overflow-y-auto">
          <p className="px-4 text-xs font-semibold text-academic-blue uppercase tracking-wider mb-2">Điều hướng</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-xl font-medium transition-all duration-200 group ${
                  isActive 
                    ? 'bg-academic-blue text-white shadow-md' 
                    : item.id === 'print' ? 'hover:bg-academic-blue hover:text-white text-academic-warning'
                    : 'hover:bg-white hover:text-academic-blue'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-white' : (item.id === 'print' ? 'text-academic-warning group-hover:text-white' : 'text-academic-muted group-hover:text-academic-blue')} />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="p-6 border-t border-academic-sidebar-border text-xs text-academic-muted">
          <p>Môn: Nhập môn CN Số & ƯD AI</p>
          <p className="mt-1">Năm học: 2025-2026</p>
        </div>
      </nav>
      
      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
