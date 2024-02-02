import { useState } from 'react';

const SpeakerForm = () => {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companySector, setCompanySector] = useState('');
    const [social, setSocial] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [bio, setBio] = useState('');
    const [topic, setTopic] = useState('');
    const [abstract, setAbstract] = useState('');
    const [headshot, setHeadshot] = useState('');
    const [feedback, setFeedback] = useState('');
    const [consent, setConsent] = useState('');
    const [agree, setAgree] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!agree) {
            alert("Please acknowlwdge to receive communication from us.");
            return;
          }
    
        // Send data to Formspree
        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Job Title', jobTitle);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('country', country);
        formData.append('company Name', companyName);
        formData.append('company Sector', companySector);
        formData.append('telegram | X', social);
        formData.append('linkedin', linkedin);
        formData.append('bio', bio);
        formData.append('topic', topic);
        formData.append('abstract', abstract);
        formData.append('headshot', headshot);
        formData.append('feedback', feedback);
        formData.append('Lagos Blockchain Week is committed to protecting and respecting your privacy, and we will only use your personal information to provide information on our products and services.', consent);
        formData.append('I agree to receive other communications from Lagos Blockchain Week.', agree);
        
        try {
            const response = await fetch('https://formspree.io/', {
              method: 'POST',
              body: formData,
              headers: {
                'Accept': 'application/json',
              },
            });
      
            if (response.ok) {
              // Redirect to a success page
              console.log(response);
              // router.push('/success');
            } else {
              // Handle error
              console.error('Form submission failed');
            }
          } catch (error) {
            console.error('Error submitting form:', error);
           }
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-black shadow-md rounded-md">
            <label className="block m-4 text-gray-800 text-center">
                <span className="font-bold text-lg "> #LBW2024 Speaker's registration</span>
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Name:</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder="  enter your full name"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Job title:</span>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder="  enter your Job title"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Email:</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" joe@example.com"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Phone:</span>
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" +23XXXXXXXXXXXX"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Country:</span>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" Your country Name"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Company Name:</span>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" enter your company name"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Company Sector:</span>
                <input
                  type="text"
                  value={companySector}
                  onChange={(e) => setCompanySector(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" e.g finace, health, education"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">LinkedIn Url:</span>
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" your linkedin profile link"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Socials: Telegram | X handle:</span>
                <input
                  type="text"
                  value={social}
                  onChange={(e) => setSocial(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" e.g X@username"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700">A brief bio highlighting your background, expertise and experience in the blockchain space</span>
                <input
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="form-input mt-1 block w-full"
                  placeholder=" A summary of your bio"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700">The specific blockchain-related topic or area you would like to speak about</span>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="form-input mt-1 block w-full"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Abstract</span>
                <p>A concise summary of your proposed talk or presentation</p>
                <input
                  type="text"
                  value={abstract}
                  onChange={(e) => setAbstract(e.target.value)}
                  className="form-input mt-1 block w-full"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Headshot</span>
                <p>Please attach a high-resolution headshot <i> max 1mb</i></p>
                <input
                  type="file"
                  value={headshot}
                  onChange={(e) => setHeadshot(e.target.value)}
                  className="form-input mt-1 block w-full"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
                <span className="text-gray-700 font-bold">Expectation/Feedback/Recommendation</span>
                <input
                  type="text"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="form-input mt-1 block w-full"
                  required
                />
            </label>
            <br/>
            <label className="block mb-2">
               <input
                 type="checkbox"
                 value={consent}
                 onChange={(e) => setConsent(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700">Lagos Blockchain Week is committed to protecting and respecting your privacy, and we will only use your personal information to provide information on our products and services.</span>
            </label>
            <br/>
            <label className="block mb-2">
                <input
                 type="checkbox"
                 value={agree}
                 onChange={(e) => setAgree(e.target.value)}
                 className="mr-2 leading-tight"
                 required
                />
                <span className="text-gray-700 font-md">I agree to receive other communications from Lagos Blockchain Week.</span>
            </label>
            <div className="bg-black rounded max-w-sm mx-auto flex justify-center">
                <button
                 type="submit"
                 className=" text-white p-2 hover:text-blue focus:outline-none focus:shadow-outline-blue active:bg-green-800">
                    Submit
                </button>
            </div>
        </form>
        );
};

export default SpeakerForm;