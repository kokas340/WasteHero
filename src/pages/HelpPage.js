import React from 'react';
import Navbar from '../components/Navbar';
import Step1Image from '../images/step1.png';
import Step2Image from '../images/step2.png';
import Step3Image from '../images/step3.png';
import Step4Image from '../images/step4.png';
import Step5Image from '../images/step5.png';
import Step6Image from '../images/step6.png';
import Step7Image from '../images/step7.png';
import Step8Image from '../images/step8.png';
import Step9Image from '../images/step9.png';
import Step10Image from '../images/step10.png';
import Step11Image from '../images/step11.png';
import '../css/HelpPage.css'; 

function HelpPage() {
    return (
        <>
            <Navbar />
            <div className="help-page">
                <h1>Help Page</h1>
                <section className="step">
                    <h2>Step 1: Login to the Portal</h2>
                    <p>Login to the portal using the following URL:</p>
                    <p>https://refa-portal.wastehero.io/</p>
                    <img src={Step1Image} alt="Step 1" />
                </section>

                <section className="step">
                    <h2>Step 2: Click on "Emptying Summary"</h2>
                    <p>After logging in, click on "Emptying Summary".</p>
                    <img src={Step2Image} alt="Step 2" />
                </section>

                <section className="step">
                    <h2>Step 3: Open the Network Logs</h2>
                    <p>Open the network logs in your browser.</p>
                    <img src={Step3Image} alt="Step 3" />
                </section>

                <section className="step">
                    <h2>Step 4: Find the Collections Request</h2>
                    <p>Find the collections request in the network logs.</p>
                    <img src={Step4Image} alt="Step 4" />
                </section>

                <section className="step">
                    <h2>Step 5: Copy the API Key</h2>
                    <p>Copy the API key from the collections request.</p>
                    <img src={Step5Image} alt="Step 5" />
                </section>

                <section className="step">
                    <h2>Step 6: Paste the API Key in the Form</h2>
                    <p>Paste the copied API key in the appropriate form.</p>
                    <img src={Step6Image} alt="Step 6" />
                </section>

                <section className="step">
                    <h2>Step 7: Copy the Property ID</h2>
                    <p>Copy the property ID.</p>
                    <img src={Step7Image} alt="Step 7" />
                </section>

                <section className="step">
                    <h2>Step 8: Paste the Property ID in the Form</h2>
                    <p>Paste the property ID in the property ID input.</p>
                    <img src={Step8Image} alt="Step 8" />
                </section>

                <section className="step">
                    <h2>Step 9: Select the Start and End Dates</h2>
                    <p>Select the start and end dates as required.</p>
                    <img src={Step9Image} alt="Step 9" />
                </section>

                <section className="step">
                    <h2>Step 10: Click Submit</h2>
                    <p>Click the submit button to proceed.</p>
                    <img src={Step10Image} alt="Step 10" />
                </section>

                <section className="step">
                    <h2>Step 11: Click Download</h2>
                    <p>Click the download button to download the file.</p>
                    <img src={Step11Image} alt="Step 11" />
                </section>
            </div>
        </>
    );
}

export default HelpPage;
