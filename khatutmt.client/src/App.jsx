import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from './layout/AppLayout';
import Home from "./pages/Home/Home";
import ManufacturingFacilities from "./pages/ManufacturingFacilities/ManufacturingFacilities";
import WhatIsTmt from "./pages/WhatIsTmt/WhatIsTmt";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import Products from "./pages/Products/Products";
import ThankYou from "./pages/ThankYou/ThankYou";
import Error from "./pages/Error/Error";
import SiteMap from "./pages/SiteMap/SiteMap";
import ScrollToTop from "./components/Common/ScrollToTop";
import ScrollToHash from "./components/Common/ScrollToHash";
function App() {
    return (
        <>
            <BrowserRouter basename="/khatu-tmt">
                <ScrollToTop />
                <ScrollToHash />
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/manufacturing-facilities"
                            element={<ManufacturingFacilities />}
                        />
                        <Route
                            path="/what-is-tmt"
                            element={<WhatIsTmt />}
                        />
                        <Route
                            path="/contact-us"
                            element={<ContactUs />}
                        />
                        <Route
                            path="/about-us"
                            element={<AboutUs />}
                        />
                        <Route
                            path="/products"
                            element={<Products />}
                        />
                        <Route
                            path="/thank-you"
                            element={<ThankYou />}
                        />
                        <Route
                            path="/sitemap"
                            element={<SiteMap />}
                        />
                        <Route
                            path="/error"
                            element={<Error />}
                        />
                    </Route>

                </Routes>
            </BrowserRouter>


        </>
    );   
}
export default App;
