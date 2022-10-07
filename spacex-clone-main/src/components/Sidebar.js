export default function Sidebar() {
    return(
        <div id="sideBar" className=" bg-black h-[100vh] w-[300px] lg:w-[340px] absolute -right-[300px] hidden top-0 text-white">
            <ul className="absolute right-0 top-10 lg:top-16 text-right mr-5 lg:mr-14 space-y-2 mt-2">
                <li className="lg:hidden">FALCON 9</li><hr className="lg:hidden" />
                <li className="lg:hidden">FALCON HEAVY</li><hr className="lg:hidden" />
                <li className="lg:hidden">DRAGON</li><hr className="lg:hidden" />
                <li className="lg:hidden">STARSHIP</li><hr className="lg:hidden" />
                <li className="lg:hidden">HUMAN SPACEFLIGHT</li><hr className="lg:hidden" />
                <li className="lg:hidden">RIDESHARE</li><hr className="lg:hidden" />
                <li className="lg:hidden">STARLINK</li><hr className="lg:hidden" />
                <li>MISSION</li><hr />
                <li>LAUNCHES</li><hr />
                <li>CAREERS</li><hr />
                <li>UPDATES</li><hr />
                <li>SHOP</li><hr />
            </ul>
        </div>
    )
};
