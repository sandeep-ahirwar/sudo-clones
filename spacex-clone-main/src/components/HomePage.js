export default function HomePage(props) {


    return(
        <div className="relative" id="homePage">
            <div className="home overflow-hidden flex justify-center">
                <img className='h-[100vh] min-w-[1980px] lg:w-[100vw] lg:min-w-0' src={require(`../assets/${props.imgUrl}`)} alt="home" />
            </div>
            <div className="texts absolute bottom-24 left-5 lg:left-10 text-white">
                <div className="stext text-lg">{props.sText}</div>
                <div className="ptext text-3xl sm:w-3/4 sm:text-5xl shadow-custom-class sm:font-semibold scale-y-110 font-extrabold mt-1">{props.pText}</div>
                <div 
                className="btn border-white border-2 w-fit py-4 px-10 text-xs font-bold mt-4  cursor-pointer hover:bg-white hover:duration-500 hover:text-black">{props.btnText}</div>
                {/* <div id="hoverdiv" className="bg-white w-40 h-12"></div> */}
            </div>
            <div className="arrow w-[100vw] flex justify-center">
                <img className="animate-bounce w-10 h-10 absolute bottom-10 mx-auto" src={require("../assets/arrow.png")} alt="bounce" />
            </div>
        </div>
    )
};
