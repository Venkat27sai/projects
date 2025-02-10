import React from 'react'
// import './globally.css'

const Spotify = () => {
    const faqs = [
        {
          question: "Am I eligible for this plan?",
          answer:
            "If you are a student enrolled at an accredited college or university, and above the age of 18, then yes. You can get Premium Student for up to 4 years.",
        },
        {
          question: "How do you verify that I’m a student?",
          answer:
            "We verify your enrollment status through a third-party service called SheerID. <a href='https://www.sheerid.com/spotify-student-support/?_ga=2.131893512.646964174.1621845310-656588082.1612359808'>Learn more</a>.",
        },
        {
          question: "What happens to my account when I graduate or leave school?",
          answer:
            "You’ll continue to get access to Premium Student, for up to 12 months from the date you subscribed or last re-verified, while it’s available. If you’re no longer a student at the end of that period, you’ll no longer be eligible for Premium Student. Your subscription will then automatically switch to a Premium Individual plan at ₹119.00/month.",
        },
        {
          question: "What will I be charged and when?",
          answer:
            "You will be charged ₹59.00/month. If the price changes in the future, we’ll notify you first. You can cancel anytime on your Spotify Account page.",
        },
      ];
  return (
    <main id='nav'>
        <nav id='sub-nav'>
         <span>
           <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 823.46 225.25"><g fill-rule="evenodd" class="svelte-1gcdbl9"><path d="m125.52,3.31C65.14.91,14.26,47.91,11.86,108.29c-2.4,60.38,44.61,111.26,104.98,113.66,60.38,2.4,111.26-44.6,113.66-104.98C232.89,56.59,185.89,5.7,125.52,3.31Zm46.18,160.28c-1.36,2.4-4.01,3.6-6.59,3.24-.79-.11-1.58-.37-2.32-.79-14.46-8.23-30.22-13.59-46.84-15.93-16.62-2.34-33.25-1.53-49.42,2.4-3.51.85-7.04-1.3-7.89-4.81-.85-3.51,1.3-7.04,4.81-7.89,17.78-4.32,36.06-5.21,54.32-2.64,18.26,2.57,35.58,8.46,51.49,17.51,3.13,1.79,4.23,5.77,2.45,8.91Zm14.38-28.72c-2.23,4.12-7.39,5.66-11.51,3.43-16.92-9.15-35.24-15.16-54.45-17.86-19.21-2.7-38.47-1.97-57.26,2.16-1.02.22-2.03.26-3.01.12-3.41-.48-6.33-3.02-7.11-6.59-1.01-4.58,1.89-9.11,6.47-10.12,20.77-4.57,42.06-5.38,63.28-2.4,21.21,2.98,41.46,9.62,60.16,19.74,4.13,2.23,5.66,7.38,3.43,11.51Zm15.94-32.38c-2.1,4.04-6.47,6.13-10.73,5.53-1.15-.16-2.28-.52-3.37-1.08-19.7-10.25-40.92-17.02-63.07-20.13-22.15-3.11-44.42-2.45-66.18,1.97-5.66,1.15-11.17-2.51-12.32-8.16-1.15-5.66,2.51-11.17,8.16-12.32,24.1-4.89,48.74-5.62,73.25-2.18,24.51,3.44,47.99,10.94,69.81,22.29,5.12,2.66,7.11,8.97,4.45,14.09Z"></path><path d="m318.54,169.81c-18.87,0-35.07-6.53-41.84-13.95-.64-.73-.73-1.13-.73-2.02v-22.09c0-1.05.89-1.45,1.61-.56,8.14,10.16,25.48,18.46,39.67,18.46,11.29,0,18.87-3.06,18.87-13.06,0-5.97-2.82-9.84-18.22-14.19l-8.87-2.5c-20.56-5.8-33.06-12.66-33.06-32.33,0-17.41,16.12-32.73,43.05-32.73,13.22,0,26.36,4.11,33.94,9.76.64.48.89.97.89,1.85v20.08c0,1.37-1.13,1.77-2.18.89-6.13-5.08-17.98-11.93-32.01-11.93s-20.64,6.29-20.64,12.09c0,6.13,4.27,7.82,19.51,12.34l7.58,2.26c23.46,7.01,33.06,16.85,33.06,33.14,0,20.96-17.41,34.51-40.63,34.51Zm164.39-42.09c0-12.82,8.87-22.33,21.37-22.33s21.28,9.51,21.28,22.33-8.87,22.33-21.28,22.33-21.37-9.51-21.37-22.33Zm21.28,42.09c26.04,0,44.18-18.62,44.18-42.09s-18.14-42.09-44.18-42.09-44.1,18.46-44.1,42.09,17.98,42.09,44.1,42.09Zm157.22-89.01v6.77h-13.71c-.73,0-1.13.4-1.13,1.13v16.12c0,.73.4,1.13,1.13,1.13h13.71v60.79c0,.73.4,1.13,1.13,1.13h20.64c.73,0,1.13-.4,1.13-1.13v-60.79h17.66l25.64,55.71-13.79,30.31c-.4.89.08,1.29.89,1.29h22.01c.73,0,1.05-.16,1.37-.89l45.55-103.52c.32-.73-.08-1.29-.89-1.29h-20.64c-.73,0-1.05.16-1.37.89l-20.8,49.99-20.88-49.99c-.32-.73-.64-.89-1.37-.89h-33.38v-5.32c0-8.71,5.89-12.74,13.46-12.74,4.51,0,9.43,2.34,12.9,4.43.81.48,1.37-.08,1.05-.81l-7.26-17.33c-.24-.56-.56-.89-1.13-1.21-3.55-1.85-9.35-3.47-15-3.47-17.09,0-26.93,13.06-26.93,29.67Zm-243,88.52c20.64,0,35.47-17.82,35.47-41.76s-15-41.44-35.64-41.44c-15.32,0-24.19,9.35-29.35,18.7v-16.12c0-.73-.4-1.13-1.13-1.13h-20.24c-.73,0-1.13.4-1.13,1.13v103.44c0,.73.4,1.13,1.13,1.13h20.24c.73,0,1.13-.4,1.13-1.13v-41.36c5.16,9.35,13.87,18.54,29.51,18.54Zm172.21-.32c6.77,0,13.3-1.77,17.17-4.03.56-.32.64-.64.64-1.21v-15.32c0-.81-.4-1.05-1.13-.64-2.34,1.29-5.4,2.34-9.59,2.34-6.61,0-10.8-3.87-10.8-12.42v-31.77h20.16c.73,0,1.13-.4,1.13-1.13v-16.12c0-.73-.4-1.13-1.13-1.13h-20.16v-21.04c0-.89-.56-1.37-1.37-.73l-36.04,28.38c-.48.4-.64.81-.64,1.45v9.19c0,.73.4,1.13,1.13,1.13h14.03v35.15c0,19.03,10.96,27.9,26.61,27.9Zm23.3-105.29c0,7.26,5.64,12.74,13.38,12.74s13.54-5.48,13.54-12.74-5.64-12.74-13.54-12.74-13.38,5.48-13.38,12.74Zm3.14,104.17h20.64c.73,0,1.13-.4,1.13-1.13v-78.04c0-.73-.4-1.13-1.13-1.13h-20.64c-.73,0-1.13.4-1.13,1.13v78.04c0,.73.4,1.13,1.13,1.13Zm-228.65-40.47c3.71-12.42,12.25-21.93,23.86-21.93s18.7,8.38,18.7,22.09-7.66,22.25-18.7,22.25-20.16-10.64-23.86-22.41Z"></path><path d="m810.1,92.31c-1.06-1.83-2.53-3.26-4.41-4.3-1.88-1.03-3.98-1.55-6.32-1.55s-4.44.52-6.32,1.55c-1.88,1.04-3.35,2.47-4.41,4.3-1.06,1.83-1.59,3.9-1.59,6.21s.53,4.34,1.59,6.17c1.06,1.83,2.53,3.26,4.41,4.3,1.88,1.04,3.98,1.55,6.32,1.55s4.44-.52,6.32-1.55,3.35-2.47,4.41-4.3c1.06-1.83,1.59-3.88,1.59-6.17s-.53-4.38-1.59-6.21Zm-1.93,11.36c-.86,1.52-2.06,2.7-3.59,3.56-1.53.85-3.27,1.28-5.2,1.28s-3.72-.43-5.25-1.28c-1.53-.85-2.72-2.04-3.57-3.56-.85-1.51-1.27-3.23-1.27-5.15s.42-3.63,1.27-5.13c.85-1.5,2.04-2.68,3.57-3.53,1.53-.85,3.28-1.28,5.25-1.28s3.67.43,5.2,1.28c1.53.85,2.73,2.04,3.59,3.56.86,1.52,1.29,3.23,1.29,5.15s-.43,3.59-1.29,5.11Z"></path><path d="m803.56,98.29c.82-.6,1.23-1.4,1.23-2.39s-.4-1.83-1.2-2.43c-.8-.6-1.96-.9-3.48-.9h-5.36v11.2h2.59v-4.45h1.41l3.41,4.45h3.18l-3.73-4.72c.79-.15,1.46-.4,1.96-.77Zm-3.86-.99h-2.36v-2.74h2.45c.73,0,1.29.11,1.68.34.39.23.59.58.59,1.06,0,.45-.21.79-.61,1.01-.41.23-.99.34-1.75.34Z"></path></g></svg>
         </span>
         <ol>
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li>|</li>
            <li>Sign up</li>
            <li>Sign in</li>
         </ol>
        </nav>
        <div>
        <section id='sectone'>
            <article id='arti'>
            <header id='head'>
                <div id='head-div'>
                    <h1>₹59.00 for 2 months of Premium Student</h1>
                    <div id='sub-div'>
                        <h2>Only ₹59.00/month after. Cancel anytime.</h2>
                    </div>
                    <div id='but-div'>
                    <button className="get-premium-button">Get Premium</button>
                    </div>
                    <footer id='foot'>
                    <p>Offer available only to students at an accredited higher education institution. Offer not available to users who already tried Premium. Spotify Student Discount Offer <a href="https://www.spotify.com/legal/premium-promotional-offer-terms">Terms and conditions</a> apply.</p>
            </footer>
                </div>
            </header>
            </article>
        </section>
    </div>
    <div>
    <section id='section2'>
        <article id='art2'>
            <header id='head2'>
              <h2>Soundtrack your study</h2>
            </header>
            {/* ul code */}
            <ul data-sentry-element="Content" data-sentry-source-file="benefits.tsx" className="sc-b96d95c2-0 feHObD">
      <li data-sentry-element="Wrapper" data-sentry-component="Benefit" data-sentry-source-file="benefit.tsx" className="sc-b96d95c2-6 hYCJI">
        <div data-in-view="true" className="sc-165d5967-1 hUOHwY sc-b96d95c2-7 bSdNSo" data-sentry-element="BaseImage" data-sentry-component="Image" data-sentry-source-file="image.tsx"></div>
        <div data-sentry-element="BenefitContent" data-sentry-source-file="benefit.tsx" className="sc-b96d95c2-8 dPJAJp">
          <p className="Type__TypeElement-sc-goli3j-0 ddIxQM sc-b96d95c2-9 hQdTgq" data-encore-id="type"><h1>Ad-free music listening</h1></p>
          <p className="Type__TypeElement-sc-goli3j-0 ddIxQM sc-b96d95c2-10 dokCiS" data-encore-id="type">Study til sunset. Dance til dawn.</p>
        </div>
      </li>
      <li data-sentry-element="Wrapper" data-sentry-component="Benefit" data-sentry-source-file="benefit.tsx" className="sc-b96d95c2-6 hYCJI">
        <div data-in-view="true" className="sc-165d5967-1 gZkVDY sc-b96d95c2-7 bSdNSo" data-sentry-element="BaseImage" data-sentry-component="Image" data-sentry-source-file="image.tsx"></div>
        <div data-sentry-element="BenefitContent" data-sentry-source-file="benefit.tsx" className="sc-b96d95c2-8 dPJAJp">
          <p className="Type__TypeElement-sc-goli3j-0 ddIxQM sc-b96d95c2-9 hQdTgq" data-encore-id="type"><h1>Listen offline</h1></p>
          <p className="Type__TypeElement-sc-goli3j-0 ddIxQM sc-b96d95c2-10 dokCiS" data-encore-id="type">Never worry about data again, wherever you are.</p>
        </div>
      </li>
      <li data-sentry-element="Wrapper" data-sentry-component="Benefit" data-sentry-source-file="benefit.tsx" className="sc-b96d95c2-6 hYCJI">
        <div data-in-view="true" className="sc-165d5967-1 goUfVc sc-b96d95c2-7 bSdNSo" data-sentry-element="BaseImage" data-sentry-component="Image" data-sentry-source-file="image.tsx"></div>
        <div data-sentry-element="BenefitContent" data-sentry-source-file="benefit.tsx" className="sc-b96d95c2-8 dPJAJp">
          <p className="Type__TypeElement-sc-goli3j-0 ddIxQM sc-b96d95c2-9 hQdTgq" data-encore-id="type"><h1>Music for every moment</h1></p>
          <p className="Type__TypeElement-sc-goli3j-0 ddIxQM sc-b96d95c2-10 dokCiS" data-encore-id="type">Millions of songs, amazing playlists.</p>
        </div>
      </li>
      <li data-sentry-element="Wrapper" data-sentry-component="Benefit" data-sentry-source-file="benefit.tsx" className="sc-b96d95c2-6 hYCJI">
        <div data-in-view="true" className="sc-165d5967-1 bUdIXM sc-b96d95c2-7 bSdNSo" data-sentry-element="BaseImage" data-sentry-component="Image" data-sentry-source-file="image.tsx"></div>
        <div data-sentry-element="BenefitContent" data-sentry-source-file="benefit.tsx" className="sc-b96d95c2-8 dPJAJp">
          <p className="Type__TypeElement-sc-goli3j-0 ddIxQM sc-b96d95c2-9 hQdTgq" data-encore-id="type"><h1>Easy on the ears</h1></p>
          <p className="Type__TypeElement-sc-goli3j-0 ddIxQM sc-b96d95c2-10 dokCiS" data-encore-id="type">Premium packs even more sound quality into every song.</p>
        </div>
      </li>
    </ul>

        </article>
    </section>
    </div>
  {/* section 3 */}
    <div>
  
    <section data-component-name="faq" data-component-type="promo" data-sentry-element="Background" data-sentry-component="Wrapper" data-sentry-source-file="container.tsx" className="sc-e85487b-1 gjwegX">
      <article color="#000000" data-sentry-element="Content" data-sentry-source-file="container.tsx" className="sc-e85487b-2 bnkcpr">
        
        <header className="sc-edbf1e57-0 dNikRq" data-sentry-element="Wrapper" data-sentry-component="Header" data-sentry-source-file="header.tsx">
          <h2 data-sentry-element="Title" data-sentry-source-file="header.tsx" className="sc-edbf1e57-1 kRpkeq">
            Questions?
          </h2>
          <h3 className="sc-edbf1e57-3 cPJYpw">We’ve got answers</h3>
        </header>
        <ul data-sentry-element="List" data-sentry-source-file="faq.tsx" className="sc-212df1af-0 huljkc">
          {faqs.map((faq, index) => (
            <li key={index} data-sentry-element="ListItem" data-sentry-component="Question" data-sentry-source-file="question.tsx" className="sc-212df1af-1 eKgJww">
              <details data-sentry-element="QuestionContainer" data-sentry-source-file="question.tsx" className="sc-212df1af-5 inonsg">
                <summary data-sentry-element="QuestionTitle" data-sentry-source-file="question.tsx" className="sc-212df1af-4 ejAczF">
                  <div data-sentry-element="QuestionTitleText" data-sentry-source-file="question.tsx" className="sc-212df1af-3 hGVZyy">
                    {faq.question}
                  </div>
                  <svg data-encore-id="icon" role="img" aria-hidden="true" data-sentry-element="ExpandIcon" data-sentry-source-file="question.tsx" className="Svg-sc-ytk21e-0 bneLcE sc-212df1af-2 cjMUln" viewBox="0 0 24 24">
                    <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
                  </svg>
                </summary>
                <p data-sentry-element="QuestionContent" data-sentry-source-file="question.tsx" className="sc-212df1af-6 iZtHPn" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </details>
            </li>
          ))}
        </ul>
      </article>
    </section>
    </div>
    <div>
    <section id='sectone'>
            <article id='arti'>
            <header id='head'>
                <div id='head-div'>
                    <h1>₹59.00 for 2 months of Premium Student</h1>
                    <div id='sub-div'>
                        <h2>Only ₹59.00/month after. Cancel anytime.</h2>
                    </div>
                    <div id='but-div'>
                    <button className="get-premium-button">Get Premium</button>
                    </div>
                    <footer id='foot'>
                    <p>Offer available only to students at an accredited higher education institution. Offer not available to users who already tried Premium. Spotify Student Discount Offer <a href="https://www.spotify.com/legal/premium-promotional-offer-terms">Terms and conditions</a> apply.</p>
            </footer>
                </div>
            </header>
            </article>
        </section>
    </div>
    <div>
    <footer className="mh-footer-hover svelte-1kaaktl" id="mh-footer">
    <nav className="svelte-1kaaktl">
        <div className='mh-tablet-container svelte-1kaaktl'>
             
        </div>
    </nav>
    </footer>
    </div>
    </main>
  )
}

export default Spotify
