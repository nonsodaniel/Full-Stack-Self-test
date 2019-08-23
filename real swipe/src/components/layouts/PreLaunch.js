import React from 'react'
import Image1 from './assets/man1.jpg'
import Image2 from './assets/woman1.jpg'
import Image3 from './assets/man2.jpg'
import Image4 from './assets/woman2.jpg'

export default function PreLaunch() {
    return (
        <section>
            <div className="container-fluid">
                <div className="justify-content-center vertical-align-center text-center">
                    <br />
                    <h4 className="rent-work">Pre-launch Feedback</h4>
                    <br />
                    <br />
                </div>
                <div className="row d-flex text-center launch-row">
                    <div className="col-sm d-flex justify-content-center align-items-center flex-column launch-container">
                        <div className="text-center launch-image-div">
                            <img src={Image1} className="launch-img" alt="..." />
                        </div>
                        <br />
                        <p>
                            “ Wow! I love the proposition,<br />
                            when will I be able to download <br />
                            the app and start our journey to<br /> freedom? It has been really painful<br />
                            before you guys came along.”
                        </p>
                        <p>Edward Akintayo</p>
                        <p>Lagos</p>
                    </div>
                    <div className="col-sm d-flex justify-content-center align-items-center flex-column">
                        <div className="text-center launch-image-div">
                            <img src={Image2} className="launch-img" alt="..." />
                        </div>
                        <br />
                        <p>
                            “ I cannot wait to get the app and  <br />
                            enjoy its benefits, I wish  <br />
                            Firsthomes was available earlier. It  <br />
                            will be a great relief.”
                        </p>
                        <p>Dr Rose Azubuike</p>
                        <p>Port-Harcourt</p>
                    </div>

                    <div className="col-sm d-flex justify-content-center align-items-center flex-column">
                        <div className="text-center launch-image-div">
                            <img src={Image3} className="launch-img" alt="..." />
                        </div>
                        <br />
                        <p>
                            “ The benefits are far reaching <br />
                            especially the transparent system <br /> which removes bias from loan <br />
                            application. It’s a breath of fresh <br />
                            air in the home ownership space. <br />
                            It will be a game changer.”
                        </p>
                        <p>Danladi Abubakar</p>
                        <p>Kano</p>
                    </div>

                    <div className="col-sm d-flex justify-content-center align-items-center flex-column">
                        <div className="text-center launch-image-div">
                            <img src={Image4} className="launch-img" alt="..." />
                        </div>
                        <br />
                        <p>
                            “ Wow! I love the proposition,<br />
                            when will I be able to download <br />
                            the app and start our journey to<br /> freedom? It has been really painful<br />
                            before you guys came along.”
                        </p>
                        <p>Elizabeth Odukoya</p>
                        <p>Abuja</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
