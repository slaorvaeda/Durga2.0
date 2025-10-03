"use client";

export default function ResumeDownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Durga_new.pdf"; // Place your resume file in public/Durga_new.pdf
    link.download = "Durga_new.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3  rounded-full font-bold shadow hover:bg-orange-400 transition border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white cursor-pointer"
    >
      Download My Resume
    </button>
  );
}
