
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

console.log(data);

const AffiliatedDoctors = () => {
    return ( 
        <div className=" h-[500px] w-full " 
         style={{
            backgroundImage: `url('/auth.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
        }}>
            
        </div>
    );
};

export default AffiliatedDoctors;