import Button from "./Button";
import Myphoto from "./assets/photo.png"

const Hero = () => {
  return (
    
    <div className="flex flex-col items-center justify-center gap-4" >
     <img src={Myphoto} alt="photo" height={"300px"} width={"200px"} 
     className="rounded-full" />
     <h1 className="text-4xl font-bold text-white-600"> Hi,I'm Aayush👋🏼</h1>
  
      <h2 className="text-3xl font-semibold">Full stack developer</h2>
      <p className="text-2xl">
      Full Stack Developer with extensive experience in both front-end and back-end development. 
      With a keen eye for detail and a passion for coding, Aayush excels in creating seamless, efficient, and user-friendly web applications.
      </p>
      <div className="flex gap-4 "> 
        <Button title="Contact Me" type="orange" icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
      </div>

    </div>
    
  );
};

export default Hero;