import { Footer } from "flowbite-react"
import {BsFacebook, BsInstagram, BsGithub, BsTwitter, BsDribbble} from '@heroicons/react/24/solid';
export default function FooterComponent() {
    return(
        <>
            <Footer container={true}>
                <div className="w-full">
                    <div className="pb-8 grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand href="/" src="https://flowbite.com/docs/images/logo.svg" 
                            alt="Alfremo Logo" name="Alfremo" />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="/changelog">Changelog</Footer.Link>
                                    <Footer.Link href="#">Link 1</Footer.Link>
                                    <Footer.Link href="#">Link 2</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="https://github.com/Forz70043/Alfremo">Github</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="/privacy">Privacy Policy</Footer.Link>
                                    <Footer.Link href="/terms">Terms & Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Alfremo™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            {/* {<Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />} */}
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    )
}