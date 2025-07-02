/* eslint-disable @next/next/no-img-element */
import Title from "@/components/shared/Title";
import { imageUrl } from "@/redux/base/baseApi";
import { useGetAffiliatedDoctorsQuery } from "@/redux/features/europe/affiliatedDoctorSlice";

const AffiliatedDoctors = () => {
    const { data: allAffiliatedDoctors } = useGetAffiliatedDoctorsQuery(undefined);

    const data = allAffiliatedDoctors?.data?.filter((item: { active: boolean }) => item.active)?.map((item: { _id: string; image: string; name: string; specialization: string; active: boolean }) => ({
        id: item._id, 
        status: item?.active,
        image: item?.image?.startsWith("http") ? item?.image : `${imageUrl}${item?.image}`,
        name: item?.name,
        designation: item?.specialization
    }))

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
                <p className=" w-[63%] pb-10 text-[#6B6B6B] text-[15px] pt-3"> We believe that you know very well what the best choice is for your health. Yet it can be difficult to make the right choice. We help you to make a safe and correct choice. 
                </p>

                <div className=" grid grid-cols-4 gap-10 items-center">
                    {
                        data?.map((item:{ id: string; image: string; name: string; designation: string}) => (
                            <div key={item.id} className=" flex flex-col items-center gap-0">
                                <div className=" flex-shrink-0  flex items-center ">
                                    <img src={item.image} alt="Other" style={{ borderRadius: '8px', height: "230px", width: "250px" }} />
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