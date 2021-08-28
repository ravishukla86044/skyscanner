import React from 'react';
import Container from "@material-ui/core/Container";
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.gridHotMainCont}>
            <Container maxWidth="lg" >
                <div className={styles.gridFootDivMain}>
                    <div>
                        <h3>Explore</h3>
                        <ul>
                            <li>
                                <a href="https://www.skyscanner.co.in/in/en-us/inr/hotels/directory" id="hotels-cities">Hotels directory</a>
                            </li>
                            <li>
                                <a class="BpkLink_bpk-link__11xGX BpkLink_bpk-link--alternate__1VEFG" href="https://www.skyscanner.co.in/in/en-us/inr/flights" id="flights-home">Flights</a>
                            </li>
                            <li>
                                <a class="BpkLink_bpk-link__11xGX BpkLink_bpk-link--alternate__1VEFG" href="https://www.skyscanner.co.in/in/en-us/inr/hotels" id="hotels-home">Hotels Deals in Popular Cities</a>
                            </li>
                            <li>
                                <a class="BpkLink_bpk-link__11xGX BpkLink_bpk-link--alternate__1VEFG" href="https://www.skyscanner.co.in/in/en-us/inr/car-rental" id="car-hire-home">Car rental</a>
                            </li>
                            <li>
                                <a class="BpkLink_bpk-link__11xGX BpkLink_bpk-link--alternate__1VEFG" href="https://www.skyscanner.co.in/in/en-us/inr/travel-insurance" id="travel-insurance">Travel insurance</a>&nbsp;
                            </li>
                            <li>
                                <a class="BpkLink_bpk-link__11xGX BpkLink_bpk-link--alternate__1VEFG" href="https://www.skyscanner.co.in/in/en-us/inr/mobile.html" id="mobile-apps">App</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Partners</h3>
                        <ul>
                            <li>
                                <a href="https://www.partners.skyscanner.net/" id="work-with-us">Work with us</a>
                            </li>
                            <li>
                                <a href="https://www.partners.skyscanner.net/advertising/advertise-with-skyscanner" id="advertising">Advertise with us</a>
                            </li>
                            <li>
                                <a href="https://www.partners.skyscanner.net/insights/travel-insight" id="travel-insight">Travel Insight</a>
                            </li>
                            <li>
                                <a href="https://www.partners.skyscanner.net/affiliates/affiliate-products" id="affiliates">Affiliates</a>
                            </li>
                            <li>
                                <a class="BpkLink_bpk-link__11xGX BpkLink_bpk-link--alternate__1VEFG" href="https://www.partners.skyscanner.net/affiliates/travel-apis" id="api">Travel APIs</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="BpkHeading_bpk-heading-h3__1hhip FooterGroup_FooterGroup__title__3w8WX" contenteditable="false">Company</h3>
                        <ul class="FooterLinkList_FooterLinkList__38pf4">
                            <li>
                                <a href="https://www.skyscanner.co.in/in/en-us/inr/about-us" id="about-skyscanner"contenteditable="false">About us</a>
                        </li>
                            <li>
                                <a href="https://www.skyscanner.co.in/in/en-us/inr/about-us/why-skyscanner" id="customer-charter" contenteditable="false">Why Skyscanner?</a>
                            </li>
                            <li>
                                <a href="https://www.skyscanner.co.in/in/en-us/inr/media" id="media-index">Media</a>
                            </li>
                            <li>
                                <a href="https://www.skyscanner.co.in/in/en-us/inr/about-us/our-people" id="meet-the-team">Our people</a>
                            </li>
                            <li>
                                <a href="https://www.skyscanner.co.in/in/en-us/inr/about-us/accessibility" id="accessibility">Accessibility</a>
                            </li>
                            <li>
                                <a href="https://www.skyscanner.co.in/in/en-us/inr/about-us/sustainable" id="sustainability">Sustainability</a>
                            </li>
                            <li>
                                <a href="https://www.skyscanner.co.in/in/en-us/inr/about-us/brand" id="brand">Brand story</a>
                            </li>
                            <li>
                                <a href="/company-details" id="company-details">Company Details</a>
                            </li>
                            <li>
                                <a href="https://www.skyscanner.net/jobs" id="jobs">Jobs</a>
                            </li>
                            <li>
                                <a href="https://www.skyscanner.co.in/in/en-us/inr/media/cookie-policy" rel="nofollow" id="cookie-policy">Cookie policy</a>
                            </li>
                            <li>
                                <a href="https://www.skyscanner.co.in/in/en-us/inr/media/privacy-policy" rel="nofollow" id="privacy-policy">Privacy policy</a>
                            </li>
                            <li>
                                <a href="/terms-of-service" id="terms-of-service">Terms of service</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 >Help</h3>
                        <ul>
                            <li>
                                <a href="https://hotelshelp.skyscanner.net/hc/en-us?skyCurrency=currency_gbp&amp;skyLanguage=lang_en&amp;skyMarket=in_skyscanner">Help</a>
                            </li>
                            <li>
                                <a href="/privacy-settings" target="_blank" rel="nofollow" id="ss-footer-links-privacy-settings">Privacy settings</a>
                            </li>
                            <li>
                                <a href="/security" target="_blank" id="ss-footer-links-security-page">Security</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{padding:"20px",color:"white"}}>© Skyscanner Ltd 2002-2021</div>
            </Container>
        </div>
    )
}

export default Footer
