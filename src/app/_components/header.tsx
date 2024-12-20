"use client"

import Link from "next/link";

import { useState } from "react";
import Socials from "@/components/socials";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);    

    return (
        <header className={`fixed left-0 top-0 right-0 z-50 py-2 transition-all duration-300 ${isMenuOpen ? "mobile-menu-open" : ""}`}>
            <div className="flex justify-between items-center wrapper">
                <Link href="/" className="">
                    <svg width="171" height="79" viewBox="0 0 171 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.2947 0.449515C13.6486 0.429422 13.1363 0.945258 13.1515 1.56213L13.3449 9.3848C13.3601 10.0022 13.8983 10.4843 14.5423 10.538C16.9233 10.7377 19.1625 11.7048 20.892 13.2805C22.6215 14.8561 23.7386 16.9466 24.0599 19.2088C24.1458 19.8207 24.676 20.3108 25.3219 20.2962L33.513 20.1115C34.1595 20.0969 34.6748 19.5844 34.6233 18.9689C34.2134 14.0344 31.9134 9.41732 28.1631 6.00071C24.4128 2.58409 19.4749 0.607715 14.2947 0.449515ZM28.9756 17.4257C29.0805 17.8325 29.1676 18.2433 29.2367 18.6571L30.3925 18.4806C30.3183 18.0362 30.2248 17.595 30.1122 17.158L28.9756 17.4257ZM26.897 12.8328C27.374 13.5367 27.7888 14.2772 28.1371 15.0468L29.2114 14.6032C28.8373 13.7766 28.3918 12.9813 27.8794 12.2253L26.897 12.8328ZM24.3621 9.95598C24.6841 10.2404 24.9935 10.5374 25.2897 10.8464L26.1531 10.0917C25.5167 9.42762 24.8236 8.8153 24.0808 8.26107L23.3603 9.1422C23.7059 9.40007 24.0401 9.67157 24.3621 9.95598ZM18.7543 6.75818C19.5846 7.02972 20.3899 7.36687 21.1616 7.76614L21.7192 6.78357C20.8902 6.35467 20.0252 5.9925 19.1332 5.70081L18.7543 6.75818ZM14.8995 5.99251C15.3381 6.02623 15.7737 6.07734 16.2051 6.14477L16.3956 5.0419C15.9308 4.96879 15.4631 4.91405 14.9937 4.87783L14.8995 5.99251Z" fill="#FF0381"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.6002 21.4396C34.6248 20.8226 34.0876 20.3304 33.4416 20.3415L25.2502 20.4823C24.6036 20.4934 24.0958 21.0047 24.036 21.6195C23.8136 23.8924 22.7884 26.0255 21.129 27.6685C19.4696 29.3115 17.2745 30.3667 14.9043 30.6608C14.2631 30.7395 13.747 31.2431 13.7586 31.86L13.9061 39.6842C13.9177 40.3017 14.4514 40.7967 15.0962 40.751C20.265 40.3872 25.112 38.2164 28.7102 34.6538C32.3085 31.0911 34.4055 26.3862 34.6002 21.4396ZM16.7436 35.3657C16.317 35.4636 15.8864 35.5444 15.4529 35.6081L15.6311 36.713C16.0968 36.6447 16.5593 36.5578 17.0175 36.4527L16.7436 35.3657ZM21.564 33.4062C20.8244 33.8579 20.0468 34.2499 19.2391 34.5782L19.6974 35.6067C20.565 35.2541 21.4002 34.8331 22.1946 34.3479L21.564 33.4062ZM24.5903 31.0014C24.2908 31.3073 23.978 31.6011 23.6529 31.8823L24.4382 32.7112C25.137 32.1071 25.782 31.4485 26.3665 30.7422L25.448 30.0492C25.1761 30.3778 24.8899 30.6955 24.5903 31.0014ZM27.9699 25.6634C27.6809 26.455 27.3234 27.2221 26.9011 27.957L27.9267 28.495C28.3804 27.7056 28.7645 26.8815 29.0749 26.0313L27.9699 25.6634ZM28.7932 21.9861C28.7554 22.4049 28.6995 22.8206 28.6265 23.2322L29.7801 23.4203C29.8593 22.9769 29.9192 22.5305 29.9597 22.0823L28.7932 21.9861Z" fill="#FF0381"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.3622 63.0851C35.0247 63.1212 35.5635 62.5784 35.5635 61.9152V53.5041C35.5635 52.8402 35.0235 52.31 34.364 52.2378C31.926 51.9695 29.653 50.8798 27.9183 49.1475C26.1836 47.4152 25.0904 45.1434 24.8182 42.7052C24.7455 42.0456 24.2139 41.507 23.5508 41.5081L15.1414 41.522C14.4777 41.5231 13.9359 42.0623 13.9732 42.7249C14.2686 48.0371 16.5115 53.0507 20.2729 56.8069C24.0344 60.5632 29.0509 62.7984 34.3622 63.0851ZM19.729 44.5106C19.6317 44.071 19.5528 43.6276 19.4924 43.1814L18.3019 43.345C18.3668 43.8242 18.4515 44.3005 18.556 44.7727L19.729 44.5106ZM21.7453 49.4932C21.2737 48.7261 20.8669 47.9209 20.5291 47.0861L19.4155 47.5385C19.7783 48.4352 20.2153 49.3 20.7219 50.1239L21.7453 49.4932ZM24.2734 52.642C23.9502 52.3291 23.6402 52.0029 23.3442 51.6642L22.4391 52.4558C23.0752 53.1838 23.771 53.8575 24.5191 54.4698L25.2807 53.5391C24.9326 53.2542 24.5965 52.9549 24.2734 52.642ZM29.9464 56.2049C29.1012 55.8944 28.2835 55.5139 27.5018 55.0675L26.9048 56.1108C27.7445 56.5904 28.6229 56.9991 29.5307 57.3327L29.9464 56.2049ZM33.8823 57.1146C33.433 57.0685 32.9874 57.0038 32.5465 56.9216L32.3231 58.1025C32.7981 58.1915 33.2766 58.2609 33.7574 58.3104L33.8823 57.1146Z" fill="#FF0381"/>
                        <rect y="0.423378" width="10.161" height="62.6594" rx="1.27012" fill="#FF0381"/>
                        <line x1="4.79684" y1="1.6935" x2="4.79684" y2="60.1192" stroke="white" strokeWidth="1.12618" strokeDasharray="2.96 2.96"/>
                        <path d="M50.8999 63.5839C49.1486 63.5839 47.5295 63.1378 46.0425 62.2456C44.5555 61.3204 43.3659 60.0977 42.4738 58.5777C41.6146 57.0577 41.1851 55.389 41.1851 53.5716L41.2842 28.7887C41.2842 28.6565 41.3503 28.5904 41.4824 28.5904H47.0338C47.166 28.5904 47.2321 28.6565 47.2321 28.7887V53.5716C47.2321 54.6951 47.579 55.6533 48.273 56.4464C48.9999 57.2064 49.8756 57.5864 50.8999 57.5864C51.9573 57.5864 52.833 57.2064 53.5269 56.4464C54.2539 55.6533 54.6174 54.6951 54.6174 53.5716V28.7887C54.6174 28.6565 54.6835 28.5904 54.8156 28.5904H60.367C60.4992 28.5904 60.5653 28.6565 60.5653 28.7887L60.6644 53.5716C60.6644 55.422 60.2183 57.1073 59.3261 58.6273C58.467 60.1473 57.2939 61.3534 55.807 62.2456C54.353 63.1378 52.7174 63.5839 50.8999 63.5839ZM69.5347 63.0882C69.4026 63.0882 69.3365 63.0056 69.3365 62.8404V34.5879H62.8929C62.7277 34.5879 62.6451 34.5053 62.6451 34.3401L62.6947 28.7887C62.6947 28.6565 62.7608 28.5904 62.8929 28.5904H81.7279C81.8931 28.5904 81.9758 28.6565 81.9758 28.7887V34.3401C81.9758 34.5053 81.9097 34.5879 81.7775 34.5879H75.2844L75.3339 62.8404C75.3339 63.0056 75.2678 63.0882 75.1357 63.0882H69.5347ZM80.9476 62.8404L87.0938 28.7887C87.1268 28.6565 87.2095 28.5904 87.3416 28.5904H94.5287C94.6608 28.5904 94.7435 28.6565 94.7765 28.7887L100.675 62.8404C100.708 63.0056 100.642 63.0882 100.477 63.0882H94.9748C94.8426 63.0882 94.76 63.0056 94.7269 62.8404L94.1817 59.2221H87.4408L86.8955 62.8404C86.8625 63.0056 86.7799 63.0882 86.6477 63.0882H81.1459C81.0137 63.0882 80.9476 63.0056 80.9476 62.8404ZM88.4321 53.9185H93.1904L91.1582 39.9906L90.8608 38.1566L90.6625 39.9906L88.4321 53.9185ZM104.033 63.0882C103.868 63.0882 103.785 63.0056 103.785 62.8404L103.885 28.7887C103.885 28.6565 103.951 28.5904 104.083 28.5904H119.944C120.109 28.5904 120.192 28.6565 120.192 28.7887V34.3896C120.192 34.5218 120.126 34.5879 119.993 34.5879H109.832V42.2706H119.993C120.126 42.2706 120.192 42.3532 120.192 42.5184L120.241 48.1193C120.241 48.2515 120.159 48.3176 119.993 48.3176H109.832V62.8404C109.832 63.0056 109.75 63.0882 109.585 63.0882H104.033ZM125.33 63.0882C125.198 63.0882 125.132 63.0056 125.132 62.8404L125.181 28.7887C125.181 28.6565 125.247 28.5904 125.379 28.5904H141.29C141.422 28.5904 141.488 28.673 141.488 28.8383V34.3896C141.488 34.5218 141.422 34.5879 141.29 34.5879H131.129V42.3201H141.29C141.422 42.3201 141.488 42.3862 141.488 42.5184L141.538 48.1193C141.538 48.2515 141.472 48.3176 141.34 48.3176H131.129V56.9916H141.34C141.472 56.9916 141.538 57.0742 141.538 57.2394V62.8899C141.538 63.0221 141.472 63.0882 141.34 63.0882H125.33ZM146.144 63.0882C146.012 63.0882 145.945 63.0056 145.945 62.8404L146.045 28.7887C146.045 28.6565 146.111 28.5904 146.243 28.5904H152.29C152.422 28.5904 152.538 28.6565 152.637 28.7887L157.147 35.3314L161.658 28.7887C161.757 28.6565 161.873 28.5904 162.005 28.5904H168.101C168.233 28.5904 168.3 28.6565 168.3 28.7887L168.399 62.8404C168.399 63.0056 168.333 63.0882 168.2 63.0882H162.6C162.467 63.0882 162.401 63.0056 162.401 62.8404L162.352 37.5618L157.147 45.0958L151.992 37.5618L151.943 62.8404C151.943 63.0056 151.877 63.0882 151.745 63.0882H146.144Z" fill="#FCFBFC"/>
                    </svg>
                </Link>

                <nav className={`flex gap-4 lg:gap-20 bg-[--white] text-[--black] py-4 px-14 lg:rounded-full uppercase text-lg lg:text-sm font-staatliches flex-col lg:flex-row fixed left-0 bottom-0 top-0 p-8 lg:relative transition-transform duration-300 ease-in-out lg:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0}`}>
                    <div className="flex justify-between gap-20 lg:hidden">
                        <svg width="171" height="79" viewBox="0 0 171 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.2947 0.449515C13.6486 0.429422 13.1363 0.945258 13.1515 1.56213L13.3449 9.3848C13.3601 10.0022 13.8983 10.4843 14.5423 10.538C16.9233 10.7377 19.1625 11.7048 20.892 13.2805C22.6215 14.8561 23.7386 16.9466 24.0599 19.2088C24.1458 19.8207 24.676 20.3108 25.3219 20.2962L33.513 20.1115C34.1595 20.0969 34.6748 19.5844 34.6233 18.9689C34.2134 14.0344 31.9134 9.41732 28.1631 6.00071C24.4128 2.58409 19.4749 0.607715 14.2947 0.449515ZM28.9756 17.4257C29.0805 17.8325 29.1676 18.2433 29.2367 18.6571L30.3925 18.4806C30.3183 18.0362 30.2248 17.595 30.1122 17.158L28.9756 17.4257ZM26.897 12.8328C27.374 13.5367 27.7888 14.2772 28.1371 15.0468L29.2114 14.6032C28.8373 13.7766 28.3918 12.9813 27.8794 12.2253L26.897 12.8328ZM24.3621 9.95598C24.6841 10.2404 24.9935 10.5374 25.2897 10.8464L26.1531 10.0917C25.5167 9.42762 24.8236 8.8153 24.0808 8.26107L23.3603 9.1422C23.7059 9.40007 24.0401 9.67157 24.3621 9.95598ZM18.7543 6.75818C19.5846 7.02972 20.3899 7.36687 21.1616 7.76614L21.7192 6.78357C20.8902 6.35467 20.0252 5.9925 19.1332 5.70081L18.7543 6.75818ZM14.8995 5.99251C15.3381 6.02623 15.7737 6.07734 16.2051 6.14477L16.3956 5.0419C15.9308 4.96879 15.4631 4.91405 14.9937 4.87783L14.8995 5.99251Z" fill="#FF0381"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M34.6002 21.4396C34.6248 20.8226 34.0876 20.3304 33.4416 20.3415L25.2502 20.4823C24.6036 20.4934 24.0958 21.0047 24.036 21.6195C23.8136 23.8924 22.7884 26.0255 21.129 27.6685C19.4696 29.3115 17.2745 30.3667 14.9043 30.6608C14.2631 30.7395 13.747 31.2431 13.7586 31.86L13.9061 39.6842C13.9177 40.3017 14.4514 40.7967 15.0962 40.751C20.265 40.3872 25.112 38.2164 28.7102 34.6538C32.3085 31.0911 34.4055 26.3862 34.6002 21.4396ZM16.7436 35.3657C16.317 35.4636 15.8864 35.5444 15.4529 35.6081L15.6311 36.713C16.0968 36.6447 16.5593 36.5578 17.0175 36.4527L16.7436 35.3657ZM21.564 33.4062C20.8244 33.8579 20.0468 34.2499 19.2391 34.5782L19.6974 35.6067C20.565 35.2541 21.4002 34.8331 22.1946 34.3479L21.564 33.4062ZM24.5903 31.0014C24.2908 31.3073 23.978 31.6011 23.6529 31.8823L24.4382 32.7112C25.137 32.1071 25.782 31.4485 26.3665 30.7422L25.448 30.0492C25.1761 30.3778 24.8899 30.6955 24.5903 31.0014ZM27.9699 25.6634C27.6809 26.455 27.3234 27.2221 26.9011 27.957L27.9267 28.495C28.3804 27.7056 28.7645 26.8815 29.0749 26.0313L27.9699 25.6634ZM28.7932 21.9861C28.7554 22.4049 28.6995 22.8206 28.6265 23.2322L29.7801 23.4203C29.8593 22.9769 29.9192 22.5305 29.9597 22.0823L28.7932 21.9861Z" fill="#FF0381"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M34.3622 63.0851C35.0247 63.1212 35.5635 62.5784 35.5635 61.9152V53.5041C35.5635 52.8402 35.0235 52.31 34.364 52.2378C31.926 51.9695 29.653 50.8798 27.9183 49.1475C26.1836 47.4152 25.0904 45.1434 24.8182 42.7052C24.7455 42.0456 24.2139 41.507 23.5508 41.5081L15.1414 41.522C14.4777 41.5231 13.9359 42.0623 13.9732 42.7249C14.2686 48.0371 16.5115 53.0507 20.2729 56.8069C24.0344 60.5632 29.0509 62.7984 34.3622 63.0851ZM19.729 44.5106C19.6317 44.071 19.5528 43.6276 19.4924 43.1814L18.3019 43.345C18.3668 43.8242 18.4515 44.3005 18.556 44.7727L19.729 44.5106ZM21.7453 49.4932C21.2737 48.7261 20.8669 47.9209 20.5291 47.0861L19.4155 47.5385C19.7783 48.4352 20.2153 49.3 20.7219 50.1239L21.7453 49.4932ZM24.2734 52.642C23.9502 52.3291 23.6402 52.0029 23.3442 51.6642L22.4391 52.4558C23.0752 53.1838 23.771 53.8575 24.5191 54.4698L25.2807 53.5391C24.9326 53.2542 24.5965 52.9549 24.2734 52.642ZM29.9464 56.2049C29.1012 55.8944 28.2835 55.5139 27.5018 55.0675L26.9048 56.1108C27.7445 56.5904 28.6229 56.9991 29.5307 57.3327L29.9464 56.2049ZM33.8823 57.1146C33.433 57.0685 32.9874 57.0038 32.5465 56.9216L32.3231 58.1025C32.7981 58.1915 33.2766 58.2609 33.7574 58.3104L33.8823 57.1146Z" fill="#FF0381"/>
                            <rect y="0.423378" width="10.161" height="62.6594" rx="1.27012" fill="#FF0381"/>
                            <line x1="4.79684" y1="1.6935" x2="4.79684" y2="60.1192" stroke="white" strokeWidth="1.12618" strokeDasharray="2.96 2.96"/>
                            <path d="M50.8999 63.5839C49.1486 63.5839 47.5295 63.1378 46.0425 62.2456C44.5555 61.3204 43.3659 60.0977 42.4738 58.5777C41.6146 57.0577 41.1851 55.389 41.1851 53.5716L41.2842 28.7887C41.2842 28.6565 41.3503 28.5904 41.4824 28.5904H47.0338C47.166 28.5904 47.2321 28.6565 47.2321 28.7887V53.5716C47.2321 54.6951 47.579 55.6533 48.273 56.4464C48.9999 57.2064 49.8756 57.5864 50.8999 57.5864C51.9573 57.5864 52.833 57.2064 53.5269 56.4464C54.2539 55.6533 54.6174 54.6951 54.6174 53.5716V28.7887C54.6174 28.6565 54.6835 28.5904 54.8156 28.5904H60.367C60.4992 28.5904 60.5653 28.6565 60.5653 28.7887L60.6644 53.5716C60.6644 55.422 60.2183 57.1073 59.3261 58.6273C58.467 60.1473 57.2939 61.3534 55.807 62.2456C54.353 63.1378 52.7174 63.5839 50.8999 63.5839ZM69.5347 63.0882C69.4026 63.0882 69.3365 63.0056 69.3365 62.8404V34.5879H62.8929C62.7277 34.5879 62.6451 34.5053 62.6451 34.3401L62.6947 28.7887C62.6947 28.6565 62.7608 28.5904 62.8929 28.5904H81.7279C81.8931 28.5904 81.9758 28.6565 81.9758 28.7887V34.3401C81.9758 34.5053 81.9097 34.5879 81.7775 34.5879H75.2844L75.3339 62.8404C75.3339 63.0056 75.2678 63.0882 75.1357 63.0882H69.5347ZM80.9476 62.8404L87.0938 28.7887C87.1268 28.6565 87.2095 28.5904 87.3416 28.5904H94.5287C94.6608 28.5904 94.7435 28.6565 94.7765 28.7887L100.675 62.8404C100.708 63.0056 100.642 63.0882 100.477 63.0882H94.9748C94.8426 63.0882 94.76 63.0056 94.7269 62.8404L94.1817 59.2221H87.4408L86.8955 62.8404C86.8625 63.0056 86.7799 63.0882 86.6477 63.0882H81.1459C81.0137 63.0882 80.9476 63.0056 80.9476 62.8404ZM88.4321 53.9185H93.1904L91.1582 39.9906L90.8608 38.1566L90.6625 39.9906L88.4321 53.9185ZM104.033 63.0882C103.868 63.0882 103.785 63.0056 103.785 62.8404L103.885 28.7887C103.885 28.6565 103.951 28.5904 104.083 28.5904H119.944C120.109 28.5904 120.192 28.6565 120.192 28.7887V34.3896C120.192 34.5218 120.126 34.5879 119.993 34.5879H109.832V42.2706H119.993C120.126 42.2706 120.192 42.3532 120.192 42.5184L120.241 48.1193C120.241 48.2515 120.159 48.3176 119.993 48.3176H109.832V62.8404C109.832 63.0056 109.75 63.0882 109.585 63.0882H104.033ZM125.33 63.0882C125.198 63.0882 125.132 63.0056 125.132 62.8404L125.181 28.7887C125.181 28.6565 125.247 28.5904 125.379 28.5904H141.29C141.422 28.5904 141.488 28.673 141.488 28.8383V34.3896C141.488 34.5218 141.422 34.5879 141.29 34.5879H131.129V42.3201H141.29C141.422 42.3201 141.488 42.3862 141.488 42.5184L141.538 48.1193C141.538 48.2515 141.472 48.3176 141.34 48.3176H131.129V56.9916H141.34C141.472 56.9916 141.538 57.0742 141.538 57.2394V62.8899C141.538 63.0221 141.472 63.0882 141.34 63.0882H125.33ZM146.144 63.0882C146.012 63.0882 145.945 63.0056 145.945 62.8404L146.045 28.7887C146.045 28.6565 146.111 28.5904 146.243 28.5904H152.29C152.422 28.5904 152.538 28.6565 152.637 28.7887L157.147 35.3314L161.658 28.7887C161.757 28.6565 161.873 28.5904 162.005 28.5904H168.101C168.233 28.5904 168.3 28.6565 168.3 28.7887L168.399 62.8404C168.399 63.0056 168.333 63.0882 168.2 63.0882H162.6C162.467 63.0882 162.401 63.0056 162.401 62.8404L162.352 37.5618L157.147 45.0958L151.992 37.5618L151.943 62.8404C151.943 63.0056 151.877 63.0882 151.745 63.0882H146.144Z" fill="#000000"/>
                        </svg>
                        <button onClick={() => setIsMenuOpen(false)}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9999 17.8667L9.46661 24.4C9.22216 24.6444 8.91105 24.7667 8.53328 24.7667C8.1555 24.7667 7.84439 24.6444 7.59994 24.4C7.3555 24.1556 7.23328 23.8444 7.23328 23.4667C7.23328 23.0889 7.3555 22.7778 7.59994 22.5333L14.1333 16L7.59994 9.46667C7.3555 9.22223 7.23328 8.91112 7.23328 8.53334C7.23328 8.15556 7.3555 7.84445 7.59994 7.6C7.84439 7.35556 8.1555 7.23334 8.53328 7.23334C8.91105 7.23334 9.22216 7.35556 9.46661 7.6L15.9999 14.1333L22.5333 7.6C22.7777 7.35556 23.0888 7.23334 23.4666 7.23334C23.8444 7.23334 24.1555 7.35556 24.3999 7.6C24.6444 7.84445 24.7666 8.15556 24.7666 8.53334C24.7666 8.91112 24.6444 9.22223 24.3999 9.46667L17.8666 16L24.3999 22.5333C24.6444 22.7778 24.7666 23.0889 24.7666 23.4667C24.7666 23.8444 24.6444 24.1556 24.3999 24.4C24.1555 24.6444 23.8444 24.7667 23.4666 24.7667C23.0888 24.7667 22.7777 24.6444 22.5333 24.4L15.9999 17.8667Z" fill="black"/>
                            </svg>
                        </button>
                    </div>
                    
                    <Link href="/#about" className="hover:text-[--accent-color] transition-all duration-300">Nous connaitre</Link>
                    <Link href="/#advantage1" className="hover:text-[--accent-color] transition-all duration-300">Safe & Simple</Link>
                    <Link href="/#values" className="hover:text-[--accent-color] transition-all duration-300">Communauté</Link>
                    <Link href="/#cta" className="hover:text-[--accent-color] transition-all duration-300">M'avertir</Link>
                </nav>

                <div className="hidden lg:block">
                    <Socials />
                </div>

                <button className="block lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8.00134H28M4 16.0013H28M4 24.0013H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

            </div>
        </header>
    );
}