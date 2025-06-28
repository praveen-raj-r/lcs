/* eslint-disable @typescript-eslint/no-explicit-any */
import DownloadDataSheetSection from "@/components/app/download-data-sheet-section";
import IconText from "@/components/app/icon-text";
import PartnersScroll from "@/components/app/partners-scroll";
import scorpion7inchWithGradient from "@/assets/weighbridge-terminal/scorpion-7inch-with-gradient.png";
import scorpion10inchWithGradient from "@/assets/weighbridge-terminal/scorpion-10inch-with-gradient.png";
import { cn } from "@/lib/utils";
import { useInView, motion } from "framer-motion";
import { useRef, useState } from "react";
import CustomButton from "@/components/app/custom-button";
import scorpionGroup from "@/assets/weighbridge-terminal/scorpions-group.png";
import scorpion7inch from "@/assets/weighbridge-terminal/scorpion-7inch.png";
import scorpion10inch from "@/assets/weighbridge-terminal/scorpion-10inch.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabClass =
  "text-xl text-[#D90429] rounded-full font-medium md:text-[26px] md:leading-[32px] data-[state=active]:bg-[#D90429] data-[state=active]:text-white py-[21.33px] px-4 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#D90429]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D90429]";

const Scorpion = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <div className="max-w-5xl w-full px-4 mx-auto mt-25">
        <IconText color="red" text="Indicators" />
        <h3 className="font-semibold text-[38px] text-[#1d1d1f] leading-[48px] mt-7.5">
          Weigh Bridge Terminal <br /> Scorpion
        </h3>
        <p className="text-[#6A6A6A] font-medium text-lg leading-[28px] mt-5.5 max-w-[467px]">
          A7670C is the LTE Cat 1 module that supports LTE-FDD/GSM/GPRS/EDGE
          wireless communication modes. It supports maximum 10Mbps downlink rate
          and 5Mbps uplink rate A7670C adopts LCC+LGA form factor and is
          compatible with SIM7000/SIM7070 series (NB/Cat M modules), and
          SIM800A/SIM800F series (2G modules), which enables smooth migration
          from 2G/NB/Cat M products to LTE Cat 1 products, and greatly
          facilitates more compatible product design for the customer needs.
          This product is known as 4G Module, 4G GPRS Module, 4G Chip Set, 4G
          LTE modem, 4G Module, GPRS Module, GPS Module, GSM Module, SIM7600,
          SIM7600EI, SIM7600EI 4G LTE, SIM A7670C 4G LTE Development Board.
        </p>
      </div>
      <UniqueFeatures />
      <Specification />
      <DownloadDataSheetSection />
      <PartnersScroll />
    </div>
  );
};

const specData = [
  {
    content: "Accuracy ± 5-10% FS",
    paths: [
      "M21.5 10.25H19.46C19.1 6.44 16.06 3.39 12.25 3.04V1C12.25 0.59 11.91 0.25 11.5 0.25C11.09 0.25 10.75 0.59 10.75 1V3.04C6.94 3.4 3.89 6.44 3.54 10.25H1.5C1.09 10.25 0.75 10.59 0.75 11C0.75 11.41 1.09 11.75 1.5 11.75H3.54C3.9 15.56 6.94 18.61 10.75 18.96V21C10.75 21.41 11.09 21.75 11.5 21.75C11.91 21.75 12.25 21.41 12.25 21V18.96C16.06 18.6 19.11 15.56 19.46 11.75H21.5C21.91 11.75 22.25 11.41 22.25 11C22.25 10.59 21.91 10.25 21.5 10.25ZM11.5 14.12C9.78 14.12 8.38 12.72 8.38 11C8.38 9.28 9.78 7.88 11.5 7.88C13.22 7.88 14.62 9.28 14.62 11C14.62 12.72 13.22 14.12 11.5 14.12Z",
    ],
  },
  {
    content: "Resolution 0.1 T",
    paths: [
      "M14.69 0H6.31C2.67 0 0.5 2.17 0.5 5.81V14.18C0.5 17.83 2.67 20 6.31 20H14.68C18.32 20 20.49 17.83 20.49 14.19V5.81C20.5 2.17 18.33 0 14.69 0ZM17.25 8C17.25 8.41 16.91 8.75 16.5 8.75C16.09 8.75 15.75 8.41 15.75 8V5.81L6.31 15.25H8.5C8.91 15.25 9.25 15.59 9.25 16C9.25 16.41 8.91 16.75 8.5 16.75H4.5C4.4 16.75 4.3 16.73 4.21 16.69C4.03 16.61 3.88 16.47 3.8 16.28C3.77 16.19 3.75 16.1 3.75 16V12C3.75 11.59 4.09 11.25 4.5 11.25C4.91 11.25 5.25 11.59 5.25 12V14.19L14.69 4.75H12.5C12.09 4.75 11.75 4.41 11.75 4C11.75 3.59 12.09 3.25 12.5 3.25H16.5C16.6 3.25 16.69 3.27 16.79 3.31C16.97 3.39 17.12 3.53 17.2 3.72C17.23 3.81 17.25 3.9 17.25 4V8Z",
    ],
  },
  {
    content: "Capacity 20 T to 400 T",
    paths: [
      "M5.96042 2H4.55039C3.62039 2 3.1504 3.13 3.8104 3.79L9.54038 9.52C11.1804 11.16 13.8304 11.16 15.4704 9.52L21.2004 3.79C21.8604 3.13 21.3904 2 20.4604 2H19.0504C18.2204 2 17.4204 2.33 16.8304 2.92L13.2504 6.5C12.8404 6.91 12.1804 6.91 11.7704 6.5L8.1904 2.92C7.5904 2.33 6.79042 2 5.96042 2Z",

      "M5.96042 21.9707H4.55039C3.62039 21.9707 3.1504 20.8407 3.8104 20.1807L9.54038 14.4507C11.1804 12.8107 13.8304 12.8107 15.4704 14.4507L21.2004 20.1807C21.8604 20.8407 21.3904 21.9707 20.4604 21.9707H19.0504C18.2204 21.9707 17.4204 21.6407 16.8304 21.0507L13.2504 17.4707C12.8404 17.0607 12.1804 17.0607 11.7704 17.4707L8.1904 21.0507C7.5904 21.6407 6.79042 21.9707 5.96042 21.9707Z",
    ],
  },
  {
    content: "Operating Voltage - 9 to 36 V DC",
    paths: [
      "M5.96042 2H4.55039C3.62039 2 3.1504 3.13 3.8104 3.79L9.54038 9.52C11.1804 11.16 13.8304 11.16 15.4704 9.52L21.2004 3.79C21.8604 3.13 21.3904 2 20.4604 2H19.0504C18.2204 2 17.4204 2.33 16.8304 2.92L13.2504 6.5C12.8404 6.91 12.1804 6.91 11.7704 6.5L8.1904 2.92C7.5904 2.33 6.79042 2 5.96042 2Z",

      "M5.96042 21.9707H4.55039C3.62039 21.9707 3.1504 20.8407 3.8104 20.1807L9.54038 14.4507C11.1804 12.8107 13.8304 12.8107 15.4704 14.4507L21.2004 20.1807C21.8604 20.8407 21.3904 21.9707 20.4604 21.9707H19.0504C18.2204 21.9707 17.4204 21.6407 16.8304 21.0507L13.2504 17.4707C12.8404 17.0607 12.1804 17.0607 11.7704 17.4707L8.1904 21.0507C7.5904 21.6407 6.79042 21.9707 5.96042 21.9707Z",
    ],
  },
  {
    content: "Load input - 4 (Precise hydraulic pressure transducer)",
    paths: [
      "M17.1797 5.25C15.4697 5.25 13.4297 5.9 13.4297 9V15C13.4297 18.1 15.4697 18.75 17.1797 18.75C18.8897 18.75 20.9297 18.1 20.9297 15V9C20.9297 5.9 18.8897 5.25 17.1797 5.25Z",
      "M6.82031 5.25C5.11031 5.25 3.07031 5.9 3.07031 9V15C3.07031 18.1 5.11031 18.75 6.82031 18.75C8.53031 18.75 10.5703 18.1 10.5703 15V9C10.5703 5.9 8.53031 5.25 6.82031 5.25Z",
      "M13.4303 11.25H10.5703V12.75H13.4303V11.25Z",
      "M22.5 15.25C22.09 15.25 21.75 14.91 21.75 14.5V9.5C21.75 9.09 22.09 8.75 22.5 8.75C22.91 8.75 23.25 9.09 23.25 9.5V14.5C23.25 14.91 22.91 15.25 22.5 15.25Z",
      "M1.5 15.25C1.09 15.25 0.75 14.91 0.75 14.5V9.5C0.75 9.09 1.09 8.75 1.5 8.75C1.91 8.75 2.25 9.09 2.25 9.5V14.5C2.25 14.91 1.91 15.25 1.5 15.25Z",
    ],
  },
  {
    content:
      "Digital Input - 4 (Alternator, Neutral, Dump brake, Body up signal)",
    paths: [
      "M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z",
      "M14.75 14.5001L17.0001 12.2501L14.75 10",
      "M8 12.25H16.9388",
    ],
  },
  {
    content: "Inclinometer - 1 (To nullify gradient angle effect)",
    paths: [
      "M5.96042 2H4.55039C3.62039 2 3.1504 3.13 3.8104 3.79L9.54038 9.52C11.1804 11.16 13.8304 11.16 15.4704 9.52L21.2004 3.79C21.8604 3.13 21.3904 2 20.4604 2H19.0504C18.2204 2 17.4204 2.33 16.8304 2.92L13.2504 6.5C12.8404 6.91 12.1804 6.91 11.7704 6.5L8.1904 2.92C7.5904 2.33 6.79042 2 5.96042 2Z",

      "M5.96042 21.9707H4.55039C3.62039 21.9707 3.1504 20.8407 3.8104 20.1807L9.54038 14.4507C11.1804 12.8107 13.8304 12.8107 15.4704 14.4507L21.2004 20.1807C21.8604 20.8407 21.3904 21.9707 20.4604 21.9707H19.0504C18.2204 21.9707 17.4204 21.6407 16.8304 21.0507L13.2504 17.4707C12.8404 17.0607 12.1804 17.0607 11.7704 17.4707L8.1904 21.0507C7.5904 21.6407 6.79042 21.9707 5.96042 21.9707Z",
    ],
  },
  {
    content:
      "Speed interface - CAN (To read vehicle speed for report analytics)",
    paths: [
      "M9.31994 13.28H12.4099V20.48C12.4099 21.54 13.7299 22.04 14.4299 21.24L21.9999 12.64C22.6599 11.89 22.1299 10.72 21.1299 10.72H18.0399V3.51997C18.0399 2.45997 16.7199 1.95997 16.0199 2.75997L8.44994 11.36C7.79994 12.11 8.32994 13.28 9.31994 13.28Z",
      "M8.5 4.75H1.5C1.09 4.75 0.75 4.41 0.75 4C0.75 3.59 1.09 3.25 1.5 3.25H8.5C8.91 3.25 9.25 3.59 9.25 4C9.25 4.41 8.91 4.75 8.5 4.75Z",
      "M7.5 20.75H1.5C1.09 20.75 0.75 20.41 0.75 20C0.75 19.59 1.09 19.25 1.5 19.25H7.5C7.91 19.25 8.25 19.59 8.25 20C8.25 20.41 7.91 20.75 7.5 20.75Z",
      "M4.5 12.75H1.5C1.09 12.75 0.75 12.41 0.75 12C0.75 11.59 1.09 11.25 1.5 11.25H4.5C4.91 11.25 5.25 11.59 5.25 12C5.25 12.41 4.91 12.75 4.5 12.75Z",
    ],
  },
  {
    content: "Digital Output - 3 (Overload, Proper load, Under load)",
    paths: [
      "M21 11.8799V10.1199C21 9.07994 20.15 8.21994 19.1 8.21994C17.29 8.21994 16.55 6.93994 17.46 5.36994C17.98 4.46994 17.67 3.29994 16.76 2.77994L15.03 1.78994C14.24 1.31994 13.22 1.59994 12.75 2.38994L12.64 2.57994C11.74 4.14994 10.26 4.14994 9.35 2.57994L9.24 2.38994C8.77 1.59994 7.75 1.31994 6.96 1.78994L5.23 2.77994C4.32 3.29994 4.01 4.46994 4.53 5.36994C5.44 6.93994 4.7 8.21994 2.89 8.21994C1.85 8.21994 0.99 9.06994 0.99 10.1199V11.8799C0.99 12.9199 1.84 13.7799 2.89 13.7799C4.7 13.7799 5.44 15.0599 4.53 16.6299C4.01 17.5399 4.32 18.6999 5.23 19.2199L6.96 20.2099C7.75 20.6799 8.77 20.3999 9.24 19.6099L9.35 19.4199C10.25 17.8499 11.73 17.8499 12.64 19.4199L12.75 19.6099C13.22 20.3999 14.24 20.6799 15.03 20.2099L16.76 19.2199C17.67 18.6999 17.98 17.5299 17.46 16.6299C16.55 15.0599 17.29 13.7799 19.1 13.7799C20.15 13.7799 21 12.9199 21 11.8799Z",
    ],
  },
  {
    content: "Record - 3000 trips (FIFO)",
    paths: [
      "M11.9996 21.9302C6.95961 21.9302 2.84961 17.8302 2.84961 12.7802V10.9002C2.84961 10.5102 3.16961 10.2002 3.54961 10.2002C3.92961 10.2002 4.24961 10.5202 4.24961 10.9002V12.7802C4.24961 17.0502 7.71961 20.5202 11.9896 20.5202C16.2596 20.5202 19.7296 17.0502 19.7296 12.7802V10.9002C19.7296 10.5102 20.0496 10.2002 20.4296 10.2002C20.8096 10.2002 21.1296 10.5202 21.1296 10.9002V12.7802C21.1496 17.8302 17.0396 21.9302 11.9996 21.9302Z",
      "M12.0004 2C8.64039 2 5.90039 4.74 5.90039 8.1V12.79C5.90039 16.15 8.64039 18.89 12.0004 18.89C15.3604 18.89 18.1004 16.15 18.1004 12.79V8.1C18.1004 4.74 15.3604 2 12.0004 2ZM14.1804 10.59C14.1104 10.86 13.8604 11.04 13.5904 11.04C13.5404 11.04 13.4804 11.03 13.4304 11.02C12.4104 10.74 11.3304 10.74 10.3104 11.02C9.98039 11.11 9.65039 10.92 9.56039 10.59C9.47039 10.27 9.66039 9.93 9.99039 9.84C11.2204 9.5 12.5204 9.5 13.7504 9.84C14.0804 9.93 14.2704 10.26 14.1804 10.59ZM15.0304 7.82C14.9404 8.07 14.7104 8.22 14.4604 8.22C14.3904 8.22 14.3204 8.21 14.2504 8.18C12.7204 7.62 11.0404 7.62 9.51039 8.18C9.19039 8.3 8.84039 8.14 8.72039 7.82C8.61039 7.51 8.77039 7.16 9.09039 7.04C10.8904 6.39 12.8704 6.39 14.6604 7.04C14.9804 7.16 15.1404 7.51 15.0304 7.82Z",
    ],
  },
  {
    content:
      "Interface Wifi for Internet *HDMI for TV *USB - 4 ports ( Keyboard, Mic, Pendrive, Printer ) RS232- 2 ports *Remote display, RS485 - 1 port *Ethernet port Suggested Printer - Laser printer",
    paths: [
      "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.75 14.14C6.75 14.55 6.41 14.89 6 14.89C5.59 14.89 5.25 14.55 5.25 14.14V9.86C5.25 9.45 5.59 9.11 6 9.11C6.41 9.11 6.75 9.45 6.75 9.86V14.14ZM9.75 15.57C9.75 15.98 9.41 16.32 9 16.32C8.59 16.32 8.25 15.98 8.25 15.57V8.43C8.25 8.02 8.59 7.68 9 7.68C9.41 7.68 9.75 8.02 9.75 8.43V15.57ZM12.75 17C12.75 17.41 12.41 17.75 12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17ZM15.75 15.57C15.75 15.98 15.41 16.32 15 16.32C14.59 16.32 14.25 15.98 14.25 15.57V8.43C14.25 8.02 14.59 7.68 15 7.68C15.41 7.68 15.75 8.02 15.75 8.43V15.57ZM18.75 14.14C18.75 14.55 18.41 14.89 18 14.89C17.59 14.89 17.25 14.55 17.25 14.14V9.86C17.25 9.45 17.59 9.11 18 9.11C18.41 9.11 18.75 9.45 18.75 9.86V14.14Z",
    ],
  },
  {
    content: "IP Rating Front Panel IP 55",
    paths: [
      "M12.678 19.957C12.9528 20.0209 12.9779 20.3807 12.7103 20.4699L11.1303 20.9899C7.16034 22.2699 5.07034 21.1999 3.78034 17.2299L2.50034 13.2799C1.22034 9.30992 2.28034 7.20992 6.25034 5.92992L6.77434 5.75639C7.1772 5.62297 7.56927 6.02703 7.45487 6.43571C7.39817 6.63828 7.34362 6.84968 7.29034 7.06992L6.31034 11.2599C5.21034 15.9699 6.82034 18.5699 11.5303 19.6899L12.678 19.957Z",
      "M17.1702 3.21001L15.5002 2.82001C12.1602 2.03001 10.1702 2.68001 9.00018 5.10001C8.70018 5.71001 8.46018 6.45001 8.26018 7.30001L7.28018 11.49C6.30018 15.67 7.59018 17.73 11.7602 18.72L13.4402 19.12C14.0202 19.26 14.5602 19.35 15.0602 19.39C18.1802 19.69 19.8402 18.23 20.6802 14.62L21.6602 10.44C22.6402 6.26001 21.3602 4.19001 17.1702 3.21001ZM15.2902 13.33C15.2002 13.67 14.9002 13.89 14.5602 13.89C14.5002 13.89 14.4402 13.88 14.3702 13.87L11.4602 13.13C11.0602 13.03 10.8202 12.62 10.9202 12.22C11.0202 11.82 11.4302 11.58 11.8302 11.68L14.7402 12.42C15.1502 12.52 15.3902 12.93 15.2902 13.33ZM18.2202 9.95001C18.1302 10.29 17.8302 10.51 17.4902 10.51C17.4302 10.51 17.3702 10.5 17.3002 10.49L12.4502 9.26001C12.0502 9.16001 11.8102 8.75001 11.9102 8.35001C12.0102 7.95001 12.4202 7.71001 12.8202 7.81001L17.6702 9.04001C18.0802 9.13001 18.3202 9.54001 18.2202 9.95001Z",
    ],
  },
];

const HeroSection = () => {
  return (
    <div className="bg-[#F8F7F5] md:py-25 py-10">
      <div className="max-w-5xl mx-auto px-4 w-full flex flex-col md:flex-row justify-between gap-10 md:gap-3">
        <div>
          <IconText text="Indicators" color="red" />
          <h4 className="text-[#1D1D1F] font-semibold sm:text-[56px] sm:leading-[68px] mt-10 text-4xl">
            Weight bridge <br /> Terminal
          </h4>
          <h6 className="text-[#1d1d1f] font-semibold sm:text-[28px] sm:leading-[40px] mt-1.5 text-xl">
            Scorpion - WB50SP-IT
          </h6>
          <p className="max-w-[410px] font-medium text-[#6A6A6A] text-lg leading-[28px] mt-11.5">
            Elevate safety and accuComprehensive weighing solution for
            industries. Providing accurate measurement of heavy-duty
            operationsracy with our Dual Axis Tilt Switch. Experience reliable
            tilt sensing for a wide range of applications
          </p>
          <div className="flex flex-wrap gap-2.25 mt-[50px]">
            <CustomButton>Request a Quote</CustomButton>
            <CustomButton background="" color="#D90429">
              Download brochure
            </CustomButton>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={scorpionGroup}
            className="w-100 lg:w-130 xl:w-auto xl:-mr-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

const UniqueFeatures = () => {
  const features = [
    "USB Printer",
    "Desktop and wall mount",
    "USB key board",
    "Ethernet",
    "WIFI",
    "Serial Printer",
    "External TV ( HDMI)",
    "IP55 Enclosure",
    "External Remote Display",
    "Barcode Scanner",
  ];

  return (
    <div className="bg-[#FCE6EA] mt-25 py-25">
      <div className="mx-auto max-w-5xl px-4 w-full">
        <div>
          <IconText text="Indicators" color="red" />
          <h3 className="font-semibold text-[#1D1D1F] text-[38px] leading-[48px] mt-7.5">
            Unique features
          </h3>
          <p className="text-[#6A6A6A] font-medium text-lg leading-[28px] mt-[22px] max-w-[467px]">
            A7670C is the LTE Cat 1 module that supports LTE-FDD/GSM/GPRS/EDGE
            wireless communication modes. It supports maximum 10Mbps downlink
            rate and 5Mbps uplink rate A7670C adopts LCC+LGA form factor and is
            compatible with SIM7000/SIM7070 series (NB/Cat M modules), and
            SIM800A/SIM800F series (2G modules), which enables smooth migration{" "}
          </p>
        </div>
        <div className="mb-[85px]">
          <Tabs
            className="space-y-6 pt-10 md:pt-44 md:mt-[-70px]"
            defaultValue="7-inch"
          >
            <TabsList className="mx-auto h-[69px] border border-[#D5D3D3] p-2.5 rounded-[40px] gap-2.5">
              {[
                { label: "7 Inch", value: "7-inch" },
                { label: "10 Inch", value: "10-inch" },
              ].map((tabTrigger) => (
                <TabsTrigger
                  key={`${tabTrigger.label}-tabTrigger`}
                  className={tabClass}
                  value={tabTrigger.value}
                >
                  {tabTrigger.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {[
              { value: "7-inch", img: scorpion7inch },
              { value: "10-inch", img: scorpion10inch },
            ].map((tabContent) => (
              <TabsContent
                key={`${tabContent.value}-tabContent`}
                value={tabContent.value}
              >
                <img src={tabContent.img} className="mx-auto" />
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-[43px] gap-y-3 sm:gap-y-[37px]">
          {features.map((uniqueFeature, idx) => (
            <div
              key={uniqueFeature}
              className={cn(
                "shadow-[0px_13px_32px_5px_#00000026]",
                `border border-[#C5C4C4] bg-[#F8F7F5]`,
                "flex justify-center items-center py-10 px-4 rounded-[10px]",
                idx === features.length - 2 ? "md:col-start-2" : ""
              )}
            >
              <h6 className="text-black font-semibold text-lg leading-[28px] text-center">
                {uniqueFeature}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Specification = () => {
  return (
    <div className="bg-[#FCE6EA]">
      <div
        style={{
          clipPath:
            "polygon(25% 100px, 75% 100px, 100% 0, 100% 100%, 0 100%, 0 0)",
        }}
        className="bg-black text-white pt-[100px]"
      >
        <div className="max-w-5xl mx-auto px-4 w-full py-25">
          <h3 className="font-semibold text-[38px] text-center leading-[48px]">
            Specification
          </h3>
          <div className="">
            <Tabs
              className="space-y-6 pt-10 md:pt-44 md:mt-[-70px]"
              defaultValue="7-inch"
            >
              <TabsList className="mx-auto h-[69px] border border-[#D5D3D3] p-2.5 rounded-[40px] gap-2.5">
                {[
                  { label: "7 Inch", value: "7-inch" },
                  { label: "10 Inch", value: "10-inch" },
                ].map((tabTrigger) => (
                  <TabsTrigger
                    key={`${tabTrigger.label}-tabTrigger-${tabTrigger.value}`}
                    className={tabClass}
                    value={tabTrigger.value}
                  >
                    {tabTrigger.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              {[
                { value: "7-inch", img: scorpion7inchWithGradient },
                { value: "10-inch", img: scorpion10inchWithGradient },
              ].map((tabContent) => (
                <TabsContent
                  key={`${tabContent.value}-tabContent`}
                  value={tabContent.value}
                >
                  <img src={tabContent.img} className="mx-auto" />
                </TabsContent>
              ))}
            </Tabs>
          </div>
          <div
            className={cn(
              "grid sm:grid-cols-2 md:grid-cols-3 -mt-30 sm:-mt-60 md:-mt-100"
            )}
          >
            {specData.map((e, index) => {
              return (
                <GridDataText key={e.content} index={index} gridContent={e} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function GridDataText({ gridContent, index }: any) {
  const gridDataTextRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(gridDataTextRef, { once: true });
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => {
        if (!hover) {
          setHover(true);
        }
      }}
      onMouseLeave={() => {
        if (hover) {
          setHover(false);
        }
      }}
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : { opacity: 0, y: 100 }
      }
      transition={{
        scale: { duration: 0.2 },
        delay: (index + 1) * 0.1,
        damping: 40,
        stiffness: 160,
        duration: 0.5,
      }}
      ref={gridDataTextRef}
      className={`flex flex-col text-white gap-2 py-4 px-4 border-dashed border border-[#333432]`}
    >
      <AnimatedLogo hover={hover} paths={gridContent.paths} index={index} />
      <p className="text-[18px] text-[#B4B4B4] font-medium">
        {gridContent.content}
      </p>
    </motion.div>
  );
}

function AnimatedLogo({ hover, paths, index }: any) {
  return (
    <div>
      <div>
        <svg
          version="1.1"
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="25"
          height="25"
          xmlSpace="preserve"
          className="size-[40px] cursor-pointer transition-transform transform"
          viewBox="0 0 25 24"
        >
          <g>
            {paths.map((e: any, idx: any) => (
              <path key={`g-${e}, ${idx}`} d={e} fill="white" />
            ))}
          </g>
          <defs>
            <clipPath id={`clipPath-${index}`}>
              {paths.map((e: any, idx: any) => (
                <path key={`clippath-${e}, ${idx}`} d={e} fill="white" />
              ))}
            </clipPath>
          </defs>
          <defs>
            <linearGradient id="waveGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#D90429" />
              <stop offset="20%" stopColor="#E62E4F" />
              <stop offset="40%" stopColor="#E62E4F" />
              <stop offset="50%" stopColor="#F2576F" />
              <stop offset="60%" stopColor="#F2576F" />
              <stop offset="100%" stopColor="#FF8F9B" />
            </linearGradient>
            <clipPath id="wavePath">
              <path
                id="waveClipPath"
                d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4 c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4 c-12.3,1.1-30.4,1.8-32,1.9c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
              />
            </clipPath>
          </defs>
          <g clipPath={`url(#clipPath-${index})`}>
            <motion.path
              fill="url(#waveGradient)"
              id="waveShape"
              d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4 c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4 c-12.3,1.1-30.4,1.8-32,1.9c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
              initial={{ y: 25 }}
              animate={hover ? { y: -4 } : { y: 25 }}
              transition={{ duration: 0.4, ease: [0.2, 0.6, 0.8, 0.4] }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Scorpion;
