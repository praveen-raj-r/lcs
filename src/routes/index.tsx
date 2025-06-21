import Layout from "@/layout";
import BrandGuidelines from "@/pages/brand-guidelines";
import Index from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "@/pages/page-not-found";
import AboutUs from "@/pages/about-us";
import PrivacyPolicy from "@/pages/policy/privacy-policy";
import TermsAndConditions from "@/pages/policy/terms-and-conditions";
import ContactUs from "@/pages/contact-us";
import Careers from "@/pages/careers";
import CompareWTWI from "@/pages/compare-wt-wi";
import OpeningDescription from "@/pages/careers/opening-description";
import AccuFit from "@/pages/projects/accufit";
import TowerTesting from "@/pages/projects/tower-testing";
import MachineVisionSystem from "@/pages/projects/machine-vision-sytem";
import TyreTestingSystem from "@/pages/projects/tyre-testing-system";
import AutomaticSpringTesting from "@/pages/projects/automatic-spring-testing";
import Downloads from "@/pages/downloads";
import OnboardWeighing from "@/pages/automotive/onboard-weighing";
import IOTHome from "@/pages/automotive/iot-sensors/iot-home";
import Scorpion from "@/pages/indicators/weigh-bridge-terminal/scorpion";
import Awew from "@/pages/indicators/weigh-bridge-terminal/awew2020";
import Panther from "@/pages/indicators/weighing-controllers/panther";
import Uc100HS from "@/pages/indicators/weighing-controllers/uc100-hs";
import Uc100LS from "@/pages/indicators/weighing-controllers/uc100-ls";
import WeighController from "@/pages/indicators/weighing-controllers/weigh-controllers-home";
import WeightTransmitter from "@/pages/indicators/weight-transmitters/weight-transmitter-home";
import WT400VP from "@/pages/indicators/weight-transmitters/wt-400vp";
import WT50N from "@/pages/indicators/weight-transmitters/wt-50n";
import WT10N from "@/pages/indicators/weight-transmitters/wt-10n";
import WeightIndicators from "@/pages/indicators/weight-indicators/weight-indicators-home";
import WI400VP from "@/pages/indicators/weight-indicators/wi-400vp";
import WI50N from "@/pages/indicators/weight-indicators/wi-50n";
import WI10N from "@/pages/indicators/weight-indicators/wi-10n";
import WeighingHome from "@/pages/industrial-weighing/weighing/weighing";
import CheckWeigher from "@/pages/industrial-weighing/weighing/checkweigher";
import StaticCheckWeigher from "@/pages/industrial-weighing/weighing/static-checkweigher";
import ShipperScale from "@/pages/industrial-weighing/weighing/shipper-scale";
import Bagging from "@/pages/industrial-weighing/bagging/bagging-home";
import HighSpeedBagging from "@/pages/industrial-weighing/bagging/highspeed-bagging";
import PowderBagging from "@/pages/industrial-weighing/bagging/powder-bagging";
import JumboBagging from "@/pages/industrial-weighing/bagging/jumbo-bagging";
import Batching from "@/pages/industrial-weighing/batching/batching-home";
import CummulativeOnlineWeigher from "@/pages/industrial-weighing/batching/cummulative-weigher";
import CommercialHome from "@/pages/commercial/commercial-home";
import KeepFitBMI from "@/pages/commercial/keepfit-bmi";
import SmartBMI from "@/pages/commercial/smartbmi";
import KeepFitBMIQR from "@/pages/commercial/keepfit-bmi-qr";
import PayloadIOT from "@/pages/automotive-iot/payload-iot";
import NexFleetIOT from "@/pages/automotive-iot/nex-fleet-iot";
import ProNexFleetIOT from "@/pages/automotive-iot/pro-nex-fleet-iot";
import CustomIOTbuilder from "@/pages/automotive-iot/custom-iot-builder";
import WeighingIOT from "@/pages/industrial-iot/weighing-iot";
import SiteDashboard from "@/pages/industrial-iot/site-dashboard";
import WeighBridgeIOT from "@/pages/industrial-iot/weighbridge-iot";
import BMiVendingKiosk from "@/pages/commercial-iot/bmi-vending-kiosk";
import LcsPay from "@/pages/commercial-iot/lcspay";
import SensorHome from "@/pages/automotive/safety-critical-sensors";
import Gprs from "@/pages/automotive/iot-sensors/4g-gprs";
import Pelicon from "@/pages/automotive/iot-sensors/pelicon";
import Dumper from "@/pages/automotive/onboard-weighing/dumper";
import Tipper from "@/pages/automotive/onboard-weighing/tipper";
import WheelLoader from "@/pages/automotive/onboard-weighing/wheel-loader";
import InclinoMeter from "@/pages/automotive/safety-critical-sensors/inclinometer";
import TiltSwitch from "@/pages/automotive/safety-critical-sensors/tilt-switch";
import WeighBridgeHome from "@/pages/indicators/weigh-bridge-terminal/weigh-bridge-home";
import Blogs from "@/pages/blogs";
import BlogDescriptionPage from "@/pages/blog-description-page";
import WebinarsTutorials from "@/pages/webinars-tutorials";

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      {
        path: "/webinars-and-tutorials",
        element: <WebinarsTutorials />,
      },
      { path: "/manuals", element: <Downloads /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/blog/:blogId", element: <BlogDescriptionPage /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/careers", element: <Careers /> },
      { path: "/careers/:careerId", element: <OpeningDescription /> },
      { path: "/brand-guidelines", element: <BrandGuidelines /> },
      { path: "/terms-of-service", element: <TermsAndConditions /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      {
        path: "/weight-transmitter-weight-indicator-comparision",
        element: <CompareWTWI />,
      },
      {
        element: <PageNotFound />,
        path: "/*",
      },

      //Products

      // -- Automotive

      // 1 -- Onboard Weighing
      {
        path: "/automotive/onboard-weighing",
        element: <OnboardWeighing />,
      },
      {
        path: "/automotive/onboard-weighing/tipper",
        element: <Tipper />,
      },
      {
        path: "/automotive/onboard-weighing/dumper",
        element: <Dumper />,
      },
      {
        path: "/automotive/onboard-weighing/wheel-loader",
        element: <WheelLoader />,
      },

      // 2 -- Safety Critical Sensors
      {
        path: "/automotive/safety-critical-sensor",
        element: <SensorHome />,
      },
      {
        path: "/automotive/safety-critical-sensor/tilt-switch",
        element: <TiltSwitch />,
      },
      {
        path: "/automotive/safety-critical-sensor/inclinometer",
        element: <InclinoMeter />,
      },

      // 3 - IOT Sensor
      {
        path: "/automotive/iot-sensors",
        element: <IOTHome />,
      },
      {
        path: "/automotive/iot-sensors/pelican",
        element: <Pelicon />,
      },
      {
        path: "/automotive/iot-sensors/4g-gprs",
        element: <Gprs />,
      },

      // Indicators
      //Weight Transmitter
      {
        path: "/indicators/weight-transmitters",
        element: <WeightTransmitter />,
      },
      {
        path: "/indicators/weight-transmitters/400VP",
        element: <WT400VP />,
      },
      {
        path: "/indicators/weight-transmitters/50N",
        element: <WT50N />,
      },
      {
        path: "/indicators/weight-transmitters/10N",
        element: <WT10N />,
      },
      //Weight Indicators
      {
        path: "/indicators/weight-indicators",
        element: <WeightIndicators />,
      },
      {
        path: "/indicators/weight-indicators/400VP",
        element: <WI400VP />,
      },
      {
        path: "/indicators/weight-indicators/50N",
        element: <WI50N />,
      },
      {
        path: "/indicators/weight-indicators/10N",
        element: <WI10N />,
      },
      // weighing controller
      {
        path: "/indicators/weighing-controller",
        element: <WeighController />,
      },
      {
        path: "/indicators/weight-controller/panther",
        element: <Panther />,
      },
      {
        path: "/indicators/weight-controller/uc100-hs",
        element: <Uc100HS />,
      },
      {
        path: "/indicators/weight-controller/uc100-ls",
        element: <Uc100LS />,
      },
      // Weigh Bridge Terminal
      {
        path: "/indicators/weightbridge-terminal",
        element: <WeighBridgeHome />,
      },
      {
        path: "/indicators/weightbridge-terminal/scorpion",
        element: <Scorpion />,
      },
      {
        path: "/indicators/weightbridge-terminal/awew2020",
        element: <Awew />,
      },

      //Industrial Weighing Automations
      {
        path: "/industrial-weighing/weighing-automation",
        element: <WeighingHome />,
      },
      {
        path: "/industrial-weighing/weighing-automation/checkweigher",
        element: <CheckWeigher />,
      },
      {
        path: "/industrial-weighing/weighing-automation/static-checkweigher",
        element: <StaticCheckWeigher />,
      },
      {
        path: "/industrial-weighing/weighing-automation/shipper-scale",
        element: <ShipperScale />,
      },

      //Industrial Bagging
      {
        path: "/industrial-weighing/bagging",
        element: <Bagging />,
      },
      {
        path: "/industrial-weighing/bagging/high-speed-bagging",
        element: <HighSpeedBagging />,
      },
      {
        path: "/industrial-weighing/bagging/powder-bagging",
        element: <PowderBagging />,
      },
      {
        path: "/industrial-weighing/bagging/jumbo-bagging",
        element: <JumboBagging />,
      },

      //Industrial Batching
      {
        path: "/industrial-weighing/batching/",
        element: <Batching />,
      },
      {
        path: "/industrial-weighing/batching/cummulative-online-weigher",
        element: <CummulativeOnlineWeigher />,
      },

      // Commercial
      {
        path: "/commercial/bmi",
        element: <CommercialHome />,
      },
      {
        path: "/commercial/bmi/keepfit-bmi-smart",
        element: <SmartBMI />,
      },
      {
        path: "/commercial/bmi/keepfit-bmi",
        element: <KeepFitBMI />,
      },
      {
        path: "/commercial/bmi/keepfit-bmi-qr",
        element: <KeepFitBMIQR />,
      },

      // Applications
      //custom Embedded Projects

      {
        path: "/applications/embedded/tower-testing-system",
        element: <TowerTesting />,
      },
      {
        path: "/applications/embedded/machine-vision-system",
        element: <MachineVisionSystem />,
      },
      {
        path: "/applications/embedded/tyre-testing-system",
        element: <TyreTestingSystem />,
      },
      {
        path: "/applications/embedded/automatic-spring-testing",
        element: <AutomaticSpringTesting />,
      },
      {
        path: "/applications/emdedded/accufit-recruitment-scale",
        element: <AccuFit />,
      },

      //Cloud
      // Automotive-iot
      {
        path: "/cloud/automotive-iot/payload-iot",
        element: <PayloadIOT />,
      },
      {
        path: "/cloud/automotive-iot/payload-iot/nex-fleet-one",
        element: <NexFleetIOT />,
      },
      {
        path: "/cloud/automotive-iot/payload-iot/pro-nex-fleet-one",
        element: <ProNexFleetIOT />,
      },
      {
        path: "/cloud/automotive-iot/payload-iot/custom-iot-builder",
        element: <CustomIOTbuilder />,
      },
      // industrial-iot
      {
        path: "/cloud/industrial-iot/weighing-iot",
        element: <WeighingIOT />,
      },
      {
        path: "/cloud/industrial-iot/weighing-iot/site-dashboard",
        element: <SiteDashboard />,
      },
      {
        path: "/cloud/industrial-iot/weighbridge-iot",
        element: <WeighBridgeIOT />,
      },
      {
        path: "/cloud/industrial-iot/weighbridge-iot/smart-weighbridge",
        element: <WeighBridgeIOT />,
      },
      // industrial-iot
      {
        path: "/cloud/commericial-iot/bmi-and-vending-kiosk-iot",
        element: <BMiVendingKiosk />,
      },
      {
        path: "/cloud/commericial-iot/bmi-and-vending-kiosk-iot/lcspay",
        element: <LcsPay />,
      },
    ],
  },
]);

export default routes;
