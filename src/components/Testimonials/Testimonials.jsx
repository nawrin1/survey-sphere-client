import Testimonial from "../Testimonial/Testimonial";
import Testimonial2 from "../Testimonial2/Testimonial2";
import Testimonial3 from "../Testimonial3/Testimonial3";


const Testimonials = () => {
    return (
        <div className="max-w-6xl mx-auto  mb-40">
            {/* <div className="flex gap-6  ">
           
                <div className="border-2 border-blue-600 flex flex-col items-center justify-center">
                <div className="avatar relative bottom-10">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            </div>
            <h2>Sarah Thompson</h2>
                    <p>"As a business owner, understanding my customers is vital. This survey platform has been a game-changer for us. The real-time analytics and detailed reports have given us actionable data to make informed decisions. The team's support is top-notch, always ready to assist. Thanks to this platform, we now have a deeper connection with our audience."</p>
                    

                </div>
                <div className="border-2 border-blue-600 flex flex-col items-center justify-center">
                <div className="avatar relative bottom-10">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            </div>
            <h2>Sarah Thompson</h2>
                    <p>"I am incredibly impressed with the user-friendly interface and powerful features of this survey platform. It has made collecting and analyzing responses a breeze. The customization options allowed me to create surveys that truly reflect my brand. Highly recommended for anyone looking to gather valuable insights effortlessly!"</p>
                    

                </div>
                <div className="border-2 border-blue-600 flex flex-col items-center justify-center">
                <div className="avatar relative bottom-10">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            </div>
            <h2>Sarah Thompson</h2>
                    <p>"I've tried several survey tools, but none have matched the simplicity and effectiveness of this platform. Creating surveys is intuitive, and the diverse question formats provide flexibility. The ability to export data for further analysis has saved me a lot of time. Whether you're a seasoned researcher or a beginner, this platform caters to all levels of expertise."</p>
                    

                </div>
              
               

            </div> */}
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mx-4">
            <Testimonial></Testimonial>
            <Testimonial2></Testimonial2>
           <Testimonial3></Testimonial3>
            </div>
            
        </div>
    );
};

export default Testimonials;