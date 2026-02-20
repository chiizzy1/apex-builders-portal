import React from "react";

interface PageHeaderProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, titleHighlight, subtitle, children }: PageHeaderProps) {
  const renderTitle = () => {
    if (!titleHighlight) return title;
    const parts = title.split(titleHighlight);
    if (parts.length < 2) return title;
    return (
      <>
        {parts[0]}
        <span className="text-[#0df2f2]">{titleHighlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">{renderTitle()}</h1>
        {subtitle && <p className="text-slate-400 text-lg">{subtitle}</p>}
      </div>

      {/* Action Area (Search, Filters, Buttons) */}
      {children && <div className="flex flex-wrap items-center gap-4">{children}</div>}
    </div>
  );
}
