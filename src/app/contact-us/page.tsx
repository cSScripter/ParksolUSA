export default function ContactUsPage() {
    return (
        <section className="flex flex-col items-center justify-center pt-10 md:pb-20 md:gap-5 md:pt-24 px-5">
            <div className="w-full max-w-[1000px]">
            <h2 className="!font-bold text-center !text-[22px] lg:!text-[28px]">We would love to hear from you! To request a quote, inquire about availability, or for more information, please fill out the form below.</h2>
        </div>
        {/*Contact Form*/}
        <form
            action="#"
            method="POST"
            className="flex flex-col gap-5 md:gap-10 m-10">
                <div className="flex gap-5 md:gap-10">
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="flex-1 border-b-2 border-black p-1 focus:outline-none" />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="flex-1 border-b-2 border-black p-1 focus:outline-none" />
                </div>
                <input  
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full border-b-2 border-black p-1 focus:outline-none" />
                <textarea
                    name="message"
                    placeholder="Write a message"
                    className="w-full border-b-2 border-black p-1 focus:outline-none h-30">{5}</textarea>

                <button 
                    type="submit"
                    className="w-max px-6 py-2 border bg-black text-white rounded-full">Submit</button>
            </form>
        
        </section>
    );
}