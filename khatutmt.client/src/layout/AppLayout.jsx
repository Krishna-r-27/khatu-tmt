import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
      <>
          <Header />
          {/* 🔥 SOCIAL ICONS (Fixed on all pages) */}
          <div className="flex flex-col gap-2 md:gap-3 fixed right-4 top-1/2 -translate-y-1/2 z-50">
              {/* Facebook */}
              <a
                  href="https://www.facebook.com/khatutmt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded bg-[#6F1A07] hover:scale-110 transition-all duration-300"
              >
                  <img
                      src={`${import.meta.env.BASE_URL}/assets/images/face-book.png`}
                      alt="Facebook"
                      className="w-3 h-3 md:w-4 md:h-4"
                  />
              </a>

              {/* Instagram */}
              <a
                  href="https://www.instagram.com/khatutmt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded bg-[#6F1A07] hover:scale-110 transition-all duration-300"
              >
                  <img
                      src={`${import.meta.env.BASE_URL}/assets/images/instagram.png`}
                      alt="Instagram"
                      className="w-3 h-3 md:w-4 md:h-4"
                  />
              </a>

              {/* YouTube */}
              <a
                  href="https://www.youtube.com/channel/UCtFjbfQI7u4KjcaEcf2ww-Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded bg-[#6F1A07] hover:scale-110 transition-all duration-300"
              >
                  <img
                      src={`${import.meta.env.BASE_URL}/assets/images/you-tube.png`}
                      alt="YouTube"
                      className="w-3 h-3 md:w-4 md:h-4"
                  />
              </a>
          </div>
          <Outlet />
          <Footer/>
      </>
  );
}

export default AppLayout;