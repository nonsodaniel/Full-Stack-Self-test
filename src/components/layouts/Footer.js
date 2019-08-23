import React from 'react'
import { Link } from 'react-router-dom'
import './assets/style.css'

export default function Footer() {
    return (
        <section style={footerStyle}>
            <footer class="container text-white" >
                <div class="row footer-row-style" style={{ padding: "10vh 0" }}>
                    <div class="col-12 col-md-5">
                        <svg width="72" height="34" viewBox="0 0 72 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.19274 0.491957C0.974671 0.619298 0.886388 1.24583 1.02268 1.70027C1.14229 2.09938 6.47189 5.81382 6.71192 5.66533C6.77539 5.62627 6.80997 4.71454 6.80997 3.09207V0.579429L6.56627 0.486671C6.24731 0.365433 1.40145 0.370312 1.19274 0.491957ZM1.07801 13.1666C1.04831 13.2435 1.03367 17.7391 1.04506 23.157L1.0658 33.0078H3.91409H6.76237L6.78678 24.9218L6.81078 16.8363L6.45439 16.5568C6.25829 16.403 5.90923 16.1536 5.67896 16.0027C5.01825 15.5686 4.91084 15.497 3.42262 14.4958C1.20779 13.0059 1.15165 12.9742 1.07801 13.1666ZM15.4024 18.8729C13.4744 19.0699 11.6461 20.1126 10.2836 21.792C9.78925 22.4011 9.08867 23.9141 9.08867 24.3726C9.08867 24.4796 9.04351 24.6122 8.98859 24.6672C8.92431 24.7314 8.90193 25.2534 8.92634 26.1338C8.96255 27.4451 9.01056 27.845 9.18062 28.2604C9.22334 28.3649 9.334 28.6627 9.42675 28.9223C9.51911 29.1819 9.63058 29.4382 9.67411 29.4919C9.71765 29.5456 9.91334 29.8328 10.109 30.1298C13.5118 35.2897 21.8825 33.9016 23.433 27.9198C23.6629 27.0329 23.658 24.6741 23.4249 24.0353C22.9298 22.6806 22.518 21.9979 21.636 21.0719C20.092 19.4515 17.7674 18.6313 15.4024 18.8729ZM31.1373 18.9523C30.1825 19.1687 29.2882 19.7074 28.5405 20.5166L27.8875 21.2224V20.3107C27.8875 18.9958 28.025 19.0983 26.2634 19.0983H24.7544V26.0789V33.0598L26.2972 33.0338L27.8403 33.0078L27.8875 28.498L27.9351 23.9877L28.239 23.3608C29.2284 21.3201 32.263 21.0691 33.2806 22.9434C33.7244 23.7615 33.7155 23.6586 33.75 28.4739L33.7826 33.0554H35.3453H36.9075V28.7734C36.9075 24.2322 36.9283 23.9824 37.386 23.0858C38.3022 21.2896 41.4702 21.2029 42.3067 22.9515C42.4296 23.2082 42.5789 23.5036 42.6383 23.6082C42.7135 23.74 42.7611 25.2099 42.7941 28.4028L42.8417 33.0078L44.3844 33.0338L45.9271 33.0598V28.1692C45.9271 23.1342 45.9223 23.0544 45.5191 21.7566C45.1757 20.6525 44.0321 19.4592 43.0463 19.1777C42.8291 19.1158 42.5984 19.0247 42.5329 18.9751C42.4678 18.9254 41.9121 18.8811 41.2985 18.8766C39.4165 18.862 38.2826 19.3075 37.0731 20.5357C36.3518 21.268 36.3408 21.2733 36.1463 20.9621C35.1227 19.3245 33.0914 18.5092 31.1373 18.9523ZM52.8109 18.8766C52.5497 18.8961 52.2506 18.9511 52.1461 18.9979C52.0415 19.045 51.8279 19.111 51.6713 19.1443C49.0081 19.7119 46.9166 22.7937 46.9345 26.124C46.9524 29.5175 48.3548 31.5834 51.5765 32.9638C53.5599 33.8133 56.7365 33.258 58.6571 31.7258C59.7638 30.843 59.7613 30.8576 58.9285 30.0989C57.898 29.1599 57.9134 29.1644 57.3073 29.6102C54.426 31.7283 51.2006 30.9752 50.153 27.9398C49.8605 27.0911 49.3474 27.1733 55.1132 27.1456L60.2166 27.1212L60.2072 25.8869C60.1966 24.4947 60.088 23.8303 59.7426 23.0496C59.6116 22.7534 59.5042 22.4515 59.5042 22.3791C59.5042 22.3067 59.4725 22.233 59.433 22.2155C59.3939 22.198 59.2902 22.0557 59.2023 21.899C58.0046 19.7586 55.6811 18.6598 52.8109 18.8766ZM64.2516 19.0882C63.3126 19.3367 61.8061 20.2322 61.7874 20.5528C61.7849 20.5955 61.6641 20.8091 61.5189 21.0276C60.2625 22.9141 60.977 25.3795 63.0734 26.3942C63.4343 26.5687 63.7935 26.7437 63.8716 26.7823C63.9501 26.8214 64.2707 26.928 64.584 27.0195C64.8972 27.111 65.3244 27.2396 65.5335 27.3051C65.7423 27.3706 66.084 27.4764 66.2927 27.5394C68.1121 28.0915 68.7647 28.8918 68.2382 29.9239C67.584 31.2067 65.0498 31.109 62.5539 29.705C61.9733 29.3779 61.6942 29.2693 61.5933 29.3299C61.3968 29.4475 60.3638 30.9805 60.3622 31.1562C60.361 31.297 61.2971 32.0106 61.4831 32.0106C61.5364 32.0106 61.636 32.0647 61.7052 32.1306C61.8704 32.2885 62.2723 32.4663 62.9696 32.69C63.2833 32.7909 63.6251 32.9118 63.7292 32.9594C63.9424 33.0558 66.2358 33.3568 66.3285 33.3003C66.3611 33.2803 66.7854 33.2161 67.2716 33.1571C67.7577 33.0981 68.2276 33.0155 68.3159 32.9732C70.4616 31.9484 71.1569 30.9996 71.248 28.9727C71.283 28.194 71.2716 28.1403 70.925 27.456C70.2927 26.2079 69.3379 25.6029 66.5779 24.7021C64.1832 23.921 63.6727 23.5243 63.822 22.5638C64.0112 21.3478 65.525 21.0406 67.8448 21.7469C68.0197 21.8002 68.2122 21.8811 68.2724 21.9271C68.5417 22.1325 69.6764 22.541 69.7541 22.4609C69.9087 22.301 70.7944 20.7135 70.8225 20.5459C70.8611 20.3152 69.1251 19.4657 68.1625 19.244C67.761 19.1516 67.3342 19.0381 67.2142 18.9922C66.8387 18.8477 64.9257 18.91 64.2516 19.0882ZM54.6539 21.4926C56.0147 21.9601 57.1234 23.4279 57.1295 24.7713L57.1307 25.0797H53.5595H49.9882L50.0558 24.6301C50.3853 22.4312 52.7295 20.8319 54.6539 21.4926ZM17.2063 21.6618C17.2385 21.7139 17.3434 21.7566 17.439 21.7566C17.9207 21.7566 19.6274 22.8962 19.6274 23.218C19.6274 23.2371 19.7743 23.4967 19.9537 23.7949C20.2475 24.2823 20.3915 24.692 20.5469 25.4825C20.6104 25.8043 20.4232 27.4467 20.2825 27.8059C20.0904 28.2958 19.7743 28.8775 19.7007 28.8775C19.6604 28.8775 19.6274 28.9333 19.6274 29.0012C19.6274 29.0696 19.4887 29.2535 19.3191 29.4101C17.1449 31.4174 13.7482 30.7921 12.4431 28.144L12.0793 27.406V26.0292V24.6525L12.4117 23.9955C13.0049 22.8225 13.8589 22.0919 15.1176 21.6801C15.4988 21.5557 17.1319 21.541 17.2063 21.6618Z" fill="#D7C629" />
                        </svg><br /><br />
                        <p style={pStyle}>Subscribe to our newsletter</p>
                        <form>
                            <div class="form-row align-items-center">
                                <div class="col-sm-10 my-1 d-flex">
                                    <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe" />
                                    <button type="button" class="btn btn-primary" style={btnStyle}>SUBSCRIBE</button>
                                </div>
                            </div>
                        </form>
                        <span style={pStyle}>2019 All rights reserved</span><br />
                        <span>Secured by SSQL</span>


                    </div>
                    <div class="col-6 col-md text-white">
                        <h5>Features</h5>
                        <ul class="list-unstyled text-small text-white">
                            <li><Link to="swipe.com" class="footer-text">Homepage</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Get Started</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Sign In</Link></li>
                            <li><Link to="swipe.com" class="footer-text">How it Works</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Formal Complaints</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Last time</Link></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><Link to="swipe.com" class="footer-text">FAQs</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Security</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Private Policy</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Terms of use</Link></li>
                        </ul>
                    </div>
                    <div class="col-6 col-md">
                        <h5>About</h5>
                        <ul class="list-unstyled text-small">
                            <li><Link to="swipe.com" class="footer-text">Blog</Link></li>
                            <li><Link to="swipe.com" class="footer-text">About us</Link></li>
                            <li><Link to="swipe.com" class="footer-text">Contact us</Link></li>
                            <li className="mt-3"><Link to="swipe.com" class="footer-text">  <button type="button" class="btn btn-primary" style={btnStyle}>SUBSCRIBE</button>
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </section >

    )
}


const footerStyle = {
    background: "#174A41"
}

const btnStyle = { transform: "translateX(10px)", background: "#D7C629", color: "#174A41", border: "2px solid #174A41" }
const pStyle = { color: "#D7C629" }