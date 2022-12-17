import Link from "next/link";

function Header() {
   return (
     <div className="flex items-center space-x-12 justify-between max-w-1280px mx-auto p-4 bg-red-50 border-solid">
        <div>
            <Link href="/">
              <h4 className="font-bold cursor-pointer ">TRIALSHOPPY</h4>
            </Link>
        </div>
        <div className="hidden md:inline-flex items-center space-x-10">
          <h3 className="font-medium cursor-pointer link-underline"><Link href="employee">Employee</Link></h3>
          <h3 className="font-medium cursor-pointer link-underline">Department</h3>
          <h3 className="font-medium cursor-pointer link-underline">Attendance</h3>
          <h3 className="font-medium cursor-pointer link-underline">Task</h3>
          <h3 className="font-medium cursor-pointer link-underline">Meeting</h3>
          <h3 className="font-medium cursor-pointer link-underline">Leave</h3>
        </div>
        <div className="inline-flex space-x-3 cursor-pointer">
                          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.6247 19.7002L3.09322 20.2859H3.09322L2.6247 19.7002ZM5.45217 17.4383L5.92069 18.0239L5.45217 17.4383ZM1.75 6C1.75 3.65279 3.65279 1.75 6 1.75V0.25C2.82436 0.25 0.25 2.82436 0.25 6H1.75ZM1.75 11.5V6H0.25V11.5H1.75ZM1.75 12V11.5H0.25V12H1.75ZM1.75 18.9194V12H0.25V18.9194H1.75ZM2.15617 19.1146C1.99248 19.2455 1.75 19.129 1.75 18.9194H0.25C0.25 20.3868 1.94738 21.2026 3.09322 20.2859L2.15617 19.1146ZM4.98365 16.8526L2.15617 19.1146L3.09322 20.2859L5.92069 18.0239L4.98365 16.8526ZM16 16.25H6.70156V17.75H16V16.25ZM20.25 12C20.25 14.3472 18.3472 16.25 16 16.25V17.75C19.1756 17.75 21.75 15.1756 21.75 12H20.25ZM20.25 6V12H21.75V6H20.25ZM16 1.75C18.3472 1.75 20.25 3.65279 20.25 6H21.75C21.75 2.82436 19.1756 0.25 16 0.25V1.75ZM6 1.75H16V0.25H6V1.75ZM5.92069 18.0239C6.14233 17.8466 6.41772 17.75 6.70156 17.75V16.25C6.07712 16.25 5.47126 16.4625 4.98365 16.8526L5.92069 18.0239Z" fill="#202020"/>
                  <circle cx="6.05005" cy="9.0498" r="1.25" fill="#202020"/>
                  <circle cx="11.05" cy="9.0498" r="1.25" fill="#202020"/>
                  <circle cx="16.05" cy="9.0498" r="1.25" fill="#202020"/>
                  </svg>

                  <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle r="4" transform="matrix(-1 0 0 1 8 5)" stroke="#202020" stroke-width="1.5"/>
                  <path d="M1 14.9347C1 14.0743 1.54085 13.3068 2.35109 13.0175V13.0175C6.00404 11.7128 9.99596 11.7128 13.6489 13.0175V13.0175C14.4591 13.3068 15 14.0743 15 14.9347V16.2502C15 17.4376 13.9483 18.3498 12.7728 18.1818L11.8184 18.0455C9.28565 17.6837 6.71435 17.6837 4.18162 18.0455L3.22721 18.1818C2.0517 18.3498 1 17.4376 1 16.2502V14.9347Z" stroke="#202020" stroke-width="1.5"/>
                  </svg>
        </div>
     </div>
   );
 }
 
 export default Header;