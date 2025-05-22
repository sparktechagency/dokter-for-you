/* eslint-disable @next/next/no-img-element */
import Title from "@/components/shared/Title";

const data = [
    {
        id: "1",
        image: "/doctor1.png",
        name: "Dr. E. Maescu",
        designation: "MD General practitioner / emergency medicine"
    },
    {
        id: "2",
        image: "/doctor1.png",
        name: "Dr. E. Maescu",
        designation: "MD General practitioner / emergency medicine"
    },
    {
        id: "3",
        image: "/doctor1.png",
        name: "Dr. E. Maescu",
        designation: "MD General practitioner / emergency medicine"
    },
    {
        id: "4",
        image: "/doctor1.png",
        name: "Dr. E. Maescu",
        designation: "MD General practitioner / emergency medicine"
    }
];


const AffiliatedDoctors = () => {
    return (
        <div className=" h-[620px] w-full "
            style={{
                backgroundImage: `url('/AffiliatedDoctorBg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
            }}>
            <div className=" container pt-10 ">
                <Title className=""> Affiliated doctors </Title>
                <p className=" w-[63%] pb-10 text-[#6B6B6B] text-[15px] pt-3"> You know perfectly well what&apos;s good and what isn&apos;t good for you. Nevertheless, making the right choice can be difficult. We are Doctoronline. We believe in self-management when it comes to your health.
                </p> 

                <div className=" grid grid-cols-4 gap-10 items-center">  
                    {
                        data.map((item) => (
                            <div key={item.id} className=" flex flex-col items-center gap-0">
                                <div className=" flex-shrink-0  flex items-center "> 
                                    <img src={item.image} alt="Other" style={{  borderRadius: '8px' , height:"230px", width:"250px"}} /> 
                                </div>
                                <div className="bg-white w-full p-4 flex flex-col items-center rounded-lg shadow-md">
                                    <h2 className="text-xl font-medium text-[#1A1A1A] mb-2">
                                        {item.name}
                                    </h2>
                                    <p className="text-[#565656] text-sm leading-relaxed text-center">
                                        {item.designation}
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    );
};

export default AffiliatedDoctors;