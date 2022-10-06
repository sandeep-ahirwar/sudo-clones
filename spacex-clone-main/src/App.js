import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import data from "./data.json"


export default function App() {

    function handleClick(){
      if(document.getElementById("sideBar").classList.contains("hidden")){
        document.getElementById("sideBar").classList.remove("hidden")
        document.getElementById("sideBar").classList.remove("-right-[300px]")
        document.getElementById("sideBar").classList.add("right-0")

        document.getElementById("homePage").classList.remove("brightness-100")
        document.getElementById("homePage").classList.add("brightness-50")

        document.getElementById("nav").classList.remove("brightness-100")
        document.getElementById("nav").classList.add("brightness-50")
        document.getElementById("navImg").classList.remove("brightness-100")
        document.getElementById("navImg").classList.add("brightness-50")
        document.getElementById("navShop").classList.remove("brightness-100")
        document.getElementById("navShop").classList.add("brightness-50")

        document.getElementById("mainBody").classList.add("h-[100vh]")
        
        document.getElementById("hb1").classList.add("rotate-45")
        document.getElementById("hb1").classList.add("translate-y-[6px]")
        document.getElementById("hb2").classList.add("-rotate-45")
        document.getElementById("hb3").classList.add("hidden")
      }
      else{
        document.getElementById("sideBar").classList.add("hidden")
        document.getElementById("sideBar").classList.remove("right-0")
        document.getElementById("sideBar").classList.add("-right-[300px]")

        document.getElementById("homePage").classList.remove("brightness-50")
        document.getElementById("homePage").classList.add("brightness-100")

        document.getElementById("nav").classList.remove("brightness-50")
        document.getElementById("nav").classList.add("brightness-100")
        document.getElementById("navImg").classList.remove("brightness-50")
        document.getElementById("navImg").classList.add("brightness-100")
        document.getElementById("navShop").classList.remove("brightness-50")
        document.getElementById("navShop").classList.add("brightness-100")

        document.getElementById("mainBody").classList.remove("h-[100vh]")
        document.getElementById("hb1").classList.remove("rotate-45")
        document.getElementById("hb1").classList.remove("translate-y-[6px]")
        document.getElementById("hb2").classList.remove("-rotate-45")
        document.getElementById("hb3").classList.remove("hidden")
      }
  }

  return (
    <div className="overflow-hidden" id="mainBody">
      {data.texts.map(text => 
        <HomePage
          pText = {text.pText}
          btnText = {text.btnText}
          imgUrl = {text.imgUrl}
          sText = {text.sText}
        />
        )}
        <Footer />
        <Sidebar />
        <Navbar
        handleClick = {handleClick}
        />
    </div>
  );
}
