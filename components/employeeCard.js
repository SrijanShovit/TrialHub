import Image from "next/image";

function EmployeeCard({imgUrl, name, dept, email}) {
    return <>
        <div className="w-fit rounded-xl overflow-hidden bg-white my-5 flex lg:flex-col md:flex-col">
        <Image src={imgUrl} alt={name} width={188} height={140} className="object-cover h-140 sm:h-100 w-188 sm:w-132"></Image>
            <div className="bg-white flex flex-col items-start justify-center py-3 px-3">
                <h4 className="block">{name}</h4>
                <p className="text-light-grey text-xs">{dept}</p>
                <p className="text-light-grey text-xs">{email}</p>
            </div>
        </div>
    </>
}

export default EmployeeCard;