import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        {/*<div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">*/}

        {/*  /!* 1st block *!/*/}
        {/*  <div className="sm:col-span-12 lg:col-span-3">*/}
        {/*    <div className="mb-2">*/}
        {/*      <Logo />*/}
        {/*    </div>*/}
        {/*    <div className="text-sm text-gray-600">*/}
        {/*      <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>*/}
        {/*    </div>*/}
        {/*  </div>*/}

        {/*  /!* 2nd block *!/*/}
        {/*  <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">*/}
        {/*    <h6 className="text-gray-800 font-medium mb-2">Products</h6>*/}
        {/*    <ul className="text-sm">*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Web Studio</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">DynamicBox Flex</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Programming Forms</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Integrations</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Command-line</a>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}

        {/*  /!* 3rd block *!/*/}
        {/*  <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">*/}
        {/*    <h6 className="text-gray-800 font-medium mb-2">Resources</h6>*/}
        {/*    <ul className="text-sm">*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support Center</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Partners</a>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}

        {/*  /!* 4th block *!/*/}
        {/*  <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">*/}
        {/*    <h6 className="text-gray-800 font-medium mb-2">Company</h6>*/}
        {/*    <ul className="text-sm">*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Company values</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</a>*/}
        {/*      </li>*/}
        {/*      <li className="mb-2">*/}
        {/*        <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</a>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}

        {/*  /!* 5th block *!/*/}
        {/*  <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">*/}
        {/*    <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>*/}
        {/*    <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>*/}
        {/*    <form>*/}
        {/*      <div className="flex flex-wrap mb-4">*/}
        {/*        <div className="w-full">*/}
        {/*          <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>*/}
        {/*          <div className="relative flex items-center max-w-xs">*/}
        {/*            <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />*/}
        {/*            <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">*/}
        {/*              <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>*/}
        {/*              <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />*/}
        {/*              </svg>*/}
        {/*            </button>*/}
        {/*          </div>*/}
        {/*          /!* Success message *!/*/}
        {/*          /!* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> *!/*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </form>*/}
        {/*  </div>*/}

        {/*</div>*/}

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            {/*<li>*/}
            {/*  <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">*/}
            {/*    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />*/}
            {/*    </svg>*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li className="ml-4">*/}
            {/*  <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">*/}
            {/*    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">*/}
            {/*      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />*/}
            {/*    </svg>*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li className="ml-4">
              <a href="https://discord.gg/UjvuaBEkA7" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <g transform="scale(0.0725) translate(100, 110)">
                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" fill-rule="nonzero"></path>
                  </g>
                </svg>

              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; Usephortal.com. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
